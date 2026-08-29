"use client";

import { useTranslation } from "react-i18next";
import { useGame } from "@/stores/game-store";
import { StatPill } from "@/components/shell/stat-pill";
import { AppShell } from "@/components/shell/app-shell";
import { LEADERBOARD } from "@/lib/astro/content";
import { cn } from "@/utils/utils";
import { pickLocale, type LeaderboardEntry } from "@/lib/astro/types";

const TIER_ICON: Record<LeaderboardEntry["tier"], string> = {
  gold: "🥇",
  silver: "🥈",
  bronze: "🥉",
};
const TIER_COLOR: Record<LeaderboardEntry["tier"], string> = {
  gold: "text-[#C99700]",
  silver: "text-[#7B8794]",
  bronze: "text-[#B06B3A]",
};

export default function LeaderboardPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { stats } = useGame();
  // Reflect the live XP for "me" so it stays in sync with lessons done.
  const rows = LEADERBOARD.map((r) =>
    r.isMe ? { ...r, xp: stats.xp } : r,
  ).sort((a, b) => b.xp - a.xp);
  rows.forEach((r, i) => (r.rank = i + 1));

  return (
    <AppShell dataEl="leaderboard-screen">
      <header className="mb-4 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h1 className="sk-page-title font-heading text-2xl font-black tracking-tight">
            {t("leaderboard.title")}
          </h1>
          <p className="sk-sub truncate text-xs">{t("leaderboard.subtitle")}</p>
        </div>
        <StatPill icon="⭐" value={stats.xp} label={t("leaderboard.myXp")} />
      </header>

      {/* League banner */}
      <section
        data-el="league-banner"
        className="sk-panel mb-5 flex items-center gap-3 rounded-[24px] p-4"
      >
        <span className="grid size-14 shrink-0 place-items-center rounded-[20px] bg-accent text-3xl">
          🥈
        </span>
        <div className="min-w-0">
          <p className="sk-title font-heading text-lg font-black">{t("leaderboard.leagueSilver")}</p>
          <p className="sk-sub text-xs">{t("leaderboard.leagueDesc")}</p>
        </div>
      </section>

      <ol data-el="leaderboard-list" className="grid gap-2.5">
        {rows.map((r) => {
          const topThree = r.rank <= 3;
          return (
            <li
              key={r.name.en}
              data-el={r.isMe ? "leaderboard-me" : "leaderboard-row"}
              className={cn(
                "flex items-center gap-3 rounded-[20px] p-3",
                r.isMe ? "sk-rank-me" : "sk-rank-row",
              )}
            >
              <span
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-full text-sm font-black",
                  topThree && !r.isMe && TIER_COLOR[r.tier],
                )}
                style={{ background: "rgba(0,0,0,0.06)" }}
              >
                {topThree ? TIER_ICON[r.tier] : r.rank}
              </span>
              <span
                className="grid size-10 shrink-0 place-items-center rounded-[14px] text-2xl"
                style={{ background: "rgba(0,0,0,0.06)" }}
              >
                {r.avatar}
              </span>
              <span className="min-w-0 flex-1 truncate font-extrabold">
                {pickLocale(r.name, locale)}
                {r.isMe ? <span className="ml-1 text-[11px] opacity-70">{t("leaderboard.you")}</span> : null}
              </span>
              <span className="shrink-0 text-sm font-black tabular-nums">
                {r.xp}
                <span className="ml-0.5 text-[11px] font-bold opacity-60">{t("leaderboard.points")}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </AppShell>
  );
}
