# Open Ethics Standard: agent setup

Instructions for an AI assistant reviewing a user's project against the Open Ethics Standard (OES).

- Use the **local stdio MCP**. You inspect the files; OES never reads them, calls a model, or receives findings.
- No OES account or API key is required. The AI provider's own data policies still apply.
- Findings are leads for human review, not legal judgments or certifications.

## 1. Choose the scope

If the user hasn't named a scope, briefly inspect the workspace and ask them to pick one:

1. A quick review across the application.
2. A named page, feature, folder, or user journey.
3. A specific ethics concern.

If they asked only for installation, set up and verify, then stop. Record what you inspected and what you couldn't check. A quick review doesn't prove the absence of problems.

## 2. Install (or reuse)

If a working local `open-ethics-standard` server exists, reuse it. A hosted HTTP connection doesn't count. Never send project names, paths, evidence, or reasoning to it in this workflow.

Requires Node.js 20+, npm, and Git. Install in a persistent directory outside the audited project:

```sh
git clone https://github.com/ike5/open-ethics-standard.git "$HOME/.local/share/open-ethics-standard"
cd "$HOME/.local/share/open-ethics-standard"
npm ci --prefix packages/oes-mcp
npm run setup:mcp
```

- **Windows:** use a persistent folder under local app data.
- **Existing checkout:** verify it, preserve local changes, and rebuild if needed. Never reset or delete it.

`setup:mcp` builds the server and prints a stdio config with absolute paths. It doesn't edit client settings. Add it **only to the current client**, named `open-ethics-standard`, and keep any other servers. For CLI clients, substitute the printed paths and quote any that contain spaces:

```sh
claude mcp add --transport stdio --scope user open-ethics-standard -- /path/to/node /path/to/open-ethics-standard/packages/oes-mcp/dist/server.js
codex mcp add open-ethics-standard -- /path/to/node /path/to/open-ethics-standard/packages/oes-mcp/dist/server.js
```

Then enable the server, accept the trust prompt, and restart the client if the tools don't appear. Don't run `server.js` directly; it waits for a client.

## 3. Verify, then review

**Verify:** call `get_oes_review_instructions`, then `search_oes_catalog` with `{"query":"consent","limit":1}`, then `get_oes_practice` on the result. Saved settings aren't proof. If the tools can't load this session, report **configured; verification pending restart**.

**Review:**

- Inspect the chosen scope with your own authorized workspace tools.
- Use `get_oes_catalog_overview` to plan coverage, search for relevant practices, and verify each candidate against its definition and the observed behavior. A few search hits aren't an exhaustive audit.
- Each finding needs a practice `id`, `file`, `startLine`, `endLine`, direct `evidence`, `reasoning`, and `confidence` (`low` | `medium` | `high`).
- Separate observation from inference, and record `scope` and `limitations`.

## 4. Create the report

Call `create_oes_review` (alias `show_oes_review`) with `project`, `scope`, `limitations`, and `findings`. Use `findings: []` when nothing is supported; always call it.

It writes a self-contained HTML report and Markdown, and returns `browserUrl`, `htmlPath`, `markdownPath`, and `statePath`.

- Give the user the **exact** `browserUrl` as a link, plus `htmlPath` in case file links are blocked.
- Never invent a URL or claim the report opened.

Reports live in `~/.local/share/open-ethics-standard/reports/review-*` (set `OES_REPORT_DIR` in the server environment to change this). They work offline and are never uploaded or expired. The user can:

- Mark findings **Applies**, **Unsure**, or **Dismiss**.
- **Export Markdown** or **Print / Save PDF**. Dismissed findings are excluded from both, but remain restorable in HTML and audit state.
- **Save review HTML** or **Save audit state** to carry their choices into the next run. Choices also persist in browser local storage where supported.
- **Copy reviewed report** to paste their choices back into chat.

## 5. Recheck after fixes

1. Keep the same project name. Call `get_oes_review_state` with the previous `statePath`, or with a user-saved audit state JSON or HTML file. If the user changed choices in the browser, ask them to **Save audit state** first, since a `file:///` page can't write back to disk.
2. Call `create_oes_review` with:
   - `previousReviewPath`: the path you just read.
   - `findings`: every currently supported finding, **reusing each prior `findingKey`** for the same issue even if lines or evidence moved. Give distinct occurrences their own stable keys.
   - `resolvedFindings`: `{ findingKey, evidence }` for fixes you directly verified. Don't also list them in `findings`.
   - Updated `scope` and `limitations`.

The same `browserUrl` updates in place, showing **New**, **Still open**, **Reopened**, **Verified fixed**, and **Not rechecked**.

- A missing finding is never marked fixed automatically, and out-of-scope findings stay Not rechecked.
- History is kept in `history/`, with the latest state in `review.json`.
- An older state can't overwrite a newer audit. Reports aren't matched by project name alone.
- The prebuilt `review.md` reflects generation time; **Export Markdown** reflects the current choices.

## Without an MCP connection

If MCP tools are unavailable but you have shell access, write the same input to JSON and run this from the OES checkout:

```sh
npm run build:report -- /absolute/path/to/findings.json [/absolute/path/to/reports]
```

- JSON fields are `project`, optional `scope`/`limitations`, and `findings`.
- Each finding has the fields above, plus optional `findingKey` and `reviewStatus` (`applies` | `unsure` | `dismissed`).
- For rechecks, add `previousReviewPath` and `resolvedFindings`.
- Practice IDs must exist and `endLine >= startLine`. Up to 500 findings; an empty array is valid.
- Examples: [`review.json`](https://github.com/ike5/open-ethics-standard/blob/main/packages/oes-mcp/examples/review.json), [`review-followup.json`](https://github.com/ike5/open-ethics-standard/blob/main/packages/oes-mcp/examples/review-followup.json).

Never fall back to uploading findings. If setup or report generation fails, show the findings in chat and name the missing step.

## Optional hosted mode

`https://mcp.codebylevel.com/mcp` (Streamable HTTP) is only for users who explicitly choose hosted processing.

- Catalog queries send no project data.
- Review calls send project names, paths, evidence, and reasoning to OES hosting. The Worker doesn't store them.
- The returned link carries the evidence in its URL fragment, so anyone with the link can read it. Tell the user.

## Troubleshooting and removal

- **Build or module errors:** rerun `npm ci --prefix packages/oes-mcp && npm run setup:mcp`, and confirm the printed server path exists.
- **Tools missing:** enable the server, accept the trust prompt, restart the client, then verify again.
- **Report write fails:** set a writable `OES_REPORT_DIR` and restart the server. Findings are never rerouted to hosting.
- **File link blocked:** open `htmlPath` via File → Open in a browser.
- **Remove:** use the client settings, `claude mcp remove --scope user open-ethics-standard`, or `codex mcp remove open-ethics-standard`. Keep other servers, the checkout, and reports unless the user asks otherwise.
