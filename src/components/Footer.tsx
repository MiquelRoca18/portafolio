import { getTranslations } from "next-intl/server";
import { Rich } from "./Rich";
import { site } from "@/content/site";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a className="brand" href="#top" aria-label={t("a11y.home")}>
            <span className="badge">{site.squadNumber}</span>
            <span>
              {site.handle}
              <span className="cursor">_</span>
            </span>
          </a>
          <div className="footer-links">
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`}>Email</a>
            <a href="#top">{t("footer.top")}</a>
          </div>
          <div className="built">
            <span>
              <Rich text={t("footer.built")} />
            </span>
            <span>{t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
