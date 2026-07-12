"use client";

import { useLanguage } from "@/lib/i18n";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import styles from "./SocialBand.module.css";

export default function SocialBand({ textKey }: { textKey: string }) {
  const { t } = useLanguage();

  return (
    <section className={styles.band}>
      <div className="container">
        <p className={styles.text}>{t(textKey)}</p>
        <div className={styles.links}>
          <a
            href="https://www.instagram.com/rannikonpuutarha/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/p/Rannikon-Puutarha-100059867144553/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FacebookIcon />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
