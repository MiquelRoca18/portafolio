"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { sections } from "@/content/nav";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";
import { MenuIcon } from "./icons";

export function Nav() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scrolled state + scrollspy.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const mid = (window.innerHeight || 0) * 0.4;
      let current: string | null = null;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) {
          current = s.id;
          break;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label={t("a11y.home")}>
            <span className="badge">{site.squadNumber}</span>
            <span>
              {site.handle}
              <span className="cursor">_</span>
            </span>
          </a>

          <nav className="nav-links" aria-label={t("a11y.sections")}>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={active === s.id ? "active" : undefined}>
                <span className="n">{s.num}</span>
                <span>{t(s.label)}</span>
              </a>
            ))}
          </nav>

          <div className="nav-tools">
            <LangToggle />
            <ThemeToggle />
            <button
              className="icon-btn hamburger"
              aria-label={t("a11y.menu")}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`scrim${menuOpen ? " open" : ""}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />
      <nav
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobile-menu"
        aria-label={t("a11y.mobileMenu")}
      >
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setMenuOpen(false)}>
            <span className="n">{s.num}</span>
            <span>{t(s.label)}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
