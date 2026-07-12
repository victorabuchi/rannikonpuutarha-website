"use client";

import { useLanguage } from "@/lib/i18n";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import SocialBand from "@/components/SocialBand";
import styles from "./page.module.css";

const checklistKeys = [
  "selfpicking.item1",
  "selfpicking.item2",
  "selfpicking.item3",
  "selfpicking.item4",
  "selfpicking.item5",
  "selfpicking.item6",
  "selfpicking.item7",
  "selfpicking.item8",
];

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--green)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12.5l5.5 5.5L20 6.5" />
    </svg>
  );
}

export default function SelfPickingPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>{t("selfpicking.title")}</h1>
          <p className={styles.pageIntro}>{t("selfpicking.intro")}</p>
        </div>
      </section>

      <div className={`container ${styles.imageTop}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/itsepoiminta1.jpg"
          alt={t("selfpicking.image1_alt")}
          width={750}
          height={422}
          className={styles.image}
        />
      </div>

      <section className={styles.checklist}>
        <div className={`container ${styles.checklistInner}`}>
          <h2 className={styles.sectionHeading}>
            {t("selfpicking.checklist_heading")}
          </h2>
          <ul className={styles.checklistItems}>
            {checklistKeys.map((key) => (
              <li key={key} className={styles.checklistItem}>
                <CheckIcon />
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={`container ${styles.imageBottom}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/itsepoiminta2.jpg"
          alt={t("selfpicking.image2_alt")}
          width={750}
          height={563}
          loading="lazy"
          className={styles.image}
        />
      </div>

      <section className={styles.fields}>
        <div className="container">
          <p className={styles.fieldsText}>{t("selfpicking.fields")}</p>
          <div className={styles.fieldsLinks}>
            <a
              href="https://www.instagram.com/rannikonpuutarha/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fieldsLink}
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/p/Rannikon-Puutarha-100059867144553/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fieldsLink}
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>
      </section>

      <SocialBand textKey="products.cta" />
    </>
  );
}
