import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildSite } from "./build-site.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "OPEN-ETHICS-STANDARD.md");
const outPath = resolve(root, "packages/oes-mcp/catalog.json");
const markdown = await readFile(sourcePath, "utf8");
const version = markdown.match(/^\*\*Version:\*\*\s*(\S+)/m)?.[1];
const updated = markdown.match(/^\*\*Date:\*\*\s*(.+)$/m)?.[1]?.trim();
if (!version || !updated) throw new Error("Standard front matter must include Version and Date fields.");

const principles = [];
const practices = [];
let category = "";
let subsection = "";
let subsectionPrinciples = null;
let inPrinciples = false;
let whyFor = null;
for (const [index, rawLine] of markdown.split(/\r?\n/).entries()) {
  const line = rawLine.trim();
  if (/^\|\s*Principle\s*\|/.test(line)) { inPrinciples = true; continue; }
  if (inPrinciples) {
    if (!line.startsWith("|")) inPrinciples = false;
    else if (!/^\|[\s|:-]+\|$/.test(line)) {
      const [name, statement, protects] = splitTableRow(line).map(stripMarkdown);
      if (!name || !statement || !protects) throw new Error(`Incomplete principle row at ${sourcePath}:${index + 1}.`);
      principles.push({ name, statement, protects });
      continue;
    }
  }
  const why = line.match(/^\*\*Why it matters:\*\*\s*(.+)$/);
  if (why && whyFor) { whyFor.why = stripMarkdown(why[1]); continue; }
  const covers = line.match(/^\*\*Covers:\*\*\s*(.+)$/);
  if (covers && whyFor) { whyFor.covers = stripMarkdown(covers[1]); continue; }
  if (/^##\s/.test(line)) whyFor = null;
  const named = line.match(/^###\s+(.+)$/);
  if (named && !category) { whyFor = principles.find((item) => item.name === stripMarkdown(named[1])) || null; }
  const tagged = line.match(/^\*\*Principles:\*\*\s*(.+)$/);
  if (tagged) {
    const names = tagged[1].split(",").map((name) => name.trim()).filter(Boolean);
    const unknown = names.filter((name) => !principles.some((item) => item.name === name));
    if (!names.length || unknown.length) throw new Error(`Unknown principle ${unknown.join(", ") || "(none)"} at ${sourcePath}:${index + 1}.`);
    subsectionPrinciples = names;
    continue;
  }
  const cat = line.match(/^##\s+(\d+)\.\s+(.+)$/);
  const sub = line.match(/^###\s+(\d+\.\d+)\s+(.+)$/);
  if (cat) { category = cat[1] + ". " + stripMarkdown(cat[2]); subsection = ""; subsectionPrinciples = null; continue; }
  if (sub) { subsection = sub[1] + " " + stripMarkdown(sub[2]); subsectionPrinciples = null; continue; }
  if (!line.startsWith("|") || !/^\|\s*\d+\.\d+\.\d+\s*\|/.test(line)) continue;
  const cells = splitTableRow(line);
  if (cells.length !== 4) throw new Error(`Expected four cells in practice row at ${sourcePath}:${index + 1}; found ${cells.length}.`);
  const id = cells[0].replace(/[^\d.]/g, "");
  const title = stripMarkdown(cells[1]);
  const description = stripMarkdown(cells[2]);
  const domains = stripMarkdown(cells[3]);
  if (!/^\d+\.\d+\.\d+$/.test(id) || !title || !description || !category || !subsection) {
    throw new Error(`Incomplete practice record at ${sourcePath}:${index + 1}.`);
  }
  if (!subsectionPrinciples) throw new Error(`Subsection "${subsection}" needs a **Principles:** line before practice ${id} at ${sourcePath}:${index + 1}.`);
  practices.push({ id, title, description, domains, category, subsection, principles: subsectionPrinciples, sourceLine: index + 1 });
}
const ids = new Set();
for (const item of practices) {
  if (ids.has(item.id)) throw new Error(`Duplicate practice identifier ${item.id}.`);
  ids.add(item.id);
}
if (!practices.length) throw new Error("No OES practice rows were parsed.");
if (!principles.length) throw new Error("No OES principles table was parsed.");
const missingWhy = principles.filter((item) => !item.why || !item.covers).map((item) => item.name);
if (missingWhy.length) throw new Error(`Principle sections need **Why it matters:** and **Covers:** lines: ${missingWhy.join(", ")}.`);

const catalog = { standard: "Open Ethics Standard", version, updated, source: "OPEN-ETHICS-STANDARD.md", principles, practices };
await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, JSON.stringify(catalog, null, 2) + "\n");
await buildSite({ root, version, updated, principles, practices });
console.log(`Generated ${practices.length} practices (${version}, ${updated}) at ${outPath}`);

function splitTableRow(line) {
  return line.replace(/^\|/, "").replace(/\|$/, "").split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, "|"));
}
function stripMarkdown(text) {
  return text.replace(/<br\s*\/?\s*>/gi, " ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/\s+/g, " ").trim();
}

