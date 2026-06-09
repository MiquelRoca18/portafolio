import { getLocale, getTranslations } from "next-intl/server";
import { Rich } from "./Rich";
import { TypedRole } from "./TypedRole";
import { FieldMark } from "./FieldMark";
import { site } from "@/content/site";
import { ClockIcon, DownloadIcon, MonitorIcon, PinIcon } from "./icons";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export async function Hero() {
  const t = await getTranslations();
  const locale = await getLocale();
  const greeting = locale === "es" ? "hola, soy" : "hi, I’m";

  return (
    <section className="hero" data-screen-label="hero">
      <FieldMark variant="hero" />
      <div className="container">
        <p className="hero-eyebrow" data-reveal="">
          <Rich text={t("hero.eyebrow")} />
        </p>
        <h1 data-reveal="" style={delay(60)}>
          <span className="arrow">&gt;</span> {greeting}
          <br />
          <span className="uline">{t("about.name")}</span>
        </h1>
        <p className="role" data-reveal="" style={delay(120)}>
          <TypedRole /> developer
        </p>
        <p className="hero-lead" data-reveal="" style={delay(180)}>
          <Rich text={t("hero.lead")} />
        </p>

        <div className="hero-actions" data-reveal="" style={delay(240)}>
          <span className="chip">
            <span className="dot" aria-hidden="true" />
            <span>{t("hero.chip")}</span>
          </span>
        </div>
        <div className="hero-actions" data-reveal="" style={delay(300)}>
          <a className="btn btn-primary" href="#projects">
            {t("hero.cta.projects")}
          </a>
          <a className="btn btn-ghost" href={site.cv} download>
            <DownloadIcon />
            <span>{t("hero.cta.cv")}</span>
          </a>
          <a className="btn btn-ghost" href="#contact">
            {t("hero.cta.contact")}
          </a>
        </div>

        <div className="hero-meta" data-reveal="" style={delay(360)}>
          <span>
            <PinIcon />
            <span>{t("hero.meta.loc")}</span>
          </span>
          <span>
            <ClockIcon />
            <span>{t("hero.meta.exp")}</span>
          </span>
          <span>
            <MonitorIcon />
            <span>{t("hero.meta.remote")}</span>
          </span>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>{t("hero.scroll")}</span>
        <span className="bar" />
      </div>
    </section>
  );
}
