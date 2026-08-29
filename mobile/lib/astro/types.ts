// Domain types for the astronomy learning app (星旅 · 天文闯关).
// Content structure: Track → Unit → Lesson → Question.

export type TrackId = "stargazing" | "solar" | "stars" | "cosmos" | "frontier" | "journey" | "phenomena";

export type LessonStatus = "done" | "current" | "locked";

export type QuestionKind = "choice" | "image" | "truefalse";

/** A user-visible string available in both supported locales. */
export interface Localized {
  en: string;
  zh: string;
}

/** Resolve a Localized value for a given app locale. */
export function pickLocale(value: Localized, locale: string): string {
  return locale.startsWith("zh") ? value.zh : value.en;
}

export interface Choice {
  id: string;
  /** Localized option label. */
  label: Localized;
  /** Optional emoji/glyph shown on the right of the option. */
  glyph?: string;
}

export interface Question {
  id: string;
  kind: QuestionKind;
  /** Localized question stem. */
  prompt: Localized;
  /** For image-recognition questions: a big emoji/glyph acting as the figure. */
  figure?: string;
  choices: Choice[];
  correctId: string;
  /** Localized explanation shown after answering (both right and wrong). */
  explain: Localized;
}

/** A single "teach" slide shown before the questions — learn, then practice. */
export interface TeachCard {
  /** Big emoji/visual for the concept. */
  visual: string;
  /** Localized concept headline. */
  title: Localized;
  /** Localized 1-2 sentence explanation of the concept. */
  body: Localized;
}

export interface Lesson {
  id: string;
  /** Chapter this lesson belongs to (used only for section dividers). */
  trackId: TrackId;
  /** Short localized node title. */
  title: Localized;
  /** One-line localized subtitle. */
  subtitle: Localized;
  /** Emoji shown on the node. */
  icon: string;
  /** Reward XP on full completion. */
  xp: number;
  /** Concept slides shown before the quiz (learn-then-practice). */
  teach: TeachCard[];
  questions: Question[];
}

/** A node placed on the vertical star path with stored progress. */
export interface LessonNode {
  lesson: Lesson;
  status: LessonStatus;
  /** 0-3 stars earned. */
  stars: number;
  /** Left position on the winding path, 0..100 (% of width). */
  left: number;
  /** Optional chapter label shown as a divider ABOVE this node. */
  chapter?: Localized;
}

export interface Track {
  id: TrackId;
  name: Localized;
  tagline: Localized;
  icon: string;
  /** Ordered nodes bottom→top on the map (index 0 = bottom / earliest). */
  nodes: LessonNode[];
}

export interface Badge {
  id: string;
  name: Localized;
  desc: Localized;
  icon: string;
  unlocked: boolean;
}

export interface DailyChallenge {
  /** ISO date the question belongs to. */
  date: string;
  question: Question;
}

export interface LeaderboardEntry {
  rank: number;
  name: Localized;
  avatar: string;
  xp: number;
  /** League tier. */
  tier: "gold" | "silver" | "bronze";
  isMe?: boolean;
}

export interface UserStats {
  displayName: Localized;
  avatar: string;
  streak: number;
  /** Whether the user already completed a lesson today. */
  studiedToday: boolean;
  xp: number;
  /** Total lessons completed. */
  lessonsDone: number;
  level: number;
}
