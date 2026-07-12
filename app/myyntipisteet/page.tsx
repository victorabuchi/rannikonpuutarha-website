"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import SocialBand from "@/components/SocialBand";
import styles from "./page.module.css";

type HoursRow = { dayKey?: string; time: string };

type SalesPoint = {
  name: string;
  address?: string;
  badgeKey?: string;
  hours: HoursRow[];
};

const salesPoints: SalesPoint[] = [
  {
    name: "Tupurin S-market",
    hours: [
      { dayKey: "salespoints.days_weekdays", time: "8.45-20.30" },
      { dayKey: "salespoints.days_sat", time: "8.45-19.30" },
      { dayKey: "salespoints.days_sun", time: "9.30-18.30" },
    ],
  },
  {
    name: "Halikon Tokmanni",
    hours: [
      { dayKey: "salespoints.days_weekdays", time: "8.15-20" },
      { dayKey: "salespoints.days_sat", time: "8.15-19" },
      { dayKey: "salespoints.days_sun", time: "10-18" },
    ],
  },
  {
    name: "Plazan kävelykatu",
    hours: [
      { dayKey: "salespoints.days_weekdays", time: "9.30-17.30" },
      { dayKey: "salespoints.days_thu", time: "9.30-20.30" },
    ],
  },
  {
    name: "Salon tori",
    hours: [
      { dayKey: "salespoints.days_monsat", time: "8-15" },
      { dayKey: "salespoints.days_thursdays", time: "8-21" },
    ],
  },
  {
    name: "Vaskiontien itsepalvelumyymälä",
    address: "Vaskiontie 50, 24800 Halikko",
    badgeKey: "salespoints.badge_24_7",
    hours: [{ time: "24/7" }],
  },
];

export default function SalesPointsPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>{t("salespoints.title")}</h1>
          <h2 className={styles.subheading}>{t("salespoints.subheading")}</h2>
          <p className={styles.paragraph}>{t("salespoints.p1")}</p>
          <p className={styles.paragraph}>{t("salespoints.p2")}</p>
        </div>
      </section>

      <section className={styles.salo}>
        <div className="container">
          <h2 className={styles.sectionHeading}>
            {t("salespoints.salo_heading")}
          </h2>
          <div className={styles.grid}>
            {salesPoints.map((point) => (
              <div key={point.name} className={styles.card}>
                <p className={styles.cardName}>{point.name}</p>
                {point.address && (
                  <p className={styles.cardAddress}>{point.address}</p>
                )}
                {point.badgeKey && (
                  <span className={styles.badge}>{t(point.badgeKey)}</span>
                )}
                <div className={styles.hours}>
                  {point.hours.map((row) => (
                    <div key={row.time} className={styles.hoursRow}>
                      <span className={styles.hoursDay}>
                        {row.dayKey ? t(row.dayKey) : ""}
                      </span>
                      <span>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.preorder}>
        <div className="container">
          <p className={styles.preorderText}>{t("salespoints.preorder")}</p>
          <Link href="/yhteystiedot" className={styles.contactButton}>
            {t("salespoints.contact_button")}
          </Link>
        </div>
      </section>

      <SocialBand textKey="products.cta" />
    </>
  );
}
