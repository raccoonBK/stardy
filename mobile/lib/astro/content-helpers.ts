// Localization + lesson-builder helpers, shared by the hand-curated content
// in `content.ts` and the machine-generated content in
// `content-expansion.ts`. Keep this file dependency-free so the auto-generated
// expansion can safely import from it without creating a cycle.

import type { Localized, TeachCard } from "./types";

/** [zh, en] tuple → Localized. Keeps content declarations compact. */
export function L(zh: string, en: string): Localized {
  return { zh, en };
}

/** Compact teach-card builder: visual + [zh,en] title + [zh,en] body. */
export function T(
  visual: string,
  title: [string, string],
  body: [string, string],
): TeachCard {
  return { visual, title: L(title[0], title[1]), body: L(body[0], body[1]) };
}

export interface ChoiceSeed {
  zh: string;
  en: string;
  glyph?: string;
}

export function q(
  id: string,
  prompt: [string, string],
  choices: ChoiceSeed[],
  correctIdx: number,
  explain: [string, string],
  figure?: string,
): {
  id: string;
  kind: "choice" | "image" | "truefalse";
  prompt: Localized;
  figure?: string;
  choices: { id: string; label: Localized; glyph?: string }[];
  correctId: string;
  explain: Localized;
} {
  return {
    id,
    kind: figure ? "image" : "choice",
    prompt: L(prompt[0], prompt[1]),
    figure,
    choices: choices.map((c, i) => ({
      id: `${id}-${i}`,
      label: L(c.zh, c.en),
      glyph: c.glyph,
    })),
    correctId: `${id}-${correctIdx}`,
    explain: L(explain[0], explain[1]),
  };
}
