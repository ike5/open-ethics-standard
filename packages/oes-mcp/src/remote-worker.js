import { createMcpHandler } from "agents/mcp/server";
import { McpServer } from "@modelcontextprotocol/server";
import catalog from "../catalog.json" with { type: "json" };
import reviewHtml from "../dist/review.html" with { type: "text" };
import { registerOesTools, serverInstructions } from "./tools.js";

const mcpHandler = createMcpHandler(() => {
  const server = new McpServer({ name: "open-ethics-standard", version: catalog.version }, { instructions: serverInstructions });
  registerOesTools(server, { catalog, reviewHtml, browserReviewBase: "https://mcp.codebylevel.com", serverVersion: "0.2.0" });
  return server;
});

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/" && request.method === "GET") {
      return Response.json({
        name: "Open Ethics Standard MCP",
        endpoint: `${url.origin}/mcp`,
        transport: "Streamable HTTP",
        version: catalog.version,
        serverVersion: "0.2.0",
        privacy: "Catalog tools receive only search terms. Reviews are built locally with https://ike5.github.io/open-ethics-standard/oes-report.mjs; only the fallback create_oes_review tool receives findings, and nothing is stored.",
      }, { headers: { "cache-control": "public, max-age=60", "x-content-type-options": "nosniff" } });
    }
    if (url.pathname === "/health" && request.method === "GET") {
      return Response.json({ status: "ok", version: catalog.version, serverVersion: "0.2.0" }, { headers: { "cache-control": "no-store" } });
    }
    if (url.pathname === "/review" && request.method === "GET") {
      return new Response(reviewHtml, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300", "x-content-type-options": "nosniff", "content-security-policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'" } });
    }
    if (url.pathname === "/mcp") {
      if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });
      const body = await readBoundedBody(request, 512_000);
      if (!body) return new Response("Request too large", { status: 413 });
      return mcpHandler(body);
    }
    return new Response("Not found", { status: 404 });
  },
};

async function readBoundedBody(request, maxBytes) {
  const declaredSize = Number(request.headers.get("content-length") || 0);
  if (declaredSize > maxBytes) return null;
  if (!request.body) return new Request(request.url, { method: request.method, headers: request.headers });
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBytes) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return new Request(request.url, { method: request.method, headers: request.headers, body: bytes, signal: request.signal });
}
