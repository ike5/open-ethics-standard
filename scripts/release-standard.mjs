import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const path = resolve("OPEN-ETHICS-STANDARD.md");
const bump = process.argv[2] ?? "patch";
if (!["major", "minor", "patch"].includes(bump)) throw new Error("Choose major, minor, or patch.");
const source = await readFile(path, "utf8");
const match = source.match(/^\*\*Version:\*\*\s*(\d+)\.(\d+)\.(\d+)\s*$/m);
if (!match) throw new Error("The standard version must use MAJOR.MINOR.PATCH.");
let [, major, minor, patch] = match;
major = Number(major); minor = Number(minor); patch = Number(patch);
if (bump === "major") { major++; minor = 0; patch = 0; }
else if (bump === "minor") { minor++; patch = 0; }
else patch++;
const version = `${major}.${minor}.${patch}`;
const date = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date());
const updated = source.replace(/^\*\*Version:\*\*\s*\S+\s*$/m, `**Version:** ${version}`).replace(/^\*\*Date:\*\*.*$/m, `**Date:** ${date}`);
await writeFile(path, updated);
console.log(`Updated standard metadata to ${version} (${date}).`);
