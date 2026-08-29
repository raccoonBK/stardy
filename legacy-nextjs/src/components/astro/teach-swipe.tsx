"use client";

// Tinder-style teach card swipe. The user sees one teach card at a time
// and swipes:
//   right  → "understood"     (绿色)
//   left   → "not_understood" (红色 → 进复习队列)
//   up     → "see again"      (橙色 → 卡回到队列首位)
// Drag, buttons, and arrow keys all work. When every card is decided the
// caller\'s `onComplete` fires with the per-card verdict.

import { useCallback, useMemo, useState } from "react";
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import { Check, X, RotateCcw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/stores/theme-store";
import { useTeachUnderstanding, type TeachMark } from "@/stores/teach-understanding-store";
import { pickLocale, type TeachCard } from "@/lib/astro/types";
import { cn } from "@/utils/utils";

const SWIPE_THRESHOLD = 120; // px to count as a swipe

export interface TeachSwipeVerdict {
  /** 1-based index of the teach card the user just decided. */
  index: number;
  mark: TeachMark | "see_again";
}

interface TeachSwipeProps {
  lessonId: string;
  cards: TeachCard[];
  /** Called when the user has decided on every card. */
  onComplete: (verdicts: TeachSwipeVerdict[]) => void;
  /** Optional: jump straight to a specific card (used when re-opening a card). */
  startIndex?: number;
  /** Optional: notified when the active card index changes (for the parent to wire review-jumps). */
  onActiveIndexChange?: (index: number) => void;
}

export function TeachSwipe({
  lessonId,
  cards,
  onComplete,
  startIndex = 0,
  onActiveIndexChange,
}: TeachSwipeProps) {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { mark } = useTeachUnderstanding();

  // The deck: cards the user still needs to decide on, in display order.
  // "See again" pushes the active card to the end of the queue.
  const [deck, setDeck] = useState<number[]>(() =>
    Array.from({ length: cards.length }, (_, i) => i),
  );
  const [activeIdx, setActiveIdx] = useState(startIndex);
  const [verdicts, setVerdicts] = useState<TeachSwipeVerdict[]>([]);
  const [exitDir, setExitDir] = useState<"left" |"right" |"up" | null>(null);

  const total = cards.length;
  const doneCount = verdicts.length;

  // Motion values for the top card.
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Hint overlays grow with the drag offset.
  const rightHintOpacity = useTransform(x, [0, SWIPE_THRESHOLD], [0, 1]);
  const leftHintOpacity = useTransform(x, [-SWIPE_THRESHOLD, 0], [1, 0]);
  const upHintOpacity = useTransform(y, [-SWIPE_THRESHOLD, 0], [1, 0]);

  const rotate = useTransform(x, [-SWIPE_THRESHOLD * 2, 0, SWIPE_THRESHOLD * 2], [-15, 0, 15]);


  const handleSwipeRight = useCallback(() => {
    setExitDir("right");
    const verdict: TeachSwipeVerdict = { index: activeIdx, mark: "understood" };
    setVerdicts((vs) => {
      const next = [...vs, verdict];
      if (next.length === total) onComplete(next);
      return next;
    });
    mark(lessonId, activeIdx, "understood");
    setActiveIdx((cur) => {
      const n = cur + 1;
      onActiveIndexChange?.(n);
      return n;
    });
    x.set(0);
    y.set(0);
    setExitDir(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, lessonId, mark, onActiveIndexChange, x, y]);

  const handleSwipeLeft = useCallback(() => {
    setExitDir("left");
    const verdict: TeachSwipeVerdict = { index: activeIdx, mark: "not_understood" };
    setVerdicts((vs) => {
      const next = [...vs, verdict];
      if (next.length === total) onComplete(next);
      return next;
    });
    mark(lessonId, activeIdx, "not_understood");
    setActiveIdx((cur) => {
      const n = cur + 1;
      onActiveIndexChange?.(n);
      return n;
    });
    x.set(0);
    y.set(0);
    setExitDir(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, lessonId, mark, onActiveIndexChange, x, y]);

  const handleSwipeUp = useCallback(() => {
    setExitDir("up");
    // "See again": the card stays in the deck — pushed to the back of the queue.
    const verdict: TeachSwipeVerdict = { index: activeIdx, mark: "see_again" };
    setVerdicts((vs) => {
      const next = [...vs, verdict];
      if (next.length === total) onComplete(next);
      return next;
    });
    setDeck((d) => {
      const without = d.filter((i) => i !== activeIdx);
      return [...without, activeIdx];
    });
    setActiveIdx((cur) => {
      const n = cur + 1;
      onActiveIndexChange?.(n);
      return n;
    });
    x.set(0);
    y.set(0);
    setExitDir(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, onActiveIndexChange, x, y]);

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const { offset } = info;
      if (offset.y < -SWIPE_THRESHOLD && Math.abs(offset.y) > Math.abs(offset.x)) {
        handleSwipeUp();
      } else if (offset.x > SWIPE_THRESHOLD) {
        handleSwipeRight();
      } else if (offset.x < -SWIPE_THRESHOLD) {
        handleSwipeLeft();
      } else {
        x.set(0);
        y.set(0);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // Keyboard shortcuts: ←/→/↑ arrows + space to advance. Skip on form inputs.
  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleSwipeRight();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleSwipeLeft();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        handleSwipeUp();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const activeCard = useMemo(() => {
    if (activeIdx >= deck.length) return null;
    const cardIdx = deck[activeIdx];
    return { cardIdx, card: cards[cardIdx] };
  }, [activeIdx, deck, cards]);

  // Decide status for each of the N cards (for the progress dots).
  const statusByIndex = useMemo(() => {
    const map: Record<number, "understood" | "not_understood" | "pending" | "see_again"> = {};
    cards.forEach((_, i) => (map[i] = "pending"));
    verdicts.forEach((v) => {
      if (v.mark === "understood") map[v.index] = "understood";
      else if (v.mark === "not_understood") map[v.index] = "not_understood";
      else if (v.mark === "see_again") map[v.index] = "see_again";
    });
    return map;
  }, [cards, verdicts]);

  return (
    <div
      data-el="teach-swipe"
      tabIndex={0}
      onKeyDown={onKey}
      className="relative mx-auto flex w-full max-w-[460px] flex-col px-4 outline-none"
      style={{ paddingTop: "max(56px, env(safe-area-inset-top, 0px))" }}
    >
      {/* Progress dots + counter */}
      <div className="mb-4 flex items-center gap-2">
        <span className={cn("text-xs font-extrabold", isDark ? "text-[#94b5ff]" : "text-primary")}>
          {doneCount + 1}/{total}
        </span>
        <div className="flex flex-1 items-center gap-1.5">
          {cards.map((_, i) => {
            const s = statusByIndex[i];
            const tone =
              s === "understood"
                ? isDark
                  ? "bg-[var(--mint)]"
                  : "bg-[var(--mint)]"
                : s === "not_understood"
                  ? "bg-[var(--destructive)]"
                  : s === "see_again"
                    ? isDark
                      ? "bg-[var(--night-warm)]"
                      : "bg-[var(--yellow)]"
                    : isDark
                      ? "bg-white/15"
                      : "bg-black/10";
            return (
              <span
                key={i}
                className={cn("h-1.5 flex-1 rounded-full transition-colors", tone)}
              />
            );
          })}
        </div>
      </div>

      {/* Hint legend (subtle, at top so users see it once) */}
      <div
        className={cn(
          "mb-3 flex items-center justify-between rounded-full px-4 py-2 text-[11px] font-bold",
          isDark ? "bg-white/[0.06] text-white/70" : "bg-black/[0.05] text-foreground/70",
        )}
      >
        <span className="flex items-center gap-1.5">
          <X className="size-3.5 text-[var(--destructive)]" strokeWidth={3} />
          不理解 · 左滑
        </span>
        <span className="flex items-center gap-1.5">
          <RotateCcw className="size-3.5 text-[var(--yellow)]" strokeWidth={3} />
          再看一遍 · 上滑
        </span>
        <span className="flex items-center gap-1.5">
          <Check className="size-3.5 text-[var(--mint)]" strokeWidth={3} />
          理解 · 右滑
        </span>
      </div>

      {/* The card stage */}
      <div
        className="relative mx-auto h-[420px] w-full"
        data-el="teach-swipe-stage"
      >
        {/* Background "next" card peeking under, for visual depth. */}
        {activeCard && activeIdx + 1 < deck.length ? (
          <div
            aria-hidden
            className={cn(
              "absolute inset-x-6 inset-y-3 rounded-[28px] border-2",
              isDark
                ? "border-white/10 bg-white/[0.04]"
                : "border-black/[0.06] bg-white/80",
            )}
            style={{ transform: "scale(0.96)" }}
          />
        ) : null}

        {activeCard ? (
          <motion.div
            key={activeCard.cardIdx}
            data-el={`teach-card-${activeCard.cardIdx + 1}`}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={0.7}
            style={{ x, y, rotate }}
            onDragEnd={handleDragEnd}
            initial={
              exitDir === "up"
                ? { y: -400, opacity: 0, rotate: 0 }
                : exitDir === "right"
                  ? { x: 400, opacity: 0, rotate: 20 }
                  : exitDir === "left"
                    ? { x: -400, opacity: 0, rotate: -20 }
                    : { x: 0, y: 0, opacity: 0, scale: 0.95 }
            }
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            exit={
              exitDir === "up"
                ? { y: -400, opacity: 0, rotate: 0 }
                : exitDir === "right"
                  ? { x: 400, opacity: 0, rotate: 20 }
                  : exitDir === "left"
                    ? { x: -400, opacity: 0, rotate: -20 }
                    : { opacity: 0 }
            }
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className={cn(
              "absolute inset-0 grid cursor-grab place-items-center rounded-[28px] border-2 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] active:cursor-grabbing",
              isDark
                ? "border-white/14 bg-[#1b3157] text-white"
                : "border-black/[0.08] bg-white text-foreground",
            )}
          >
            {/* Visual + title */}
            <div className="flex h-full w-full flex-col items-center gap-5 text-center">
              <span className="text-7xl leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                {activeCard.card.visual}
              </span>
              <h3 className="font-heading text-2xl font-black leading-tight tracking-tight">
                {pickLocale(activeCard.card.title, locale)}
              </h3>
              <p className="max-w-[18em] text-[15px] font-medium leading-[1.55] opacity-85">
                {pickLocale(activeCard.card.body, locale)}
              </p>
            </div>

            {/* Drag hint overlays */}
            <motion.div
              style={{ opacity: rightHintOpacity }}
              className="pointer-events-none absolute right-5 top-5 rounded-full bg-[var(--mint)] px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_0_#22a877]"
            >
              理解 ✓
            </motion.div>
            <motion.div
              style={{ opacity: leftHintOpacity }}
              className="pointer-events-none absolute left-5 top-5 rounded-full bg-[var(--destructive)] px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_0_#b23b30]"
            >
              不理解 ✗
            </motion.div>
            <motion.div
              style={{ opacity: upHintOpacity }}
              className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 rounded-full bg-[var(--yellow)] px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#3a2c00] shadow-[0_4px_0_#caa400]"
            >
              再看一遍 ↺
            </motion.div>
          </motion.div>
        ) : (
          <div
            className={cn(
              "absolute inset-0 grid place-items-center rounded-[28px] border-2 text-center",
              isDark ? "border-white/14 bg-[#1b3157]/60" : "border-black/[0.08] bg-white/60",
            )}
          >
            <p className="text-sm font-bold opacity-70">
              {doneCount === total ? "✓ 全部 teach 卡已过完" : "暂无更多卡片"}
            </p>
          </div>
        )}
      </div>

      {/* Bottom action buttons — fallback for non-touch / accessibility */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="不理解 · 左滑"
          onClick={handleSwipeLeft}
          data-el="teach-swipe-left"
          className={cn(
            "grid size-14 place-items-center rounded-full border-2 transition-transform active:scale-95",
            isDark
              ? "border-white/14 bg-white/[0.06] text-[var(--destructive)]"
              : "border-black/[0.08] bg-white text-[var(--destructive)]",
            "shadow-[0_4px_0_rgba(0,0,0,0.12)]",
          )}
        >
          <X className="size-7" strokeWidth={3} />
        </button>
        <button
          type="button"
          aria-label="再看一遍 · 上滑"
          onClick={handleSwipeUp}
          data-el="teach-swipe-up"
          className={cn(
            "grid size-12 place-items-center rounded-full border-2 transition-transform active:scale-95",
            isDark
              ? "border-white/14 bg-white/[0.06] text-[var(--yellow)]"
              : "border-black/[0.08] bg-white text-[#caa400]",
            "shadow-[0_4px_0_rgba(0,0,0,0.12)]",
          )}
        >
          <RotateCcw className="size-5" strokeWidth={3} />
        </button>
        <button
          type="button"
          aria-label="理解 · 右滑"
          onClick={handleSwipeRight}
          data-el="teach-swipe-right"
          className={cn(
            "grid size-14 place-items-center rounded-full border-2 transition-transform active:scale-95",
            isDark
              ? "border-white/14 bg-white/[0.06] text-[var(--mint)]"
              : "border-black/[0.08] bg-white text-[var(--mint)]",
            "shadow-[0_4px_0_rgba(0,0,0,0.12)]",
          )}
        >
          <Check className="size-7" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
