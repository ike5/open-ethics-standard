# OES MCP server

An MCP server that gives your AI assistant the [Open Ethics Standard](../../OPEN-ETHICS-STANDARD.md) catalog and writes offline review reports. Your assistant reads your code; this server never does.

## Install

From the repository root (Node.js 20+):

```sh
npm ci --prefix packages/oes-mcp
npm run setup:mcp   # prints the stdio config for your client
```

Full instructions: [setup guide](../../docs/agent-setup.md).

## Tools

| Tool | Purpose |
| --- | --- |
| `get_oes_review_instructions` | Review workflow for the assistant |
| `get_oes_catalog_overview` | Categories and practice titles for planning |
| `search_oes_catalog` | Search practices |
| `get_oes_practice` / `get_oes_practices` | Full definitions by ID |
| `create_oes_review` (alias `show_oes_review`) | Save the HTML and Markdown report and return its link |
| `get_oes_review_state` | Read a previous review for rechecks (local only) |

Reports go to `~/.local/share/open-ethics-standard/reports` unless `OES_REPORT_DIR` is set. They work offline and include Applies/Unsure/Dismiss choices, Markdown and PDF export, and audit history across rechecks.

Without an MCP connection: `npm run build:report -- findings.json [output-dir]` (see [`examples/`](../../examples)).

## Hosted endpoint

An optional Streamable HTTP endpoint runs at `https://mcp.codebylevel.com/mcp`. Review calls send findings to it. It doesn't store them, but use local stdio when evidence must stay private. Deploy it with the **Deploy remote OES MCP** workflow (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).

## License

Code is MIT. The bundled catalog is CC BY-ND 4.0 (see `LICENSE-OPEN-ETHICS-STANDARD.md`).
