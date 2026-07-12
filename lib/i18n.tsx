"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fi" | "en";

export const dictionary: Record<Lang, Record<string, string>> = {
  fi: {
    "nav.products": "Tuotteet",
    "nav.salespoints": "Myyntipisteet",
    "nav.selfpicking": "Itsepoiminta",
    "nav.jobs": "Työpaikat",
    "nav.about": "Tarinamme",
    "nav.contact": "Ota yhteyttä",
    "footer.address_title": "Puutarhan osoite ja toimitilat",
    "footer.worker_portal": "Työntekijäportaali",
    "footer.privacy": "Tietosuojaseloste",
  },
  en: {
    "nav.products": "Products",
    "nav.salespoints": "Sales points",
    "nav.selfpicking": "Self picking",
    "nav.jobs": "Jobs",
    "nav.about": "Our story",
    "nav.contact": "Contact",
    "footer.address_title": "Farm address and premises",
    "footer.worker_portal": "Worker portal",
    "footer.privacy": "Privacy policy",
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "rp-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fi");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fi" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  const t = (key: string) => dictionary[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
