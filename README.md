# Open Ethics Standard

The Open Ethics Standard (OES) is an open reference catalog of unethical software, technology, and business practices. It is not a law, certification, or compliance checklist.

## Landing page

The static landing page is [`docs/index.html`](docs/index.html). GitHub Pages can publish it directly from the `main` branch's `/docs` folder; no separate build step is needed.

## Review a project with an AI

The local OES MCP server lets a compatible coding assistant search the standard and present evidence-backed possible matches for a developer to review. Your AI reads project files through its normal workspace access; the MCP server does not upload source code to OES. Findings are leads for human review, not determinations.

The project will distribute the MCP in two ways:

- **Local npm package:** `npx -y open-ethics-standard-mcp` runs the server without cloning or building the repository. The package must be published to npm before this command is available.
- **Hosted endpoint:** a public Streamable HTTP endpoint for clients that connect by URL. This avoids running a local process. The endpoint is being prepared for Cloudflare Workers; publication still requires Cloudflare deployment credentials and a stable Worker URL.

The local server keeps report payloads on the developer's machine. The hosted `show_oes_review` tool receives project name, file paths, evidence snippets, and explanations so it can display the review. The hosted Worker does not write reports to storage, but the request still reaches the hosting provider.

Once the npm package is published, configure a local client with:

```json
{
  "mcpServers": {
    "open-ethics-standard": {
      "command": "npx",
      "args": ["-y", "--package=open-ethics-standard-mcp", "oes-mcp"]
    }
  }
}
```

When the remote endpoint is deployed, add it in Codex with `codex mcp add open-ethics-standard --url https://<worker-host>/mcp`. ChatGPT users can connect the same HTTPS endpoint as a custom MCP server, subject to their account and workspace permissions.

For source development, clone and build the server:

```sh
git clone https://github.com/ike5/open-ethics-standard.git
cd open-ethics-standard
npm install --prefix packages/oes-mcp
npm run build:mcp
```

Before the npm package is published, you can point your local client at the built checkout:

```json
{
  "mcpServers": {
    "open-ethics-standard": {
      "command": "node",
      "args": ["/absolute/path/open-ethics-standard/packages/oes-mcp/dist/server.js"]
    }
  }
}
```

After connecting, ask your AI to review the current project against the Open Ethics Standard. It can search for relevant practices, inspect files you authorize, and call `show_oes_review` to present evidence, file locations, confidence, and OES citations. The interactive review panel requires an MCP Apps-capable client. Other clients can still read the tool's text result.

Suggested prompt: “Review this project for possible matches with the Open Ethics Standard. Search the catalog, inspect only relevant source files, exclude secrets and generated dependencies, and show each possible match with exact file and line evidence, reasoning, and confidence. Treat findings as leads for my review, not conclusions.”

## Contributing to the standard

`OPEN-ETHICS-STANDARD.md` is the single source of truth. CI parses its practice tables to generate `packages/oes-mcp/catalog.json`, the structured catalog used by the MCP package. Contributors should edit the Markdown only; the generated JSON is refreshed automatically after merge.

When a merged pull request changes the standard, GitHub Actions updates the date and increments the version automatically. Use one PR label to select the semantic version bump:

- `version:major` for breaking catalog changes or substantial restructuring;
- `version:minor` for new practices or meaningful additions;
- `version:patch` for clarifications, corrections, and other smaller amendments.

If no version label is set, the workflow uses `version:patch`. The date is updated to the merge date in UTC. Pull requests that do not change the standard do not affect its version or date.

The PR workflow validates practice row shape and identifier uniqueness and builds the MCP app. After a standard-changing PR merges, the release workflow updates the Markdown metadata, regenerates the catalog, builds the MCP app, and commits the refreshed files to `main`. The npm package workflow uses GitHub Actions trusted publishing; the Cloudflare deployment workflow requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets. Refer to Part IV of the standard for contribution guidance.
