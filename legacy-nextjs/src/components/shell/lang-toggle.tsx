"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  changeLocale,
  getLocalePreference,
  normalizeLocale,
  type LocaleCode,
  type LocalePreference,
} from "@/i18n";

/**
 * App-styled language toggle. Cycles the active locale between 中文 and English
 * and writes the preference through changeLocale(). Skin follows the ambient
 * theme via the `.sk-pill` class (must sit inside a `[data-theme]`).
 */
export function LangToggle() {
  const { t, i18n } = useTranslation();

  const subscribe = useCallback(
    (sync: () => void) => {
      i18n.on("languageChanged", sync);
      window.addEventListener("futurehome-locale-preference-changed", sync);
      window.addEventListener("storage", sync);
      return () => {
        i18n.off("languageChanged", sync);
        window.removeEventListener("futurehome-locale-preference-changed", sync);
        window.removeEventListener("storage", sync);
      };
    },
    [i18n],
  );

  // Keep the component reactive to preference changes.
  useSyncExternalStore(
    subscribe,
    getLocalePreference,
    () => "system" as LocalePreference,
  );

  const activeLocale =
    normalizeLocale(i18n.resolvedLanguage || i18n.language) ?? "en-US";
  const isZh = activeLocale.startsWith("zh");
  const nextLabel = isZh ? "EN" : "中";

  function toggle() {
    const next: LocaleCode = isZh ? "en-US" : "zh-CN";
    void changeLocale(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      data-el="lang-toggle"
      aria-label={t("language.label")}
      title={t("language.label")}
      className="sk-pill flex h-[38px] items-center gap-1.5 rounded-full px-3 text-sm font-extrabold transition-colors"
    >
      <Languages className="size-4" aria-hidden />
      <span>{nextLabel}</span>
    </button>
  );
}
