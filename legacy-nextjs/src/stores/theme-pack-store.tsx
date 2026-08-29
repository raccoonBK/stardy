"use client";

// Which theme pack is currently active. Persisted in localStorage so the
// user's choice survives reloads. New themes can be plugged in via the
// registry without touching this store.

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_THEME_ID,
  findThemePack,
  listThemePacks,
  type ThemePack,
} from "@/lib/themes";

interface ThemePackState {
  /** Current theme pack. Always resolves — unknown ids fall back to default. */
  pack: ThemePack;
  /** Current theme id (string form of pack.id). */
  themeId: string;
  /** All packs registered with the app, in display order. */
  all: ThemePack[];
  /** Switch to a different theme by id. Unknown ids are ignored. */
  setThemeId: (id: string) => void;
}

const ThemePackContext = createContext<ThemePackState | null>(null);

const STORAGE_KEY = "astro-quest-theme-pack";
const CHANGE_EVENT = "astro-quest-theme-pack-changed";

function writeId(id: string) {
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    /* ignore */
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

function readSnapshot(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_THEME_ID;
  } catch {
    return DEFAULT_THEME_ID;
  }
}

const SERVER_SNAPSHOT = DEFAULT_THEME_ID;

export function ThemePackProvider({ children }: { children: ReactNode }) {
  const themeId = useSyncExternalStore(subscribe, readSnapshot, () => SERVER_SNAPSHOT);
  const all = useMemo(() => listThemePacks(), []);

  const setThemeId = useCallback((next: string) => {
    // Only switch to a known pack id; ignore unknown ones so bad routes can't
    // land the user on a missing theme.
    if (!all.some((p) => p.id === next)) return;
    writeId(next);
  }, [all]);

  const pack = useMemo(() => findThemePack(themeId), [themeId]);

  const value = useMemo<ThemePackState>(
    () => ({ pack, themeId, all, setThemeId }),
    [pack, themeId, all, setThemeId],
  );

  return (
    <ThemePackContext.Provider value={value}>
      {children}
    </ThemePackContext.Provider>
  );
}

export function useThemePack(): ThemePackState {
  const ctx = useContext(ThemePackContext);
  if (!ctx) throw new Error("useThemePack must be used within ThemePackProvider");
  return ctx;
}
