const prompt = document.getElementById("setup-prompt");
const button = document.getElementById("copy-setup-prompt");
const status = document.getElementById("copy-status");

button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(prompt.value);
    status.textContent = "Copied. Paste it into your coding assistant.";
  } catch {
    prompt.focus();
    prompt.select();
    status.textContent = "Select and copy the prompt, then paste it into your coding assistant.";
  }
});
