/**
 * Timeline. Text (period, company, role, bullets) lives in messages under
 * the given `key` (e.g. `exp.e1.role`, `exp.e1.b1`). Here we keep the
 * language-neutral stack tags.
 */
export const experience = [
  { key: "exp.e1", stack: ["Python", "n8n", "Docker", "JavaScript", "MySQL"] },
  { key: "exp.e2", stack: ["WordPress", "PHP", "JavaScript", "Tailwind"] },
] as const;
