"use client";

import { useLanguage } from "@/lib/i18n";
import SocialBand from "@/components/SocialBand";
import styles from "./page.module.css";

const statItems = [
  { value: 37000, key: "home.stat_pallets" },
  { value: 23, key: "home.stat_fields" },
  { value: 15, key: "home.stat_varieties" },
  { value: 30, key: "home.stat_crops" },
];

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const locale = lang === "fi" ? "fi-FI" : "en-US";

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>{t("about.title")}</h1>
          <p className={styles.pageIntro}>{t("about.intro")}</p>
        </div>
      </section>

      <section className={styles.family}>
        <div className={`container ${styles.familyGrid}`}>
          <div>
            <h2 className={styles.sectionHeading}>
              {t("about.family_heading")}
            </h2>
            <p className={styles.paragraph}>{t("home.why_p1")}</p>
            <p className={styles.paragraph}>{t("home.why_p2")}</p>
            <p className={styles.paragraph}>{t("home.why_p3")}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/esa.jpg"
            alt="Esa Rannikko"
            className={styles.familyImage}
          />
        </div>
      </section>

      <section className={styles.quote}>
        <div className="container">
          <blockquote className={styles.quoteText}>
            {t("home.quote_text")}
          </blockquote>
          <p className={styles.quoteName}>Esa Rannikko</p>
          <p className={styles.quoteRole}>{t("home.quote_role")}</p>
        </div>
      </section>

      <section className={styles.today}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{t("about.today_heading")}</h2>
          <p className={styles.paragraph}>{t("about.today_p")}</p>
          <div className={styles.statsRow}>
            {statItems.map((item) => (
              <div key={item.key}>
                <span className={styles.statNumber}>
                  {item.value.toLocaleString(locale)}
                </span>
                <span className={styles.statLabel}>{t(item.key)}</span>
              </div>
            ))}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tyontekijat.jpg"
            alt=""
            className={styles.teamImage}
          />
        </div>
      </section>

      <SocialBand textKey="products.cta" />
    </>
  );
}
