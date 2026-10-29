import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const server = fileURLToPath(new URL("../packages/oes-mcp/dist/server.js", import.meta.url));
await access(server);
const config = { command: process.execPath, args: [server] };
console.log(`✓ OES MCP built. No account or API key needed.

Add this stdio server to your AI client (keep your other servers):
${JSON.stringify({ mcpServers: { "open-ethics-standard": config } }, null, 2)}

Next: enable it, accept the trust prompt, restart the client if needed,
then ask your AI to call get_oes_review_instructions.
Reports are saved to ~/.local/share/open-ethics-standard/reports (override with OES_REPORT_DIR).`);
