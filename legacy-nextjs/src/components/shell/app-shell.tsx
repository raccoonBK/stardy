"use client";

import type { ReactNode } from "react";
import { useTheme } from "@/stores/theme-store";
import { BottomNav } from "@/components/shell/bottom-nav";

/**
 * Shared themed page shell for the four primary tabs. Applies the active
 * theme's ground + decoration layer and renders the (also themed) bottom nav,
 * so every tab shows one consistent skin (dark star world / light bright).
 */
export function AppShell({
  children,
  dataEl,
}: {
  children: ReactNode;
  dataEl: string;
}) {
  const { theme } = useTheme();

  return (
    <main
      data-el={dataEl}
      data-theme={theme}
      className="sk-ground flex min-h-[100svh] flex-col"
    >
      <div className="sk-decor" aria-hidden />
      <div
        className="relative z-10 mx-auto flex w-full max-w-[460px] flex-1 flex-col px-4"
        style={{
          paddingTop: "max(56px, env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(96px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        {children}
      </div>
      <BottomNav />
    </main>
  );
}
