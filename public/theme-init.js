(function () {
  try {
    var key = "veylora-theme";
    var stored = localStorage.getItem(key);
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.classList.add("dark");
  }
})();
