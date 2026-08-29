// Public entry point for the theme system. Components import from here.
//
// Usage:
//   import { useThemePack, findThemePack, listThemePacks } from "@/lib/themes";

export type {
  ThemePack,
  ThemePalette,
  ThemeMascot,
} from "./types";

export {
  listThemePacks,
  findThemePack,
  DEFAULT_THEME_ID,
} from "./registry";

export { astronomyPack } from "./packs/astronomy";

export { ThemePackProvider, useThemePack } from "@/stores/theme-pack-store";
