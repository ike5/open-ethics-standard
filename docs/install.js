(function () {
  var URL_ = "https://mcp.codebylevel.com/mcp";
  var NAME = "open-ethics-standard";
  var defs = {
    claude: {
      install: "claude mcp add --transport http --scope user " + NAME + " " + URL_,
      uninstall: "claude mcp remove --scope user " + NAME,
      iHint: "Paste into your terminal.",
      uHint: "Removes the server."
    },
    codex: {
      install: "codex mcp add " + NAME + " --url " + URL_,
      uninstall: "codex mcp remove " + NAME,
      iHint: "Paste into your terminal.",
      uHint: "Removes the server."
    },
    cursor: {
      install: "cursor://anysphere.cursor-deeplink/mcp/install?name=" + NAME + "&config=eyJ1cmwiOiJodHRwczovL21jcC5jb2RlYnlsZXZlbC5jb20vbWNwIn0%3D",
      uninstall: "Cursor has no remove command. Open Cursor, go to Customize,\nand remove \"" + NAME + "\" from the MCP list.",
      iHint: "Click “Open in Cursor” to install in one step, or copy the link and open it.",
      uHint: "You can also delete the entry from ~/.cursor/mcp.json."
    },
    vscode: {
      install: "code --add-mcp '{\"name\":\"" + NAME + "\",\"type\":\"http\",\"url\":\"" + URL_ + "\"}'",
      uninstall: "# In VS Code, run \"MCP: Open User Configuration\"\n# and delete the \"" + NAME + "\" entry",
      iHint: "Paste into your terminal.",
      uHint: "VS Code has no remove command, so edit the file."
    },
    other: {
      install: "npx add-mcp " + URL_ + " --name " + NAME,
      uninstall: "Remove the \"" + NAME + "\" server in your client's MCP settings.",
      iHint: "Detects your installed clients and lets you pick. Or paste it to your AI and ask it to add this MCP server. No API key.",
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
