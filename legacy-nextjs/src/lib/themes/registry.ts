// Registry of all theme packs shipped with the app. New themes are added
// here; the generic shell + game store pick whichever one the user activates.

import type { ThemePack } from "./types";
import { astronomyPack } from "./packs/astronomy";

const PACKS: ThemePack[] = [astronomyPack];

/** All registered packs, in display order. */
export function listThemePacks(): ThemePack[] {
  return PACKS;
}

/** Look up a single pack by id. Falls back to the first pack if id is unknown. */
export function findThemePack(id: string | null | undefined): ThemePack {
  if (!id) return PACKS[0];
  const hit = PACKS.find((p) => p.id === id);
  return hit ?? PACKS[0];
}

/** Default pack id (used when the user has not chosen one yet). */
export const DEFAULT_THEME_ID = "astronomy";
