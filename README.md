# Open Ethics Standard

The Open Ethics Standard is a public guide to practices that can harm people, communities, or the environment through software and technology.

It is a reference for discussion, not a legal judgment or a certification.

## Review a project with your AI

The OES MCP helps a compatible AI assistant find possible matches between a project and the standard. The AI reviews files it can already access, then shows evidence and links to relevant parts of the standard.

Findings are suggestions for you to check. They are not proof that a project has done something wrong.

### Get started

Copy this prompt into your coding assistant:

> Set up the Open Ethics Standard MCP for me: fetch and follow this guide https://ike5.github.io/open-ethics-standard/agent-setup.md

No OES account, login, or API key is needed. The public [setup guide](docs/agent-setup.md) connects the current client to the hosted MCP at [mcp.codebylevel.com/mcp](https://mcp.codebylevel.com/mcp) and checks the tools. It includes Codex, Claude Code, Cursor, and VS Code instructions. Your assistant may ask you to restart the client or approve its MCP trust prompt.

For a local setup that keeps submitted review evidence on your machine, build it in a persistent directory:

```sh
mkdir -p "$HOME/.local/share"
git clone https://github.com/ike5/open-ethics-standard.git "$HOME/.local/share/open-ethics-standard"
cd "$HOME/.local/share/open-ethics-standard"
npm ci --prefix packages/oes-mcp
npm run build:mcp
```

Then follow the guide to add a local stdio MCP server with the absolute path to Node and the absolute path to `packages/oes-mcp/dist/server.js`.

### Try a review

Ask your AI:

> Review this project for possible matches with the Open Ethics Standard. Show the evidence, file location, and why each match may be relevant. Treat the results as suggestions for me to review.

The MCP does not read project files. The hosted `show_oes_review` tool receives submitted project names, file paths, evidence snippets, and reasoning to display a review; it does not persist them. The local server does not send review evidence to OES hosting. Your AI tool may have its own data handling rules.

## Browse the standard

Read the [Open Ethics Standard](OPEN-ETHICS-STANDARD.md) or visit the [project landing page](https://ike5.github.io/open-ethics-standard/).

## Help improve it

You can suggest a new practice, correction, or deletion by editing the relevant part of `OPEN-ETHICS-STANDARD.md` and opening a pull request. Please do not replace the whole document. Sources are welcome. The structured catalog is generated from the standard. See [CONTRIBUTING.md](CONTRIBUTING.md).

When a change is accepted, automation updates the standard's date and version. If you like, add one of these labels to your pull request:

- `version:patch` for a correction or clarification
- `version:minor` for an addition
- `version:major` for a significant change to the catalog

If no label is added, the update uses a patch version. See Part IV of the standard for contribution guidance.

## Licenses

The MCP software is available under the [MIT License](LICENSE). The standard text and its generated catalog are available under [CC BY-ND 4.0](LICENSE-OPEN-ETHICS-STANDARD.md): share the original with attribution; distributed modified versions are not permitted. The canonical standard can be changed through an approved pull request.

## About the MCP

The hosted Streamable HTTP endpoint is [https://mcp.codebylevel.com/mcp](https://mcp.codebylevel.com/mcp). The npm package has not been published yet; use the source build above for local stdio setup.
