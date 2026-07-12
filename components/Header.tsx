"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage, type Lang } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import styles from "./Header.module.css";

function LangSelect({ className }: { className: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <select
      className={className}
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      aria-label="Kieli, Language"
    >
      <option value="fi">FI</option>
      <option value="en">EN</option>
    </select>
  );
}

export default function Header() {
  const { t } = useLanguage();
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
            <span className={styles.tagline}>{t("tagline")}</span>
          </span>
        </Link>
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
          <LangSelect
            className={`${styles.langSelect} ${styles.langSelectMenu}`}
          />
        </nav>
        <LangSelect className={styles.langSelect} />
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
      </div>
    </header>
  );
}
