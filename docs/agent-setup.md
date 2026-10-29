# Open Ethics Standard: agent guide

Instructions for an AI assistant reviewing a user's project against the Open Ethics Standard (OES). Work quietly: don't narrate setup, and end with just the report link.

- **The MCP** runs on the user's machine (`npx -y open-ethics-standard-mcp@latest`). It serves the catalog and this workflow, and it saves the report locally. Findings never leave the machine.
- **You only call its tools.** Never download, install, or run code to build a report, and don't write scripts for it.
- Findings are leads for the user to judge, not verdicts.

## 1. Scope

If the user hasn't said what to review, ask once: the whole app (quick pass), a feature or user journey, or one concern. If they only asked for setup, do step 2 and stop.

## 2. Tools

- **OES tools available, including `create_oes_review`?** Use them. Don't add another server.
- **Not available, or only the hosted catalog server (no `create_oes_review`)?** Don't install it yourself. Give the user the command for their client and continue with what you have:
  ```sh
  claude mcp add --scope user open-ethics-standard -- npx -y open-ethics-standard-mcp@latest
  ```
  Other clients: https://ike5.github.io/open-ethics-standard/#install. It needs Node.js 20+, and the client loads it in the next session.

## 3. Review

- Read the chosen scope with your own tools.
- Search the catalog for behaviors you observe, and verify each candidate against its full definition. A few search hits aren't an exhaustive audit.
- Record a finding only when the code supports it:

| Field | Content |
| --- | --- |
| `id` | OES practice ID, e.g. `2.1.3` |
| `file`, `startLine`, `endLine` | Where you saw it |
| `evidence` | Short direct quote or description of the code |
| `reasoning` | 1–2 sentences on why it matches |
| `confidence` | `low`, `medium`, or `high` |
| `findingKey` | Optional stable ID; reuse it on rechecks |

- Concerns that match no practice go in `notes`: one line each, with `file:line`.
- Keep `limitations` to one sentence.

## 4. Build the report

Call `create_oes_review` with the review:

```json
{ "project": "my-app", "scope": "Checkout flow", "limitations": "Static read; app not run.",
  "findings": [ { "id": "2.1.3", "file": "src/cancel.ts", "startLine": 84, "endLine": 97,
    "evidence": "Cancel opens a 'Talk to us first' modal", "reasoning": "Mandatory retention step before cancelling.",
    "confidence": "high" } ],
  "notes": [ "Sound is on by default (sound.js:21)." ] }
```

It saves the report on this machine and returns a `Report:` link and a `State:` path. Use `"findings": []` if nothing matched; always build the report.

**No `create_oes_review`?** Reply with the findings briefly (practice ID, `file:line`, one line each) and the install command from step 2. Never send findings anywhere else.

## 5. Reply

Reply with exactly two lines and nothing else:

```
3 possible matches in the checkout flow.
Report: file:///…/review.html
```

Don't list findings, setup steps, limitations, or caveats in chat; they're in the report. Only add a line if something failed.

## Rechecks after fixes

1. Call `get_oes_review_state` with the previous `State` path for its `findingKey` values.
2. Call `create_oes_review` again with `"previousReviewPath": "<State path>"`:
   - Reuse each `findingKey` for issues that remain.
   - Add `"resolvedFindings": [{ "findingKey": "…", "evidence": "…" }]` only for fixes you verified.
3. The same report link updates, showing New, Still open, Reopened, Verified fixed, and Not rechecked. A missing finding is never assumed fixed.

## Notes

- Reports live in `~/.local/share/open-ethics-standard/reports` (override with `OES_REPORT_DIR`). They work offline, with Applies / Unsure / Dismiss choices and Markdown or PDF export.
- Limits: practice IDs must exist, `endLine >= startLine`, and up to 500 findings per review.
- **Remove:** `claude mcp remove --scope user open-ethics-standard`, and delete `~/.local/share/open-ethics-standard` if the user asks.
