# Contributing

Thanks for helping improve the Open Ethics Standard.

## Suggest a practice, correction, or removal

Edit the relevant part of [`OPEN-ETHICS-STANDARD.md`](OPEN-ETHICS-STANDARD.md) and open a pull request. Explain why, and cite sources when you can. Not ready for a PR? [Open an issue](https://github.com/ike5/open-ethics-standard/issues/new/choose).

Keep the format the catalog generator and CI expect:

- Categories use `## N. Category name`; subsections use `### N.N Subsection name`.
- Each practice is one table row: identifier, practice, description, example domains.
- Identifiers are unique `N.N.N`. Escape any `|` inside text.
- Don't replace the whole document, and don't edit the generated `packages/oes-mcp/catalog.json`.

When a change merges, automation bumps the standard's version and date. Optionally label your PR:

| Label | Use for |
| --- | --- |
| `version:patch` | Corrections and clarifications (default) |
| `version:minor` | New practices |
| `version:major` | Significant catalog changes |

## Change the MCP code

Keep changes focused and describe the behavior change in the PR. Run `npm test` before opening it.

## License

Contributions are licensed like the material they change: MIT for code, CC BY-ND 4.0 for the standard. See the [Code of Conduct](CODE_OF_CONDUCT.md).
