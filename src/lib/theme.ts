export const THEME_STORAGE_KEY = "veylora-theme";
export const THEME_CHANGE_EVENT = "veylora-theme-change";

export type Theme = "light" | "dark";

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function readTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return getSystemTheme();
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

/** Keep in sync with `public/theme-init.js`. */
