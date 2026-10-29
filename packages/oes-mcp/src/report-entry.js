// Entry for the single-file docs/oes-report.mjs: catalog and report template are bundled in.
import catalog from "../catalog.json";
import template from "../dist/report.html";
import { main } from "./cli.js";

await main(process.argv.slice(2), { catalog, template });
