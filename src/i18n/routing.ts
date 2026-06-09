import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Spanish is the default and lives at "/", English at "/en"
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",
});
