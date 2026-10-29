import { access, realpath } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const server = fileURLToPath(new URL("../packages/oes-mcp/dist/server.js", import.meta.url));
await access(server);

// Prefer Homebrew's stable symlink over the versioned Cellar path so `brew upgrade node` doesn't break the config.
async function stableNode(path) {
  const brew = path.match(/^(.*)\/Cellar\/node(@\d+)?\/[^/]+\/bin\/node$/);
  if (!brew) return path;
  const link = brew[2] ? `${brew[1]}/opt/node${brew[2]}/bin/node` : `${brew[1]}/bin/node`;
  try { return (await realpath(link)) === (await realpath(path)) ? link : path; } catch { return path; }
}

const node = await stableNode(process.execPath);
const versioned = /\/Cellar\/|\/\.nvm\/versions\/|\/fnm\/|\/\.volta\//.test(node);
const config = { command: node, args: [server] };
console.log(`✓ OES MCP built. No account or API key needed.

Add this stdio server to your AI client (keep your other servers):
${JSON.stringify({ mcpServers: { "open-ethics-standard": config } }, null, 2)}
${versioned ? "\nNote: this Node path includes a version number; rerun setup after upgrading Node.\n" : ""}
Next: enable it, accept the trust prompt, restart the client if needed,
then ask your AI to call get_oes_review_instructions.
Reports are saved to ~/.local/share/open-ethics-standard/reports (override with OES_REPORT_DIR).`);
