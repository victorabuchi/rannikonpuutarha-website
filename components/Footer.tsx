"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const navColumns = [navItems.slice(0, 3), navItems.slice(3)];

  return (
    <footer className={styles.footer}>
      <div className={styles.topWrap}>
        <div className={`container ${styles.top}`}>
          <div>
            <h2 className={styles.socialHeading}>{t("home.social_heading")}</h2>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/rannikonpuutarha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/p/Rannikon-Puutarha-100059867144553/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
            <div className={styles.brand}>
              <p className={styles.siteName}>Rannikon Puutarha</p>
              <p className={styles.tagline}>{t("tagline")}</p>
            </div>
          </div>
          <div className={styles.right}>
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
                {t("footer.phone_prefix")}{" "}
                <a href="tel:+358400826360">0400 826 360</a>
              </address>
            </div>
            <div className={styles.navCols}>
              {navColumns.map((column, index) => (
                <ul key={index} className={styles.navList}>
                  {column.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{t(item.key)}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <a
              href="https://rannikon.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portalLink}
            >
              {t("footer.worker_portal")}
            </a>
          </div>
        </div>
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
