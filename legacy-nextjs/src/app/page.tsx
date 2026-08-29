"use client";

import { useTranslation } from "react-i18next";
import { ListChecks } from "lucide-react";
import { useGame } from "@/stores/game-store";
import { StatPill } from "@/components/shell/stat-pill";
import { AppShell } from "@/components/shell/app-shell";
import { StarPath } from "@/components/astro/star-path";
import { pickLocale } from "@/lib/astro/types";

export default function LearnPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { stats, tracks } = useGame();
  // One single linear journey — no track switcher.
  const journey = tracks[0];

  const doneCount = journey.nodes.filter((n) => n.status === "done").length;
  // The chapter the learner is currently in: the last chapter marker at or
  // before the current node (falls back to the first chapter).
  const currentIdx = Math.max(
    0,
    journey.nodes.findIndex((n) => n.status === "current"),
  );
  const currentChapter =
    [...journey.nodes.slice(0, currentIdx + 1)].reverse().find((n) => n.chapter)
      ?.chapter ?? journey.nodes[0].chapter;

  const subtitle = stats.studiedToday ? t("learn.studiedToday") : t("learn.notStudied");

  return (
    <AppShell dataEl="learn-screen">
      {/* Top status bar */}
      <header data-el="learn-topbar" className="mb-3 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h1 className="sk-page-title font-heading text-xl font-black">
            {t("learn.appTitle")}
          </h1>
          <p className="sk-sub truncate text-xs">{subtitle}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <StatPill icon="🔥" value={stats.streak} />
          <StatPill icon="✦" value={stats.xp} />
        </div>
      </header>

      {/* Duolingo-style solid section banner (high-contrast white on blue) */}
      <section
        data-el="unit-banner"
        className="mb-6 flex items-stretch gap-3 rounded-[20px] bg-primary p-4 text-white shadow-[0_6px_0_#0b44bc]"
      >
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/75">
            {t("learn.unitProgress", { done: doneCount, total: journey.nodes.length })}
          </p>
          <h2 className="font-heading text-lg font-black leading-tight text-white">
            {currentChapter ? pickLocale(currentChapter, locale) : pickLocale(journey.name, locale)}
          </h2>
          <p className="truncate text-[13px] text-white/85">
            {pickLocale(journey.tagline, locale)}
          </p>
        </div>
        <div className="flex items-center border-l border-white/25 pl-3">
          <ListChecks className="size-6 text-white" strokeWidth={2.4} />
        </div>
      </section>

      {/* One continuous winding lesson path with chapter dividers */}
      <div className="flex-1">
        <StarPath nodes={journey.nodes} />
      </div>
    </AppShell>
  );
}
