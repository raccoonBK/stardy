// Astronomy theme pack ("星旅"). First shipped theme; data is migrated from
// the original `lib/astro/content.ts` so existing UI keeps working unchanged.
// Future packs (birds, mushrooms, …) live alongside this one and follow the
// same shape.

import {
  BADGES,
  DAILY_CHALLENGE,
  LEADERBOARD,
  TRACKS,
  USER_STATS,
} from "@/lib/astro/content";
import type { ThemePack } from "../types";

export const astronomyPack: ThemePack = {
  id: "astronomy",
  name: { zh: "星旅", en: "StarQuest" },
  tagline: {
    zh: "从零开始，一步一步认识星空",
    en: "From zero, one step at a time",
  },
  icon: "🚀",
  mascot: {
    src: "/mascot-star.png",
    alt: { zh: "星旅吉祥物", en: "StarQuest mascot" },
  },
  palette: {
    primary: "#2563EB",
    primaryLip: "#0b44bc",
    heroSurface: "#2563EB",
    accent: "#FFD93D",
    ground: "warm-cream",
    decorSeed: "stars",
    nightStar: "#E8D5C0",
    nightLip: "#b89e83",
  },
  tracks: TRACKS,
  initialStats: USER_STATS,
  badges: BADGES,
  dailyChallenge: DAILY_CHALLENGE,
  leaderboard: LEADERBOARD,
  features: { tonight: true, collection: true },
  seoLongTails: [
    "今晚月相",
    "今晚流星雨",
    "今晚有什么天文现象",
    "北斗七星怎么找",
    "行星位置查询",
  ],
};
