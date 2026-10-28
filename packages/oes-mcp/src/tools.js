import { registerAppResource, registerAppTool, RESOURCE_MIME_TYPE } from "@modelcontextprotocol/ext-apps/server";
import { z } from "zod";

const resourceUri = "ui://open-ethics-standard/review.html";

export function registerOesTools(server, { catalog, reviewHtml, browserReviewBase = "", serverVersion = "dev" }) {
  server.registerTool("get_oes_review_instructions", {
    title: "Get OES review workflow",
    description: "Return the required workflow for an evidence-based OES project review. The MCP cannot inspect workspace files; the AI must use its own authorized workspace tools.",
    inputSchema: z.object({}),
  }, async () => {
    const workflow = [
      "Inspect the project using authorized workspace tools; the MCP cannot read project files.",
      "Search the OES catalog for concerns suggested by observed product behavior; do not treat a few search results as an exhaustive scan.",
      "Verify every candidate against source and user-facing behavior. Include file path, line range, direct evidence, reasoning, confidence, and practice ID.",
      "Call create_oes_review after the scan, including findings: [] when no supported matches exist.",
      "Give the user the returned browserUrl as a clickable link. Do not search general MCP resources for the review page.",
      "If the client displays the attached MCP App, invite the user to mark each finding Applies, Unsure, or Dismiss.",
      "The browser URL carries evidence in its fragment. Anyone with the link can read it; disclose this when sharing.",
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
    description: "REQUIRED final step after a project review: submit all evidence-backed possible matches (including an empty array when none) to display the interactive OES review. The result includes a browser link users can open if their MCP client does not render Apps. Findings require file, line range, evidence, reasoning, confidence, and OES practice ID. This is not a verdict. Hosted browser links encode submitted evidence in the URL fragment; the Worker does not store it, but anyone with the link can view it, so tell the user the link contains review evidence.",
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
      })).max(50),
    }),
    _meta: { ui: { resourceUri } },
  };
  const renderReview = async ({ project, findings }) => {
    const enriched = findings.map((finding) => {
      const practice = catalog.practices.find((item) => item.id === finding.id);
      return { ...finding, practice: practice ? { title: practice.title, description: practice.description, subsection: practice.subsection, category: practice.category, sourceLine: practice.sourceLine } : null };
    });
    const valid = enriched.filter((item) => item.practice);
    return {
      content: [{ type: "text", text: `${valid.length} possible OES match${valid.length === 1 ? "" : "es"} for ${project}. OES server build: ${serverVersion}; standard catalog: ${catalog.version}. Findings are leads for human review, not determinations. Open the attached review app. Browser fallback: ${browserReviewBase ? `${browserReviewBase}/review#${encodeURIComponent(JSON.stringify({ project, version: catalog.version, serverVersion, updated: catalog.updated, findings: valid }))}` : "not configured for this local server"}. The browser link contains review evidence; share only with intended reviewers.` }],
      structuredContent: { project, version: catalog.version, catalogVersion: catalog.version, serverVersion, updated: catalog.updated, findings: valid, ...(browserReviewBase ? { browserUrl: `${browserReviewBase}/review#${encodeURIComponent(JSON.stringify({ project, version: catalog.version, serverVersion, updated: catalog.updated, findings: valid }))}` } : {}) },
    };
  };
  registerAppTool(server, "create_oes_review", { ...reviewConfig, title: "Create OES project review" }, renderReview);
  registerAppTool(server, "show_oes_review", reviewConfig, renderReview);

  registerAppResource(server, "OES review view", resourceUri, { mimeType: RESOURCE_MIME_TYPE }, async () => ({
    contents: [{ uri: resourceUri, mimeType: RESOURCE_MIME_TYPE, text: reviewHtml }],
  }));
}
