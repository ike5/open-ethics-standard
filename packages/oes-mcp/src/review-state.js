export function findingKey(item) {
  if (item.findingKey) return item.findingKey;
  const text = `${item.id}|${item.file.replace(/\\/g, "/")}|${item.evidence.trim().replace(/\s+/g, " ")}`;
  let hash = 2166136261;
  for (const char of text) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return `oes-${(hash >>> 0).toString(16)}`;
}

export function decision(item) {
  return ["applies", "unsure", "dismissed"].includes(item.reviewStatus) ? item.reviewStatus : "unsure";
}

export function exportFindings(model, status = decision) {
  return model.findings.filter((item) => status(item) !== "dismissed");
}

export function reviewCounts(findings, status = decision) {
  const included = findings.filter((item) => status(item) !== "dismissed");
  return {
    open: included.filter((item) => !["fixed", "not_rechecked"].includes(item.lifecycle)).length,
    fixed: included.filter((item) => item.lifecycle === "fixed").length,
    new: included.filter((item) => item.lifecycle === "new").length,
    notRechecked: included.filter((item) => item.lifecycle === "not_rechecked").length,
    dismissed: findings.length - included.length,
  };
}

export function compareReview(current, previous, { reviewId, createdAt }) {
  if (previous && previous.project !== current.project) throw new Error("Previous review belongs to a different project. Keep the project name consistent or start a new review.");
  const old = new Map((previous?.findings || []).map((item) => [findingKey(item), item]));
  const resolutions = new Map(current.resolvedFindings.map((item) => [item.findingKey, item.evidence]));
  if (resolutions.size !== current.resolvedFindings.length) throw new Error("Duplicate resolved finding keys");
  for (const id of resolutions.keys()) if (!old.has(id)) throw new Error(`Cannot resolve unknown previous finding: ${id}`);
  const seen = new Set();
  const findings = current.findings.map((item) => {
    const id = findingKey(item);
    if (seen.has(id)) throw new Error(`Duplicate finding key: ${id}. Give distinct occurrences unique findingKey values.`);
    if (resolutions.has(id)) throw new Error(`Finding ${id} is both open and resolved`);
    seen.add(id);
    const prior = old.get(id);
    return { ...item, findingKey: id, reviewStatus: item.reviewStatus || decision(prior || {}),
      lifecycle: !prior ? "new" : prior.lifecycle === "fixed" ? "reopened" : "continuing",
      firstSeen: prior?.firstSeen || previous?.createdAt || createdAt, lastSeen: createdAt };
  });
  for (const [id, prior] of old) {
    if (seen.has(id)) continue;
    const fixed = resolutions.has(id) || prior.lifecycle === "fixed";
    findings.push({ ...prior, findingKey: id, reviewStatus: decision(prior), lifecycle: fixed ? "fixed" : "not_rechecked",
      ...(resolutions.has(id) ? { resolutionEvidence: resolutions.get(id), fixedAt: createdAt } : {}) });
  }
  const runNumber = (previous?.runNumber || 0) + 1;
  const { previousReviewPath, resolvedFindings, ...base } = current;
  return { ...base, reviewId, createdAt, runNumber, comparedAt: previous?.createdAt || null, findings,
    history: [...(previous?.history || []), { runNumber, createdAt, scope: current.scope, ...reviewCounts(findings) }].slice(-100) };
}

export function markdownReport(model, status = decision) {
  const literal = (value) => String(value ?? "").replace(/[\\`*_{}\[\]<>()#!|~]/g, "\\$&");
  const quote = (value) => String(value ?? "").split(/\r?\n/).map((line) => `> ${literal(line)}`).join("\n");
  const findings = exportFindings(model, status);
  return [`# OES project review — ${literal(model.project)}`, `Standard version: ${literal(model.version)}`,
    ...(model.runNumber ? [`Audit run: ${model.runNumber} · ${literal(model.createdAt)}`] : []),
    `Scope: ${literal(model.scope)}`, `Limitations: ${literal(model.limitations)}`,
    "Possible matches are leads for human review, not verdicts or certification. Dismissed findings are excluded.",
    ...(findings.length ? findings.map((item, index) =>
      `## ${index + 1}. OES § ${item.id} — ${literal(item.practice?.title)}\n\nStatus: ${status(item)} · Progress: ${literal(item.lifecycle || "new")} · Confidence: ${item.confidence}\n\nLocation: ${literal(item.file)}:${item.startLine}-${item.endLine}\n\nEvidence:\n\n${quote(item.evidence)}\n\nReasoning: ${literal(item.reasoning)}${item.resolutionEvidence ? `\n\nFix verification:\n\n${quote(item.resolutionEvidence)}` : ""}\n\n[Read OES § ${item.id}](https://github.com/ike5/open-ethics-standard/blob/main/OPEN-ETHICS-STANDARD.md#L${item.practice?.sourceLine || 1})`)
      : ["No non-dismissed findings to export within the recorded scope."]),
    ...(model.notes?.length ? [`## Other observations\n\n${model.notes.map((note) => `- ${literal(note)}`).join("\n")}`] : [])
  ].join("\n\n") + "\n";
}
