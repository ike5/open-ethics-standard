const commands = {
  install: {
    text: "claude mcp add --transport http --scope user open-ethics-standard https://mcp.codebylevel.com/mcp",
    hint: "Paste into your terminal. Other clients: add a remote (HTTP) MCP server with <code>https://mcp.codebylevel.com/mcp</code>.",
  },
  uninstall: {
    text: "claude mcp remove --scope user open-ethics-standard",
    hint: "Removes the server. Past reports stay in <code>~/.local/share/open-ethics-standard</code> until you delete them.",
  },
};
const command = document.getElementById("command");
const button = document.getElementById("copy-command");
const status = document.getElementById("copy-status");
let mode = "install";

for (const toggle of document.querySelectorAll("[data-mode]")) {
  toggle.addEventListener("click", () => {
    mode = toggle.dataset.mode;
    for (const other of document.querySelectorAll("[data-mode]")) other.setAttribute("aria-pressed", String(other === toggle));
    command.textContent = commands[mode].text;
    status.innerHTML = commands[mode].hint;
    button.textContent = "Copy";
  });
}

button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(commands[mode].text);
    button.textContent = "Copied";
    setTimeout(() => { button.textContent = "Copy"; }, 1800);
  } catch {
    getSelection().selectAllChildren(command);
    status.textContent = "Press Ctrl+C / ⌘C to copy the selected command.";
  }
});
