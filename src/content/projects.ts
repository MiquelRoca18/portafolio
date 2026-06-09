/**
 * Projects. Copy lives in messages under each `key` (e.g. `proj.flag.title`,
 * `proj.c1.desc`). Here we keep stack tags, links and image paths.
 *
 * IMAGES: Drop screenshots/mockups in `public/projects/` and reference them
 * by their path from the public root, e.g. "/projects/tenly.png".
 * Supported formats: png, jpg, webp. Recommended size: ≥1200px wide.
 */
export const flagship = {
  key: "proj.flag",
  stack: ["React Native", "Expo", "TypeScript", "Supabase", "React Query"],
  links: {
    demo: "https://tennis-ml-frontend.vercel.app/",
    github: "https://github.com/MiquelRoca18/tennis-ml-frontend/",
  },
  image: "/projects/tenly.png",
};

/**
 * Secondary project cards. Uncomment / add entries when you have more
 * projects to show. Each card links entirely to its GitHub repo.
 */
export const projectCards: {
  key: string;
  stack: string[];
  github: string;
  image: string | undefined;
}[] = [
  {
    key: "proj.c1",
    stack: ["Python", "FastAPI", "Docker", "Playwright", "SQLite"],
    github: "https://github.com/MiquelRoca18/leadsScraper",
    image: "/projects/multiscraping.png",
  },
];
