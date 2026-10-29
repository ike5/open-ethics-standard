(function () {
  var NAME = "open-ethics-standard";
  // Every client runs the same local stdio server; @latest keeps it current.
  var CONFIG = { command: "npx", args: ["-y", "open-ethics-standard-mcp@latest"] };
  var LAUNCH = CONFIG.command + " " + CONFIG.args.join(" ");
  var needs = "Needs Node.js 20+. ";
  var windows = " On native Windows, use “cmd /c " + LAUNCH + "”.";
  var defs = {
    claude: {
      install: "claude mcp add --scope user " + NAME + " -- " + LAUNCH,
      uninstall: "claude mcp remove --scope user " + NAME,
      iHint: needs + "Paste into your terminal." + windows,
      uHint: "Removes the server."
    },
    codex: {
      install: "codex mcp add " + NAME + " -- " + LAUNCH,
      uninstall: "codex mcp remove " + NAME,
      iHint: needs + "Paste into your terminal.",
      uHint: "Removes the server."
    },
    cursor: {
      install: "cursor://anysphere.cursor-deeplink/mcp/install?name=" + NAME + "&config=" + encodeURIComponent(btoa(JSON.stringify(CONFIG))),
      uninstall: "Cursor has no remove command. Open Cursor, go to Customize,\nand remove \"" + NAME + "\" from the MCP list.",
      iHint: needs + "Click “Open in Cursor” to install in one step, or copy the link and open it.",
      uHint: "You can also delete the entry from ~/.cursor/mcp.json."
    },
    vscode: {
      install: "code --add-mcp '" + JSON.stringify({ name: NAME, command: CONFIG.command, args: CONFIG.args }) + "'",
      uninstall: "# In VS Code, run \"MCP: Open User Configuration\"\n# and delete the \"" + NAME + "\" entry",
      iHint: needs + "Paste into your terminal.",
      uHint: "VS Code has no remove command, so edit the file."
    },
    other: {
      install: JSON.stringify({ mcpServers: { "open-ethics-standard": CONFIG } }, null, 2),
      uninstall: "Remove the \"" + NAME + "\" server in your client's MCP settings.",
      iHint: needs + "Add this stdio server to your client's MCP config (keep your other servers).",
      uHint: "The exact steps depend on your client."
    }
  };
  var reportsNote = " Past reports stay in ~/.local/share/open-ethics-standard until you delete them.";

  var codeEl = document.getElementById("command");
  var copyBtn = document.getElementById("copy-command");
  var noteEl = document.getElementById("copy-status");
  var openLink = document.getElementById("open-link");
  if (!codeEl || !copyBtn || !noteEl) return;

  var state = { mode: "install", client: "claude", failed: false };
  var timer = null;

  function render() {
    var d = defs[state.client];
    codeEl.textContent = d[state.mode];
    noteEl.textContent = state.failed
      ? "Press Ctrl+C / ⌘C after selecting the command above."
      : (state.mode === "install" ? d.iHint : d.uHint + reportsNote);
    copyBtn.textContent = "Copy";
    if (openLink) {
      var show = state.client === "cursor" && state.mode === "install";
      if (show) openLink.setAttribute("href", d.install);
      openLink.hidden = !show;
    }
    each("[data-mode]", function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-mode") === state.mode)); });
    each("[data-client]", function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-client") === state.client)); });
  }

  function each(sel, fn) {
    var list = document.querySelectorAll(sel);
    for (var i = 0; i < list.length; i++) fn(list[i]);
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, text.length);
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }

  function selectCommand() {
    var sel = window.getSelection && window.getSelection();
    if (sel && sel.selectAllChildren) sel.selectAllChildren(codeEl);
  }

  function done(ok) {
    if (timer) clearTimeout(timer);
    if (ok) {
      state.failed = false;
      noteEl.textContent = state.mode === "install" ? defs[state.client].iHint : defs[state.client].uHint + reportsNote;
      copyBtn.textContent = "Copied";
      timer = setTimeout(function () { copyBtn.textContent = "Copy"; }, 1800);
    } else {
      state.failed = true;
      selectCommand();
      noteEl.textContent = "Press Ctrl+C / ⌘C to copy the selected command.";
    }
  }

  each("[data-mode]", function (b) {
    b.addEventListener("click", function () { state.mode = b.getAttribute("data-mode"); state.failed = false; render(); });
  });
  each("[data-client]", function (b) {
    b.addEventListener("click", function () { state.client = b.getAttribute("data-client"); state.failed = false; render(); });
  });

  copyBtn.addEventListener("click", function () {
    var text = defs[state.client][state.mode];
    // Safari only allows clipboard access inside the click gesture, so try the
    // synchronous path first and fall back to the async API.
    if (fallbackCopy(text)) { done(true); return; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      done(false);
    }
  });

  render();
})();
