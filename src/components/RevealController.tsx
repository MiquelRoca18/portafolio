"use client";

import { useEffect } from "react";

/**
 * Replicates the prototype's scroll-driven effects without extra deps:
 *  - reveal-on-scroll for [data-reveal]
 *  - animated attribute bars for [data-attr-group]
 *  - chalk line draw-in for .field-mark / .pitch
 * Behaviour is gated behind the `.js` class so no-JS users see everything.
 */
export function RevealController() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], .field-mark, .pitch, [data-attr-group]",
      ),
    );

    // Pre-compute stroke lengths so the draw-in transition has a target.
    document.querySelectorAll<SVGGeometryElement>("[data-draw]").forEach((p) => {
      try {
        const len = p.getTotalLength ? p.getTotalLength() : 1200;
        p.style.setProperty("--len", String(Math.ceil(len)));
      } catch {
        /* getTotalLength unsupported — keep default */
      }
    });

    const fired = new WeakSet<Element>();
    const fire = (el: HTMLElement) => {
      if (fired.has(el)) return;
      fired.add(el);
      if (el.hasAttribute("data-reveal")) el.classList.add("in");
      if (el.classList.contains("field-mark") || el.classList.contains("pitch")) {
        el.classList.add("drawn");
      }
      if (el.hasAttribute("data-attr-group")) {
        el.querySelectorAll<HTMLElement>(".a-fill").forEach((f) => {
          f.style.width = `${f.dataset.val ?? 0}%`;
        });
      }
    };

    if (reduce) {
      els.forEach(fire);
      return;
    }

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const el of els) {
        if (fired.has(el)) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.88 && r.bottom > 0) fire(el);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        check();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    check();
    const safety = window.setTimeout(check, 250);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
