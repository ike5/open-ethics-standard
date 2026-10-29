# Contributing

## Develop the MCP server

```sh
npm ci --prefix packages/oes-mcp
npm test                 # builds the catalog and server, packs and runs the package
```

Run from a checkout: `npm run setup:mcp` prints a stdio config pointing at `packages/oes-mcp/dist/server.js`.
