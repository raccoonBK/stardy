"use client";

// Per-user understanding state for each teach card. Persisted to localStorage
// so the user\'s "I don\'t get this" marks survive reloads and feed the
// review queue. Schema is deliberately tiny — this is a per-device hint that
// later gets promoted to the database in T1.2 (user progress入库).

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type TeachMark = "understood" | "not_understood";

/** Map of lessonId → teachIndex → mark. */
type UnderstandingMap = Record<string, Record<number, TeachMark>>;

interface TeachUnderstandingState {
  marks: UnderstandingMap;
  /** Mark one teach card as understood / not_understood. */
  mark: (lessonId: string, teachIndex: number, mark: TeachMark) => void;
  /** All teach indices for a lesson the user has flagged "not_understood". */
  getNotUnderstood: (lessonId: string) => number[];
  /** All teach indices flagged "not_understood" across every lesson. */
  getAllNotUnderstood: () => Array<{ lessonId: string; teachIndex: number }>;
  /** True when at least one card in this lesson is marked not_understood. */
  hasNotUnderstood: (lessonId: string) => boolean;
  /** Wipe marks for a single lesson (e.g. after the user finishes it cleanly). */
  clearForLesson: (lessonId: string) => void;
  /** Wipe everything. Used by the account page "reset progress" button. */
  clearAll: () => void;
}

const TeachUnderstandingContext = createContext<TeachUnderstandingState | null>(null);

const STORAGE_KEY = "astro-quest-teach-understanding";
const CHANGE_EVENT = "astro-quest-teach-understanding-changed";

function writeMap(m: UnderstandingMap) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(m));
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
    return window.localStorage.getItem(STORAGE_KEY) ?? "{}";
  } catch {
    return "{}";
  }
}

const SERVER_SNAPSHOT = "{}";

function parseMarks(raw: string): UnderstandingMap {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") return parsed as UnderstandingMap;
  } catch {
    /* ignore */
  }
  return {};
}

export function TeachUnderstandingProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, readSnapshot, () => SERVER_SNAPSHOT);
  const marks = useMemo(() => parseMarks(raw), [raw]);

  const mark = useCallback((lessonId: string, teachIndex: number, m: TeachMark) => {
    const next = { ...marks };
    next[lessonId] = { ...(next[lessonId] ?? {}) };
    next[lessonId][teachIndex] = m;
    writeMap(next);
  }, [marks]);

  const getNotUnderstood = useCallback((lessonId: string): number[] => {
    const lesson = marks[lessonId];
    if (!lesson) return [];
    return Object.entries(lesson)
      .filter(([, v]) => v === "not_understood")
      .map(([k]) => Number(k))
      .sort((a, b) => a - b);
  }, [marks]);

  const getAllNotUnderstood = useCallback(() => {
    const out: Array<{ lessonId: string; teachIndex: number }> = [];
    for (const [lessonId, lesson] of Object.entries(marks)) {
      for (const [k, v] of Object.entries(lesson)) {
        if (v === "not_understood") out.push({ lessonId, teachIndex: Number(k) });
      }
    }
    return out;
  }, [marks]);

  const hasNotUnderstood = useCallback((lessonId: string): boolean => {
    const lesson = marks[lessonId];
    if (!lesson) return false;
    return Object.values(lesson).some((v) => v === "not_understood");
  }, [marks]);

  const clearForLesson = useCallback((lessonId: string) => {
    const next = { ...marks };
    delete next[lessonId];
    writeMap(next);
  }, [marks]);

  const clearAll = useCallback(() => {
    writeMap({});
  }, []);

  const value = useMemo<TeachUnderstandingState>(
    () => ({ marks, mark, getNotUnderstood, getAllNotUnderstood, hasNotUnderstood, clearForLesson, clearAll }),
    [marks, mark, getNotUnderstood, getAllNotUnderstood, hasNotUnderstood, clearForLesson, clearAll],
  );

  return (
    <TeachUnderstandingContext.Provider value={value}>
      {children}
    </TeachUnderstandingContext.Provider>
  );
}

export function useTeachUnderstanding(): TeachUnderstandingState {
  const ctx = useContext(TeachUnderstandingContext);
  if (!ctx) throw new Error("useTeachUnderstanding must be used within TeachUnderstandingProvider");
  return ctx;
}
