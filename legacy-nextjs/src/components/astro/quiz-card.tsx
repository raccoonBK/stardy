"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
import { useTheme } from "@/stores/theme-store";
import { pickLocale, type Question } from "@/lib/astro/types";

interface QuizCardProps {
  question: Question;
  /** Header on the left of the top row, e.g. "第 3/6 题" or "今日题目". */
  progressLabel: string;
  /** Small right-side chip, e.g. combo "×2". */
  comboLabel?: string;
  /** Called once the user has answered (right or wrong). */
  onAnswered?: (correct: boolean) => void;
}

/**
 * Duolingo-style answer surface (NOT a card): a mascot + speech-bubble prompt,
 * then spaced standalone option rows on the page background. Selected option
 * turns blue-tinted; right/wrong states color the row after answering. Skin
 * follows the app theme. Reused by the lesson flow and the daily challenge.
 */
export function QuizCard({
  question,
  progressLabel,
  comboLabel,
  onAnswered,
}: QuizCardProps) {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const locale = i18n.language;
  const [pickedId, setPickedId] = useState<string | null>(null);
  const answered = pickedId !== null;

  function pick(id: string) {
    if (answered) return;
    setPickedId(id);
    onAnswered?.(id === question.correctId);
  }

  return (
    <div data-el="quiz-card" className="grid gap-5">
      {/* progress / combo row */}
      <div className="flex items-center justify-between gap-2">
        <span className={cn("text-xs font-extrabold", isDark ? "text-[#94b5ff]" : "text-primary")}>
          {progressLabel}
        </span>
        {comboLabel ? (
          <span
            className={cn(
              "whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-extrabold",
              isDark ? "bg-white/10 text-white" : "bg-accent text-foreground",
            )}
          >
            {comboLabel}
          </span>
        ) : null}
      </div>

      {/* mascot + speech-bubble prompt */}
      <div className="flex items-start gap-3">
        <img
          src="/mascot-star.png"
          alt=""
          aria-hidden
          className="size-20 shrink-0 object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.22)]"
        />
        <div className="relative mt-2 flex-1">
          {/* bubble tail pointing left toward the mascot */}
          <span
            aria-hidden
            className={cn(
              "absolute -left-2 top-5 size-4 rotate-45 border-b-0 border-r-0",
              isDark
                ? "border-2 border-white/16 bg-[#1b3157]"
                : "border-2 border-black/8 bg-white",
            )}
          />
          <div
            className={cn(
              "relative rounded-[20px] border-2 px-4 py-3",
              isDark
                ? "border-white/16 bg-[#1b3157] text-white"
                : "border-black/8 bg-white text-foreground",
            )}
          >
            {question.figure ? (
              <span className="mb-1 block text-4xl leading-none">{question.figure}</span>
            ) : null}
            <p className="text-[18px] font-extrabold leading-[1.3] tracking-tight">
              {pickLocale(question.prompt, locale)}
            </p>
          </div>
        </div>
      </div>

      {/* standalone option rows */}
      <div className="grid gap-3">
        {question.choices.map((c) => {
          const isPicked = pickedId === c.id;
          const isTheCorrect = c.id === question.correctId;
          const showCorrect = answered && isTheCorrect;
          const showWrong = answered && isPicked && !isTheCorrect;
          return (
            <motion.button
              key={c.id}
              type="button"
              data-el="quiz-option"
              disabled={answered}
              onClick={() => pick(c.id)}
              animate={
                showWrong
                  ? { x: [0, -8, 8, -6, 6, 0] }
                  : showCorrect
                    ? { scale: [1, 1.03, 1] }
                    : {}
              }
              transition={{ duration: 0.4 }}
              className={cn(
                "flex min-h-[58px] items-center gap-3 rounded-[16px] border-2 px-4 text-left text-[16px] font-extrabold transition-all active:translate-y-[2px]",
                // default resting state (chunky bottom lip)
                isDark
                  ? "border-white/14 bg-white/[0.06] text-white shadow-[0_3px_0_rgba(0,0,0,0.3)]"
                  : "border-[#e4e8ee] bg-white text-foreground shadow-[0_3px_0_#e4e8ee]",
                !answered &&
                  (isDark ? "hover:bg-white/10" : "hover:border-[#cfd6df]"),
                showCorrect &&
                  (isDark
                    ? "border-[var(--mint)] bg-[#12382b] text-[#c9f4dd] shadow-[0_3px_0_#0d5c40]"
                    : "border-mint bg-[#E6F9F0] text-[#146c4e] shadow-[0_3px_0_#9fe3c4]"),
                showWrong &&
                  (isDark
                    ? "border-[var(--destructive)] bg-[#3a1818] text-[#f4d6ce] shadow-[0_3px_0_#7a2a22]"
                    : "border-destructive bg-[#FDE9E7] text-[#a3352a] shadow-[0_3px_0_#f3b7b0]"),
              )}
            >
              {c.glyph ? (
                <span className="grid size-8 shrink-0 place-items-center text-2xl">
                  {c.glyph}
                </span>
              ) : null}
              <span className="flex-1">{pickLocale(c.label, locale)}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
