"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Compass, Sparkles, Trophy, User } from "lucide-react";
import { useTheme } from "@/stores/theme-store";

interface TabDef {
  href: string;
  labelKey: string;
  icon: typeof Compass;
}

const TABS: TabDef[] = [
  { href: "/", labelKey: "nav.learn", icon: Compass },
  { href: "/daily", labelKey: "nav.daily", icon: Sparkles },
  { href: "/leaderboard", labelKey: "nav.leaderboard", icon: Trophy },
  { href: "/account", labelKey: "nav.account", icon: User },
];

/**
 * Fixed bottom tab bar shared by all four primary tabs. Its skin follows the
 * app-wide theme (dark star world / light bright) through the `.sk-*` classes.
 */
export function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <nav
      data-el="bottom-nav"
      data-theme={theme}
      className="fixed inset-x-0 bottom-0 z-40 px-3 pt-2"
      style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="sk-nav mx-auto flex w-full max-w-[460px] items-stretch justify-between gap-1 rounded-[22px] p-1.5">
        {TABS.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              data-el={`nav-${tab.href === "/" ? "learn" : tab.href.slice(1)}`}
              data-active={active ? "true" : "false"}
              aria-current={active ? "page" : undefined}
              className="sk-nav-item flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-[16px] py-1.5 text-[11px] font-bold transition-colors"
            >
              <Icon className="size-[22px]" strokeWidth={active ? 2.6 : 2.1} />
              <span className="truncate">{t(tab.labelKey)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
