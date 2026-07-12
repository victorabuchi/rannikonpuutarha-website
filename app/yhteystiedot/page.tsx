"use client";

import { useLanguage } from "@/lib/i18n";
import styles from "./page.module.css";

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>{t("contact.title")}</h1>
          <p className={styles.pageIntro}>{t("contact.intro")}</p>
        </div>
      </section>

      <section className={styles.info}>
        <div className={`container ${styles.infoGrid}`}>
          <div className={styles.card}>
            <div className={styles.row}>
              <PinIcon />
              <span>Häntälänkoskentie 86, 24910 Halikko as.</span>
            </div>
            <div className={styles.row}>
              <EnvelopeIcon />
              <a href="mailto:rannikko@rannikonpuutarha.fi">
                rannikko@rannikonpuutarha.fi
              </a>
            </div>
            <div className={styles.row}>
              <PhoneIcon />
              <a href="tel:+358400826360">0400 826 360</a>
            </div>
            <div className={styles.people}>
              <p>
                <span className={styles.personLabel}>
                  {t("contact.entrepreneur")}
                </span>
                Esa Rannikko
              </p>
              <p>
                <span className={styles.personLabel}>
                  {t("contact.manager")}
                </span>
                Lina Rannikko
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=H%C3%A4nt%C3%A4l%C3%A4nkoskentie+86%2C+24910+Halikko"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapsButton}
            >
              {t("contact.maps_button")}
            </a>
          </div>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.02%2C60.42%2C23.10%2C60.46&layer=mapnik&marker=60.44%2C23.06"
            className={styles.map}
            loading="lazy"
            title={t("contact.map_title")}
          />
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{t("contact.form_heading")}</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.field}>
              <span className={styles.label}>{t("jobs.form_name")}</span>
              <input type="text" name="name" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("jobs.form_email")}</span>
              <input type="email" name="email" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>
                {t("jobs.form_phone")}{" "}
                <span className={styles.fieldMark}>
                  ({t("jobs.form_optional")})
                </span>
              </span>
              <input type="tel" name="phone" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("contact.form_subject")}</span>
              <input type="text" name="subject" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("jobs.form_message")}</span>
              <textarea name="message" rows={5} className={styles.input} />
            </label>
            <button type="submit" disabled className={styles.submit}>
              {t("contact.form_submit")}
            </button>
            <p className={styles.formNote}>{t("contact.form_note")}</p>
          </form>
        </div>
      </section>
    </>
  );
}
