"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { TRACKS, USER_STATS, BADGES } from "@/lib/astro/content";
import type { Badge, LessonStatus, Track, UserStats } from "@/lib/astro/types";

interface LessonResult {
  lessonId: string;
  stars: number;
  gainedXp: number;
}

interface GameState {
  stats: UserStats;
  tracks: Track[];
  badges: Badge[];
  dailyDone: boolean;
  /** Complete a lesson: mark node done, unlock next, add xp, bump streak once/day. */
  completeLesson: (result: LessonResult) => void;
  /** Mark today's daily challenge as done and grant bonus xp. */
  completeDaily: (bonusXp: number) => void;
}

const GameContext = createContext<GameState | null>(null);

/** Deep-ish clone of the seed tracks so mutations don't touch module state. */
function seedTracks(): Track[] {
  return TRACKS.map((t) => ({
    ...t,
    nodes: t.nodes.map((n) => ({ ...n })),
  }));
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [stats, setStats] = useState<UserStats>({ ...USER_STATS });
  const [tracks, setTracks] = useState<Track[]>(seedTracks);
  const [badges, setBadges] = useState<Badge[]>(() => BADGES.map((b) => ({ ...b })));
  const [dailyDone, setDailyDone] = useState(false);

  const completeLesson = useCallback((result: LessonResult) => {
    setTracks((prev) =>
      prev.map((track) => {
        const idx = track.nodes.findIndex((n) => n.lesson.id === result.lessonId);
        if (idx === -1) return track;
        const nodes = track.nodes.map((n, i) => {
          if (i === idx) {
            return {
              ...n,
              status: "done" as LessonStatus,
              stars: Math.max(n.stars, result.stars),
            };
          }
          // Unlock the next node in the same track.
          if (i === idx + 1 && n.status === "locked") {
            return { ...n, status: "current" as LessonStatus };
          }
          return n;
        });
        return { ...track, nodes };
      }),
    );

    setStats((prev) => {
      const wasNew = !prev.studiedToday;
      return {
        ...prev,
        xp: prev.xp + result.gainedXp,
        lessonsDone: prev.lessonsDone + 1,
        streak: wasNew ? prev.streak + 1 : prev.streak,
        studiedToday: true,
      };
    });

    // Unlock the perfect-run badge on a 3-star clear.
    if (result.stars >= 3) {
      setBadges((prev) =>
        prev.map((b) => (b.id === "perfect" ? { ...b, unlocked: true } : b)),
      );
    }
  }, []);

  const completeDaily = useCallback((bonusXp: number) => {
    setDailyDone(true);
    setStats((prev) => {
      const wasNew = !prev.studiedToday;
      return {
        ...prev,
        xp: prev.xp + bonusXp,
        streak: wasNew ? prev.streak + 1 : prev.streak,
        studiedToday: true,
      };
    });
  }, []);

  const value = useMemo<GameState>(
    () => ({ stats, tracks, badges, dailyDone, completeLesson, completeDaily }),
    [stats, tracks, badges, dailyDone, completeLesson, completeDaily],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame(): GameState {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
