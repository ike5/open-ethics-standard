# OES MCP server

An MCP server that gives your AI assistant the [Open Ethics Standard](../../OPEN-ETHICS-STANDARD.md) catalog and a review workflow. Your assistant reads your code; this server never does.

## Use it

The server is hosted at `https://mcp.codebylevel.com/mcp` (Streamable HTTP):

```sh
claude mcp add --transport http --scope user open-ethics-standard https://mcp.codebylevel.com/mcp
```

Reports are built on the user's machine by [`docs/oes-report.mjs`](../../docs/oes-report.mjs), a single-file script bundled from this package, so findings never reach the server. See the [agent guide](../../docs/agent-setup.md).

## Tools

| Tool | Purpose |
| --- | --- |
| `get_oes_review_instructions` | Review workflow and reply format (call first) |
| `get_oes_catalog_overview` | Categories and practice titles for planning |
| `search_oes_catalog` | Search practices |
| `get_oes_practice` / `get_oes_practices` | Full definitions by ID |
| `create_oes_review` (alias `show_oes_review`) | Fallback for clients without a shell; hosted mode returns a web link |
| `get_oes_review_state` | Read a previous review for rechecks (local server only) |

## Develop

```sh
npm ci --prefix packages/oes-mcp
npm test                 # from the repo root; builds the catalog, server, and docs/oes-report.mjs
```

- **Fully local stdio server:** `npm run setup:mcp` prints the config. In that mode, `create_oes_review` writes reports directly.
- **Deploy the hosted Worker:** use the **Deploy remote OES MCP** workflow (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).

## License

Code is MIT. The bundled catalog is CC BY-ND 4.0 (see `LICENSE-OPEN-ETHICS-STANDARD.md`).
