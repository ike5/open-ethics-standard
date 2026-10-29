import { z } from "zod";

export const reviewInputSchema = z.object({
  project: z.string().min(1).max(200),
  scope: z.string().max(2000).default("Scope not recorded"),
  limitations: z.string().max(4000).default("Limitations not recorded"),
  previousReviewPath: z.string().min(1).max(2000).optional().describe("Local path to review.json, saved audit state JSON, or saved report HTML from the previous run. Reuse for updates; never send private paths to hosted OES."),
  resolvedFindings: z.array(z.object({
    findingKey: z.string().min(1).max(160),
    evidence: z.string().min(1).max(4000),
  })).max(500).default([]).describe("Only prior findings rechecked and verified fixed, with direct evidence of the fix. Omission alone never means fixed."),
  findings: z.array(z.object({
    findingKey: z.string().min(1).max(160).optional().describe("Stable identity for this occurrence, reused from the prior review even if lines or evidence change."),
    reviewStatus: z.enum(["applies", "unsure", "dismissed"]).optional(),
    id: z.string().regex(/^\d+\.\d+\.\d+$/),
    file: z.string().min(1).max(500),
    startLine: z.number().int().positive(),
    endLine: z.number().int().positive(),
    evidence: z.string().min(1).max(2000),
    reasoning: z.string().min(1).max(2000),
    confidence: z.enum(["low", "medium", "high"]),
  }).refine((item) => item.endLine >= item.startLine, { message: "endLine must be at least startLine" })).max(500),
});

export function createReview(input, catalog, serverVersion) {
  const parsed = reviewInputSchema.parse(input);
  const findings = parsed.findings.map((finding) => {
    const practice = catalog.practices.find((item) => item.id === finding.id);
    if (!practice) throw new Error(`Unknown OES practice: ${finding.id}`);
    const { title, description, subsection, category, sourceLine } = practice;
    return { ...finding, practice: { title, description, subsection, category, sourceLine } };
  });
  return { ...parsed, version: catalog.version, catalogVersion: catalog.version, serverVersion, updated: catalog.updated, findings };
}
