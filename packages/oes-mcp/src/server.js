#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { registerOesTools } from "./tools.js";

const here = dirname(fileURLToPath(import.meta.url));
const catalogPath = resolve(here, "../catalog.json");
const viewPath = resolve(here, "../dist/review.html");
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const reviewHtml = await readFile(viewPath, "utf8");
const server = new McpServer({ name: "open-ethics-standard", version: catalog.version });

registerOesTools(server, { catalog, reviewHtml });
await server.connect(new StdioServerTransport());
