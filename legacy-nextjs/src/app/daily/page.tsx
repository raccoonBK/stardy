"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useGame } from "@/stores/game-store";
import { StatPill } from "@/components/shell/stat-pill";
import { AppShell } from "@/components/shell/app-shell";
import { QuizCard } from "@/components/astro/quiz-card";
import { FeedbackSheet } from "@/components/astro/feedback-sheet";
import { useTheme } from "@/stores/theme-store";
import { pickLocale } from "@/lib/astro/types";
import { DAILY_CHALLENGE } from "@/lib/astro/content";

const BONUS_XP = 15;

export default function DailyPage() {
  const { t, i18n } = useTranslation();
  const { stats, dailyDone, completeDaily } = useGame();
  const { theme } = useTheme();
  const [answered, setAnswered] = useState(dailyDone);
  const [locallyDone, setLocallyDone] = useState(dailyDone);
  const [sheet, setSheet] = useState<boolean | null>(null);

  const date = new Date(DAILY_CHALLENGE.date).toLocaleDateString(
    i18n.language.startsWith("zh") ? "zh-CN" : "en-US",
    { month: "long", day: "numeric", weekday: "long" },
  );

  function onAnswered(correct: boolean) {
    setAnswered(true);
    setSheet(correct);
    if (!locallyDone) {
      completeDaily(correct ? BONUS_XP : 5);
      setLocallyDone(true);
    }
  }

  return (
    <AppShell dataEl="daily-screen">
      <header className="mb-4 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h1 className="sk-page-title font-heading text-2xl font-black tracking-tight">
            {t("daily.title")}
          </h1>
          <p className="sk-sub truncate text-xs">{date}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <StatPill icon="🔥" value={stats.streak} />
          <StatPill icon="⭐" value={stats.xp} />
        </div>
      </header>

      {/* Reward banner */}
      <section
        data-el="daily-banner"
        className="sk-hero relative mb-5 overflow-hidden rounded-[28px] p-5"
      >
        <div className="sk-hero-blob pointer-events-none absolute -right-10 -top-12 size-40 rounded-full" />
        <div className="pointer-events-none absolute right-6 top-6 size-16 rotate-[9deg] rounded-[24px] bg-white/90" />
        <div className="relative z-10">
          <p className="text-xs font-extrabold uppercase tracking-wide opacity-85">
            {t("daily.challenge")}
          </p>
          <h2 className="mt-1 font-heading text-xl font-black">
            {t("daily.rewardTitle", { xp: BONUS_XP })}
          </h2>
          <p className="mt-1 max-w-[16em] text-[13px] opacity-90">{t("daily.rewardDesc")}</p>
        </div>
      </section>

      {locallyDone && answered ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 rounded-2xl border-2 border-mint bg-[#EFFFF7] px-4 py-3 text-sm font-bold text-[#146c4e]"
          data-el="daily-done-note"
        >
          {t("daily.doneNote")}
        </motion.div>
      ) : null}

      <QuizCard
        question={DAILY_CHALLENGE.question}
        progressLabel={t("daily.todayQuestion")}
        onAnswered={onAnswered}
      />

      <FeedbackSheet
        correct={sheet}
        title={sheet ? t("lesson.correct") : t("lesson.retry")}
        explain={pickLocale(DAILY_CHALLENGE.question.explain, i18n.language)}
        ctaLabel={t("lesson.gotIt")}
        onContinue={() => setSheet(null)}
        isDark={theme === "dark"}
      />
    </AppShell>
  );
}
