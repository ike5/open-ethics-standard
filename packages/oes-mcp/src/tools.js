import { registerAppResource, registerAppTool, RESOURCE_MIME_TYPE } from "@modelcontextprotocol/ext-apps/server";
import { z } from "zod";

import { createReview, reviewInputSchema } from "./report-model.js";

const resourceUri = "ui://open-ethics-standard/review.html";

export function registerOesTools(server, { catalog, reviewHtml, browserReviewBase = "", serverVersion = "dev", saveReview, readReview }) {
  if (readReview) server.registerTool("get_oes_review_state", {
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
    description: "Return the required workflow for an evidence-based OES project review. The MCP cannot inspect workspace files; the AI must use its own authorized workspace tools.",
    inputSchema: z.object({}),
  }, async () => {
    const workflow = [
      "Keep reviews on the local stdio server. Never submit private findings to a hosted MCP.",
      "Inspect the user's chosen scope (or ask them to pick one) with your own workspace tools; this MCP cannot read files. Record scope and limitations.",
      "Search the catalog for concerns suggested by observed behavior. A few search hits are not an exhaustive scan.",
      "Verify each candidate against its definition and the code. Every finding needs practice ID, file, line range, direct evidence, reasoning, and confidence.",
      "Always call create_oes_review, with findings: [] if nothing is supported.",
      "Rechecks: call get_oes_review_state on the previous statePath (or saved state/HTML), pass it as previousReviewPath, reuse each findingKey, and list only verified fixes in resolvedFindings with evidence. Missing findings are never auto-fixed.",
      "Give the user the exact returned browserUrl as a link. Do not search MCP resources for the page.",
      "In the report the user marks findings Applies, Unsure, or Dismiss and exports Markdown or PDF. Hosted links carry evidence in their URL fragment; anyone with the link can read it.",
    ];
    return { content: [{ type: "text", text: workflow.map((s, i) => `${i + 1}. ${s}`).join("\n") }], structuredContent: { workflow, serverVersion, catalogVersion: catalog.version } };
  });

  server.registerTool("get_oes_catalog_overview", {
    title: "Get OES catalog overview",
    description: "List catalog categories with counts and concise practice titles to help plan a broad, relevant review.",
    inputSchema: z.object({}),
  }, async () => {
    const grouped = new Map();
    for (const p of catalog.practices) {
      const group = grouped.get(p.category) ?? [];
      group.push({ id: p.id, title: p.title, subsection: p.subsection });
      grouped.set(p.category, group);
    }
    const categories = [...grouped].map(([category, practices]) => ({ category, count: practices.length, practices }));
    return { content: [{ type: "text", text: JSON.stringify({ catalogVersion: catalog.version, totalPractices: catalog.practices.length, categories }, null, 2) }], structuredContent: { catalogVersion: catalog.version, totalPractices: catalog.practices.length, categories } };
  });

  server.registerTool("get_oes_practices", {
    title: "Get multiple OES practices",
    description: "Return full catalog definitions for up to 30 practice IDs in one call.",
    inputSchema: z.object({ ids: z.array(z.string().regex(/^\d+\.\d+\.\d+$/)).min(1).max(30) }),
  }, async ({ ids }) => {
    const practices = ids.map((id) => catalog.practices.find((p) => p.id === id)).filter(Boolean);
    return { content: [{ type: "text", text: JSON.stringify({ catalogVersion: catalog.version, practices, missingIds: ids.filter((id) => !practices.some((p) => p.id === id)) }, null, 2) }], structuredContent: { catalogVersion: catalog.version, practices, missingIds: ids.filter((id) => !practices.some((p) => p.id === id)) } };
  });
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

  const reviewConfig = {
    title: "Show OES project review",
    description: "REQUIRED final step of a review. Submit all evidence-backed possible matches (findings: [] if none) plus scope and limitations. Each finding needs practice ID, file, line range, evidence, reasoning, and confidence. Locally, saves offline HTML and Markdown and returns a file browserUrl. For rechecks, pass previousReviewPath (prior statePath), reuse findingKey values, and add verified resolvedFindings. Findings are leads, not verdicts. Hosted links encode evidence in the URL fragment (not stored, but readable by anyone with the link); tell the user.",
    inputSchema: reviewInputSchema,
    _meta: { ui: { resourceUri } },
  };
  const renderReview = async (input) => {
    try {
      let model = createReview(input, catalog, serverVersion);
      if (!saveReview && (input.previousReviewPath || input.resolvedFindings?.length)) throw new Error("Review history requires the local stdio MCP.");
      const saved = saveReview ? await saveReview(model) : browserReviewBase ? {
        browserUrl: `${browserReviewBase}/review#${encodeURIComponent(JSON.stringify(model))}`,
      } : {};
      const { review, ...links } = saved;
      if (review) model = review;
      return {
        content: [{ type: "text", text: `${model.findings.length} possible OES matches for ${model.project}. Findings are leads for human review, not determinations. Browser fallback: ${links.browserUrl || "unavailable"}. ${saveReview ? `Local Markdown: ${links.markdownPath}. Audit state: ${links.statePath}. On the next audit pass previousReviewPath: ${links.statePath}, reuse findingKey values, and provide resolvedFindings with fix evidence. Open the HTML to export Markdown, save review choices, or Print / Save PDF. These files contain review evidence and remain on this machine.` : "The hosted link contains review evidence; anyone with the link can read it. For private evidence, use the local stdio server."}` }],
        structuredContent: { ...model, ...links },
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
