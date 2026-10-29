#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { readLocalReview, writeLocalReview } from "./local-report.js";
import { registerOesTools, serverInstructions } from "./tools.js";
import { main } from "./cli.js";

const here = dirname(fileURLToPath(import.meta.url));
const serverVersion = `${JSON.parse(await readFile(resolve(here, "../package.json"), "utf8")).version}-local`;
const catalog = JSON.parse(await readFile(resolve(here, "./catalog.json"), "utf8"));
const reportHtml = await readFile(resolve(here, "./report.html"), "utf8");
const [command] = process.argv.slice(2);

if (command === "--version") {
  console.log(`open-ethics-standard-mcp ${serverVersion} · catalog ${catalog.version}`);
} else if (command) {
  // `npx open-ethics-standard-mcp search …` and friends: the catalog and report CLI for humans.
  await main(process.argv.slice(2), { catalog, template: reportHtml });
} else {
  const reviewHtml = await readFile(resolve(here, "./review.html"), "utf8");
  const server = new McpServer({ name: "open-ethics-standard", version: catalog.version }, { instructions: serverInstructions });
  registerOesTools(server, { catalog, reviewHtml, serverVersion, readReview: readLocalReview, saveReview: (model) => writeLocalReview(model, reportHtml) });
  await server.connect(new StdioServerTransport());
}
