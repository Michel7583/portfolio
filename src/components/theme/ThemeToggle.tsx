"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import {
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  applyTheme,
  readTheme,
  type Theme,
} from "@/lib/theme";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
  };
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, [theme]);

  const nextLabel = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-card-hover"
      aria-label={`Switch to ${nextLabel} mode`}
      title={`Switch to ${nextLabel} mode`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden />
      ) : (
        <Moon className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
