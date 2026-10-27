import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { registerAppResource, registerAppTool, RESOURCE_MIME_TYPE } from "@modelcontextprotocol/ext-apps/server";
import { z } from "zod";

const here = dirname(fileURLToPath(import.meta.url));
const catalogPath = resolve(here, "catalog.json");
const viewPath = resolve(here, "review.html");
const resourceUri = "ui://open-ethics-standard/review.html";
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const server = new McpServer({ name: "open-ethics-standard", version: catalog.version });

server.registerTool("search_oes_catalog", {
  title: "Search the Open Ethics Standard",
  description: "Search OES practices while reviewing a project. Use this to find relevant practice definitions and cite their IDs. The standard is a reference catalog, not a legal or compliance verdict.",
  inputSchema: z.object({ query: z.string().min(2).max(300), limit: z.number().int().min(1).max(30).default(12) }),
}, async ({ query, limit }) => {
  const terms = query.toLowerCase().split(/[^a-z0-9]+/).filter((term) => term.length > 2);
  const results = catalog.practices.map((item) => {
    const text = `${item.title} ${item.description} ${item.domains} ${item.subsection} ${item.category}`.toLowerCase();
    const score = terms.reduce((total, term) => total + (text.includes(term) ? 1 : 0), 0);
    return { ...item, score };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id)).slice(0, limit);
  return { content: [{ type: "text", text: JSON.stringify({ version: catalog.version, results }, null, 2) }], structuredContent: { version: catalog.version, results } };
});

server.registerTool("get_oes_practice", {
  title: "Get an OES practice",
  description: "Return the full definition for a specific OES practice ID such as 2.1.3.",
  inputSchema: z.object({ id: z.string().regex(/^\d+\.\d+\.\d+$/) }),
}, async ({ id }) => {
  const practice = catalog.practices.find((item) => item.id === id);
  if (!practice) return { isError: true, content: [{ type: "text", text: `No OES practice found for ${id}.` }] };
  return { content: [{ type: "text", text: JSON.stringify({ version: catalog.version, practice }, null, 2) }], structuredContent: { version: catalog.version, practice } };
});

registerAppTool(server, "show_oes_review", {
  title: "Show OES project review",
  description: "Display a human-reviewable list of possible OES matches found in the project. Call after examining project files and gathering evidence. Each item must be a tentative finding with a file path, line range, observed evidence, reasoning, and confidence. This does not establish a violation.",
  inputSchema: z.object({
    project: z.string().min(1).max(200),
    findings: z.array(z.object({
      id: z.string().regex(/^\d+\.\d+\.\d+$/),
      file: z.string().min(1).max(500),
      startLine: z.number().int().positive(),
      endLine: z.number().int().positive(),
      evidence: z.string().min(1).max(2000),
      reasoning: z.string().min(1).max(2000),
      confidence: z.enum(["low", "medium", "high"]),
    })).max(100),
  }),
  _meta: { ui: { resourceUri } },
}, async ({ project, findings }) => {
  const enriched = findings.map((finding) => {
    const practice = catalog.practices.find((item) => item.id === finding.id);
    return { ...finding, practice: practice ? { title: practice.title, description: practice.description, subsection: practice.subsection, category: practice.category, sourceLine: practice.sourceLine } : null };
  });
  const valid = enriched.filter((item) => item.practice);
  return {
    content: [{ type: "text", text: `${valid.length} possible OES match${valid.length === 1 ? "" : "es"} for ${project}. Findings are leads for human review, not determinations.` }],
    structuredContent: { project, version: catalog.version, updated: catalog.updated, findings: valid },
  };
});

registerAppResource(server, "OES review view", resourceUri, { mimeType: RESOURCE_MIME_TYPE }, async () => ({
  contents: [{ uri: resourceUri, mimeType: RESOURCE_MIME_TYPE, text: await readFile(viewPath, "utf8") }],
}));

await server.connect(new StdioServerTransport());
