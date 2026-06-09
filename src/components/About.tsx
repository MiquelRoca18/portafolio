import { getLocale, getTranslations } from "next-intl/server";
import { Rich } from "./Rich";
import { ImageSlot } from "./ImageSlot";
import { site } from "@/content/site";

export async function About() {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <section id="about" className="section" data-screen-label="about">
      <div className="container">
        <div className="sec-head" data-reveal="">
          <span className="dorsal">01</span>
          <span className="sec-titles">
            <span className="sec-comment">{t("about.comment")}</span>
            <span className="sec-title">{t("about.title")}</span>
          </span>
        </div>

        <div className="about-grid">
          <article className="player-card" data-reveal="" data-attr-group="">
            <div className="photo-wrap">
              <span className="pc-dorsal">{site.squadNumber}</span>
              <ImageSlot
                src="/profile.png"
                label={locale === "es" ? "Foto de perfil (cuadrada)" : "Profile photo (square)"}
              />
            </div>
            <div className="pc-body">
              <p className="pc-pos">{t("about.pos")}</p>
              <h3 className="pc-name">{t("about.name")}</h3>
              <div className="attrs">
                {site.attrs.map((a, i) => (
                  <div className="attr" key={a.label}>
                    <span className="a-name">{t(a.label)}</span>
                    <span className="a-val">{a.value}</span>
                    <span className="a-bar">
                      <span
                        className="a-fill"
                        data-val={a.value}
                        style={{ "--d": `${i * 120}ms` } as React.CSSProperties}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div
            className="about-copy"
            data-reveal=""
            style={{ "--d": "100ms" } as React.CSSProperties}
          >
            <h3>{t("about.h")}</h3>
            <p className="measure">
              <Rich text={t("about.p1")} />
            </p>
            <p className="measure">
              <Rich text={t("about.p2")} />
            </p>
            <div className="about-tags">
              {site.aboutTags.map((tag) => (
                <span className="code" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
