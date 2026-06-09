"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { MoonIcon, SunIcon } from "./icons";

/** Light/dark switch. The stylesheet shows the right icon via [data-theme]. */
export function ThemeToggle() {
  const t = useTranslations("a11y");
  const { setTheme } = useTheme();

  const toggle = () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <button className="icon-btn" aria-label={t("theme")} onClick={toggle}>
      <MoonIcon className="moon" />
      <SunIcon className="sun" />
    </button>
  );
}
