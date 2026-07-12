"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.columns}`}>
        <div>
          <p className={styles.siteName}>Rannikon Puutarha</p>
          <p className={styles.tagline}>Avomaan herkkuja</p>
        </div>
        <div>
          <h2 className={styles.heading}>{t("footer.address_title")}</h2>
          <address className={styles.address}>
            Häntälänkoskentie 86
            <br />
            24910 Halikko as.
            <br />
            <a href="mailto:rannikko@rannikonpuutarha.fi">
              rannikko@rannikonpuutarha.fi
            </a>
            <br />
            puh: <a href="tel:+358400826360">0400 826 360</a>
          </address>
        </div>
        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{t(item.key)}</Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/rannikonpuutarha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/p/Rannikon-Puutarha-100059867144553/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://rannikon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.worker_portal")}
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.bottomWrap}>
        <div className={`container ${styles.bottomBar}`}>
          <p>&copy; {year} Rannikon Puutarha</p>
          <Link href="/tietosuojaseloste">{t("footer.privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}
