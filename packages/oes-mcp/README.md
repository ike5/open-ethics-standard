# OES MCP server

This local MCP server provides three tools:

- `search_oes_catalog` searches the generated Open Ethics Standard catalog.
- `get_oes_practice` returns a practice by section ID.
- `show_oes_review` renders submitted findings in an interactive MCP App when the client supports MCP Apps.

The server does not read project files or call an AI model. The connected AI uses its own authorized workspace tools, then sends only finding summaries and evidence to the MCP server. Review statuses stay in the review view for that session.

Build from the repository root with `npm run build:mcp`, then point your MCP client at `packages/oes-mcp/dist/server.js`. See the root README for setup details.
