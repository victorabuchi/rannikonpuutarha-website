"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import styles from "./Header.module.css";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Rannikon Puutarha" className={styles.logo} />
          <span className={styles.brandText}>
            <span className={styles.siteName}>Rannikon Puutarha</span>
            <span className={styles.tagline}>Avomaan herkkuja</span>
          </span>
        </Link>
        <button
          type="button"
          className={styles.hamburger}
          aria-label="Valikko"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={menuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {t(item.key)}
            </Link>
          ))}
          <button
            type="button"
            className={styles.langToggle}
            onClick={() => setLang(lang === "fi" ? "en" : "fi")}
          >
            {lang === "fi" ? "EN" : "FI"}
          </button>
        </nav>
      </div>
    </header>
  );
}
