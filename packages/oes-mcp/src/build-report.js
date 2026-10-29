#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { createReview } from "./report-model.js";
import { writeLocalReview } from "./local-report.js";

const [input, outputDirectory, ...extra] = process.argv.slice(2);
if (!input || extra.length) {
  console.error("Usage: node build-report.js findings.json [output-directory]");
  process.exitCode = 1;
} else {
  try {
    const catalog = JSON.parse(await readFile(new URL("./catalog.json", import.meta.url), "utf8"));
    const template = await readFile(new URL("./review.html", import.meta.url), "utf8");
    const model = createReview(JSON.parse(await readFile(input, "utf8")), catalog, "local-cli");
    const { review, ...links } = await writeLocalReview(model, template, outputDirectory);
    console.log(JSON.stringify({ ...links, runNumber: review.runNumber }, null, 2));
  } catch (error) {
    console.error(`Could not build review: ${error.message}`);
    process.exitCode = 1;
  }
}
