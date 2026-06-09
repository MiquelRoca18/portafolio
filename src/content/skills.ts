import type { Localized } from "./types";

export type LineId = "gk" | "def" | "mid" | "fwd";

export type Player = {
  /** 2–3 letter "kit" abbreviation shown on the jersey. */
  abbr: string;
  /** Squad number badge. */
  num: number;
  name: string;
  pos: Localized;
};

/** Pitch view — the 4-3-3 (GK · DEF · MID · FWD). */
export const formation: { line: LineId; players: Player[] }[] = [
  {
    line: "gk",
    players: [{ abbr: "Dk", num: 1, name: "Docker", pos: { es: "DevOps", en: "DevOps" } }],
  },
  {
    line: "def",
    players: [
      { abbr: "PG", num: 2, name: "PostgreSQL", pos: { es: "DB", en: "DB" } },
      { abbr: "PHP", num: 3, name: "PHP", pos: { es: "Backend", en: "Backend" } },
      { abbr: "Jv", num: 4, name: "Java", pos: { es: "Backend", en: "Backend" } },
      { abbr: "Ex", num: 5, name: "Express", pos: { es: "API", en: "API" } },
    ],
  },
  {
    line: "mid",
    players: [
      { abbr: "JS", num: 6, name: "JavaScript", pos: { es: "Core", en: "Core" } },
      { abbr: "TS", num: 10, name: "TypeScript", pos: { es: "Capitán", en: "Captain" } },
      { abbr: "Py", num: 8, name: "Python", pos: { es: "Scripts", en: "Scripts" } },
    ],
  },
  {
    line: "fwd",
    players: [
      { abbr: "CSS", num: 7, name: "CSS", pos: { es: "Estilos", en: "Styles" } },
      { abbr: "R", num: 11, name: "React", pos: { es: "UI", en: "UI" } },
      { abbr: "RN", num: 9, name: "React Native", pos: { es: "Mobile", en: "Mobile" } },
    ],
  },
];

/** List view — accessible fallback, grouped by line. `sub` is a message key. */
export const lineupList: { line: LineId; sub: string; items: string[] }[] = [
  { line: "gk", sub: "lineSub.gk", items: ["Docker", "Git", "GitHub Actions", "Jest"] },
  { line: "def", sub: "lineSub.def", items: ["Java", "PHP", "Express", "PostgreSQL", "Prisma"] },
  { line: "mid", sub: "lineSub.mid", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { line: "fwd", sub: "lineSub.fwd", items: ["React", "CSS", "Tailwind", "React Native"] },
];
