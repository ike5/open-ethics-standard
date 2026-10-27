import { App } from "@modelcontextprotocol/ext-apps";

const app = new App({ name: "Open Ethics Standard Review", version: "1.0.0" });
let model = { project: "Project", version: "", updated: "", findings: [] };
const decisions = new Map();
let activeFilter = "all";
const list = document.querySelector("#list");
const filters = document.querySelector("#filters");

app.ontoolresult = (result) => {
  if (result.structuredContent) {
    model = result.structuredContent;
    for (const finding of model.findings ?? []) if (!decisions.has(key(finding))) decisions.set(key(finding), "unsure");
    render();
  }
};
app.connect();

function key(item) { return `${item.id}|${item.file}|${item.startLine}`; }
function esc(value) { return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]); }
function render() {
  const findings = model.findings ?? [];
  document.querySelector("#title").textContent = `${findings.length} possible match${findings.length === 1 ? "" : "es"}`;
  document.querySelector("#meta").textContent = `${model.project || "Project"} · ${new Set(findings.map((item) => item.file)).size} file${new Set(findings.map((item) => item.file)).size === 1 ? "" : "s"}`;
  document.querySelector("#version").textContent = model.version || "unknown";
  const counts = { all: findings.length, applies: 0, unsure: 0, dismissed: 0 };
  for (const item of findings) counts[decisions.get(key(item)) || "unsure"]++;
  filters.innerHTML = ["all", "applies", "unsure", "dismissed"].map((name) => `<button type="button" data-filter="${name}" aria-pressed="${activeFilter === name}">${name === "all" ? "All" : name[0].toUpperCase() + name.slice(1)} <span>${counts[name]}</span></button>`).join("");
  filters.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { activeFilter = button.dataset.filter; render(); }));
  const visible = findings.filter((item) => activeFilter === "all" || decisions.get(key(item)) === activeFilter);
  if (!visible.length) { list.innerHTML = `<div class="empty">${findings.length ? "No findings in this view." : "No possible matches were submitted for this review."}</div>`; return; }
  list.innerHTML = visible.map((item) => {
    const status = decisions.get(key(item)) || "unsure";
    const title = item.practice?.title || "Unknown OES practice";
    const citation = `https://github.com/ike5/open-ethics-standard/blob/main/OPEN-ETHICS-STANDARD.md#L${item.practice?.sourceLine || 1}`;
    return `<article class="item"><div class="head"><span class="id">${esc(item.id)}</span><span class="title">${esc(title)}</span><span class="conf">${esc(item.confidence)} confidence</span></div><a class="loc" href="${citation}" target="_blank" rel="noreferrer">${esc(item.file)}:${item.startLine}${item.endLine !== item.startLine ? `–${item.endLine}` : ""} · OES § ${esc(item.id)}</a><div class="evidence">${esc(item.evidence)}</div><p class="reason">${esc(item.reasoning)}</p><div class="actions">${["applies", "unsure", "dismissed"].map((name) => `<button type="button" data-status="${name}" data-key="${esc(key(item))}" aria-pressed="${status === name}">${name === "dismissed" ? "Dismiss" : name[0].toUpperCase() + name.slice(1)}</button>`).join("")}</div></article>`;
  }).join("");
  list.querySelectorAll("[data-status]").forEach((button) => button.addEventListener("click", () => { decisions.set(button.dataset.key, button.dataset.status); render(); }));
}
document.querySelector("#copy").addEventListener("click", async () => {
  const lines = [`OES project review — ${model.project}`, `Standard version: ${model.version}`, "", ...(model.findings ?? []).map((item) => `[${decisions.get(key(item)) || "unsure"}] OES § ${item.id} — ${item.practice?.title || "Unknown practice"}\n${item.file}:${item.startLine}-${item.endLine}\nEvidence: ${item.evidence}\nReasoning: ${item.reasoning}`)];
  await navigator.clipboard.writeText(lines.join("\n\n"));
  document.querySelector("#copy").textContent = "Copied";
});
