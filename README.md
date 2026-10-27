# Open Ethics Standard

The Open Ethics Standard is a public guide to practices that can harm people, communities, or the environment through software and technology.

It is a reference for discussion, not a legal judgment or a certification.

## Review a project with your AI

The OES MCP helps a compatible AI assistant find possible matches between a project and the standard. The AI reviews files it can already access, then shows evidence and links to relevant parts of the standard.

Findings are suggestions for you to check. They are not proof that a project has done something wrong.

### Get started

The easiest option is to add the OES MCP to your AI tool. Setup instructions will be posted here when the public install is ready.

For now, you can build it from the source code:

```sh
git clone https://github.com/ike5/open-ethics-standard.git
cd open-ethics-standard
npm install --prefix packages/oes-mcp
npm run build:mcp
```

Then follow your AI tool's instructions for adding a local MCP server. Point it to `packages/oes-mcp/dist/server.js`.

### Try a review

Ask your AI:

> Review this project for possible matches with the Open Ethics Standard. Show the evidence, file location, and why each match may be relevant. Treat the results as suggestions for me to review.

The local server does not send your project files or review evidence to the OES website. Your AI tool may have its own data handling rules.

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

The MCP is being prepared for simple npm installation and an optional hosted connection. Until those are available, the source build above is the way to try it. The hosted version would receive review evidence to display it, so use the local option for private projects.
