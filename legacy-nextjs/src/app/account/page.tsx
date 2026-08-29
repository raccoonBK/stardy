"use client";

import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import { useGame } from "@/stores/game-store";
import { useTheme, type AppTheme } from "@/stores/theme-store";
import { LangToggle } from "@/components/shell/lang-toggle";
import { AppShell } from "@/components/shell/app-shell";
import { cn } from "@/utils/utils";
import { pickLocale } from "@/lib/astro/types";

export default function AccountPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { stats, badges, tracks } = useGame();
  const { theme, setTheme } = useTheme();

  const unlocked = badges.filter((b) => b.unlocked).length;
  const totalNodes = tracks.reduce((n, tr) => n + tr.nodes.length, 0);
  const doneNodes = tracks.reduce(
    (n, tr) => n + tr.nodes.filter((x) => x.status === "done").length,
    0,
  );

  const themeOptions: { value: AppTheme; icon: typeof Moon; label: string }[] = [
    { value: "dark", icon: Moon, label: t("account.themeDark") },
    { value: "light", icon: Sun, label: t("account.themeLight") },
  ];

  return (
    <AppShell dataEl="account-screen">
      {/* Profile card */}
      <section
        data-el="profile-card"
        className="sk-hero relative mb-5 overflow-hidden rounded-[28px] p-5"
      >
        <div className="sk-hero-blob pointer-events-none absolute -right-12 -top-14 size-44 rounded-full" />
        <div className="relative z-10 flex items-center gap-4">
          <span className="grid size-16 shrink-0 place-items-center rounded-[22px] bg-white text-4xl shadow-[0_8px_0_rgba(0,0,0,0.12)]">
            {stats.avatar}
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="font-heading text-xl font-black">{pickLocale(stats.displayName, locale)}</h1>
            <p className="text-sm opacity-90">{t("account.role", { level: stats.level })}</p>
          </div>
        </div>
      </section>

      {/* Stat grid */}
      <section data-el="stat-grid" className="mb-6 grid grid-cols-3 gap-3">
        <StatBox icon="🔥" value={stats.streak} label={t("account.streak")} />
        <StatBox icon="⭐" value={stats.xp} label={t("account.totalXp")} />
        <StatBox icon="📚" value={`${doneNodes}/${totalNodes}`} label={t("account.progress")} />
      </section>

      {/* Settings: theme + language */}
      <section data-el="settings" className="sk-panel mb-6 grid gap-4 rounded-[22px] p-4">
        <div>
          <p className="sk-title mb-2 text-sm font-black">{t("account.appearance")}</p>
          <div className="grid grid-cols-2 gap-2" role="group" aria-label={t("account.appearance")}>
            {themeOptions.map((opt) => {
              const Icon = opt.icon;
              const active = theme === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setTheme(opt.value)}
                  data-el={`theme-${opt.value}`}
                  aria-pressed={active}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-2xl px-3 py-3 text-sm font-extrabold transition-colors",
                    active ? "sk-accent" : "sk-chip",
                  )}
                >
                  <Icon className="size-4" />
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="sk-title text-sm font-black">{t("account.languageLabel")}</span>
          <LangToggle />
        </div>
      </section>

      {/* Badge wall */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="sk-title font-heading text-lg font-black">{t("account.badgeWall")}</h2>
        <span className="sk-accent rounded-full px-3 py-1.5 text-xs font-extrabold">
          {t("account.unlockedCount", { done: unlocked, total: badges.length })}
        </span>
      </div>

      <section data-el="badge-wall" className="grid grid-cols-4 gap-3">
        {badges.map((b) => (
          <div
            key={b.id}
            data-el="badge-item"
            title={`${pickLocale(b.name, locale)} · ${pickLocale(b.desc, locale)}`}
            className={cn(
              "sk-panel flex flex-col items-center gap-1.5 rounded-[18px] p-2.5 text-center",
              !b.unlocked && "opacity-55",
            )}
          >
            <span className={cn("text-3xl", !b.unlocked && "grayscale")}>
              {b.unlocked ? b.icon : "🔒"}
            </span>
            <span className="text-[10px] font-bold leading-tight opacity-80">
              {pickLocale(b.name, locale)}
            </span>
          </div>
        ))}
      </section>
    </AppShell>
  );
}

function StatBox({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string | number;
  label: string;
}) {
  return (
    <div className="sk-panel grid gap-1 rounded-[20px] p-3 text-center">
      <span className="text-2xl">{icon}</span>
      <span className="sk-title font-heading text-lg font-black tabular-nums">{value}</span>
      <span className="sk-sub text-[11px]">{label}</span>
    </div>
  );
}
