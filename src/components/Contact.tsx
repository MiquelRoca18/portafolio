import { getTranslations } from "next-intl/server";
import { Rich } from "./Rich";
import { FieldMark } from "./FieldMark";
import { DownloadIcon } from "./icons";
import { site } from "@/content/site";

export async function Contact() {
  const t = await getTranslations();

  return (
    <section id="contact" className="section contact" data-screen-label="contact">
      <FieldMark variant="contact" />
      <div className="container">
        <h2 data-reveal="">
          <Rich text={t("contact.title")} />
        </h2>
        <p className="c-lead" data-reveal="" style={{ "--d": "80ms" } as React.CSSProperties}>
          {t("contact.lead")}
        </p>
        <a
          className="c-email"
          data-reveal=""
          style={{ "--d": "120ms" } as React.CSSProperties}
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
        <div className="c-actions" data-reveal="" style={{ "--d": "180ms" } as React.CSSProperties}>
          <a className="btn btn-primary" href={site.cv} download>
            <DownloadIcon />
            <span>{t("contact.cv")}</span>
          </a>
          <a className="btn btn-ghost" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
            {t("contact.linkedin")}
          </a>
          <a className="btn btn-ghost" href={site.socials.github} target="_blank" rel="noopener noreferrer">
            {t("contact.github")}
          </a>
        </div>
      </div>
    </section>
  );
}
