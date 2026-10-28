# Set up the Open Ethics Standard MCP

Public setup instructions for coding assistants. This guide is published at
https://ike5.github.io/open-ethics-standard/agent-setup.md and maintained in
https://github.com/ike5/open-ethics-standard.

The public Streamable HTTP endpoint is **https://mcp.codebylevel.com/mcp**.
It requires no OES account, API key, or local runtime. The MCP provides
`search_oes_catalog`, `get_oes_practice`, and `show_oes_review`.

If you are the assistant receiving this guide, configure only the client you
are running in. Use the remote endpoint by default and preserve other MCP
servers and settings. If the user prefers review evidence to stay on their
machine, use the [local option](#local-option) instead.

## If the user asked for a project review

If the user asked for review choices, briefly inspect the current workspace
and offer these options **in the AI conversation before setup work**:

1. Quick review of the current site or project (recommended).
2. Review a page, feature, or user journey the user names.
3. Review a specific ethics concern the user names.

Ask for a choice and wait for it. If the user already chose a scope, **complete
the review in that turn**. The setup check below is a short preparation step,
not the end of the request. Inspect the chosen scope with workspace access the
user has already authorized. Check for an existing OES MCP connection and use
its catalog tools if they work. Add the endpoint only if needed. Do not spend
the review turn repeatedly trying to repair networking, restart a client, or
verify a saved configuration.

If the MCP tools are unavailable in this session, use the canonical
[Open Ethics Standard](https://github.com/ike5/open-ethics-standard/blob/main/OPEN-ETHICS-STANDARD.md)
as the reference and continue the review. The
[raw Markdown source](https://raw.githubusercontent.com/ike5/open-ethics-standard/main/OPEN-ETHICS-STANDARD.md)
is an alternative if the GitHub page cannot be opened. Inspect relevant
project files, cite specific file paths and lines, and explain why each
possible match is relevant. Distinguish observed behavior from inference and
say what you could not inspect. If no possible matches are supported, say so
and summarize the scope inspected. When `show_oes_review` is available, use it
to display supported findings and invite the user to mark each one Applies,
Unsure, or Dismiss. If the client does not display MCP Apps, list the findings
in chat and let the user refer to them by number for follow-up. Mention
connection trouble briefly after the review.

### Required review handoff

After collecting and checking findings, call `show_oes_review` with the
project name and supported findings. This call is required whenever the tool is
available, even when the guide or standard was read from local files or the
network is unavailable. A text report alone is not a completed interactive
review. The returned tool result should include the findings and the client
should open the MCP App; tell the user to mark each Applies, Unsure, or Dismiss.
If the tool call fails, report that specifically and show the same numbered
findings in chat. Do not claim the interactive view is open unless the tool
call returned successfully and the client displayed it.

If the user asked only for setup, stop after reporting the connection result.

## 1. Check the existing connection

- Identify the current MCP client. If it is unclear, ask which client to
  configure before writing settings.
- Check for an existing `open-ethics-standard` entry. If it connects and its
  tools work, reuse it. Do not add a duplicate. If it points somewhere else,
  explain the difference before replacing it.
- The remote endpoint needs HTTPS access to `mcp.codebylevel.com`. It needs no
  Node.js, npm, Git, OAuth login, or OES token.

## 2. Connect the remote endpoint

Use **https://mcp.codebylevel.com/mcp**, including the `/mcp` path. Choose
Streamable HTTP or HTTP when your client asks for a transport. Do not use the
`workers.dev` address or a placeholder URL.

### Codex

In the Codex desktop app, open **Settings → MCP servers → Add server**, choose
**Streamable HTTP**, enter the URL above, save, and restart Codex. In the IDE
extension, use its **MCP servers → Add server** control and restart the
extension.

If the Codex CLI is available, use:

```sh
codex mcp add open-ethics-standard --url https://mcp.codebylevel.com/mcp
codex mcp get open-ethics-standard
```

Alternatively, merge this table into `~/.codex/config.toml`:

```toml
[mcp_servers.open-ethics-standard]
url = "https://mcp.codebylevel.com/mcp"
```

Preserve existing TOML tables. No `codex mcp login` step is needed.

### Claude Code

```sh
claude mcp add --transport http --scope user open-ethics-standard https://mcp.codebylevel.com/mcp
claude mcp get open-ethics-standard
```

Use `/mcp` in Claude Code to check connection status. The `user` scope makes
the server available across projects without adding a project file.

### Cursor

Merge this entry into `~/.cursor/mcp.json` for personal use. If the user
requested project-only setup, use that project's `.cursor/mcp.json` instead.

```json
{
  "mcpServers": {
    "open-ethics-standard": {
      "url": "https://mcp.codebylevel.com/mcp"
    }
  }
}
```

Preserve other entries. Enable the server in Cursor's MCP settings and reload
the window if its tools do not appear.

### VS Code / GitHub Copilot

Run **MCP: Add Server** from the Command Palette. Choose **HTTP**, enter
`https://mcp.codebylevel.com/mcp`, and name the server
`open-ethics-standard`. Choose a personal/global destination unless the user
requested a workspace configuration. Review the trust prompt and start the
server. VS Code offers several configuration formats, so use its guided flow
for the current agent harness rather than guessing a file location.

### Other MCP clients

Add a remote HTTP MCP server named `open-ethics-standard` with the URL above.
Use the client's documented configuration format. If it cannot use Streamable
HTTP, explain that limitation and offer the [local option](#local-option) if
it supports stdio.

## 3. Verify the connection

Saved settings do not prove a working connection. When the client can load the
new tools, use these checks for a setup-only request. For a review request,
the first successful catalog search is enough to proceed; use
`get_oes_practice` as needed for the findings.

1. List its tools. Expect `search_oes_catalog`, `get_oes_practice`, and
   `show_oes_review`.
2. Call `search_oes_catalog` with `{"query":"consent","limit":1}`.
3. Call `get_oes_practice` with the returned ID and confirm it returns a
   practice definition without an MCP error.

These checks use public catalog data. Do not submit invented findings to
`show_oes_review` during setup. If the current session cannot reload tools,
check the saved URL and report **configured; connection check pending restart**.
Do not claim a successful connection until a tool call succeeds.

## 4. Report the setup result

For a setup-only request, briefly report the client, configuration location or
scope, and tool calls actually verified. Mention any restart, trust prompt, or
manual step still needed. Then offer this prompt for a later review:

> Review this project for possible matches with the Open Ethics Standard. Show
> the evidence, file location, and why each match may be relevant. Treat the
> results as suggestions for me to review.

The MCP does not read project files or call an AI model. The assistant uses its
existing authorized workspace tools. With the remote endpoint,
`show_oes_review` sends the submitted project name, file paths, evidence
snippets, and reasoning to OES hosting to render the view. The Worker does not
persist these inputs or reports. The AI client's own data handling rules also
apply. Findings are leads for human review, not legal judgments or
certifications.

## Local option

Use this when the user wants submitted review evidence to stay on their
machine, or when a client supports stdio but not remote HTTP. The npm package
has not been published yet, so build from the official repository. This
requires Node.js 20 or newer, npm, and Git. Use a persistent directory outside
the user's project; do not point a client at a temporary checkout.

On macOS or Linux, for a new installation:

```sh
mkdir -p "$HOME/.local/share"
git clone https://github.com/ike5/open-ethics-standard.git "$HOME/.local/share/open-ethics-standard"
npm ci --prefix "$HOME/.local/share/open-ethics-standard/packages/oes-mcp"
npm --prefix "$HOME/.local/share/open-ethics-standard" run build:mcp
```

If the directory exists, verify it is an OES checkout. Do not clone over it,
reset it, delete it, or overwrite local changes. Reuse a working build, or
build in another persistent directory. On Windows, use a persistent directory
under the user's local app data and adapt the commands to the current shell.

Find the absolute Node executable with `node -p "process.execPath"`. Configure
the client's **stdio** server with that executable as `command` and the
absolute path to `packages/oes-mcp/dist/server.js` as its sole argument.
Confirm that the built file exists. Do not run `server.js` on its own to check
it; it waits for an MCP client on stdio. Preserve other servers and use the
same verification steps above. No OES sign-in is needed.

For CLI clients, replace both placeholders with real absolute paths:

```sh
codex mcp add open-ethics-standard -- /absolute/path/to/node /absolute/path/to/open-ethics-standard/packages/oes-mcp/dist/server.js
claude mcp add --transport stdio --scope user open-ethics-standard -- /absolute/path/to/node /absolute/path/to/open-ethics-standard/packages/oes-mcp/dist/server.js
```

Run only the command for the current client. Quote paths containing spaces.
For file-based clients, use the same command and argument in that client's
documented stdio format. Local MCP processing does not send review findings to
OES hosting.

## Troubleshooting and removal

- **Remote tools absent:** check the exact `/mcp` URL, enable the server,
  complete any client trust prompt, restart, and repeat the tool calls.
- **Remote connection fails:** test `https://mcp.codebylevel.com/health`
  for `{"status":"ok"}`. This checks availability, not MCP tool loading.
- **Local missing file or module:** rerun `npm ci` in `packages/oes-mcp` and
  `npm run build:mcp` at the checkout root. Use absolute paths in the client.
- **Remove:** use `codex mcp remove open-ethics-standard` or
  `claude mcp remove --scope user open-ethics-standard` for those CLI installs.
  For file-based setups, remove only the `open-ethics-standard` entry. Keep
  the local checkout unless the user asks to delete it.

Client configuration references:
[Codex](https://developers.openai.com/codex/mcp),
[Claude Code](https://code.claude.com/docs/en/mcp),
[Cursor](https://cursor.com/docs/mcp),
[VS Code](https://code.visualstudio.com/docs/agent-customization/mcp-servers).
