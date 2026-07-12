"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage, type Lang } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import styles from "./Header.module.css";

const langNames: Record<Lang, string> = { fi: "Suomi", en: "English" };

type DropdownLink = {
  key?: string;
  label?: string;
  href: string;
  external?: boolean;
};

type DropdownConfig = {
  links: DropdownLink[];
  allKey: string;
  allHref: string;
};

const navDropdowns: Record<string, DropdownConfig> = {
  "/tuotteet": {
    links: [
      { key: "products.cat1_title", href: "/tuotteet#mansikat" },
      { key: "products.cat2_title", href: "/tuotteet#marjat" },
      { key: "products.cat3_title", href: "/tuotteet#vihannekset" },
      { key: "products.cat4_title", href: "/tuotteet#melonit" },
      { key: "products.juices_heading", href: "/tuotteet#mehut" },
    ],
    allKey: "nav.all_products",
    allHref: "/tuotteet",
  },
  "/myyntipisteet": {
    links: [
      { label: "Tupurin S-market", href: "/myyntipisteet#myyntipisteet-lista" },
      { label: "Halikon Tokmanni", href: "/myyntipisteet#myyntipisteet-lista" },
      {
        label: "Plazan kävelykatu",
        href: "/myyntipisteet#myyntipisteet-lista",
      },
      { label: "Salon tori", href: "/myyntipisteet#myyntipisteet-lista" },
      {
        label: "Vaskiontien itsepalvelumyymälä",
        href: "/myyntipisteet#myyntipisteet-lista",
      },
      { key: "nav.selfpicking", href: "/itsepoiminta" },
    ],
    allKey: "nav.all_salespoints",
    allHref: "/myyntipisteet",
  },
  "/tyopaikat": {
    links: [
      { key: "jobs.roles_heading", href: "/tyopaikat#roolit" },
      { key: "jobs.apply_heading", href: "/tyopaikat#hakemus" },
      {
        key: "footer.worker_portal",
        href: "https://rannikon.com",
        external: true,
      },
    ],
    allKey: "nav.all_jobs",
    allHref: "/tyopaikat",
  },
};

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      className={styles.chevron}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12.5l5.5 5.5L20 6.5" />
    </svg>
  );
}

function LangDropdown({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (next: Lang) => {
    setLang(next);
    setOpen(false);
  };

  return (
    <div
      className={className ? `${styles.langWrap} ${className}` : styles.langWrap}
      ref={wrapRef}
    >
      <button
        type="button"
        className={styles.langButton}
        aria-label="Kieli, Language"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <GlobeIcon />
        {langNames[lang]}
      </button>
      {open && (
        <div className={styles.langMenu}>
          {(Object.keys(langNames) as Lang[]).map((code) => (
            <button
              key={code}
              type="button"
              className={styles.langOption}
              onClick={() => choose(code)}
            >
              <span className={styles.checkSlot}>
                {lang === code && <CheckIcon />}
              </span>
              {langNames[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!openDropdown) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openDropdown]);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={closeAll}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Rannikon Puutarha"
            width={200}
            height={114}
            className={styles.logo}
          />
          <span className={styles.brandText}>
            <span className={styles.siteName}>Rannikon Puutarha</span>
            <span className={styles.tagline}>{t("tagline")}</span>
          </span>
        </Link>
        <nav
          className={menuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}
        >
          {navItems.map((item) => {
            const dropdown = navDropdowns[item.href];
            if (!dropdown) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navLink}
                  onClick={closeAll}
                >
                  {t(item.key)}
                </Link>
              );
            }
            return (
              <div
                key={item.href}
                className={styles.navItem}
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => setOpenDropdown(item.href)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={styles.navLink}
                  onClick={closeAll}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.href}
                >
                  {t(item.key)}
                  <ChevronIcon />
                </Link>
                {openDropdown === item.href && (
                  <div className={styles.dropdown}>
                    {dropdown.links.map((link) =>
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.dropdownLink}
                          onClick={closeAll}
                        >
                          {link.key ? t(link.key) : link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.href + (link.label ?? link.key)}
                          href={link.href}
                          className={styles.dropdownLink}
                          onClick={closeAll}
                        >
                          {link.key ? t(link.key) : link.label}
                        </Link>
                      )
                    )}
                    <Link
                      href={dropdown.allHref}
                      className={styles.dropdownAll}
                      onClick={closeAll}
                    >
                      {t(dropdown.allKey)}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
          <LangDropdown className={styles.langSelectMenu} />
        </nav>
        <LangDropdown />
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
