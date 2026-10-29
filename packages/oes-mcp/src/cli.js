import { readFile } from "node:fs/promises";
import { createReview } from "./report-model.js";
import { writeLocalReview } from "./local-report.js";
import { catalogOverview, findPractices, searchCatalog } from "./catalog.js";

const usage = `Open Ethics Standard: local catalog and report tool

  node oes-report.mjs search <query>        Find practices (e.g. "cancel subscription")
  node oes-report.mjs practice <id> [id…]   Full definitions (e.g. 2.1.3)
  node oes-report.mjs overview              All categories and practice titles
  node oes-report.mjs build <findings.json|-> [output-dir]
                                            Write the offline HTML report; prints its link

Reports are saved under ~/.local/share/open-ethics-standard/reports (or OES_REPORT_DIR).
Input format: https://ike5.github.io/open-ethics-standard/agent-setup.md`;

async function readInput(path) {
  if (path !== "-") return readFile(path, "utf8");
  let text = "";
  for await (const chunk of process.stdin) text += chunk;
  return text;
}

export async function main(argv, { catalog, template }) {
  const json = argv.includes("--json");
  const [command, ...args] = argv.filter((arg) => arg !== "--json");
  const print = (value) => console.log(typeof value === "string" ? value : JSON.stringify(value, null, 2));
  try {
    if (command === "search" && args.length) {
      const results = searchCatalog(catalog, args.join(" "), 12);
      return print(json ? results : results.map((p) => `${p.id}  ${p.title} — ${p.description}`).join("\n") || "No matches. Try broader terms or `overview`.");
    }
    if (command === "practice" && args.length) {
      const practices = findPractices(catalog, args);
      const missing = args.filter((id) => !practices.some((p) => p.id === id));
      if (missing.length) process.exitCode = 1;
      return print(json ? { practices, missing } : [...practices.map((p) => `${p.id}  ${p.title}\n${p.category} › ${p.subsection}\n${p.description}\nExamples: ${p.domains}`), ...missing.map((id) => `${id}  not found`)].join("\n\n"));
    }
    if (command === "overview") {
      const categories = catalogOverview(catalog);
      return print(json ? categories : categories.map((c) => `${c.category} (${c.count})\n${c.practices.map((p) => `  ${p.id} ${p.title}`).join("\n")}`).join("\n\n"));
    }
    if (command === "build" && args.length >= 1 && args.length <= 2) {
      const model = createReview(JSON.parse(await readInput(args[0])), catalog, "local-cli");
      const { review, ...links } = await writeLocalReview(model, template, args[1]);
      return print(json ? { ...links, runNumber: review.runNumber } : `Report: ${links.browserUrl}\nState: ${links.statePath}`);
    }
    console.error(usage);
    process.exitCode = 1;
  } catch (error) {
    console.error(`Could not ${command === "build" ? "build review" : "run command"}: ${error.message}`);
    process.exitCode = 1;
  }
}
