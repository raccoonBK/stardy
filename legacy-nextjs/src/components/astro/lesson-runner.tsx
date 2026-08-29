"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, X, RotateCcw } from "lucide-react";
import { QuizCard } from "@/components/astro/quiz-card";
import { FeedbackSheet } from "@/components/astro/feedback-sheet";
import { TeachSwipe, type TeachSwipeVerdict } from "@/components/astro/teach-swipe";
import { useGame } from "@/stores/game-store";
import { useTheme } from "@/stores/theme-store";
import { useTeachUnderstanding } from "@/stores/teach-understanding-store";
import { pickLocale, type Lesson, type Question } from "@/lib/astro/types";
import { cn } from "@/utils/utils";

type Phase = "teach_swipe" | "quiz" | "review_teach";

/**
 * Runs one lesson as two phases:
 *   1. teach_swipe  — user swipes each teach card right (understood) /
 *                     left (not_understood) / up (see again)
 *   2. quiz         — Duolingo-style questions with feedback sheet
 *   On any wrong answer, the feedback sheet exposes "复习这张 teach 卡"
 *   which briefly re-shows the related teach card before resuming the quiz.
 */
export function LessonRunner({ lesson }: { lesson: Lesson }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { completeLesson } = useGame();
  const { getNotUnderstood } = useTeachUnderstanding();

  // questions + a back-pointer to the teach card index when the JSON has
  // based_on. Lessons without based_on still work (no review jump).
  const questions = useMemo(() => lesson.questions, [lesson.questions]);

  const [phase, setPhase] = useState<Phase>("teach_swipe");
  const [step, setStep] = useState(0);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [combo, setCombo] = useState(0);
  const [finished, setFinished] = useState(false);
  const [committed, setCommitted] = useState(false);
  // Index of the teach card the user is currently reviewing (0-based).
  const [reviewingTeachIdx, setReviewingTeachIdx] = useState<number | null>(null);

  const total = questions.length;
  const q = questions[step];
  const progressPct = Math.round((step / total) * 100);

  // Map question.based_on (e.g. "teach[2]") → 0-based teach index.
  function teachIdxFromBasedOn(q: Question): number | null {
    const raw = (q as Question & { based_on?: string }).based_on;
    if (!raw) return null;
    const m = /^teach\[(\d+)\]$/.exec(raw);
    if (!m) return null;
    return parseInt(m[1], 10) - 1;
  }

  function handleTeachSwipeDone(verdicts: TeachSwipeVerdict[]) {
    void verdicts; // store already marked each one; we just transition.
    setPhase("quiz");
  }

  function handleAnswered(correct: boolean) {
    setLastCorrect(correct);
    if (correct) {
      setCorrectCount((c) => c + 1);
      setCombo((c) => c + 1);
    } else {
      setCombo(0);
    }
  }

  function handleNext() {
    if (step + 1 < total) {
      setStep((s) => s + 1);
      setLastCorrect(null);
    } else {
      setFinished(true);
    }
  }

  // Wrong answer → user can review the teach card linked to this question.
  function startReview() {
    const idx = teachIdxFromBasedOn(q);
    if (idx === null || idx < 0 || idx >= lesson.teach.length) {
      // No based_on — fall through to next question.
      handleNext();
      return;
    }
    setReviewingTeachIdx(idx);
    setPhase("review_teach");
  }

  function finishReview() {
    setReviewingTeachIdx(null);
    setPhase("quiz");
    // Leave `lastCorrect` cleared so the next answer registers cleanly.
    setLastCorrect(null);
  }

  const stars = useMemo(() => {
    const ratio = correctCount / total;
    if (ratio >= 0.99) return 3;
    if (ratio >= 0.6) return 2;
    if (ratio > 0) return 1;
    return 1;
  }, [correctCount, total]);

  function commitAndExit() {
    if (!committed) {
      completeLesson({
        lessonId: lesson.id,
        stars,
        gainedXp: lesson.xp + correctCount * 2,
      });
      setCommitted(true);
    }
    router.push("/");
  }

  if (finished) {
    const notUnderstoodCount = getNotUnderstood(lesson.id).length;
    return (
      <SettleScreen
        lesson={lesson}
        stars={stars}
        correctCount={correctCount}
        total={total}
        gainedXp={lesson.xp + correctCount * 2}
        notUnderstoodCount={notUnderstoodCount}
        onDone={commitAndExit}
      />
    );
  }

  // Phase 1: swipe through all teach cards.
  if (phase === "teach_swipe") {
    return (
      <div data-theme={theme} className="sk-ground relative flex min-h-[100svh] flex-col pb-40">
        <div className="sk-decor" aria-hidden />
        <button
          type="button"
          aria-label={t("lesson.exit")}
          onClick={() => router.push("/")}
          data-el="lesson-exit"
          className={cn(
            "absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-full",
            isDark ? "bg-white/10 text-white" : "bg-black/8 text-foreground",
          )}
          style={{ marginTop: "max(8px, env(safe-area-inset-top, 0px))" }}
        >
          <X className="size-5" />
        </button>
        <TeachSwipe
          lessonId={lesson.id}
          cards={lesson.teach}
          onComplete={handleTeachSwipeDone}
        />
      </div>
    );
  }

  // Phase 3 (optional): wrong answer → re-show the linked teach card.
  if (phase === "review_teach" && reviewingTeachIdx !== null) {
    const card = lesson.teach[reviewingTeachIdx];
    return (
      <ReviewTeachScreen
        card={card}
        isDark={isDark}
        locale={locale}
        onDone={finishReview}
        onSkip={finishReview}
      />
    );
  }

  // Phase 2: question loop.
  const accent = isDark ? "bg-[var(--night-star)]" : "bg-primary";

  // Wrong-answer feedback sheet gets an extra "复习这张 teach 卡" CTA
  // when the question has a based_on link.
  const reviewable =
    lastCorrect === false && teachIdxFromBasedOn(q) !== null;

  return (
    <div data-theme={theme} className="sk-ground relative flex min-h-[100svh] flex-col">
      <div className="sk-decor" aria-hidden />
      {/* header: progress + close */}
      <header
        className="relative z-10 mx-auto flex w-full max-w-[460px] items-center gap-3 px-4"
        style={{ paddingTop: "max(56px, env(safe-area-inset-top, 0px))" }}
      >
        <button
          type="button"
          aria-label={t("lesson.exit")}
          onClick={() => router.push("/")}
          data-el="lesson-exit"
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-full",
            isDark ? "bg-white/10 text-white" : "bg-black/8 text-foreground",
          )}
        >
          <X className="size-5" />
        </button>
        <div className={cn("h-3 flex-1 overflow-hidden rounded-full", isDark ? "bg-white/12" : "bg-black/8")}>
          <motion.div
            className={cn("h-full rounded-full", accent)}
            initial={false}
            animate={{ width: `${progressPct}%` }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          />
        </div>
        <span className="sk-title shrink-0 text-sm font-extrabold">🔥</span>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-[460px] flex-1 flex-col justify-center px-4 py-6 pb-40">
        <QuizCard
          key={q.id}
          question={q}
          progressLabel={t("lesson.question", { current: step + 1, total })}
          comboLabel={combo >= 2 ? t("lesson.combo", { count: combo }) : undefined}
          onAnswered={handleAnswered}
        />
      </div>

      <FeedbackSheet
        correct={lastCorrect}
        title={lastCorrect ? t("lesson.correct") : t("lesson.retry")}
        explain={pickLocale(q.explain, locale)}
        ctaLabel={step + 1 < total ? t("lesson.next") : t("lesson.finish")}
        onContinue={handleNext}
        isDark={isDark}
        secondaryCta={
          reviewable
            ? {
                label: "复习这张 teach 卡",
                onClick: startReview,
              }
            : null
        }
      />
    </div>
  );
}

// Single teach card shown briefly when the user wants to review after a wrong answer.
function ReviewTeachScreen({
  card,
  isDark,
  locale,
  onDone,
  onSkip,
}: {
  card: Lesson["teach"][number];
  isDark: boolean;
  locale: string;
  onDone: () => void;
  onSkip: () => void;
}) {
  return (
    <div data-theme={isDark ? "dark" : "light"} className="sk-ground relative flex min-h-[100svh] flex-col">
      <div className="sk-decor" aria-hidden />
      <div className="relative z-10 mx-auto flex w-full max-w-[460px] flex-1 flex-col items-center justify-center gap-6 px-4">
        <span className="text-xs font-black uppercase tracking-[0.12em] text-primary">复习一下</span>
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 24 }}
          data-el="review-teach-card"
          className={cn(
            "grid w-full gap-4 rounded-[28px] border-2 p-6 text-center shadow-[0_18px_40px_rgba(0,0,0,0.18)]",
            isDark
              ? "border-white/14 bg-[#1b3157] text-white"
              : "border-black/[0.08] bg-white text-foreground",
          )}
        >
          <span className="text-6xl leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
            {card.visual}
          </span>
          <h2 className="font-heading text-2xl font-black leading-tight tracking-tight">
            {pickLocale(card.title, locale)}
          </h2>
          <p className="text-[15px] font-medium leading-[1.55] opacity-85">
            {pickLocale(card.body, locale)}
          </p>
        </motion.div>
        <button
          type="button"
          onClick={onDone}
          data-el="review-teach-done"
          className={cn(
            "h-14 w-full rounded-full text-base font-black transition-transform active:translate-y-[2px]",
            isDark
              ? "bg-[var(--night-star)] text-[#13294b] shadow-[0_6px_0_#b89e83]"
              : "bg-primary text-white shadow-[0_6px_0_#0b44bc]",
          )}
        >
          <span className="inline-flex items-center justify-center gap-2">
            <Check className="size-5" strokeWidth={3} /> 我记住了，继续作答
          </span>
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-bold opacity-60 underline-offset-2 hover:opacity-100 hover:underline"
        >
          跳过，继续作答
        </button>
      </div>
    </div>
  );
}

function SettleScreen({
  lesson,
  stars,
  correctCount,
  total,
  gainedXp,
  notUnderstoodCount,
  onDone,
}: {
  lesson: Lesson;
  stars: number;
  correctCount: number;
  total: number;
  gainedXp: number;
  notUnderstoodCount: number;
  onDone: () => void;
}) {
  const { theme } = useTheme();
  const { i18n } = useTranslation();
  const isDark = theme === "dark";
  const locale = i18n.language;

  const accent = isDark ? "bg-[var(--night-star)]" : "bg-primary";
  const accentText = isDark ? "text-[#13294B]" : "text-primary-foreground";
  const accentShadow = isDark ? "shadow-[0_6px_0_#b89e83]" : "shadow-[0_6px_0_#0b44bc]";
  const heroGlow = isDark
    ? "shadow-[0_0_40px_rgba(232,213,192,0.6)]"
    : "shadow-[0_10px_0_rgba(17,17,17,0.1)]";

  return (
    <div data-theme={theme} className="sk-ground relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <div className="sk-decor" aria-hidden />
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative z-10 grid w-full max-w-[360px] gap-5"
        data-el="lesson-settle"
      >
        <div className={cn("mx-auto grid size-24 place-items-center rounded-[28px] text-6xl", accent, heroGlow)}>
          {lesson.icon}
        </div>
        <div>
          <h2 className="sk-title font-heading text-2xl font-black">
            关卡点亮！
          </h2>
          <p className="sk-sub mt-1 text-sm">
            {pickLocale(lesson.title, locale)} · {pickLocale(lesson.subtitle, locale)}
          </p>
        </div>

        <div className="text-4xl tracking-widest text-[#FFC400]">
          {"★".repeat(stars)}
          <span className={isDark ? "text-white/25" : "text-black/15"}>
            {"☆".repeat(3 - stars)}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <SettleStat label="答对" value={`${correctCount}/${total}`} />
          <SettleStat label="获得经验" value={`+${gainedXp}`} />
          <SettleStat label="连续打卡" value="+1 🔥" />
        </div>

        {notUnderstoodCount > 0 ? (
          <div
            data-el="settle-needs-review"
            className={cn(
              "rounded-2xl border-2 px-4 py-3 text-left",
              isDark
                ? "border-[var(--destructive)]/40 bg-[var(--destructive)]/10 text-[#f4d6ce]"
                : "border-[var(--destructive)]/30 bg-[#FDE9E7] text-[#a3352a]",
            )}
          >
            <p className="text-xs font-extrabold uppercase tracking-wider">待复习</p>
            <p className="mt-1 text-sm font-bold">
              本课有 {notUnderstoodCount} 张 teach 卡标了&ldquo;不理解&rdquo;，已加入复习队列。
            </p>
          </div>
        ) : null}

        <button
          type="button"
          onClick={onDone}
          data-el="lesson-finish"
          className={cn("mt-2 h-14 rounded-full text-base font-black", accent, accentText, accentShadow)}
        >
          <span className="inline-flex items-center justify-center gap-2">
            <RotateCcw className="size-4" /> 领取奖励，回到星图
          </span>
        </button>
      </motion.div>
    </div>
  );
}

function SettleStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="sk-panel grid gap-1 rounded-2xl px-2 py-3">
      <span className="sk-title text-base font-black">{value}</span>
      <span className="sk-sub text-[11px]">{label}</span>
    </div>
  );
}
