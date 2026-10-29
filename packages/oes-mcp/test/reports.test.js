import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile as callbackExecFile } from "node:child_process";
import { promisify } from "node:util";
import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";
import { compareReview, exportFindings, markdownReport, reviewCounts } from "../src/review-state.js";
import { createReview } from "../src/report-model.js";
import { writeLocalReview } from "../src/local-report.js";

const execFile = promisify(callbackExecFile);
const catalog = JSON.parse(await readFile(new URL("../catalog.json", import.meta.url), "utf8"));
const template = await readFile(new URL("../dist/review.html", import.meta.url), "utf8");
const input = {
  project: "Offline example <script>", scope: "Billing journey", limitations: "No production runtime access",
  findings: [{ id: catalog.practices[0].id, file: "src/billing.js", startLine: 2, endLine: 5,
    evidence: '</script><script>alert("evidence")</script>', reasoning: "Example for testing only", confidence: "medium" }],
};

test("standalone report round trips evidence without executable HTML and creates private files", async () => {
  const root = await mkdtemp(join(tmpdir(), "oes-report-test-"));
  try {
    const model = createReview(input, catalog, "test");
    const links = await writeLocalReview(model, template, root);
    const html = await readFile(links.htmlPath, "utf8");
    assert.match(links.browserUrl, /^file:\/\//);
    assert.ok(!html.includes(input.findings[0].evidence));
    const embedded = html.match(/<script type="application\/json" id="oes-review-data">(.*?)<\/script>/s)[1];
    assert.deepEqual(JSON.parse(embedded), links.review);
    assert.equal(links.review.findings[0].evidence, model.findings[0].evidence);
    assert.match(html, /connect-src 'none'/);
    assert.match(html, /Print \/ Save PDF/);
    const markdown = await readFile(links.markdownPath, "utf8");
    assert.match(markdown, /Billing journey/);
    assert.match(markdown, /src\/billing\.js:2-5/);
    assert.match(markdown, /Status: unsure/);
    if (process.platform !== "win32") {
      assert.equal((await stat(links.htmlPath)).mode & 0o777, 0o600);
      assert.equal((await stat(join(links.htmlPath, ".."))).mode & 0o777, 0o700);
    }
    const second = await writeLocalReview(model, template, root);
    assert.notEqual(links.htmlPath, second.htmlPath);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test("rejects unknown practices and reversed ranges; accepts zero findings", () => {
  assert.throws(() => createReview({ ...input, findings: [{ ...input.findings[0], id: "999.999.999" }] }, catalog, "test"), /Unknown OES/);
  assert.throws(() => createReview({ ...input, findings: [{ ...input.findings[0], endLine: 1 }] }, catalog, "test"), /endLine/);
  assert.equal(createReview({ project: "Empty", findings: [] }, catalog, "test").findings.length, 0);
});

test("CLI builds from JSON in paths with spaces and fails on invalid input", async () => {
  const root = await mkdtemp(join(tmpdir(), "oes cli test "));
  try {
    const source = join(root, "findings.json");
    await writeFile(source, JSON.stringify(input));
    const cli = fileURLToPath(new URL("../dist/build-report.js", import.meta.url));
    const { stdout } = await execFile(process.execPath, [cli, source, root]);
    const links = JSON.parse(stdout);
    assert.match(links.browserUrl, /%20/);
    await stat(links.htmlPath);
    await writeFile(source, "{}");
    await assert.rejects(execFile(process.execPath, [cli, source, root]));
  } finally { await rm(root, { recursive: true, force: true }); }
});

test("real stdio MCP returns local HTML links for both review tools and reports validation errors", async () => {
  const root = await mkdtemp(join(tmpdir(), "oes-mcp-test-"));
  const client = new Client({ name: "oes-test", version: "1.0.0" });
  const transport = new StdioClientTransport({ command: process.execPath,
    args: [fileURLToPath(new URL("../dist/server.js", import.meta.url))], env: { ...process.env, OES_REPORT_DIR: root } });
  try {
    await client.connect(transport);
    const tools = await client.listTools();
    assert.ok(tools.tools.some((tool) => tool.name === "get_oes_review_instructions"));
    for (const name of ["create_oes_review", "show_oes_review"]) {
      const result = await client.callTool({ name, arguments: input });
      assert.ok(!result.isError, JSON.stringify(result));
      assert.match(result.structuredContent.browserUrl, /^file:\/\//);
      await stat(result.structuredContent.htmlPath);
      assert.equal(result.structuredContent.scope, input.scope);
      const prior = await client.callTool({ name: "get_oes_review_state", arguments: { path: result.structuredContent.statePath } });
      assert.ok(!prior.isError);
      const findingKey = prior.structuredContent.findings[0].findingKey;
      const followup = await client.callTool({ name: "create_oes_review", arguments: {
        project: input.project, previousReviewPath: result.structuredContent.statePath,
        findings: [], resolvedFindings: [{ findingKey, evidence: "Rechecked the source and verified the fix." }],
      } });
      assert.ok(!followup.isError, JSON.stringify(followup));
      assert.equal(followup.structuredContent.browserUrl, result.structuredContent.browserUrl);
      assert.equal(followup.structuredContent.findings[0].lifecycle, "fixed");
    }
    const empty = await client.callTool({ name: "create_oes_review", arguments: { project: "Empty", findings: [] } });
    assert.equal(empty.structuredContent.findings.length, 0);
    const invalid = await client.callTool({ name: "create_oes_review", arguments: { ...input, findings: [{ ...input.findings[0], id: "999.999.999" }] } });
    assert.equal(invalid.isError, true);
  } finally {
    await client.close();
    await rm(root, { recursive: true, force: true });
  }
});


test("dismissed findings never appear in Markdown exports, including when all are dismissed", () => {
  const model = createReview({ ...input, findings: [
    { ...input.findings[0], findingKey: "keep", evidence: "Retained evidence" },
    { ...input.findings[0], findingKey: "exclude", evidence: "Secret dismissed evidence", reviewStatus: "dismissed" },
  ] }, catalog, "test");
  const markdown = markdownReport(model);
  assert.match(markdown, /Retained evidence/);
  assert.ok(!markdown.includes("Secret dismissed evidence"));
  assert.equal(exportFindings(model).length, 1);
  assert.equal(reviewCounts(model.findings).dismissed, 1);
  const empty = markdownReport(model, () => "dismissed");
  assert.ok(!empty.includes("Retained evidence"));
  assert.match(empty, /No non-dismissed findings/);
});

test("repeat audits preserve stable links, carry choices, verify fixes, and retain unreviewed findings", async () => {
  const root = await mkdtemp(join(tmpdir(), "oes-history-test-"));
  try {
    const firstInput = { ...input, findings: [
      { ...input.findings[0], findingKey: "billing", reviewStatus: "applies" },
      { ...input.findings[0], findingKey: "other", file: "src/other.js", reviewStatus: "dismissed" },
      { ...input.findings[0], findingKey: "later", file: "src/later.js" },
    ] };
    const first = await writeLocalReview(createReview(firstInput, catalog, "test"), template, root);
    const secondInput = { ...input, previousReviewPath: first.statePath, findings: [
      { ...input.findings[0], findingKey: "other", startLine: 90, endLine: 100, file: "src/other.js", evidence: "Changed evidence" },
      { ...input.findings[0], findingKey: "new-feature", file: "src/new.js" },
    ], resolvedFindings: [{ findingKey: "billing", evidence: "Verified cancellation now completes directly at billing.js:10." }] };
    const second = await writeLocalReview(createReview(secondInput, catalog, "test"), template, root);
    assert.equal(first.browserUrl, second.browserUrl);
    assert.equal(second.review.runNumber, 2);
    assert.equal(second.review.history.length, 2);
    const byKey = new Map(second.review.findings.map((item) => [item.findingKey, item]));
    assert.equal(byKey.get("billing").lifecycle, "fixed");
    assert.match(byKey.get("billing").resolutionEvidence, /Verified cancellation/);
    assert.equal(byKey.get("other").lifecycle, "continuing");
    assert.equal(byKey.get("other").reviewStatus, "dismissed");
    assert.equal(byKey.get("new-feature").lifecycle, "new");
    assert.equal(byKey.get("later").lifecycle, "not_rechecked");
    const markdown = await readFile(second.markdownPath, "utf8");
    assert.ok(!markdown.includes("Changed evidence"));
    assert.match(markdown, /Fix verification/);
    const third = await writeLocalReview(createReview({ ...input, previousReviewPath: second.statePath,
      findings: [{ ...input.findings[0], findingKey: "billing", startLine: 50, endLine: 52 }] }, catalog, "test"), template, root);
    assert.equal(third.review.findings.find((item) => item.findingKey === "billing").lifecycle, "reopened");
    assert.equal(third.review.findings.find((item) => item.findingKey === "billing").reviewStatus, "applies");
    // A saved HTML report is also valid audit state, without executing its scripts.
    const fourth = await writeLocalReview(createReview({ project: input.project, previousReviewPath: third.htmlPath, findings: [] }, catalog, "test"), template, root);
    assert.equal(fourth.review.runNumber, 4);
    assert.equal(fourth.browserUrl, first.browserUrl);
    // Older saved state must not overwrite a newer audit at the same link.
    const stale = join(root, "stale.json");
    await writeFile(stale, JSON.stringify(first.review));
    await assert.rejects(writeLocalReview(createReview({ project: input.project, previousReviewPath: stale, findings: [] }, catalog, "test"), template, root), /newer run/);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test("comparison rejects ambiguous identities and unverifiable resolution requests", () => {
  const current = createReview({ ...input, findings: [{ ...input.findings[0], findingKey: "one" }] }, catalog, "test");
  const first = compareReview(current, null, { reviewId: "test", createdAt: "2026-01-01" });
  assert.throws(() => compareReview({ ...current, findings: [...current.findings, ...current.findings] }, first, {}), /Duplicate finding key/);
  assert.throws(() => compareReview({ ...current, resolvedFindings: [{ findingKey: "unknown", evidence: "fixed" }] }, first, {}), /unknown previous/);
  assert.throws(() => compareReview({ ...current, resolvedFindings: [{ findingKey: "one", evidence: "fixed" }] }, first, {}), /both open and resolved/);
  assert.throws(() => compareReview({ ...current, project: "Another project" }, first, {}), /different project/);
});

test("review instructions never tell the agent to fetch or run code", async () => {
  const { McpServer } = await import("@modelcontextprotocol/server");
  const { registerOesTools } = await import("../src/tools.js");
  const names = [];
  const server = new McpServer({ name: "test", version: "1" });
  const original = server.registerTool.bind(server);
  let instructions;
  server.registerTool = (name, config, handler) => {
    names.push(name);
    if (name === "get_oes_review_instructions") instructions = handler;
    return original(name, config, handler);
  };
  registerOesTools(server, { catalog, reviewHtml: "", serverVersion: "test", saveReview: async () => ({}), readReview: async () => ({}) });
  assert.ok(names.includes("search_oes_catalog") && names.includes("get_oes_review_state"));
  const text = (await instructions({})).content[0].text;
  for (const action of ["curl", "npx", "node ", ".mjs"]) assert.ok(!text.includes(action), `review instructions mention ${action}`);
});

test("packed npm package runs as a stdio MCP and CLI with only its declared files", async () => {
  const root = await mkdtemp(join(tmpdir(), "oes-pack-test-"));
  const client = new Client({ name: "oes-test", version: "1.0.0" });
  try {
    const packageDir = fileURLToPath(new URL("..", import.meta.url));
    const { stdout } = await execFile("npm", ["pack", "--json", "--pack-destination", root], { cwd: packageDir, shell: process.platform === "win32" });
    // npm 11 prints an array of packed packages; npm 12 prints an object.
    const output = JSON.parse(stdout);
    const packed = Array.isArray(output) ? output[0] : output.files ? output : Object.values(output)[0];
    const files = packed.files.map((file) => file.path).sort();
    assert.ok(files.includes("dist/server.js") && files.includes("dist/LICENSE-OPEN-ETHICS-STANDARD.md"));
    assert.ok(files.every((file) => file === "package.json" || file === "README.md" || file.startsWith("dist/")), files.join(", "));
    const prefix = join(root, "install");
    await execFile("npm", ["install", "--prefix", prefix, "--no-audit", "--no-fund", join(root, packed.filename)], { shell: process.platform === "win32" });
    const bin = join(prefix, "node_modules", "open-ethics-standard-mcp", "dist", "server.js");
    const search = await execFile(process.execPath, [bin, "search", "cancel", "subscription"]);
    assert.match(search.stdout, /^\d+\.\d+\.\d+ {2}\S/m);
    assert.match((await execFile(process.execPath, [bin, "--version"])).stdout, /open-ethics-standard-mcp \d+\.\d+\.\d+-local/);
    await client.connect(new StdioClientTransport({ command: process.execPath, args: [bin], cwd: root, env: { ...process.env, OES_REPORT_DIR: join(root, "reports") } }));
    const result = await client.callTool({ name: "create_oes_review", arguments: { ...input, notes: ["Sound is on by default (sound.js:21)."] } });
    assert.ok(!result.isError, JSON.stringify(result));
    assert.match(result.structuredContent.browserUrl, /^file:\/\//);
    const html = await readFile(result.structuredContent.htmlPath, "utf8");
    assert.ok(html.length < 100_000, "standalone report should not bundle the MCP Apps SDK");
    const markdown = await readFile(result.structuredContent.markdownPath, "utf8");
    assert.match(markdown, /## Other observations\n\n- Sound is on by default/);
  } finally {
    await client.close();
    await rm(root, { recursive: true, force: true });
  }
});
