/**
 * Identity + structural data for the site.
 * Translatable copy lives in `messages/{es,en}.json`; this file holds the
 * values that are the same in every language (numbers, URLs, tech names)
 * plus references (message keys) to the labels that get translated.
 *
 * TODO: replace every value marked with `// TODO` with your real data.
 */
export const site = {
  /** Shown in the nav/footer brand, e.g. `nombre_`. */
  handle: "miquel",
  /** Squad number used on the brand badge and the player card. */
  squadNumber: 10,

  email: "miquel1818@gmail.com", // TODO: your real email
  cv: "/cv/CV-Miquel-Roca.pdf",
  socials: {
    github: "https://github.com/MiquelRoca18",
    linkedin: "https://www.linkedin.com/in/miquel-roca-mascaros/",
  },

  /** "Match stats" bar — value is literal, label is a message key. */
  stats: [
    { value: "1", plus: true, label: "stat.years" },
    { value: "10", plus: true, label: "stat.projects" },
    { value: "15", plus: true, label: "stat.tech" },
    { value: "800", plus: true, label: "stat.commits" },
  ],

  /** Player-card attributes (0–100). Label is a message key. */
  attrs: [
    { label: "attr.frontend", value: 88 },
    { label: "attr.backend", value: 82 },
    { label: "attr.mobile", value: 74 },
    { label: "attr.teamwork", value: 90 },
  ],

  /** Inline-code tags under the About copy. */
  aboutTags: ["TypeScript", "React", "PHP", "Python", "PostgreSQL", "React Native"],
} as const;
