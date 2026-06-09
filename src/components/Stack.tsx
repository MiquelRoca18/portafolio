"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { formation, lineupList } from "@/content/skills";
import type { Locale } from "@/content/types";
import { ListIcon, PitchIcon } from "./icons";
import { TechIcon } from "./TechIcon";

export function Stack() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [view, setView] = useState<"pitch" | "list">("pitch");

  return (
    <section id="stack" className="section" data-screen-label="stack">
      <div className="container">
        <div className="sec-head" data-reveal="">
          <span className="dorsal">02</span>
          <span className="sec-titles">
            <span className="sec-comment">{t("stack.comment")}</span>
            <span className="sec-title">{t("stack.title")}</span>
          </span>
          <div className="lineup-toggle" role="group" aria-label={t("a11y.lineupView")}>
            <button
              data-lineup-view="pitch"
              aria-pressed={view === "pitch"}
              onClick={() => setView("pitch")}
            >
              <PitchIcon />
              <span>{t("stack.view.pitch")}</span>
            </button>
            <button
              data-lineup-view="list"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
            >
              <ListIcon />
              <span>{t("stack.view.list")}</span>
            </button>
          </div>
        </div>

        <p
          className="measure"
          data-reveal=""
          style={{ marginBottom: 28, color: "var(--text-2)" }}
        >
          {t("stack.lead")}
        </p>

        {/* PITCH VIEW */}
        <div className={`pitch${view === "pitch" ? "" : " hidden"}`} data-reveal="">
          <div className="pitch-stripes" aria-hidden="true" />
          <svg
            className="pitch-lines"
            viewBox="0 0 1000 480"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect data-draw="" x="12" y="12" width="976" height="456" rx="6" />
            <path data-draw="" d="M12 240 H988" />
            <circle data-draw="" cx="500" cy="240" r="58" />
            <rect data-draw="" x="12" y="150" width="80" height="180" />
            <rect data-draw="" x="908" y="150" width="80" height="180" />
          </svg>

          <div className="formation" role="img" aria-label={t("a11y.lineupAria")}>
            {formation.map((line) => (
              <div className="line" key={line.line}>
                <span className="line-label">{t(`line.${line.line}`)}</span>
                {line.players.map((p) => (
                  <div className="player" key={p.name}>
                    <span className="jersey" data-num={p.num}>
                      <TechIcon name={p.name} size={26} />
                    </span>
                    <span className="p-name">{p.name}</span>
                    <span className="p-pos">{p.pos[locale]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* LIST VIEW (accessible fallback) */}
        <div className={`lineup-list${view === "list" ? "" : " hidden"}`}>
          {lineupList.map((block) => (
            <div className="line-block" key={block.line}>
              <h4>{t(`line.${block.line}`)}</h4>
              <p className="lb-sub">{t(block.sub)}</p>
              <ul>
                {block.items.map((it) => (
                  <li className="code" key={it}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
