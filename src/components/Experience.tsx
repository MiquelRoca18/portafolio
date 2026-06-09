import { getTranslations } from "next-intl/server";
import { Rich } from "./Rich";
import { experience } from "@/content/experience";

export async function Experience() {
  const t = await getTranslations();

  return (
    <section id="experience" className="section" data-screen-label="experience">
      <div className="container">
        <div className="sec-head" data-reveal="">
          <span className="dorsal">03</span>
          <span className="sec-titles">
            <span className="sec-comment">{t("exp.comment")}</span>
            <span className="sec-title">{t("exp.title")}</span>
          </span>
        </div>

        <div className="timeline">
          {experience.map((e) => (
            <article className="tl-item" data-reveal="" key={e.key}>
              <div className="tl-meta">
                <div className="tl-period">{t(`${e.key}.period`)}</div>
                <div className="tl-company">{t(`${e.key}.company`)}</div>
                <div className="tl-place">{t(`${e.key}.place`)}</div>
              </div>
              <div className="tl-main">
                <h3 className="tl-role">{t(`${e.key}.role`)}</h3>
                <ul className="tl-bullets">
                  <li>
                    <Rich text={t(`${e.key}.b1`)} />
                  </li>
                  <li>
                    <Rich text={t(`${e.key}.b2`)} />
                  </li>
                  <li>
                    <Rich text={t(`${e.key}.b3`)} />
                  </li>
                </ul>
                <div className="tl-stack">
                  {e.stack.map((s) => (
                    <span className="code" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
