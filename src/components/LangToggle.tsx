"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

/** ES / EN switch that keeps the current path. */
export function LangToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: "es" | "en") => {
    if (next !== locale) router.replace(pathname, { locale: next });
  };

  return (
    <div className="toggle" role="group" aria-label="Idioma / Language">
      <button data-lang-btn="es" aria-pressed={locale === "es"} onClick={() => switchTo("es")}>
        ES
      </button>
      <button data-lang-btn="en" aria-pressed={locale === "en"} onClick={() => switchTo("en")}>
        EN
      </button>
    </div>
  );
}
