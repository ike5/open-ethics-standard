# OES MCP server

The MCP software is licensed under the repository's MIT License. The bundled
standard catalog is licensed separately under CC BY-ND 4.0; see the repository's
`LICENSE-OPEN-ETHICS-STANDARD.md`.

The OES MCP is distributed as a local stdio server and as a remote Streamable HTTP Worker. Both provide three tools:

- `search_oes_catalog` searches the generated Open Ethics Standard catalog.
- `get_oes_practice` returns a practice by section ID.
- `get_oes_practices` returns several practice definitions in one call.
- `get_oes_catalog_overview` lists catalog categories and practices for review planning.
- `get_oes_review_instructions` gives agents the required evidence and review handoff workflow.
- `create_oes_review` validates and displays findings, returning a structured browser URL when hosted.
- `show_oes_review` renders submitted findings in an interactive MCP App when the client supports MCP Apps.

## Agent-assisted setup

Paste this into your coding assistant:

> I want to review the site in my current workspace against the Open Ethics Standard. First, briefly inspect the project and offer me three choices in this chat: a quick site-wide review (recommended), a page or user journey I name, or a specific ethics concern I name. Wait for my choice. Then follow https://ike5.github.io/open-ethics-standard/agent-setup.md to reuse or connect the MCP and complete the review. If the guide or MCP is unreachable, use https://raw.githubusercontent.com/ike5/open-ethics-standard/main/OPEN-ETHICS-STANDARD.md and continue. Show possible matches with file and line evidence. If the interactive review view is available, let me mark each finding Applies, Unsure, or Dismiss.

The public [setup guide](https://ike5.github.io/open-ethics-standard/agent-setup.md)
offers review choices in chat, connects the current client to the hosted
endpoint when needed, and provides a local build for private review evidence. No OES
account or API key is required.

## Installation and data handling

The server does not read project files or call an AI model. The connected AI uses its own authorized workspace tools. With the local npm server, review findings stay on the developer's machine. With the remote Worker, the `show_oes_review` request sends the project name, file paths, evidence snippets, and reasoning to OES hosting so the server can render the view. The Worker does not persist request content or reports. Review statuses stay in the review view for that session.

To connect to the hosted Worker, use `https://mcp.codebylevel.com/mcp`
with Streamable HTTP. To run locally while npm publication is pending, build
with `npm run build:mcp` from the repository root and point a stdio client
at `packages/oes-mcp/dist/server.js`. See the setup guide for client-specific
steps and verification.

To deploy the remote Worker, add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` GitHub Actions secrets, then run **Deploy remote OES MCP** from Actions. The public endpoint is `https://mcp.codebylevel.com/mcp`. The custom domain is configured in `wrangler.jsonc`, so future deployments keep it attached.
