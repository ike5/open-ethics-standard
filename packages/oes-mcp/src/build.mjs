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
// The npm package ships these licenses with dist/: code is MIT, the bundled catalog CC BY-ND 4.0.
for (const file of ["LICENSE", "LICENSE-OPEN-ETHICS-STANDARD.md"]) await cp(resolve(root, "../..", file), resolve(dist, file));
console.log("Built OES MCP server and review app.");
