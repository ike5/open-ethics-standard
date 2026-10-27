import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "OPEN-ETHICS-STANDARD.md");
const outPath = resolve(root, "packages/oes-mcp/catalog.json");
const markdown = await readFile(sourcePath, "utf8");
const version = markdown.match(/^\*\*Version:\*\*\s*(\S+)/m)?.[1];
const updated = markdown.match(/^\*\*Date:\*\*\s*(.+)$/m)?.[1]?.trim();
if (!version || !updated) throw new Error("Standard front matter must include Version and Date fields.");

const practices = [];
let category = "";
let subsection = "";
for (const [index, rawLine] of markdown.split(/\r?\n/).entries()) {
  const line = rawLine.trim();
  const cat = line.match(/^##\s+(\d+)\.\s+(.+)$/);
  const sub = line.match(/^###\s+(\d+\.\d+)\s+(.+)$/);
  if (cat) { category = cat[1] + ". " + stripMarkdown(cat[2]); subsection = ""; continue; }
  if (sub) { subsection = sub[1] + " " + stripMarkdown(sub[2]); continue; }
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
  practices.push({ id, title, description, domains, category, subsection, sourceLine: index + 1 });
}
const ids = new Set();
for (const item of practices) {
  if (ids.has(item.id)) throw new Error(`Duplicate practice identifier ${item.id}.`);
  ids.add(item.id);
}
if (!practices.length) throw new Error("No OES practice rows were parsed.");

const catalog = { standard: "Open Ethics Standard", version, updated, source: "OPEN-ETHICS-STANDARD.md", practices };
await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, JSON.stringify(catalog, null, 2) + "\n");
console.log(`Generated ${practices.length} practices (${version}, ${updated}) at ${outPath}`);

function splitTableRow(line) {
  return line.replace(/^\|/, "").replace(/\|$/, "").split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, "|"));
}
function stripMarkdown(text) {
  return text.replace(/<br\s*\/?\s*>/gi, " ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/\s+/g, " ").trim();
}
