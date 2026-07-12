"use client";

import { useLanguage } from "@/lib/i18n";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import styles from "./page.module.css";

const categoryCards = [
  {
    image: "/images/products/mansikat.jpg",
    titleKey: "products.cat1_title",
    textKey: "products.cat1_text",
  },
  {
    image: "/images/products/marjat.jpg",
    titleKey: "products.cat2_title",
    textKey: "products.cat2_text",
  },
  {
    image: "/images/products/vihannekset.jpg",
    titleKey: "products.cat3_title",
    textKey: "products.cat3_text",
  },
  {
    image: "/images/products/melonit.jpg",
    titleKey: "products.cat4_title",
    textKey: "products.cat4_text",
  },
];

const juiceCards = [
  {
    image: "/images/products/raparperi.jpg",
    titleKey: "products.juice1_title",
    textKey: "products.juice1_text",
  },
  {
    image: "/images/products/mansikkamehu.jpg",
    titleKey: "products.juice2_title",
    textKey: "products.juice2_text",
  },
  {
    image: "/images/products/glogi.jpg",
    titleKey: "products.juice3_title",
    textKey: "products.juice3_text",
  },
];

type Card = { image: string; titleKey: string; textKey: string };

function CardGrid({ cards, className }: { cards: Card[]; className: string }) {
  const { t } = useLanguage();
  return (
    <div className={className}>
      {cards.map((card) => (
        <div key={card.titleKey} className={styles.card}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.image} alt="" className={styles.cardImage} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{t(card.titleKey)}</h3>
            <p>{t(card.textKey)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>{t("products.title")}</h1>
          <p className={styles.pageIntro}>{t("products.intro")}</p>
        </div>
      </section>

      <section className={styles.categories}>
        <div className="container">
          <CardGrid cards={categoryCards} className={styles.categoryGrid} />
        </div>
      </section>

      <section className={styles.juices}>
        <div className="container">
          <h2 className={styles.sectionHeading}>
            {t("products.juices_heading")}
          </h2>
          <CardGrid cards={juiceCards} className={styles.juiceGrid} />
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <p className={styles.ctaText}>{t("products.cta")}</p>
          <div className={styles.ctaLinks}>
            <a
              href="https://www.instagram.com/rannikonpuutarha/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaLink}
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/p/Rannikon-Puutarha-100059867144553/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaLink}
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
