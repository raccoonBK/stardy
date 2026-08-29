// Theme pack types — a theme pack is one self-contained knowledge domain
// (astronomy, birds, mushrooms, …) that ships its own brand, content, and
// i18n strings. The generic app shell renders whatever theme pack is active.

import type { Badge, DailyChallenge, LeaderboardEntry, Localized, Track, UserStats } from "@/lib/astro/types";

/** A handful of named brand slots. Components read these to apply the theme. */
export interface ThemePalette {
  /** Primary action color (buttons, banners, current node). */
  primary: string;
  /** Primary action color's deep "lip" shadow. */
  primaryLip: string;
  /** Surface tint for hero panels. */
  heroSurface: string;
  /** Accent (XP, stars, "you" highlights). */
  accent: string;
  /** Background ground color (CSS gradient seed). */
  ground: string;
  /** Decorative dot/star color on the ground layer. */
  decorSeed: "stars" | "leaves" | "mushrooms" | "waves";
  /** Background color of dark-theme nodes ("current" hero button). */
  nightStar: string;
  /** Background color of dark-theme deep lip shadows. */
  nightLip: string;
}

export interface ThemeMascot {
  /** Public asset path (e.g. "/mascot-star.png"). */
  src: string;
  /** Localized alt text. */
  alt: Localized;
}

export interface ThemePack {
  /** Stable id, snake/kebab. Used as DB key + URL slug. */
  id: string;
  /** Localized display name (e.g. "星旅" / "林间"). */
  name: Localized;
  /** Localized one-liner. */
  tagline: Localized;
  /** Top-level emoji. */
  icon: string;
  /** Brand assets. */
  mascot: ThemeMascot;
  /** Color tokens consumed by the generic shell. */
  palette: ThemePalette;
  /** Ordered tracks (bottom→top on the map, index 0 = earliest). */
  tracks: Track[];
  /** Per-theme gamification seed (initial stats for new users). */
  initialStats: UserStats;
  /** Per-theme badge catalog. */
  badges: Badge[];
  /** Per-theme daily challenge template. */
  dailyChallenge: DailyChallenge;
  /** Per-theme leaderboard seed (anon fixtures for pre-launch). */
  leaderboard: LeaderboardEntry[];
  /** Feature flags (which optional modules the theme uses). */
  features: {
    tonight?: boolean;          // astronomy → "Tonight" panel
    sightingsLog?: boolean;     // birds → "My sightings" log
    foragingMap?: boolean;      // mushrooms → foraging map
    collection?: boolean;       // collectible cards (constellations / bird species)
  };
  /** Localized SEO long-tails for theme-level marketing pages. */
  seoLongTails?: string[];
}
