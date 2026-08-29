"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Star, Check, Lock } from "lucide-react";
import { cn } from "@/utils/utils";
import { useTheme } from "@/stores/theme-store";
import { pickLocale, type LessonNode } from "@/lib/astro/types";

interface StarPathProps {
  nodes: LessonNode[];
}

// Bold left↔right S-curve offsets (in % from center) applied down the path,
// like Duolingo's winding lesson trail. Larger amplitude = more dramatic zig-zag.
const CURVE = [0, 26, 34, 26, 0, -26, -34, -26];

/**
 * Duolingo-style single-column winding lesson path. Big chunky 3D circular
 * buttons alternate left/right down a gentle S-curve; the current lesson is
 * the emphasized hero. A treasure chest and mascot decorate the trail. Skin
 * follows the app theme.
 */
export function StarPath({ nodes }: StarPathProps) {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const locale = i18n.language;
  const isDark = theme === "dark";

  // Render earliest at top → latest at bottom (natural downward progression).
  const rowH = 128;
  const chapterGap = 76; // extra vertical space reserved above a chapter divider

  // Precompute each node's top, inserting a gap before chapter dividers.
  // (Use a single reduce pass to keep `acc` immutable per render.)
  const layout = nodes.reduce<{ tops: number[]; acc: number }>(
    (state, n, i) => {
      const top = state.acc + (i > 0 && n.chapter ? chapterGap : 0);
      return { tops: [...state.tops, top], acc: top + rowH };
    },
    { tops: [], acc: 48 },
  );
  const tops = layout.tops;
  const height = layout.acc + 96;

  // Decorations anchored between specific rows.
  const chestRow = Math.min(1, nodes.length - 1);

  return (
    <div
      data-el="star-path"
      className="relative mx-auto w-full max-w-[360px]"
      style={{ height }}
    >
      {/* Chapter dividers */}
      {nodes.map((n, i) =>
        n.chapter ? (
          <div
            key={`chapter-${i}`}
            data-el="chapter-divider"
            className="absolute inset-x-0 flex items-center gap-3 px-2"
            style={{ top: tops[i] - 52 }}
          >
            <span className={cn("h-px flex-1", isDark ? "bg-white/20" : "bg-black/12")} />
            <span
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wide",
                isDark ? "bg-white/12 text-[var(--night-star)]" : "bg-primary/12 text-primary",
              )}
            >
              {pickLocale(n.chapter, locale)}
            </span>
            <span className={cn("h-px flex-1", isDark ? "bg-white/20" : "bg-black/12")} />
          </div>
        ) : null,
      )}

      {nodes.map((n, i) => {
        const top = tops[i];
        const offset = CURVE[i % CURVE.length];
        const isCurrent = n.status === "current";
        const isDone = n.status === "done";
        const isLocked = n.status === "locked";

        // Chunky 3D button colors + bottom "lip" shadow per state/theme.
        const btnBase =
          "relative grid size-[68px] place-items-center rounded-full transition-transform active:translate-y-[3px]";
        let btnSkin = "";
        if (isCurrent) {
          btnSkin = isDark
            ? "bg-[var(--night-star)] text-[#13294B] shadow-[0_7px_0_#b89e83]"
            : "bg-primary text-white shadow-[0_7px_0_#0b44bc]";
        } else if (isDone) {
          btnSkin = "bg-mint text-white shadow-[0_7px_0_#22a877]";
        } else {
          btnSkin = isDark
            ? "bg-[rgba(156,181,201,0.28)] text-white/45 shadow-[0_7px_0_rgba(0,0,0,0.25)]"
            : "bg-[#E1E6EC] text-[#9aa6b2] shadow-[0_6px_0_#c3ccd6]";
        }

        const icon = isDone ? (
          <Check className="size-8" strokeWidth={3.5} />
        ) : isLocked ? (
          <Lock className="size-6" strokeWidth={2.6} />
        ) : (
          <Star className="size-8 fill-current" strokeWidth={0} />
        );

        const button = (
          <span className="relative flex flex-col items-center">
            {/* pulsing halo ring for the current node */}
            {isCurrent ? (
              <span
                aria-hidden
                className={cn(
                  "absolute -inset-2 rounded-full",
                  isDark ? "animate-node-pulse" : "animate-tile-pulse",
                )}
              />
            ) : null}
            <span className={cn(btnBase, btnSkin)}>{icon}</span>
            <span
              className={cn(
                "mt-2 rounded-full px-2 py-0.5 text-[12px] font-extrabold leading-tight",
                isCurrent
                  ? isDark
                    ? "bg-[rgba(232,213,192,0.16)] text-[var(--night-star)]"
                    : "bg-primary/10 text-primary"
                  : isLocked
                    ? isDark
                      ? "text-white/45"
                      : "text-[#9aa6b2]"
                    : "sk-title",
              )}
            >
              {pickLocale(n.lesson.title, locale)}
            </span>
            {isDone ? (
              <span className="text-[11px] text-[#F0B900]">
                {"★".repeat(n.stars)}
                {"☆".repeat(3 - n.stars)}
              </span>
            ) : null}
          </span>
        );

        const wrapperClass =
          "absolute left-1/2 flex -translate-x-1/2 flex-col items-center";
        const style = {
          top,
          transform: `translateX(calc(-50% + ${offset}%))`,
        };

        if (isLocked) {
          return (
            <div
              key={n.lesson.id}
              className={wrapperClass}
              style={style}
              data-el="star-node-locked"
              aria-label={`${t("learn.locked")}：${pickLocale(n.lesson.title, locale)}`}
            >
              {button}
            </div>
          );
        }

        return (
          <Link
            key={n.lesson.id}
            href={`/lesson/${n.lesson.id}`}
            className={wrapperClass}
            style={style}
            data-el={isCurrent ? "star-node-current" : "star-node-done"}
            aria-label={`${isCurrent ? t("learn.start") : t("learn.review")}：${pickLocale(n.lesson.title, locale)}`}
          >
            {button}
          </Link>
        );
      })}

      {/* Decorative treasure chest to the side of the path */}
      <div
        aria-hidden
        className="absolute right-2 grid size-[54px] place-items-center rounded-2xl text-3xl"
        style={{ top: tops[chestRow] + 12 }}
      >
        🧰
      </div>

      {/* Decorative mascot near the bottom of the trail */}
      <img
        src="/mascot-star.png"
        alt=""
        aria-hidden
        className="absolute left-1 size-16 object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
        style={{ top: tops[nodes.length - 1] - 24 }}
      />
    </div>
  );
}
