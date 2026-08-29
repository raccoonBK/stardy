"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/utils/utils";
import { useTheme } from "@/stores/theme-store";
import {
  useOnboarding,
  type DailyGoal,
  type LearnGoal,
} from "@/stores/onboarding-store";

type Step = 0 | 1 | 2 | 3;

const GOALS: { id: LearnGoal; icon: string; titleKey: string; descKey: string }[] = [
  { id: "stargazing", icon: "🔭", titleKey: "onboarding.goalStargazing", descKey: "onboarding.goalStargazingDesc" },
  { id: "cosmos", icon: "🪐", titleKey: "onboarding.goalCosmos", descKey: "onboarding.goalCosmosDesc" },
  { id: "phenomena", icon: "☄️", titleKey: "onboarding.goalPhenomena", descKey: "onboarding.goalPhenomenaDesc" },
];

const DAILIES: { id: DailyGoal; icon: string; titleKey: string; descKey: string }[] = [
  { id: "casual", icon: "🌙", titleKey: "onboarding.dailyCasual", descKey: "onboarding.dailyCasualDesc" },
  { id: "regular", icon: "⭐", titleKey: "onboarding.dailyRegular", descKey: "onboarding.dailyRegularDesc" },
  { id: "serious", icon: "🚀", titleKey: "onboarding.dailySerious", descKey: "onboarding.dailySeriousDesc" },
];

/**
 * First-run onboarding overlay: welcome → pick learning goal → pick daily goal
 * → ready. Renders full-screen over the app on a solid cobalt ground with the
 * star mascot, in the spirit of Duolingo's intro flow. Fixed cobalt look so it
 * reads consistently regardless of the saved theme.
 */
export function OnboardingOverlay() {
  const { t } = useTranslation();
  const { done, finish } = useOnboarding();
  const { theme } = useTheme();
  const [step, setStep] = useState<Step>(0);
  const [goal, setGoal] = useState<LearnGoal | null>(null);
  const [daily, setDaily] = useState<DailyGoal | null>(null);

  if (done) return null;

  function complete() {
    finish({ goal: goal ?? "stargazing", daily: daily ?? "regular" });
  }

  const canNext =
    step === 0 || step === 3 || (step === 1 && goal) || (step === 2 && daily);

  function next() {
    if (step === 3) return complete();
    setStep((s) => (s + 1) as Step);
  }

  return (
    <div
      data-theme={theme}
      data-el="onboarding-overlay"
      className="fixed inset-0 z-[90] flex flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 24%, #3f74ff 0%, #2563EB 48%, #0E4FD4 100%)",
      }}
    >
      {/* star specks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* top bar: step dots + skip */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-[460px] items-center justify-between px-5"
        style={{ paddingTop: "max(52px, env(safe-area-inset-top, 0px))" }}
      >
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn(
                "h-2 rounded-full transition-all",
                i === step ? "w-6 bg-white" : "w-2 bg-white/35",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={complete}
          className="text-sm font-extrabold text-white/80"
          data-el="onboarding-skip"
        >
          {t("onboarding.skip")}
        </button>
      </div>

      {/* body */}
      <div className="relative z-10 mx-auto flex w-full max-w-[460px] flex-1 flex-col px-6 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28 }}
            className="flex flex-1 flex-col justify-center"
          >
            {step === 0 ? (
              <Welcome t={t} />
            ) : step === 1 ? (
              <Chooser
                titleKey="onboarding.goalTitle"
                bodyKey="onboarding.goalBody"
                t={t}
                items={GOALS}
                selected={goal}
                onSelect={(id) => setGoal(id as LearnGoal)}
              />
            ) : step === 2 ? (
              <Chooser
                titleKey="onboarding.dailyTitle"
                bodyKey="onboarding.dailyBody"
                t={t}
                items={DAILIES}
                selected={daily}
                onSelect={(id) => setDaily(id as DailyGoal)}
              />
            ) : (
              <Ready t={t} />
            )}
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={next}
          disabled={!canNext}
          data-el="onboarding-next"
          className={cn(
            "mt-4 h-14 shrink-0 rounded-full text-base font-black transition-all",
            canNext
              ? "bg-[var(--yellow)] text-[#3a2c00] shadow-[0_6px_0_#caa400] active:translate-y-[2px]"
              : "cursor-not-allowed bg-white/15 text-white/40",
          )}
        >
          {step === 0
            ? t("onboarding.start")
            : step === 3
              ? t("onboarding.enter")
              : t("onboarding.next")}
        </button>
      </div>
    </div>
  );
}

function Welcome({ t }: { t: (k: string) => string }) {
  return (
    <div className="text-center">
      <motion.img
        src="/mascot-star.png"
        alt=""
        aria-hidden
        className="mx-auto size-40 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
        initial={{ scale: 0.5, y: 10, opacity: 0 }}
        animate={{ scale: 1, y: [0, -8, 0], opacity: 1 }}
        transition={{ scale: { type: "spring", stiffness: 200, damping: 14 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      />
      <h1 className="mt-6 font-heading text-3xl font-black text-white">
        {t("onboarding.welcomeTitle")}
      </h1>
      <p className="mx-auto mt-3 max-w-[20em] text-[15px] leading-relaxed text-white/85">
        {t("onboarding.welcomeBody")}
      </p>
    </div>
  );
}

function Ready({ t }: { t: (k: string) => string }) {
  return (
    <div className="text-center">
      <motion.img
        src="/mascot-star.png"
        alt=""
        aria-hidden
        className="mx-auto size-40 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
        initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 12 }}
      />
      <h1 className="mt-6 font-heading text-3xl font-black text-white">
        {t("onboarding.readyTitle")}
      </h1>
      <p className="mx-auto mt-3 max-w-[20em] text-[15px] leading-relaxed text-white/85">
        {t("onboarding.readyBody")}
      </p>
    </div>
  );
}

function Chooser({
  titleKey,
  bodyKey,
  t,
  items,
  selected,
  onSelect,
}: {
  titleKey: string;
  bodyKey: string;
  t: (k: string) => string;
  items: { id: string; icon: string; titleKey: string; descKey: string }[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <h1 className="font-heading text-2xl font-black text-white">{t(titleKey)}</h1>
      <p className="mt-2 text-[14px] leading-relaxed text-white/80">{t(bodyKey)}</p>
      <div className="mt-6 grid gap-3">
        {items.map((it) => {
          const active = selected === it.id;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => onSelect(it.id)}
              data-el="onboarding-choice"
              className={cn(
                "flex items-center gap-3 rounded-[20px] border-2 p-3.5 text-left transition-all active:scale-[.99]",
                active
                  ? "border-white bg-white text-[#13294B] shadow-[0_6px_0_rgba(0,0,0,0.18)]"
                  : "border-white/25 bg-white/10 text-white",
              )}
            >
              <span
                className={cn(
                  "grid size-12 shrink-0 place-items-center rounded-[16px] text-3xl",
                  active ? "bg-[var(--yellow)]/40" : "bg-white/10",
                )}
              >
                {it.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-heading text-base font-black">{t(it.titleKey)}</span>
                <span className={cn("block text-xs", active ? "opacity-70" : "opacity-80")}>
                  {t(it.descKey)}
                </span>
              </span>
              {active ? (
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--mint)] text-white">
                  <Check className="size-4" strokeWidth={3.5} />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
