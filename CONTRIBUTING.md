# Contributing

Make a focused change in `OPEN-ETHICS-STANDARD.md` and open a pull request.
Please do not replace the whole document. Explain the reason for the change
and cite sources when available. Maintainers review and merge changes to update
the canonical standard.

By submitting a contribution, you agree it is available under the license for
that material: MIT for software code and CC BY-ND 4.0 for standard content.

For catalog changes, preserve the format used in the surrounding section:

- Categories use `## N. Category name` headings.
- Subsections use `### N.N Subsection name` headings.
- Each practice is one table row with four cells: identifier, practice,
  description, and example domains.
- Use a unique `N.N.N` identifier. Keep table pipes escaped if they appear in
  text.

These rules are required by the catalog generator and CI. Do not edit the
generated `packages/oes-mcp/catalog.json`; CI regenerates it from the standard.

Changes to MCP code are also welcome. Keep code changes focused and describe
what they do in the pull request.

See [the pull request template](.github/PULL_REQUEST_TEMPLATE.md) and
[the Code of Conduct](CODE_OF_CONDUCT.md).
