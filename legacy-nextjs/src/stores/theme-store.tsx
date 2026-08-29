"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type AppTheme = "dark" | "light";

interface ThemeState {
  theme: AppTheme;
  setTheme: (t: AppTheme) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeState | null>(null);

const STORAGE_KEY = "astro-quest-theme";
const CHANGE_EVENT = "astro-quest-theme-changed";

function readTheme(): AppTheme {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* ignore storage errors */
  }
  return "dark";
}

function writeTheme(t: AppTheme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, t);
  } catch {
    /* ignore storage errors */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * App-wide visual theme. "dark" = the night-sky star world; "light" = the
 * bright cobalt+yellow playful skin. Every screen reads this to render one
 * consistent look. Backed by localStorage via useSyncExternalStore so the
 * choice sticks across the in-app session (a UI preference, not product data).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<AppTheme>(
    subscribe,
    readTheme,
    () => "dark",
  );

  const setTheme = useCallback((t: AppTheme) => writeTheme(t), []);
  const toggle = useCallback(
    () => writeTheme(readTheme() === "dark" ? "light" : "dark"),
    [],
  );

  const value = useMemo<ThemeState>(
    () => ({ theme, setTheme, toggle }),
    [theme, setTheme, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeState {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
