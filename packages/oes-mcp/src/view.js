import { decision, exportFindings, findingKey, markdownReport, reviewCounts } from "./review-state.js";

// MCP_APP is set at build time; the standalone offline report omits the MCP Apps SDK entirely.
let app = null;
let model = { project: "Project", version: "", findings: [] };
const decisions = new Map();
let activeFilter = "active";
let printing = false;
const openKeys = new Set();
const $ = (selector) => document.querySelector(selector);
const list = $("#list");
const filters = $("#filters");
const progressLabels = { new: "New", continuing: "Still open", reopened: "Reopened", fixed: "Verified fixed", not_rechecked: "Not rechecked" };
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const statusOf = (item) => decisions.get(findingKey(item)) || decision(item);
const notify = (text) => { $("#action-status").textContent = text; };
const storageKey = () => model.reviewId ? `oes-review-decisions:${model.reviewId}` : null;

function load(next) {
  model = next;
  decisions.clear();
  let saved = {};
  try { if (storageKey()) saved = JSON.parse(localStorage.getItem(storageKey()) || "{}"); } catch { /* file origins may disable storage */ }
  for (const item of model.findings || []) {
    const key = findingKey(item);
    decisions.set(key, ["applies", "unsure", "dismissed"].includes(saved[key]) ? saved[key] : decision(item));
  }
  render();
}
try {
  const embedded = $("#oes-review-data");
  const encoded = location.hash.slice(1);
  if (embedded || encoded) {
    load(embedded ? JSON.parse(embedded.textContent) : JSON.parse(decodeURIComponent(encoded)));
    $("#discuss").hidden = true;
  } else if (MCP_APP) {
    import("@modelcontextprotocol/ext-apps").then(({ App }) => {
      app = new App({ name: "Open Ethics Standard Review", version: "1.2.0" });
      app.ontoolresult = (result) => { if (result.structuredContent) load(result.structuredContent); };
      return app.connect();
    }).catch(() => notify("The client could not connect the review. Open the local HTML report instead."));
  } else {
    notify("This report has no review data. Regenerate it.");
  }
} catch {
  notify("This review is invalid or incomplete. Regenerate it with your local MCP.");
}

function render() {
  const findings = model.findings || [];
  const counts = reviewCounts(findings, statusOf);
  document.title = `${model.project} · OES review`;
  $("#meta").textContent = model.project;
  $("#run-label").textContent = model.createdAt ? `Run ${model.runNumber} · ${new Date(model.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}` : "";
  $("#title").textContent = "Possible matches";
  $("#finding-total").textContent = `${exportFindings(model, statusOf).length} included · ${new Set(findings.filter((item) => statusOf(item) !== "dismissed").map((item) => item.file)).size} files`;
  $("#scope").textContent = model.scope || "Not recorded";
  $("#limitations").textContent = model.limitations || "Not recorded";
  $("#print-scope").textContent = `Scope: ${model.scope || "Not recorded"}\nLimitations: ${model.limitations || "Not recorded"}`;
  $("#version").textContent = model.version || "unknown";
  for (const [selector, value] of Object.entries({ "#open-count": counts.open, "#fixed-count": counts.fixed, "#new-count": counts.new, "#unchecked-count": counts.notRechecked, "#dismissed-count": counts.dismissed })) $(selector).textContent = value;
  const denominator = counts.open + counts.fixed + counts.notRechecked;
  $("#progress-fill").style.width = `${denominator ? counts.fixed / denominator * 100 : 0}%`;
  $("#progress-caption").textContent = denominator ? `${counts.fixed} of ${denominator} verified fixed` : "No open findings";
  const notes = model.notes || [];
  $("#notes-wrap").hidden = !notes.length;
  if (printing && notes.length) $("#notes-wrap").open = true;
  $("#notes-count").textContent = `(${notes.length})`;
  $("#notes").innerHTML = notes.map((note) => `<li>${esc(note)}</li>`).join("");
  const filterCounts = { active: counts.open, fixed: counts.fixed, not_rechecked: counts.notRechecked, dismissed: counts.dismissed, all: findings.length };
  const labels = { active: "Open", fixed: "Fixed", not_rechecked: "Not rechecked", dismissed: "Dismissed", all: "All" };
  filters.innerHTML = Object.keys(filterCounts).map((name) => `<button type="button" data-filter="${name}" aria-pressed="${activeFilter === name}">${labels[name]} <span>${filterCounts[name]}</span></button>`).join("");
  filters.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { activeFilter = button.dataset.filter; render(); }));
  const visible = findings.filter((item) => {
    const dismissed = statusOf(item) === "dismissed";
    if (printing) return !dismissed;
    if (activeFilter === "all") return true;
    if (activeFilter === "dismissed") return dismissed;
    if (dismissed) return false;
    if (activeFilter === "active") return !["fixed", "not_rechecked"].includes(item.lifecycle);
    return item.lifecycle === activeFilter;
  });
  const recheck = (model.runNumber || 1) > 1;
  list.innerHTML = visible.length ? visible.map((item) => {
    const status = statusOf(item);
    const key = findingKey(item);
    const lifecycle = item.lifecycle || "new";
    const lines = `${item.startLine}${item.endLine !== item.startLine ? `–${item.endLine}` : ""}`;
    const citation = `https://github.com/ike5/open-ethics-standard/blob/main/OPEN-ETHICS-STANDARD.md#L${Number(item.practice?.sourceLine) || 1}`;
    const pills = `${recheck || lifecycle !== "new" ? `<span class="lifecycle ${esc(lifecycle)}">${esc(progressLabels[lifecycle] || lifecycle)}</span>` : ""}<span class="pill conf ${esc(item.confidence)}">${esc(item.confidence)}</span>${status === "unsure" ? "" : `<span class="pill ${status}">${status === "applies" ? "Applies" : "Dismissed"}</span>`}`;
    return `<details class="item" data-decision="${status}" data-key="${esc(key)}"${printing || openKeys.has(key) ? " open" : ""}><summary><span class="id">${esc(item.id)}</span><span class="finding-heading"><span class="title">${esc(item.practice?.title || "Unknown OES practice")}</span><span class="loc">${esc(item.file)}:${esc(lines)}</span></span><span class="pills">${pills}</span><span class="chev" aria-hidden="true"></span></summary><div class="body"><div class="inner"><span class="label">${lifecycle === "fixed" ? "Previously observed evidence" : "Evidence"}</span><div class="evidence">${esc(item.evidence)}</div><span class="label">Why it matters</span><p class="reason">${esc(item.reasoning)}</p>${item.resolutionEvidence ? `<span class="label">Fix verification</span><p class="resolution">${esc(item.resolutionEvidence)}</p>` : ""}${lifecycle === "not_rechecked" ? '<p class="reason" style="margin-top:10px">Not rechecked in this run. Its absence is not evidence of a fix.</p>' : ""}<a class="citation" href="${citation}" target="_blank" rel="noreferrer">Read OES § ${esc(item.id)} ↗</a><div class="finding-footer"><span>Does this apply?</span><div class="actions">${["applies", "unsure", "dismissed"].map((name) => `<button type="button" data-status="${name}" data-key="${esc(key)}" aria-pressed="${status === name}">${name === "dismissed" ? "Dismiss" : name === "applies" ? "Applies" : "Unsure"}</button>`).join("")}</div></div><span class="decision-label">Decision: ${status}</span></div></div></details>`;
  }).join("") : `<div class="empty">${printing ? "No non-dismissed findings to export." : activeFilter === "active" ? "No open findings in this view. Explore the other tabs to review fixed, dismissed, or unverified findings." : "No findings in this view."}</div>`;
  list.querySelectorAll("details.item").forEach((item) => item.addEventListener("toggle", () => {
    if (printing) return;
    if (item.open) openKeys.add(item.dataset.key); else openKeys.delete(item.dataset.key);
    updateToggleAll();
  }));
  updateToggleAll();
  list.querySelectorAll("[data-status]").forEach((button) => button.addEventListener("click", () => {
    decisions.set(button.dataset.key, button.dataset.status);
    let persisted = false;
    try { if (storageKey()) { localStorage.setItem(storageKey(), JSON.stringify(Object.fromEntries(decisions))); persisted = true; } } catch { /* Save HTML/state remains available */ }
    render();
    notify(`${button.dataset.status === "dismissed" ? "Dismissed; left out of exports." : "Choice updated."}${persisted ? " Saved in this browser." : ""}`);
  }));
  const history = model.history?.length ? model.history.map((run, index) => index === model.history.length - 1 ? { ...run, ...counts } : run) : [{ runNumber: 1, createdAt: model.createdAt, scope: model.scope, ...counts }];
  $("#history").innerHTML = history.map((run, index) => `<article class="history-card"><h3>Audit ${String(run.runNumber).padStart(2, "0")} ${index === history.length - 1 ? '<span class="lifecycle">Latest run</span>' : ""}</h3><time>${run.createdAt ? esc(new Date(run.createdAt).toLocaleString()) : "Current review"}</time><div class="history-stats"><span><b>${esc(run.open)}</b>open</span><span><b>${esc(run.fixed)}</b>fixed</span><span><b>${esc(run.new)}</b>new</span></div><p>${esc(run.scope || "Scope not recorded")}</p></article>`).join("");
}

function updateToggleAll() {
  const items = [...list.querySelectorAll("details.item")];
  $("#toggle-all").hidden = !items.length;
  $("#toggle-all").textContent = items.length && items.every((item) => item.open) ? "Collapse all" : "Expand all";
}
// Animate accordion height instead of the native instant snap.
list.addEventListener("click", (event) => {
  const summary = event.target.closest("details.item > summary");
  if (!summary || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  event.preventDefault();
  const item = summary.parentElement;
  const body = item.querySelector(".body");
  if (item.dataset.animating) return;
  item.dataset.animating = "true";
  const opening = !item.open;
  if (opening) item.open = true;
  const height = `${body.scrollHeight}px`;
  body.style.overflow = "hidden";
  const frames = [{ height: "0px", opacity: 0 }, { height, opacity: 1 }];
  const animation = body.animate(opening ? frames : frames.reverse(), { duration: opening ? 320 : 240, easing: "cubic-bezier(.2,.7,.2,1)" });
  animation.onfinish = animation.oncancel = () => {
    body.style.overflow = "";
    if (!opening) item.open = false;
    delete item.dataset.animating;
  };
});
$("#toggle-all").addEventListener("click", () => {
  const items = [...list.querySelectorAll("details.item")];
  const open = !items.every((item) => item.open);
  for (const item of items) { if (open) openKeys.add(item.dataset.key); else openKeys.delete(item.dataset.key); }
  render();
});

function reviewedReport() { return markdownReport(model, statusOf); }
function savedModel() {
  return { ...model, findings: model.findings.map((item) => ({ ...item, findingKey: findingKey(item), reviewStatus: statusOf(item) })),
    history: model.history?.map((run, index) => index === model.history.length - 1 ? { ...run, ...reviewCounts(model.findings, statusOf) } : run) };
}
function download(content, type, filename) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url; link.download = filename;
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$("#export-md").addEventListener("click", () => download(reviewedReport(), "text/markdown;charset=utf-8", "oes-review.md"));
$("#save-state").addEventListener("click", () => {
  download(JSON.stringify(savedModel(), null, 2), "application/json", "oes-audit-state.json");
  notify("Audit state saved with all review choices. Give its file path to your AI as previousReviewPath for the next run.");
});
$("#save-html").addEventListener("click", () => {
  const doc = document.documentElement.cloneNode(true);
  let data = doc.querySelector("#oes-review-data");
  if (!data) { data = document.createElement("script"); data.type = "application/json"; data.id = "oes-review-data"; doc.querySelector("main").after(data); }
  data.textContent = JSON.stringify(savedModel()).replace(/</g, "\\u003c");
  download("<!doctype html>\n" + doc.outerHTML, "text/html;charset=utf-8", "oes-review.html");
  notify("HTML saved with your complete history and choices. Its Markdown and PDF exports exclude dismissed findings.");
});
$("#copy").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(reviewedReport()); notify("Report copied, with dismissed findings excluded."); }
  catch { notify("Copy is unavailable. Use Export Markdown to download your report."); }
});
$("#discuss").addEventListener("click", async () => {
  if (!app) return;
  const button = $("#discuss"); button.disabled = true;
  try {
    const result = await app.sendMessage({ role: "user", content: [{ type: "text", text: `Please discuss my OES review choices and help investigate uncertain or applicable findings.\n\n${reviewedReport()}` }] });
    notify(result.isError ? "The client could not send this to chat. Use Copy reviewed report." : "Sent your review choices to the chat.");
  } catch { notify("The client could not send this to chat. Use Copy reviewed report."); }
  finally { button.disabled = false; }
});
$("#copy-followup").addEventListener("click", async () => {
  const text = `Recheck my ${model.project} application against the Open Ethics Standard after my fixes. Use get_oes_review_state on the local MCP to load the prior audit, then use ${model.statePath ? `previousReviewPath: ${model.statePath}` : "the saved oes-audit-state.json file as previousReviewPath"}. If I saved a newer audit state or HTML with review choices, use that file instead. Reuse findingKey values from the previous state. Submit current findings and resolvedFindings with direct fix verification evidence; do not mark omitted or out-of-scope findings fixed. Return the updated local report link.`;
  try { await navigator.clipboard.writeText(text); notify("Follow-up prompt copied. Save audit state first if you changed review choices, then paste the prompt into your AI."); }
  catch { notify(text); }
});
window.addEventListener("beforeprint", () => { printing = true; render(); });
window.addEventListener("afterprint", () => { printing = false; render(); });
$("#print").addEventListener("click", () => window.print());
