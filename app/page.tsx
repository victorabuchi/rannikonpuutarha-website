"use client";

import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className="container">
      <h1>{t("home.heading")}</h1>
    </section>
  );
}
