# OES MCP server

An MCP server that gives your AI assistant the [Open Ethics Standard](https://github.com/ike5/open-ethics-standard/blob/main/OPEN-ETHICS-STANDARD.md) catalog and a review workflow. Your assistant reads your code; this server runs on your machine and saves the report there, so findings never leave it.

## Use it

Requires Node.js 20+. Add it to your client as a stdio server:

```sh
claude mcp add --scope user open-ethics-standard -- npx -y open-ethics-standard-mcp@latest
codex mcp add open-ethics-standard -- npx -y open-ethics-standard-mcp@latest
```

Other clients: command `npx`, args `["-y", "open-ethics-standard-mcp@latest"]` ([per-client setup](https://ike5.github.io/open-ethics-standard/#install)). On native Windows, wrap it as `cmd /c npx …`.

Then ask your AI: "Review my project against the Open Ethics Standard." See the [agent guide](https://ike5.github.io/open-ethics-standard/agent-setup.md).

Reports are saved in `~/.local/share/open-ethics-standard/reports` (override with `OES_REPORT_DIR`).

The same package is a catalog CLI: `npx -y open-ethics-standard-mcp@latest search "cancel subscription"`, `practice 2.1.3`, `overview`, `build <findings.json>`, `--version`.

## Tools

| Tool | Purpose |
| --- | --- |
| `get_oes_review_instructions` | Review workflow and reply format (call first) |
| `get_oes_catalog_overview` | Categories and practice titles for planning |
| `search_oes_catalog` | Search practices |
| `get_oes_practice` / `get_oes_practices` | Full definitions by ID |
| `create_oes_review` (alias `show_oes_review`) | Save the offline HTML/Markdown report and return its link |
| `get_oes_review_state` | Read a previous review for rechecks |

## License

Code is MIT. The bundled catalog is CC BY-ND 4.0 (see `LICENSE-OPEN-ETHICS-STANDARD.md`).
