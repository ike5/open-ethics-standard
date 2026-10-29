<p align="center">
  <img src="docs/assets/banner.svg" alt="Open Ethics Standard MCP — Teach your AI to spot harmful code." width="100%">
</p>

<p align="center">
  <a href="LICENSE"><img alt="Code: MIT" src="https://img.shields.io/badge/code-MIT-607138"></a>
  <a href="LICENSE-OPEN-ETHICS-STANDARD.md"><img alt="Standard: CC BY-ND 4.0" src="https://img.shields.io/badge/standard-CC%20BY--ND%204.0-607138"></a>
  <a href="https://github.com/ike5/open-ethics-standard/actions/workflows/validate-standard.yml"><img alt="CI" src="https://github.com/ike5/open-ethics-standard/actions/workflows/validate-standard.yml/badge.svg"></a>
  <img alt="MCP: local stdio" src="https://img.shields.io/badge/MCP-local%20stdio-d8f36a">
</p>

<p align="center">
  <a href="https://ike5.github.io/open-ethics-standard/"><b>Website</b></a> ·
  <a href="OPEN-ETHICS-STANDARD.md"><b>Read the standard</b></a> ·
  <a href="docs/agent-setup.md"><b>Setup guide</b></a> ·
  <a href=".github/CONTRIBUTING.md"><b>Contribute</b></a>
</p>

**An MCP server that lets your AI coding assistant diagnose harmful practices in your code:** dark patterns, cancellation traps, bundled consent, and more. It's backed by the **Open Ethics Standard (OES)**, an open, citable catalog of 800+ named practices. It runs on your machine.

Findings are leads for you to review, not verdicts or certifications.

## Add it to your AI in one prompt

Open your project in Claude Code, Codex, Cursor, VS Code, or any MCP client, and paste:

```text
Review my project against the Open Ethics Standard. Follow https://ike5.github.io/open-ethics-standard/agent-setup.md to set up the local MCP and keep my code and findings on this machine. Ask me what to review if I haven't said, then give me the link to the report.
```

No account or API key needed. You get an offline report where you decide what applies:

<p align="center"><img src="docs/assets/report.png" alt="Offline OES review report with findings, evidence, and Applies / Unsure / Dismiss choices" width="100%"></p>

## How it works

1. **Set up:** your assistant installs the OES MCP locally.
2. **Review:** it reads the code you point it at and matches behavior to OES practices, citing files, lines, and evidence.
3. **Decide:** open the report, then mark each finding **Applies**, **Unsure**, or **Dismiss** and export to Markdown or PDF. After fixes, ask your assistant to recheck. The same report tracks what's been fixed.

## Manual install

```sh
git clone https://github.com/ike5/open-ethics-standard.git ~/.local/share/open-ethics-standard
cd ~/.local/share/open-ethics-standard
npm ci --prefix packages/oes-mcp
npm run setup:mcp   # prints the config to add to your AI client
```

Requires Node.js 20+. See the [setup guide](docs/agent-setup.md) for client commands, rechecks, and troubleshooting.

## Your data

- OES runs locally. It never reads your files; your assistant does.
- Reports are offline HTML and Markdown in `~/.local/share/open-ethics-standard/reports`. They have no telemetry and need no server.
- Your AI provider's own data policies still apply.

## Contribute

Spotted a practice that's missing or wrong? Edit [`OPEN-ETHICS-STANDARD.md`](OPEN-ETHICS-STANDARD.md) and open a pull request, or [open an issue](https://github.com/ike5/open-ethics-standard/issues/new/choose). See [CONTRIBUTING.md](.github/CONTRIBUTING.md).

## License

Code is [MIT](LICENSE). The standard text and catalog are [CC BY-ND 4.0](LICENSE-OPEN-ETHICS-STANDARD.md).
