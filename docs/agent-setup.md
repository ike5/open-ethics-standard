# Set up the Open Ethics Standard MCP

Public setup instructions for coding assistants. No OES account, login, API key,
or hosted service is required. This guide is published at
https://ike5.github.io/open-ethics-standard/agent-setup.md and maintained in
https://github.com/ike5/open-ethics-standard.

If you are the assistant receiving this guide, complete the applicable steps
using your terminal and configuration tools. Install only for the client you
are running in. Respect the user's permission controls. Do not install Runpod
or unrelated plugins, change project code, or start a project review during setup.

## 1. Check the environment and existing configuration

- Identify your MCP client from the current session. If it is unclear, ask which
  client to configure before writing configuration.
- Inspect the existing `open-ethics-standard` MCP entry, if any. Reuse it if it
  works; do not add a duplicate. Preserve all other servers and settings. If an
  existing OES entry differs, explain the difference before replacing it.
- Check `node --version`, `npm --version`, and `git --version`. The local server
  requires Node.js 20 or newer, npm, and Git for the source install below. If a
  prerequisite is missing, report exactly what is needed. Do not silently install
  a system runtime or use administrator privileges.
- Use a persistent installation directory outside the user's project. Never
  point a client at a temporary checkout that will disappear after setup.

The source build is the default until the npm package has a public release.
There is currently no public hosted MCP URL in this guide. Do not configure a
placeholder endpoint or ask the user to sign in.

## 2. Install and build locally

On macOS or Linux, use the following commands for a new installation:

```sh
mkdir -p "$HOME/.local/share"
git clone https://github.com/ike5/open-ethics-standard.git "$HOME/.local/share/open-ethics-standard"
npm ci --prefix "$HOME/.local/share/open-ethics-standard/packages/oes-mcp"
npm --prefix "$HOME/.local/share/open-ethics-standard" run build:mcp
```

If that directory already exists, verify it is an OES checkout before using it.
Do not clone over it, reset it, delete it, or overwrite local changes. Reuse a
working build. If it needs building, run the two npm commands above. If it is
unrelated or needs an update, explain the situation and use a separate persistent
directory or follow the user's instructions.

On Windows, use an equivalent persistent directory under the user's local app
data folder and run the same Git and npm operations using the current shell's
path syntax. Do not run the POSIX shell commands verbatim in PowerShell or cmd.

Record the **absolute path to the Node executable** and the **absolute path to
`packages/oes-mcp/dist/server.js`** in the installed checkout. You can find the
Node executable with `node -p "process.execPath"`. Confirm both files exist.
Use those paths below, replacing every placeholder. JSON paths on Windows need
escaped backslashes, or forward slashes.

Do not launch `server.js` as a standalone command to check it: it is a stdio
server that waits for an MCP client, not a command that prints a success message.

## 3. Register with the current client

### Codex

If the Codex CLI is available, run:

```sh
codex mcp add open-ethics-standard -- /absolute/path/to/node /absolute/path/to/open-ethics-standard/packages/oes-mcp/dist/server.js
codex mcp get open-ethics-standard
```

Quote each absolute path if it contains spaces. If the CLI is unavailable, merge
this table into `~/.codex/config.toml`, using the real absolute paths:

```toml
[mcp_servers.open-ethics-standard]
command = "/absolute/path/to/node"
args = ["/absolute/path/to/open-ethics-standard/packages/oes-mcp/dist/server.js"]
```

Preserve existing TOML tables. Do not create a second table with the same name.
Tell the user to restart Codex or start a new session if the tools do not become
available in the current session. No `codex mcp login` step is needed.

### Claude Code

Run this with the real absolute paths, quoting paths that contain spaces:

```sh
claude mcp add --transport stdio --scope user open-ethics-standard -- /absolute/path/to/node /absolute/path/to/open-ethics-standard/packages/oes-mcp/dist/server.js
claude mcp get open-ethics-standard
```

Tell the user to check `/mcp` and restart the session if necessary. No OAuth
sign-in is needed.

### Cursor

Merge the following into the user-level `~/.cursor/mcp.json`. If the user requested
project-only setup, use `.cursor/mcp.json` in that project instead.

```json
{
  "mcpServers": {
    "open-ethics-standard": {
      "command": "/absolute/path/to/node",
      "args": ["/absolute/path/to/open-ethics-standard/packages/oes-mcp/dist/server.js"]
    }
  }
}
```

Preserve all existing entries. Tell the user to enable the server in Cursor's
MCP settings if needed and reload the window if the tools do not appear.

### VS Code / GitHub Copilot

Use **MCP: Open User Configuration** to locate the user configuration. If the user
requested project-only setup, merge this into `.vscode/mcp.json` instead. VS Code
uses `servers`, rather than `mcpServers`:

```json
{
  "servers": {
    "open-ethics-standard": {
      "type": "stdio",
      "command": "/absolute/path/to/node",
      "args": ["/absolute/path/to/open-ethics-standard/packages/oes-mcp/dist/server.js"]
    }
  }
}
```

Preserve existing JSON or JSONC settings, including comments. Start the server
using VS Code's MCP controls and complete any client trust prompt.

### Other MCP clients

Use the client's documented local stdio configuration. The executable is the
absolute Node path and the sole argument is the absolute built `server.js` path.
Do not assume every client uses the same configuration file or wrapper key.
If you cannot edit that client's configuration, give the user the exact resolved
command and arguments and identify the remaining manual step.

## 4. Verify the connection

Configuration written is not the same as a working connection. When your client
can load the new tools:

1. List the OES tools. Expect `search_oes_catalog`, `get_oes_practice`, and
   `show_oes_review`.
2. Call `search_oes_catalog` with `{"query":"consent","limit":1}`.
3. Call `get_oes_practice` with the ID returned by that search. Confirm a practice
   definition is returned without an MCP error.

These checks use the bundled catalog and require no project files or evidence.
Do not submit invented findings to `show_oes_review` during setup. Clients with
MCP Apps support can display interactive reviews; other clients can still use
the catalog and structured tool results.

If the current session cannot reload tools, verify the saved configuration and
build paths, then report **configured; connection check pending restart**. Do not
claim the server is connected until a tool call succeeds. In unattended runs,
report any remaining client restart or trust prompt as pending instead of
waiting on an interactive command.

## 5. Report the result

Briefly report:

- The client, configuration location or scope, and installation directory.
- Whether the build succeeded and which tool calls you actually verified.
- Any exact restart, trust, or manual configuration action still required.

Then offer this prompt for the user's next task:

> Review this project for possible matches with the Open Ethics Standard. Show
> the evidence, file location, and why each match may be relevant. Treat the
> results as suggestions for me to review.

The MCP does not read project files or call an AI model. The assistant uses its
existing authorized workspace tools. Local MCP processing does not send findings
to OES hosting; the AI client's own data handling rules still apply. Findings
are leads for human review, not legal judgments or certifications.

## Troubleshooting and removal

- **Missing file or module:** confirm the configured absolute paths and rerun
  `npm ci` in `packages/oes-mcp`, then `npm run build:mcp` at the checkout root.
- **Node not found after restarting the app:** use the absolute executable path
  from `node -p "process.execPath"`, rather than relying on a shell's PATH.
- **Install cannot reach GitHub or npm:** report the network error. Do not swap
  in an unofficial package, mirror, or hosted endpoint.
- **Tools absent:** check that the server is enabled in the client, complete its
  trust prompt if any, then restart the client and repeat the verification.
- **Remove:** use `codex mcp remove open-ethics-standard` or
  `claude mcp remove --scope user open-ethics-standard` for those CLI installs.
  For file-based setups, remove only the `open-ethics-standard` entry. Keep the
  source checkout unless the user also asks to delete it.

Client configuration references:
[Codex](https://developers.openai.com/codex/mcp),
[Claude Code](https://code.claude.com/docs/en/mcp),
[Cursor](https://cursor.com/docs/mcp),
[VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers).
