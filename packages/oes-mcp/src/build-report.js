#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { main } from "./cli.js";

const catalog = JSON.parse(await readFile(new URL("./catalog.json", import.meta.url), "utf8"));
const template = await readFile(new URL("./report.html", import.meta.url), "utf8");
const args = process.argv.slice(2);
// `build-report.js findings.json [dir]` is the original form; it keeps JSON output.
await main(["search", "practice", "overview", "build"].includes(args[0]) ? args : ["build", ...args, "--json"], { catalog, template });
