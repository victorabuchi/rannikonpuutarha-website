"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import styles from "./page.module.css";

const growCards = [
  { image: "/images/avomaa.jpg", key: "home.grow_card1" },
  { image: "/images/kasvihuone.jpg", key: "home.grow_card2" },
  { image: "/images/tyontekijat.jpg", key: "home.grow_card3" },
];

const statItems = [
  { value: 37000, key: "home.stat_pallets" },
  { value: 23, key: "home.stat_fields" },
  { value: 15, key: "home.stat_varieties" },
  { value: 30, key: "home.stat_crops" },
];

function StatsSection() {
  const { t, lang } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setProgress(1 - Math.pow(1 - p, 3));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const locale = lang === "fi" ? "fi-FI" : "en-US";

  return (
    <section className={styles.stats}>
      <div className="container">
        <h2 className={styles.statsHeading}>{t("home.stats_heading")}</h2>
        <div className={styles.statsGrid} ref={gridRef}>
          {statItems.map((item) => (
            <div key={item.key}>
              <span className={styles.statNumber}>
                {Math.round(item.value * progress).toLocaleString(locale)}
              </span>
              <span className={styles.statLabel}>{t(item.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>{t("home.heading")}</h1>
          <p className={styles.heroSub}>{t("home.hero_sub")}</p>
          <div className={styles.heroButtons}>
            <Link
              href="/tuotteet"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              {t("nav.products")}
            </Link>
            <Link
              href="/myyntipisteet"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              {t("nav.salespoints")}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <h2 className={styles.sectionHeading}>{t("home.intro_heading")}</h2>
            <p className={styles.paragraph}>{t("home.intro_p1")}</p>
            <p className={styles.paragraph}>{t("home.intro_p2")}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/intro.jpg"
            alt=""
            width={1000}
            height={1000}
            loading="lazy"
            className={styles.introImage}
          />
        </div>
      </section>

      <section className={styles.grow}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{t("home.grow_heading")}</h2>
          <div className={styles.growGrid}>
            {growCards.map((card) => (
              <div key={card.key} className={styles.card}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt=""
                  width={800}
                  height={600}
                  loading="lazy"
                  className={styles.cardImage}
                />
                <p className={styles.cardBody}>{t(card.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className={styles.quote}>
        <div className={`container ${styles.quoteGrid}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/esa.jpg"
            alt="Esa Rannikko"
            width={1024}
            height={683}
            loading="lazy"
            className={styles.quoteImage}
          />
          <div>
            <blockquote className={styles.quoteText}>
              {t("home.quote_text")}
            </blockquote>
            <p className={styles.quoteName}>Esa Rannikko</p>
            <p className={styles.quoteRole}>{t("home.quote_role")}</p>
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{t("home.why_heading")}</h2>
          <p className={styles.paragraph}>{t("home.why_p1")}</p>
          <p className={styles.paragraph}>{t("home.why_p2")}</p>
          <p className={styles.paragraph}>{t("home.why_p3")}</p>
        </div>
      </section>

      <section className={styles.social}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{t("home.social_heading")}</h2>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/rannikonpuutarha/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/p/Rannikon-Puutarha-100059867144553/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
