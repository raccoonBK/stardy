#!/usr/bin/env bun
//
// import-content-from-json.ts
// ─────────────────────────────────────────────────────────────────────────────
// Read a content JSON produced by an external text-only agent (ima-style) and
// emit a TypeScript file (`src/lib/astro/content-expansion.ts`) that exposes
// `EXTRA_TRACKS: Track[]`. content.ts re-exports these alongside its own
// TRACKS, so the runtime sees all tracks at once.
//
// Usage:
//   bun run scripts/import-content-from-json.ts path/to/expansion.json
//
// Re-running with a new JSON is safe: the generated file is fully overwritten.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

/* ── Types matching the JSON shape we ask the external agent to produce ─── */

interface ChoiceJSON {
  label_zh: string;
  label_en: string;
  glyph?: string;
}

interface QuestionJSON {
  id: string;
  kind?: "choice" | "image" | "truefalse";
  /** v2: which teach card this question maps to. Values like "teach[1]".. "teach[4]". */
  based_on?: string;
  prompt_zh: string;
  prompt_en: string;
  figure?: string;
  choices: ChoiceJSON[];
  correct_idx: number;
  explain_zh: string;
  explain_en: string;
}

interface TeachJSON {
  visual: string;
  title_zh: string;
  title_en: string;
  body_zh: string;
  body_en: string;
}

interface LessonJSON {
  id: string;
  title_zh: string;
  title_en: string;
  subtitle_zh: string;
  subtitle_en: string;
  icon: string;
  xp: number;
  teach: TeachJSON[];
  questions: QuestionJSON[];
}

interface NodeJSON {
  chapter_zh?: string;
  chapter_en?: string;
  left?: number;
  lesson: LessonJSON;
}

interface TrackJSON {
  id: string;
  name_zh: string;
  name_en: string;
  tagline_zh: string;
  tagline_en: string;
  icon: string;
  nodes: NodeJSON[];
}

interface ContentJSON {
  tracks: TrackJSON[];
}

/* ── Light validation; throw early with a useful message ──────────────── */

function fail(msg: string, ctx?: unknown): never {
  // eslint-disable-next-line no-console
  console.error(`✗ ${msg}`);
  if (ctx !== undefined) {
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(ctx, null, 2).slice(0, 500));
  }
  process.exit(1);
}

function asString(v: unknown, path: string): string {
  if (typeof v !== "string" || v.length === 0) fail(`expected non-empty string at ${path}`);
  return v;
}
function asNumber(v: unknown, path: string): number {
  if (typeof v !== "number" || Number.isNaN(v)) fail(`expected number at ${path}`);
  return v;
}
function asInt(v: unknown, path: string): number {
  const n = asNumber(v, path);
  if (!Number.isInteger(n)) fail(`expected integer at ${path}`);
  return n;
}
function asArray<T>(v: unknown, path: string): T[] {
  if (!Array.isArray(v)) fail(`expected array at ${path}`);
  return v as T[];
}

function validate(json: ContentJSON): void {
  if (!json || typeof json !== "object" || !("tracks" in json)) {
    fail("root must be { tracks: [...] }");
  }
  const tracks = asArray<TrackJSON>(json.tracks, "tracks");
  if (tracks.length === 0) fail("tracks array is empty");

  let totalLessons = 0;
  const seenIds = new Set<string>();

  tracks.forEach((tr, ti) => {
    const tPath = `tracks[${ti}]`;
    asString(tr.id, `${tPath}.id`);
    asString(tr.name_zh, `${tPath}.name_zh`);
    asString(tr.name_en, `${tPath}.name_en`);
    asString(tr.tagline_zh, `${tPath}.tagline_zh`);
    asString(tr.tagline_en, `${tPath}.tagline_en`);
    asString(tr.icon, `${tPath}.icon`);

    const nodes = asArray<NodeJSON>(tr.nodes, `${tPath}.nodes`);
    if (nodes.length === 0) fail(`${tPath}.nodes is empty`);

    nodes.forEach((node, ni) => {
      const nPath = `${tPath}.nodes[${ni}]`;
      const ls = node.lesson;
      if (!ls) fail(`${nPath}.lesson missing`);

      const lid = asString(ls.id, `${nPath}.lesson.id`);
      if (seenIds.has(lid)) fail(`duplicate lesson id: ${lid}`);
      seenIds.add(lid);

      asString(ls.title_zh, `${nPath}.lesson.title_zh`);
      asString(ls.title_en, `${nPath}.lesson.title_en`);
      asString(ls.subtitle_zh, `${nPath}.lesson.subtitle_zh`);
      asString(ls.subtitle_en, `${nPath}.lesson.subtitle_en`);
      asString(ls.icon, `${nPath}.lesson.icon`);
      const xp = asInt(ls.xp, `${nPath}.lesson.xp`);
      if (xp < 5 || xp > 100) fail(`lesson.xp out of range 5-100 at ${nPath}`);

      const teach = asArray<TeachJSON>(ls.teach, `${nPath}.lesson.teach`);
      if (teach.length < 1 || teach.length > 4) {
        fail(`lesson.teach must have 1-4 cards at ${nPath}, got ${teach.length}`);
      }
      teach.forEach((tc, ti2) => {
        asString(tc.visual, `${nPath}.lesson.teach[${ti2}].visual`);
        asString(tc.title_zh, `${nPath}.lesson.teach[${ti2}].title_zh`);
        asString(tc.title_en, `${nPath}.lesson.teach[${ti2}].title_en`);
        asString(tc.body_zh, `${nPath}.lesson.teach[${ti2}].body_zh`);
        asString(tc.body_en, `${nPath}.lesson.teach[${ti2}].body_en`);
        if (tc.body_zh.length > 100) {
          fail(`teach body_zh too long (${tc.body_zh.length}>100) at ${nPath}.lesson.teach[${ti2}]`);
        }
        if (tc.body_en.length > 300) {
          fail(`teach body_en too long (${tc.body_en.length}>300) at ${nPath}.lesson.teach[${ti2}]`);
        }
      });

      const qs = asArray<QuestionJSON>(ls.questions, `${nPath}.lesson.questions`);
      if (qs.length < 5 || qs.length > 7) {
        fail(`lesson.questions must have 5-7 items at ${nPath}, got ${qs.length}`);
      }
      qs.forEach((q, qi) => {
        const qPath = `${nPath}.lesson.questions[${qi}]`;
        asString(q.id, `${qPath}.id`);
        asString(q.prompt_zh, `${qPath}.prompt_zh`);
        asString(q.prompt_en, `${qPath}.prompt_en`);
        asString(q.explain_zh, `${qPath}.explain_zh`);
        asString(q.explain_en, `${qPath}.explain_en`);
        const choices = asArray<ChoiceJSON>(q.choices, `${qPath}.choices`);
        if (choices.length < 2 || choices.length > 4) {
          fail(`question.choices must have 2-4 options at ${qPath}, got ${choices.length}`);
        }
        choices.forEach((c, ci) => {
          asString(c.label_zh, `${qPath}.choices[${ci}].label_zh`);
          asString(c.label_en, `${qPath}.choices[${ci}].label_en`);
        });
        const ci = asInt(q.correct_idx, `${qPath}.correct_idx`);
        if (ci < 0 || ci >= choices.length) {
          fail(`correct_idx out of range at ${qPath}: ${ci} for ${choices.length} choices`);
        }
        if (q.figure !== undefined && q.figure !== null && (q.figure as string).length === 0) {
          fail(`figure must be non-empty string when present at ${qPath}`);
        }

        // v2: based_on must point to a valid teach card slot
        if (q.based_on !== undefined) {
          const m = /^teach\[(\d+)\]$/.exec(q.based_on);
          if (!m) {
            fail(`based_on must match "teach[N]" pattern at ${qPath}, got "${q.based_on}"`);
          }
          const idx = parseInt(m![1], 10);
          if (idx < 1 || idx > teach.length) {
            fail(`based_on ${q.based_on} out of range at ${qPath} (lesson has ${teach.length} teach cards)`);
          }
        }

        // v2: reject pure-arithmetic questions. Conceptual questions like
        // "能推算出什么" / "相当于 X 还是 Y" / "哪个更..." are fine — they're
        // identification questions, not paper-pen arithmetic.
        const calcMarkers = [
          // explicit "X 是多少 km/秒/小时" with a digit somewhere
          /(多少|多长|多大)\s*(千米|公里|米|秒|分钟|小时|天|年|度|等|倍)/,
          // explicit unit conversion request: "X 转 Y" / "X 等于 Y 秒"
          /\d+\s*(千米|公里|米|秒|分钟|小时|年|度|倍)\s*(=|≈|=|等于)/,
          /(光年|秒差距|天文单位|AU|pc)\s*[=≈]/,
          // step-by-step "先做 X 再做 Y" ordering
          /(先|然后|接着|之后)\s*(测|算|求|计算|乘|除|加|减)/,
          // explicit "计算" verb with a numeric-ish noun (allow 算出/推算出)
          /计算\s*(.{0,8}\d|.{0,8}(千米|公里|米|秒|分钟|小时|年|度|质量|距离|速度|半径))/,
        ];
        const promptFull = q.prompt_zh + " " + q.prompt_en;
        for (const re of calcMarkers) {
          if (re.test(promptFull)) {
            fail(`calc-style question not allowed on main path at ${qPath}: "${q.prompt_zh.slice(0, 60)}…"`);
          }
        }
      });

      totalLessons += 1;
    });
  });

  if (totalLessons < 10) {
    fail(`at least 10 lessons required, got ${totalLessons}`);
  }
}

function sanitizeIdent(s: string): string {
  // TS const variable names cannot contain hyphens. Map any non-identifier
  // character to underscore so emitted code stays a valid identifier.
  return s.replace(/[^A-Za-z0-9_$]/g, "_");
}

/* ── Code emission ───────────────────────────────────────────────────── */

function escapeStr(s: unknown): string {
  if (typeof s !== "string") {
    fail(`expected string for code emit, got ${typeof s}: ${JSON.stringify(s).slice(0, 80)}`);
  }
  // Escape backslash + single quote for safe single-quoted TS literals.
  return s.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function jsStr(s: string): string {
  return `'${escapeStr(s)}'`;
}

function emitLessonConst(ls: LessonJSON, trackId: string): string {
  const teachCalls = ls.teach
    .map(
      (t) =>
        `    T(${jsStr(t.visual)}, [${jsStr(t.title_zh)}, ${jsStr(t.title_en)}], [${jsStr(t.body_zh)}, ${jsStr(t.body_en)}])`,
    )
    .join(",\n");

  const questionCalls = ls.questions
    .map((q) => {
      const choiceObjs = q.choices
        .map((c) => {
          const glyphPart = c.glyph ? `, glyph: ${jsStr(c.glyph)}` : "";
          return `      { zh: ${jsStr(c.label_zh)}, en: ${jsStr(c.label_en)}${glyphPart} }`;
        })
        .join(",\n");
      const figurePart = q.figure ? `, ${jsStr(q.figure)}` : "";
      return `    q(
      ${jsStr(q.id)},
      [${jsStr(q.prompt_zh)}, ${jsStr(q.prompt_en)}],
      [
${choiceObjs}
      ],
      ${q.correct_idx},
      [${jsStr(q.explain_zh)}, ${jsStr(q.explain_en)}]${figurePart}
    )`;
    })
    .join(",\n");

  return `const ${sanitizeIdent(ls.id)}: Lesson = {
  id: ${jsStr(ls.id)},
  trackId: ${jsStr(trackId)},
  title: L(${jsStr(ls.title_zh)}, ${jsStr(ls.title_en)}),
  subtitle: L(${jsStr(ls.subtitle_zh)}, ${jsStr(ls.subtitle_en)}),
  icon: ${jsStr(ls.icon)},
  xp: ${ls.xp},
  teach: [
${teachCalls},
  ],
  questions: [
${questionCalls},
  ],
};`;
}

function emitTrack(tr: TrackJSON): string {
  const lessonConsts = tr.nodes
    .map((n) => emitLessonConst(n.lesson, tr.id))
    .join("\n\n");

  const nodeObjs = tr.nodes
    .map((n, i) => {
      // S-curve offset reused from StarPath: bold left↔right wobble.
      const curve = [0, 26, 34, 26, 0, -26, -34, -26];
      const left = n.left ?? curve[i % curve.length];
      const chapterPart =
        n.chapter_zh && n.chapter_en
          ? `, chapter: L(${jsStr(n.chapter_zh)}, ${jsStr(n.chapter_en)})`
          : "";
      return `      { lesson: ${sanitizeIdent(n.lesson.id)}, status: "locked", stars: 0, left: ${left}${chapterPart} }`;
    })
    .join(",\n");

  return `// ── Track: ${tr.id} ──────────────────────────────────────────────────────
${lessonConsts}

const track${capitalize(sanitizeIdent(tr.id))}: Track = {
  id: ${jsStr(tr.id)},
  name: L(${jsStr(tr.name_zh)}, ${jsStr(tr.name_en)}),
  tagline: L(${jsStr(tr.tagline_zh)}, ${jsStr(tr.tagline_en)}),
  icon: ${jsStr(tr.icon)},
  nodes: [
${nodeObjs},
  ],
};`;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function emitModule(json: ContentJSON): string {
  const header = `// AUTO-GENERATED by scripts/import-content-from-json.ts
// Do not edit by hand — re-run the importer to regenerate.
//
// Source: external content JSON (ima / text-only agent).
// ${json.tracks.length} tracks, ${countLessons(json)} lessons total.
//
// This file declares additional Lesson constants and EXTRA_TRACKS.
// \`src/lib/astro/content.ts\` re-exports EXTRA_TRACKS alongside TRACKS.

import type { Lesson, Track } from "./types";
import { L, T, q } from "./content-helpers";
`;

  const tracks = json.tracks.map(emitTrack).join("\n\n");

  const extra = json.tracks
    .map((t) => `  track${capitalize(sanitizeIdent(t.id))},`)
    .join("\n");

  const footer = `
export const EXTRA_TRACKS: Track[] = [
${extra}
];
`;

  return header + "\n" + tracks + footer;
}

function countLessons(json: ContentJSON): number {
  return json.tracks.reduce((sum, tr) => sum + tr.nodes.length, 0);
}

/* ── Entry ───────────────────────────────────────────────────────────── */

function main(): void {
  const arg = process.argv[2];
  if (!arg) {
    fail("usage: bun run scripts/import-content-from-json.ts <path-to-json>");
  }
  const jsonPath = resolve(arg);
  if (!existsSync(jsonPath)) fail(`input file not found: ${jsonPath}`);

  let raw: string;
  try {
    raw = readFileSync(jsonPath, "utf8");
  } catch (e) {
    fail(`could not read ${jsonPath}: ${(e as Error).message}`);
  }

  let json: ContentJSON;
  try {
    json = JSON.parse(raw) as ContentJSON;
  } catch (e) {
    fail(`invalid JSON in ${jsonPath}: ${(e as Error).message}`);
  }

  validate(json);

  const outPath = resolve("src/lib/astro/content-expansion.ts");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, emitModule(json), "utf8");

  const lessons = countLessons(json);
  // eslint-disable-next-line no-console
  console.log(
    `✓ wrote ${outPath}\n  tracks=${json.tracks.length}, lessons=${lessons}`,
  );
}

main();
