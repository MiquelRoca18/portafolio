import { getLocale, getTranslations } from "next-intl/server";
import { ImageSlot } from "./ImageSlot";
import { ArrowUpRight, GithubIcon } from "./icons";
import { flagship, projectCards } from "@/content/projects";

export async function Projects() {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <section id="projects" className="section" data-screen-label="projects">
      <div className="container">
        <div className="sec-head" data-reveal="">
          <span className="dorsal">04</span>
          <span className="sec-titles">
            <span className="sec-comment">{t("proj.comment")}</span>
            <span className="sec-title">{t("proj.title")}</span>
          </span>
        </div>

        {/* Flagship case study — Demo button + GitHub button */}
        <article className="proj-flag" data-reveal="">
          <div className="pf-grid">
            <div className="pf-media">
              <span className="pf-tag">{t("proj.flag.tag")}</span>
              <ImageSlot
                src={flagship.image}
                label={
                  locale === "es"
                    ? "Captura / mockup del proyecto estrella"
                    : "Flagship project screenshot / mockup"
                }
              />
            </div>
            <div className="pf-body">
              <h3 className="pf-title">{t("proj.flag.title")}</h3>
              <p className="pf-tagline">{t("proj.flag.tagline")}</p>
              <div className="pf-rows">
                <div className="pf-row">
                  <span className="k">{t("proj.k.problem")}</span>
                  <span className="v muted">{t("proj.flag.problem")}</span>
                </div>
                <div className="pf-row">
                  <span className="k">{t("proj.k.solution")}</span>
                  <span className="v muted">{t("proj.flag.solution")}</span>
                </div>
                <div className="pf-row">
                  <span className="k">{t("proj.k.role")}</span>
                  <span className="v">{t("proj.flag.role")}</span>
                </div>
              </div>
              <div className="pf-result">
                <span className="k">{t("proj.k.result")}</span>
                <span className="v">{t("proj.flag.result")}</span>
              </div>
              <div className="pf-stack">
                {flagship.stack.map((s) => (
                  <span className="code" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="pf-links">
                <a
                  className="btn btn-primary"
                  href={flagship.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight />
                  <span>{t("proj.demo")}</span>
                </a>
                <a
                  className="btn btn-ghost"
                  href={flagship.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  <span>{t("proj.github")}</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary cards — only rendered when there are entries */}
        {projectCards.length > 0 && (
          <div className="proj-cards">
            {projectCards.map((c, i) => (
              <a
                className="pcard"
                data-reveal=""
                key={c.key}
                href={c.github}
                target="_blank"
                rel="noopener noreferrer"
                style={i === 1 ? ({ "--d": "100ms" } as React.CSSProperties) : undefined}
              >
                <ImageSlot
                  src={c.image}
                  label={locale === "es" ? `Mockup proyecto ${i + 2}` : `Project ${i + 2} mockup`}
                />
                <div className="pc-in">
                  <h4>
                    <span>{t(`${c.key}.title`)}</span>
                    <span className="go" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </span>
                  </h4>
                  <p>{t(`${c.key}.desc`)}</p>
                  <div className="pc-stack">
                    {c.stack.map((s) => (
                      <span className="code" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
