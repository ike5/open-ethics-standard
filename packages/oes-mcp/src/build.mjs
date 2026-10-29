import { build } from "esbuild";
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(dir, "..");
const dist = resolve(root, "dist");
await mkdir(dist, { recursive: true });
const html = await readFile(resolve(root, "ui/review.html"), "utf8");
// review.html is the MCP App (includes the Apps SDK); report.html is the lean standalone offline report.
for (const [file, mcpApp] of [["review.html", true], ["report.html", false]]) {
  const result = await build({ entryPoints: [resolve(dir, "view.js")], bundle: true, format: "iife", write: false, platform: "browser", target: "es2022", minify: true, define: { MCP_APP: String(mcpApp) } });
  await writeFile(resolve(dist, file), html.replace("<!-- BUNDLED_VIEW_SCRIPT -->", () => `<script>${result.outputFiles[0].text}</script>`));
}
await cp(resolve(dir, "server.js"), resolve(dist, "server.js"));
for (const file of ["tools.js", "catalog.js", "cli.js", "report-model.js", "review-state.js", "local-report.js", "build-report.js"]) await cp(resolve(dir, file), resolve(dist, file));
await cp(resolve(root, "catalog.json"), resolve(dist, "catalog.json"));
// Single-file report tool served from the website, so reviews need no clone or install.
await build({ entryPoints: [resolve(dir, "report-entry.js")], bundle: true, format: "esm", platform: "node", target: "node20", minify: true, legalComments: "none", loader: { ".html": "text" }, outfile: resolve(root, "../../docs/oes-report.mjs"), banner: { js: "#!/usr/bin/env node\n// Open Ethics Standard report tool. Source: https://github.com/ike5/open-ethics-standard (MIT; catalog CC BY-ND 4.0)" } });
console.log("Built OES MCP server, review app, and docs/oes-report.mjs.");
