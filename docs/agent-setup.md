# Open Ethics Standard: agent guide

Instructions for an AI assistant reviewing a user's project against the Open Ethics Standard (OES). Work quietly: don't narrate setup, and end with just the report link.

- **The MCP** (`https://mcp.codebylevel.com/mcp`) serves the catalog and this workflow. It never sees the user's code.
- **The report** is built on the user's machine by a single script. Findings never leave the machine.
- Findings are leads for the user to judge, not verdicts.

## 1. Scope

If the user hasn't said what to review, ask once: the whole app (quick pass), a feature or user journey, or one concern. If they only asked for setup, do step 2 and stop.

## 2. Tools

- **OES tools already available** (`search_oes_catalog` and the rest, from any server name)? Use them. Don't add another server.
- **Not available?** Add the hosted server for future sessions; don't wait for it this session:
  ```sh
  claude mcp add --transport http --scope user open-ethics-standard https://mcp.codebylevel.com/mcp
  ```
  Other clients: add a remote (HTTP) MCP server with that URL.
- **Always fetch the report script.** It needs Node.js 20+, and it doubles as the catalog when the MCP tools aren't loaded:
  ```sh
  curl -fsSL https://ike5.github.io/open-ethics-standard/oes-report.mjs --create-dirs -o ~/.local/share/open-ethics-standard/oes-report.mjs
  ```
  Commands: `node ~/.local/share/open-ethics-standard/oes-report.mjs search <terms>`, `practice <id…>`, `overview`, `build <file.json>`.

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

Write the review JSON to a temp file **outside the project**, then build:

```json
{ "project": "my-app", "scope": "Checkout flow", "limitations": "Static read; app not run.",
  "findings": [ { "id": "2.1.3", "file": "src/cancel.ts", "startLine": 84, "endLine": 97,
    "evidence": "Cancel opens a 'Talk to us first' modal", "reasoning": "Mandatory retention step before cancelling.",
    "confidence": "high" } ],
  "notes": [ "Sound is on by default (sound.js:21)." ] }
```

```sh
node ~/.local/share/open-ethics-standard/oes-report.mjs build /tmp/oes-review.json
```

The script prints a `Report:` link and a `State:` path. Use `"findings": []` if nothing matched; always build the report.

**No shell access** (for example Claude Desktop)? Call the MCP's `create_oes_review` instead. It sends findings to the hosted server, which doesn't store them, and returns a web link. Tell the user the link contains the evidence.

## 5. Reply

Reply with exactly two lines and nothing else:

```
3 possible matches in the checkout flow.
Report: file:///…/review.html
```

Don't list findings, setup steps, limitations, or caveats in chat; they're in the report. Only add a line if something failed.

## Rechecks after fixes

1. Read the previous `State` file (`review.json`) for its `findingKey` values.
2. Build again with `"previousReviewPath": "<State path>"`:
   - Reuse each `findingKey` for issues that remain.
   - Add `"resolvedFindings": [{ "findingKey": "…", "evidence": "…" }]` only for fixes you verified.
3. The same report link updates, showing New, Still open, Reopened, Verified fixed, and Not rechecked. A missing finding is never assumed fixed.

## Notes

- Reports live in `~/.local/share/open-ethics-standard/reports` (override with `OES_REPORT_DIR`). They work offline, with Applies / Unsure / Dismiss choices and Markdown or PDF export.
- Limits: practice IDs must exist, `endLine >= startLine`, and up to 500 findings per review.
- **Fully offline server (optional):** clone `https://github.com/ike5/open-ethics-standard`, run `npm ci --prefix packages/oes-mcp && npm run setup:mcp`, and add the printed stdio config. It writes reports directly through `create_oes_review`.
- **Remove:** `claude mcp remove --scope user open-ethics-standard`, and delete `~/.local/share/open-ethics-standard` if the user asks.
