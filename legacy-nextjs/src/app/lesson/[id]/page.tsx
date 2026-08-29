"use client";

import { use } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LessonRunner } from "@/components/astro/lesson-runner";
import { findLesson } from "@/lib/astro/content";
import { useTheme } from "@/stores/theme-store";

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { id } = use(params);
  const lesson = findLesson(id);

  if (!lesson) {
    return (
      <div
        data-theme={theme}
        className="sk-ground flex min-h-[100svh] flex-col items-center justify-center gap-4 px-6 text-center"
      >
        <div className="sk-decor" aria-hidden />
        <div className="relative z-10 grid gap-3">
          <p className="text-5xl">🛰️</p>
          <h1 className="sk-title font-heading text-xl font-extrabold">
            {t("lesson.notFoundTitle")}
          </h1>
          <p className="sk-sub text-sm">{t("lesson.notFoundDesc")}</p>
          <Link
            href="/"
            className="sk-accent mx-auto mt-2 rounded-full px-6 py-3 text-sm font-black"
          >
            {t("lesson.backToMap")}
          </Link>
        </div>
      </div>
    );
  }

  return <LessonRunner lesson={lesson} />;
}
