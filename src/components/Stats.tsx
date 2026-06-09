import { getLocale, getTranslations } from "next-intl/server";
import { site } from "@/content/site";

export async function Stats() {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <section
      className="stats"
      aria-label={locale === "es" ? "Estadísticas" : "Stats"}
      data-screen-label="stats"
    >
      <div className="stats-inner">
        {site.stats.map((s, i) => (
          <div
            className="stat"
            data-reveal=""
            key={s.label}
            style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="num">
              {s.value}
              {s.plus && <span className="plus">+</span>}
            </div>
            <div className="lbl">{t(s.label)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
