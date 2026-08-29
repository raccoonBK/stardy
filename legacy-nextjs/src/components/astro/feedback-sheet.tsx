"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/utils/utils";

interface FeedbackSheetProps {
  /** null = not answered yet (hidden). */
  correct: boolean | null;
  /** Title line, e.g. "答对了！" / "再想想". */
  title: string;
  /** Explanation body. */
  explain: string;
  /** Continue button label. */
  ctaLabel: string;
  onContinue: () => void;
  isDark: boolean;
  /** Optional secondary CTA, shown above the primary "next" button. */
  secondaryCta?: { label: string; onClick: () => void } | null;
}

export function FeedbackSheet({
  correct,
  title,
  explain,
  ctaLabel,
  onContinue,
  isDark,
  secondaryCta,
}: FeedbackSheetProps) {
  const open = correct !== null;
  const good = correct === true;

  const surface = good
    ? isDark
      ? "bg-[#123528] text-[#c9f4dd]"
      : "bg-[#D7F5E6] text-[#146c4e]"
    : isDark
      ? "bg-[#3a2320] text-[#f4d6ce]"
      : "bg-[#FBE0DC] text-[#a3352a]";

  const btn = good
    ? "bg-[var(--mint)] text-white shadow-[0_5px_0_#22a877]"
    : "bg-[var(--destructive)] text-white shadow-[0_5px_0_#b23b30]";

  const iconWrap = good
    ? "bg-[var(--mint)] text-white"
    : "bg-[var(--destructive)] text-white";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="feedback"
          data-el="feedback-sheet"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className={cn(
            "fixed inset-x-0 bottom-0 z-40 rounded-t-[28px] px-5 pt-5",
            surface,
          )}
          style={{ paddingBottom: "max(20px, env(safe-area-inset-bottom, 0px))" }}
        >
          <div className="mx-auto w-full max-w-[460px]">
            <div className="flex items-start gap-3">
              <motion.span
                initial={{ scale: 0.3, rotate: good ? -30 : 0 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 16, delay: 0.05 }}
                className={cn(
                  "grid size-11 shrink-0 place-items-center rounded-full",
                  iconWrap,
                )}
                aria-hidden
              >
                {good ? (
                  <Check className="size-6" strokeWidth={3.5} />
                ) : (
                  <X className="size-6" strokeWidth={3.5} />
                )}
              </motion.span>
              <div className="min-w-0 pt-0.5">
                <p className="font-heading text-lg font-black leading-tight">{title}</p>
                <p className="mt-1 text-[13px] font-medium leading-[1.45] opacity-90">
                  {explain}
                </p>
              </div>
            </div>

            {secondaryCta ? (
              <button
                type="button"
                onClick={secondaryCta.onClick}
                data-el="feedback-secondary"
                className={cn(
                  "mt-4 w-full rounded-full border-2 border-current/15 bg-white/15 py-3 text-[14px] font-extrabold transition-transform active:translate-y-[2px]",
                  isDark ? "text-white" : "text-[#a3352a]",
                )}
              >
                {secondaryCta.label}
              </button>
            ) : null}

            <button
              type="button"
              onClick={onContinue}
              data-el="feedback-continue"
              className={cn(
                "mt-3 w-full rounded-full py-3.5 text-base font-black transition-transform active:translate-y-[2px]",
                btn,
              )}
            >
              {ctaLabel}
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
