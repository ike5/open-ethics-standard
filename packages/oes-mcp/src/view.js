import { decision, exportFindings, findingKey, markdownReport, principleWeights, reviewCounts, severityWeight } from "./review-state.js";

const PRINCIPLES = ["Honesty", "Autonomy", "Privacy", "Fairness", "Care", "Safety", "Accountability", "Responsibility"];

// MCP_APP is set at build time; the standalone offline report omits the MCP Apps SDK entirely.
let app = null;
let model = { project: "Project", version: "", findings: [] };
const decisions = new Map();
let activeFilter = "active";
let activePrinciple = null;
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
    if (activePrinciple && !(item.practice?.principles || []).includes(activePrinciple)) return false;
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
    const principlePills = (item.practice?.principles || []).map((name) => `<span class="pill principle">${esc(name)}</span>`).join("");
    const pills = `${principlePills}${recheck || lifecycle !== "new" ? `<span class="lifecycle ${esc(lifecycle)}">${esc(progressLabels[lifecycle] || lifecycle)}</span>` : ""}${item.severity ? `<span class="pill sevpill ${esc(item.severity)}">${esc(item.severity)} severity</span>` : ""}<span class="pill conf">${esc(item.confidence)} confidence</span>${status === "unsure" ? "" : `<span class="pill ${status}">${status === "applies" ? "Applies" : "Dismissed"}</span>`}`;
    return `<details class="item" data-decision="${status}" data-key="${esc(key)}"${printing || openKeys.has(key) ? " open" : ""}><summary><span class="id">${esc(item.id)}</span><span class="finding-heading"><span class="title">${esc(item.practice?.title || "Unknown OES practice")}</span><span class="loc">${esc(item.file)}:${esc(lines)}</span></span><span class="pills">${pills}</span><span class="chev" aria-hidden="true"></span></summary><div class="body"><div class="inner"><span class="label">${lifecycle === "fixed" ? "Previously observed evidence" : "Evidence"}</span><div class="evidence">${esc(item.evidence)}</div><span class="label">Why it matters</span><p class="reason">${esc(item.reasoning)}</p>${item.harmed || item.alternative ? `<div class="grid2">${item.harmed ? `<div><span class="label">Who is harmed</span><p class="harm">${esc(item.harmed)}</p></div>` : ""}${item.alternative ? `<div><span class="label">Ethical alternative</span><p class="alt">${esc(item.alternative)}</p></div>` : ""}</div>` : ""}${item.resolutionEvidence ? `<span class="label">Fix verification</span><p class="resolution">${esc(item.resolutionEvidence)}</p>` : ""}${lifecycle === "not_rechecked" ? '<p class="reason" style="margin-top:10px">Not rechecked in this run. Its absence is not evidence of a fix.</p>' : ""}<a class="citation" href="${citation}" target="_blank" rel="noreferrer">Read OES § ${esc(item.id)} ↗</a><div class="finding-footer"><span>Does this apply?</span><div class="actions">${["applies", "unsure", "dismissed"].map((name) => `<button type="button" data-status="${name}" data-key="${esc(key)}" aria-pressed="${status === name}">${name === "dismissed" ? "Dismiss" : name === "applies" ? "Applies" : "Unsure"}</button>`).join("")}</div></div><span class="decision-label">Decision: ${status}</span></div></div></details>`;
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
  renderInsights(findings, counts);
  const history = model.history?.length ? model.history.map((run, index) => index === model.history.length - 1 ? { ...run, ...counts } : run) : [{ runNumber: 1, createdAt: model.createdAt, scope: model.scope, ...counts }];
  $("#history").innerHTML = history.map((run, index) => `<article class="history-card"><h3>Audit ${String(run.runNumber).padStart(2, "0")} ${index === history.length - 1 ? '<span class="lifecycle">Latest run</span>' : ""}</h3><time>${run.createdAt ? esc(new Date(run.createdAt).toLocaleString()) : "Current review"}</time><div class="history-stats"><span><b>${esc(run.open)}</b>open</span><span><b>${esc(run.fixed)}</b>fixed</span><span><b>${esc(run.new)}</b>new</span></div><p>${esc(run.scope || "Scope not recorded")}</p></article>`).join("");
}

// Function declarations (not consts): the first render runs while this module is still loading.
function isOpen(item) { return statusOf(item) !== "dismissed" && !["fixed", "not_rechecked"].includes(item.lifecycle); }
function svgEl(tag, attrs, text) { return `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(" ")}>${text == null ? "" : esc(text)}</${tag}>`; }

function renderInsights(findings, counts) {
  const open = findings.filter(isOpen);
  // Fix first: the open finding with the highest severity, then marked Applies, then highest confidence.
  const rank = (item) => severityWeight(item) * 100 + (statusOf(item) === "applies" ? 10 : 0) + ({ high: 3, medium: 2, low: 1 })[item.confidence];
  const top = [...open].sort((a, b) => rank(b) - rank(a))[0];
  $("#fix-first").innerHTML = top
    ? `<span class="tile-label">Fix first</span><h3>${esc(top.practice?.title)} <span class="sub" style="color:#c1c9bc">§ ${esc(top.id)}</span></h3><p class="loc">${esc(top.file)}:${esc(top.startLine)}</p><p>${esc(top.alternative || top.harmed || top.reasoning)}</p><button type="button" id="show-top">Show finding</button>`
    : `<span class="tile-label">Fix first</span><h3>Nothing open</h3><p>No open concerns in this review.</p>`;
  if (top) $("#show-top").addEventListener("click", () => {
    activeFilter = "active"; activePrinciple = null; openKeys.add(findingKey(top)); render();
    list.querySelector(`[data-key="${CSS.escape(findingKey(top))}"]`)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  });
  const bySev = { high: 0, medium: 0, low: 0, unrated: 0 };
  for (const item of open) bySev[item.severity || "unrated"]++;
  $("#sev-total").textContent = open.length;
  $("#sev-split").innerHTML = Object.entries(bySev).filter(([, n]) => n).map(([k, n]) => `<span class="pill ${k}">${n} ${k}</span>`).join("") || '<span class="pill">None</span>';
  const runs = model.history || [];
  if (runs.length > 1) {
    const first = runs[0].open, diff = counts.open - first;
    $("#since").textContent = diff === 0 ? "No change" : `${diff > 0 ? "+" : "−"}${Math.abs(diff)}`;
    $("#since-note").textContent = `${first} open in review 1, ${counts.open} now · ${counts.fixed} verified fixed`;
  } else {
    $("#since").textContent = "First review";
    $("#since-note").textContent = "Recheck after fixes to track progress.";
  }
  const assessed = model.principlesAssessed;
  $("#checked").textContent = assessed?.length ? `${assessed.length} of ${PRINCIPLES.length}` : "—";
  const skipped = assessed?.length ? PRINCIPLES.filter((name) => !assessed.includes(name)) : [];
  $("#checked-note").textContent = !assessed?.length ? "Not recorded in this review." : skipped.length ? `Not judged from code: ${skipped.join(", ")}` : "Every principle was checked.";
  const weights = principleWeights(findings, statusOf);
  const pf = $("#pfilters");
  pf.innerHTML = PRINCIPLES.map((name) => `<button type="button" data-principle="${esc(name)}" aria-pressed="${activePrinciple === name}"${weights[name] || activePrinciple === name ? "" : " disabled"}>${esc(name)}${weights[name] ? ` · ${weights[name]}` : ""}</button>`).join("");
  pf.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { activePrinciple = activePrinciple === button.dataset.principle ? null : button.dataset.principle; render(); }));
  renderRadar(weights, runs.length > 1 ? runs[0].byPrinciple : null, assessed);
  renderTrend(runs.length ? runs.map((run, index) => index === runs.length - 1 ? { ...run, open: counts.open } : run) : [{ runNumber: 1, open: counts.open }]);
}

function renderRadar(now, before, assessed) {
  const cx = 220, cy = 165, R = 112, n = PRINCIPLES.length;
  const max = Math.max(3, ...Object.values(now), ...Object.values(before || {}));
  const top = Math.ceil(max / 3) * 3;
  const at = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  const ring = (f) => PRINCIPLES.map((_, i) => at(i, R * f).map((v) => v.toFixed(1)).join(",")).join(" ");
  const poly = (w) => PRINCIPLES.map((name, i) => at(i, R * (w[name] || 0) / top).map((v) => v.toFixed(1)).join(",")).join(" ");
  let out = "";
  for (const f of [1 / 3, 2 / 3, 1]) out += svgEl("polygon", { points: ring(f), fill: "none", stroke: "#e3e2d9" }) + svgEl("text", { x: cx + 4, y: (cy - R * f + 11).toFixed(1), "font-size": 9, fill: "#7a8177" }, String(Math.round(top * f)));
  PRINCIPLES.forEach((name, i) => {
    const [x, y] = at(i, R), [lx, ly] = at(i, R + 16);
    const off = assessed?.length && !assessed.includes(name);
    out += svgEl("line", { x1: cx, y1: cy, x2: x.toFixed(1), y2: y.toFixed(1), stroke: "#e3e2d9" });
    const anchor = Math.abs(lx - cx) < 8 ? "middle" : lx > cx ? "start" : "end";
    out += svgEl("text", { x: lx.toFixed(1), y: (ly + 4).toFixed(1), "text-anchor": anchor, "font-size": 11, "font-weight": 600, fill: off ? "#a3a89f" : "#17201d" }, `${name} · ${off ? "–" : now[name] || 0}`);
  });
  if (before) out += svgEl("polygon", { points: poly(before), fill: "none", stroke: "#8a9180", "stroke-width": 1.5, "stroke-dasharray": "4 3" });
  out += svgEl("polygon", { points: poly(now), fill: "rgba(216,243,106,.55)", stroke: "#607138", "stroke-width": 2 });
  $("#radar").innerHTML = out;
  $("#radar-legend").innerHTML = `<span><i style="background:#d8f36a;border:1px solid #607138"></i>This review</span>${before ? '<span><i style="border:1.5px dashed #8a9180"></i>Review 1</span>' : ""}<span>high = 3 · medium = 2 · low = 1</span>`;
}

function renderTrend(runs) {
  const W = 440, H = 230, L = 34, Rm = 16, T = 18, B = 34;
  const max = Math.max(5, ...runs.map((run) => run.open || 0));
  const top = Math.ceil(max / 5) * 5;
  const x = (i) => runs.length === 1 ? (L + W - Rm) / 2 : L + i * (W - L - Rm) / (runs.length - 1);
  const y = (v) => T + (H - T - B) * (1 - v / top);
  let out = "";
  for (const v of [0, top / 2, top]) out += svgEl("line", { x1: L, x2: W - Rm, y1: y(v).toFixed(1), y2: y(v).toFixed(1), stroke: "#eceae2" }) + svgEl("text", { x: L - 8, y: (y(v) + 4).toFixed(1), "text-anchor": "end", "font-size": 10, fill: "#7a8177" }, String(v));
  const pts = runs.map((run, i) => `${x(i).toFixed(1)},${y(run.open || 0).toFixed(1)}`).join(" ");
  if (runs.length > 1) out += svgEl("polyline", { points: pts, fill: "none", stroke: "#607138", "stroke-width": 2.5, "stroke-linejoin": "round" });
  runs.forEach((run, i) => {
    const last = i === runs.length - 1;
    out += svgEl("circle", { cx: x(i).toFixed(1), cy: y(run.open || 0).toFixed(1), r: last ? 6 : 4.5, fill: last ? "#d8f36a" : "#fff", stroke: "#607138", "stroke-width": 2 });
    out += svgEl("text", { x: x(i).toFixed(1), y: (y(run.open || 0) - 11).toFixed(1), "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "#17201d" }, String(run.open || 0));
    const anchor = runs.length > 1 && i === 0 ? "start" : runs.length > 1 && last ? "end" : "middle";
    out += svgEl("text", { x: (x(i) + (anchor === "start" ? -6 : anchor === "end" ? 6 : 0)).toFixed(1), y: H - 12, "text-anchor": anchor, "font-size": 10, fill: "#58615b" }, `Review ${run.runNumber || i + 1}`);
  });
  $("#trend").innerHTML = out;
  $("#trend-note").textContent = runs.length > 1 ? "Open concerns, counting only findings not dismissed." : "One review so far. Ask your AI for a recheck after fixes to see the trend.";
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
    history: model.history?.map((run, index) => index === model.history.length - 1 ? { ...run, ...reviewCounts(model.findings, statusOf), byPrinciple: principleWeights(model.findings, statusOf) } : run) };
}
function download(content, type, filename) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url; link.download = filename;
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
// Export as: a small menu with PDF, Markdown, and Copy as Markdown.
const exportToggle = $("#export-toggle"), exportMenu = $("#export-menu");
const setMenu = (open) => { exportMenu.hidden = !open; exportToggle.setAttribute("aria-expanded", String(open)); if (open) exportMenu.querySelector("button").focus(); };
exportToggle.addEventListener("click", () => setMenu(exportMenu.hidden));
document.addEventListener("click", (event) => { if (!exportMenu.hidden && !event.target.closest(".menu-wrap")) setMenu(false); });
exportMenu.addEventListener("keydown", (event) => {
  const items = [...exportMenu.querySelectorAll("button")], i = items.indexOf(document.activeElement);
  if (event.key === "Escape") { setMenu(false); exportToggle.focus(); }
  if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); items[(i + (event.key === "ArrowDown" ? 1 : items.length - 1)) % items.length].focus(); }
});
exportMenu.addEventListener("click", (event) => { if (event.target.closest("button")) setMenu(false); });
$("#export-md").addEventListener("click", () => download(reviewedReport(), "text/markdown;charset=utf-8", "oes-review.md"));
$("#copy-md").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(reviewedReport()); notify("Markdown copied, with dismissed findings excluded."); }
  catch { notify("Copy is unavailable here. Use Markdown (.md) to download the report."); }
});
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
