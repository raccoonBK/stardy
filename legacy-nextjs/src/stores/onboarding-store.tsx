"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/** Which track the learner wants to focus on first. */
export type LearnGoal = "stargazing" | "cosmos" | "phenomena";
/** Daily commitment level (drives the greeting copy + a soft target). */
export type DailyGoal = "casual" | "regular" | "serious";

export interface OnboardingPrefs {
  done: boolean;
  goal: LearnGoal | null;
  daily: DailyGoal | null;
}

interface OnboardingState extends OnboardingPrefs {
  /** Persist the choices and mark onboarding complete. */
  finish: (prefs: { goal: LearnGoal; daily: DailyGoal }) => void;
  /** Force-restart onboarding (e.g. from the account page). */
  reset: () => void;
}

const OnboardingContext = createContext<OnboardingState | null>(null);

const STORAGE_KEY = "astro-quest-onboarding";
const CHANGE_EVENT = "astro-quest-onboarding-changed";

const EMPTY: OnboardingPrefs = { done: false, goal: null, daily: null };

function read(): OnboardingPrefs {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<OnboardingPrefs>;
      return {
        done: parsed.done === true,
        goal: (parsed.goal as LearnGoal) ?? null,
        daily: (parsed.daily as DailyGoal) ?? null,
      };
    }
  } catch {
    /* ignore */
  }
  return EMPTY;
}

// Stable server/first-paint snapshot to keep useSyncExternalStore happy.
const SERVER_SNAPSHOT = JSON.stringify(EMPTY);

function readSnapshot(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? SERVER_SNAPSHOT;
  } catch {
    return SERVER_SNAPSHOT;
  }
}

function write(prefs: OnboardingPrefs) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
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

/**
 * First-run onboarding preferences (learning goal + daily commitment), backed
 * by localStorage. A UI/personalization preference — not server product data.
 */
export function OnboardingProvider({ children }: { children: ReactNode }) {
  // Track the raw string so snapshots are referentially stable across renders.
  const raw = useSyncExternalStore(subscribe, readSnapshot, () => SERVER_SNAPSHOT);
  const prefs = useMemo<OnboardingPrefs>(() => {
    try {
      const parsed = JSON.parse(raw) as Partial<OnboardingPrefs>;
      return {
        done: parsed.done === true,
        goal: (parsed.goal as LearnGoal) ?? null,
        daily: (parsed.daily as DailyGoal) ?? null,
      };
    } catch {
      return EMPTY;
    }
  }, [raw]);

  const finish = useCallback(
    (p: { goal: LearnGoal; daily: DailyGoal }) =>
      write({ done: true, goal: p.goal, daily: p.daily }),
    [],
  );
  const reset = useCallback(() => write(EMPTY), []);

  const value = useMemo<OnboardingState>(
    () => ({ ...prefs, finish, reset }),
    [prefs, finish, reset],
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding(): OnboardingState {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
}

// Kept for any non-hook readers.
export { read as readOnboarding };
