import { mkdir, open, readFile, writeFile, rename, rm } from "node:fs/promises";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";
import { homedir } from "node:os";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { reviewInputSchema } from "./report-model.js";
import { compareReview, markdownReport } from "./review-state.js";

export function standaloneHtml(template, model) {
  const json = JSON.stringify(model).replace(/</g, "\\u003c");
  return template.replace("<!-- OES_REVIEW_DATA -->", () => `<script type="application/json" id="oes-review-data">${json}</script>`);
}

const previousSchema = z.object({
  project: z.string(), scope: z.string().optional(), limitations: z.string().optional(), version: z.string().optional(), statePath: z.string().optional(), reviewId: z.uuid().optional(), createdAt: z.string().optional(), runNumber: z.number().int().positive().optional(),
  findings: z.array(reviewInputSchema.shape.findings.element.safeExtend({
    practice: z.object({ title: z.string(), sourceLine: z.number().int().positive() }).passthrough().nullable(),
    lifecycle: z.enum(["new", "continuing", "reopened", "fixed", "not_rechecked"]).optional(),
    firstSeen: z.string().optional(), lastSeen: z.string().optional(), fixedAt: z.string().optional(), resolutionEvidence: z.string().optional(),
  })).max(5000),
  history: z.array(z.object({ runNumber: z.number().int().positive(), createdAt: z.string(), scope: z.string(),
    open: z.number().nonnegative(), fixed: z.number().nonnegative(), new: z.number().nonnegative(), notRechecked: z.number().nonnegative(), dismissed: z.number().nonnegative(),
  })).max(100).optional(),
});

export async function readLocalReview(path) {
  const text = await readFile(resolve(path), "utf8");
  if (Buffer.byteLength(text) > 32_000_000) throw new Error("Previous review exceeds 32 MB");
  // Parse saved HTML as data, never execute it.
  const embedded = text.match(/<script type="application\/json" id="oes-review-data">([\s\S]*?)<\/script>/);
  return previousSchema.parse(JSON.parse(embedded ? embedded[1] : text));
}

async function atomicWrite(path, content) {
  const temporary = `${path}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, content, { mode: 0o600 });
    await rename(temporary, path);
  } finally { await rm(temporary, { force: true }); }
}

export async function writeLocalReview(model, template, outputRoot = process.env.OES_REPORT_DIR || join(homedir(), ".local", "share", "open-ethics-standard", "reports")) {
  const previous = model.previousReviewPath ? await readLocalReview(model.previousReviewPath) : null;
  const review = compareReview(model, previous, { reviewId: previous?.reviewId || randomUUID(), createdAt: new Date().toISOString() });
  const directory = join(resolve(outputRoot), `review-${review.reviewId}`);
  await mkdir(directory, { recursive: true, mode: 0o700 });
  // Fail concurrent updates rather than silently overwriting a different run.
  const lockPath = join(directory, ".update.lock");
  const lock = await open(lockPath, "wx", 0o600);
  try {
    const statePath = join(directory, "review.json");
    review.statePath = statePath;
    let latest;
    try { latest = JSON.parse(await readFile(statePath, "utf8")); } catch (error) { if (error.code !== "ENOENT") throw error; }
    if (latest && latest.runNumber !== previous?.runNumber) throw new Error("This report has a newer run. Use its latest review.json as previousReviewPath.");
    const historyPath = join(directory, "history");
    await mkdir(historyPath, { recursive: true, mode: 0o700 });
    const htmlPath = join(directory, "review.html");
    const markdownPath = join(directory, "review.md");
    await atomicWrite(join(historyPath, `run-${review.runNumber}-${randomUUID()}.json`), JSON.stringify(review, null, 2));
    await atomicWrite(markdownPath, markdownReport(review));
    await atomicWrite(htmlPath, standaloneHtml(template, review));
    await atomicWrite(statePath, JSON.stringify(review, null, 2));
    return { browserUrl: pathToFileURL(htmlPath).href, htmlPath, markdownPath, statePath, review };
  } finally { await lock.close(); await rm(lockPath, { force: true }); }
}
