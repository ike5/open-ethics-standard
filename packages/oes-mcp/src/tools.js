import { registerAppResource, registerAppTool, RESOURCE_MIME_TYPE } from "@modelcontextprotocol/ext-apps/server";
import { z } from "zod";

import { createReview, reviewInputSchema } from "./report-model.js";
import { catalogOverview, findPractices, searchCatalog } from "./catalog.js";

const resourceUri = "ui://open-ethics-standard/review.html";

// Shown to the model when the server connects, so it follows the workflow without being told.
export const serverInstructions = "Open Ethics Standard: a catalog of 800+ harmful software practices for reviewing projects. Before reviewing a project, call get_oes_review_instructions and follow it exactly. Finish a review by replying with only the report link.";

// Findings stay on the user's machine: the agent only calls these tools and never fetches or runs code to build a report.
const workflow = [
  "If the user hasn't chosen a scope, ask: whole app (quick), a feature or journey, or one concern.",
  "Read the code with your own tools; this MCP cannot see files. Use search_oes_catalog and get_oes_practices to match behavior to practices, and verify each against its definition.",
  "Each finding: id, file, startLine, endLine, evidence (short quote), reasoning (1-2 sentences), confidence (low|medium|high). Put concerns that match no practice in notes (one line each, with file:line). Keep limitations to one sentence.",
  "Call create_oes_review with project, scope, limitations, notes, and findings (findings: [] if none).",
  "Rechecks: call get_oes_review_state on the previous statePath, pass it as previousReviewPath, reuse each findingKey, and list only verified fixes in resolvedFindings with evidence.",
  "Final reply is exactly two lines: \"<N> possible matches in <scope>.\" then \"Report: <link>\". Do not list findings, setup steps, or limitations in chat; they are in the report.",
];

export function registerOesTools(server, { catalog, reviewHtml, serverVersion = "dev", saveReview, readReview }) {
  server.registerTool("get_oes_review_state", {
    title: "Read a previous local OES audit",
    description: "Read the local review JSON or saved HTML before a follow-up audit. Returns stable finding keys, prior choices, fix evidence, and audit history. Use these keys when submitting current findings and verified resolutions. Local-only; does not upload data.",
    inputSchema: z.object({ path: z.string().min(1).max(2000) }),
  }, async ({ path }) => {
    try {
      const review = await readReview(path);
      return { content: [{ type: "text", text: JSON.stringify(review, null, 2) }], structuredContent: review };
    } catch (error) { return { isError: true, content: [{ type: "text", text: `Could not read local review: ${error.message}` }] }; }
  });

  server.registerTool("get_oes_review_instructions", {
    title: "Get OES review workflow",
    description: "Call first. Returns the step-by-step workflow for reviewing a project against the OES and producing the report.",
    inputSchema: z.object({}),
  }, async () => {
    return { content: [{ type: "text", text: workflow.map((s, i) => `${i + 1}. ${s}`).join("\n") }], structuredContent: { workflow, serverVersion, catalogVersion: catalog.version } };
  });

  server.registerTool("get_oes_catalog_overview", {
    title: "Get OES catalog overview",
    description: "List catalog categories with counts and concise practice titles to help plan a broad, relevant review.",
    inputSchema: z.object({}),
  }, async () => {
    const categories = catalogOverview(catalog);
    return { content: [{ type: "text", text: JSON.stringify({ catalogVersion: catalog.version, totalPractices: catalog.practices.length, categories }, null, 2) }], structuredContent: { catalogVersion: catalog.version, totalPractices: catalog.practices.length, categories } };
  });

  server.registerTool("get_oes_practices", {
    title: "Get multiple OES practices",
    description: "Return full catalog definitions for up to 30 practice IDs in one call.",
    inputSchema: z.object({ ids: z.array(z.string().regex(/^\d+\.\d+\.\d+$/)).min(1).max(30) }),
  }, async ({ ids }) => {
    const practices = findPractices(catalog, ids);
    return { content: [{ type: "text", text: JSON.stringify({ catalogVersion: catalog.version, practices, missingIds: ids.filter((id) => !practices.some((p) => p.id === id)) }, null, 2) }], structuredContent: { catalogVersion: catalog.version, practices, missingIds: ids.filter((id) => !practices.some((p) => p.id === id)) } };
  });
  server.registerTool("search_oes_catalog", {
    title: "Search the Open Ethics Standard",
    description: "Search OES practices while reviewing a project. Use this to find relevant practice definitions and cite their IDs. The standard is a reference catalog, not a legal or compliance verdict.",
    inputSchema: z.object({ query: z.string().min(2).max(300), limit: z.number().int().min(1).max(30).default(12) }),
  }, async ({ query, limit }) => {
    const results = searchCatalog(catalog, query, limit);
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

  const reviewConfig = {
    title: "Show OES project review",
    description: "Final step of a review: saves the offline HTML report on this machine and returns its link. Submit findings (or []), scope, limitations, and notes. For rechecks pass previousReviewPath and resolvedFindings.",
    inputSchema: reviewInputSchema,
    _meta: { ui: { resourceUri } },
  };
  const renderReview = async (input) => {
    try {
      const { review, ...links } = await saveReview(createReview(input, catalog, serverVersion));
      return {
        content: [{ type: "text", text: `Report: ${links.browserUrl}\nState: ${links.statePath}\nReply to the user with only the finding count and the report link.` }],
        structuredContent: { ...review, ...links },
      };
    } catch (error) {
      return { isError: true, content: [{ type: "text", text: `Could not create review: ${error.message}` }] };
    }
  };
  registerAppTool(server, "create_oes_review", { ...reviewConfig, title: "Create OES project review" }, renderReview);
  registerAppTool(server, "show_oes_review", reviewConfig, renderReview);

  registerAppResource(server, "OES review view", resourceUri, { mimeType: RESOURCE_MIME_TYPE }, async () => ({
    contents: [{ uri: resourceUri, mimeType: RESOURCE_MIME_TYPE, text: reviewHtml }],
  }));
}
