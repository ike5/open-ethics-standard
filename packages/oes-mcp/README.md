# OES MCP server

The MCP software is licensed under the repository's MIT License. The bundled
standard catalog is licensed separately under CC BY-ND 4.0; see the repository's
`LICENSE-OPEN-ETHICS-STANDARD.md`.

The OES MCP is distributed as a local stdio server and as a remote Streamable HTTP Worker. Both provide three tools:

- `search_oes_catalog` searches the generated Open Ethics Standard catalog.
- `get_oes_practice` returns a practice by section ID.
- `show_oes_review` renders submitted findings in an interactive MCP App when the client supports MCP Apps.

## Agent-assisted setup

Paste this into your coding assistant:

> Set up the Open Ethics Standard MCP for me: fetch and follow this guide https://ike5.github.io/open-ethics-standard/agent-setup.md

The public [setup guide](https://ike5.github.io/open-ethics-standard/agent-setup.md)
connects the current client to the hosted endpoint, verifies catalog tool
calls, and offers a local source build for private review evidence. No OES
account or API key is required.

## Installation and data handling

The server does not read project files or call an AI model. The connected AI uses its own authorized workspace tools. With the local npm server, review findings stay on the developer's machine. With the remote Worker, the `show_oes_review` request sends the project name, file paths, evidence snippets, and reasoning to OES hosting so the server can render the view. The Worker does not persist request content or reports. Review statuses stay in the review view for that session.

To connect to the hosted Worker, use `https://mcp.codebylevel.com/mcp`
with Streamable HTTP. To run locally while npm publication is pending, build
with `npm run build:mcp` from the repository root and point a stdio client
at `packages/oes-mcp/dist/server.js`. See the setup guide for client-specific
steps and verification.

To deploy the remote Worker, add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` GitHub Actions secrets, then run **Deploy remote OES MCP** from Actions. The public endpoint is `https://mcp.codebylevel.com/mcp`. The custom domain is configured in `wrangler.jsonc`, so future deployments keep it attached.
