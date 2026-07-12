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
    "tagline": "Avomaan herkkuja",
    "home.heading": "Herkkuja suoraan tilalta!",
    "home.hero_sub": "Tuoreita marjoja ja vihanneksia",
    "home.intro_heading": "Herkkuja suoraan tilalta",
    "home.intro_p1":
      "Valitsemalla Rannikon Puutarhan marjat ja vihannekset saat herkutella huolella valikoiduilla tuoreilla tuotteilla.",
    "home.intro_p2":
      "Asiakas on palvelumme keskiössä. Iloitsemme, kun saamme tarjota Sinulle ja läheisillesi Halikon jokilaaksojen rannoilla kypsyneitä aromikkaita makuelämyksiä.",
    "home.grow_heading": "Kasvatamme kaikenlaista!",
    "home.grow_card1":
      "Avomaalla kasvaneet mansikat, herneet ja muut vihannekset kypsyvät pitkän ja valoisan kesäpäivän ansiosta makeiksi ja raikkaiksi.",
    "home.grow_card2":
      "Kasvihuoneissa kasvatetaan jo varhain keväällä mansikoita ja taimia. Kasvihuoneiden ansiosta saat meiltä taatusti kotimaista marjaa jo huhtikuusta pitkälle lokakuun loppuun.",
    "home.grow_card3":
      "Työllistämme kesän aikana satoja ihmisiä, jotka työskentelevät pellolla, pakkaavat, kuljettavat ja myyvät tuotteet tuoreina pellolta kuluttajalle.",
    "home.stats_heading": "Rannikon Puutarhan vuosi",
    "home.stat_pallets": "Kuormalavaa toimitetaan kauppoihin",
    "home.stat_fields": "Jalkapallokentän alueelle istutetaan uusia taimia",
    "home.stat_varieties": "Eri mansikkalajiketta kasvaa pelloillamme",
    "home.stat_crops": "Kasvin sato rytmittää satokautemme",
    "home.quote_text":
      "Kuuntelemme asiakkaita herkällä korvalla. Tämä on johtanut uusiin tuoteideoihin sekä toimintatapoihin.",
    "home.quote_role": "yrittäjä, Rannikon Puutarha",
    "home.why_heading": "Miksi valita Rannikon Puutarhan tuotteita",
    "home.why_p1":
      "Rannikolla tunnetaan koko puutarhatuotteen ketju siemenestä kauppaan asti. Mansikoista ja muista puutarhatuotteista pidetään huolta päivin ja öin.",
    "home.why_p2":
      "Yrittäjä Esa Rannikko on seurannut kasvun ihmettä pienestä pojasta asti. Hän on kehittänyt puutarhatilaa vanhempiensa jalanjäljissä ja seuraava sukupolvikin auttelee jo puutarhan töissä. Esa on nopea toiminnan mies päätöksissään ja visiot siirtyvät nopeasti käytäntöön.",
    "home.why_p3":
      "Työntekijöilleen Esa on elävä esimerkki siitä, ettei mikään ole mahdotonta!",
    "home.social_heading": "Seuraa puutarhamme somekanavia",
    "nav.products": "Tuotteet",
    "nav.salespoints": "Myyntipisteet",
    "nav.selfpicking": "Itsepoiminta",
    "nav.jobs": "Työpaikat",
    "nav.about": "Tarinamme",
    "nav.contact": "Ota yhteyttä",
    "footer.address_title": "Puutarhan osoite ja toimitilat",
    "footer.phone_prefix": "puh:",
    "footer.worker_portal": "Työntekijäportaali",
    "footer.privacy": "Tietosuojaseloste",
  },
  en: {
    "tagline": "Treats from the open field",
    "home.heading": "Delicacies straight from the farm!",
    "home.hero_sub": "Fresh berries and vegetables",
    "home.intro_heading": "Delicacies straight from the farm",
    "home.intro_p1":
      "By choosing Rannikon Puutarha berries and vegetables, you get to enjoy carefully selected fresh products.",
    "home.intro_p2":
      "The customer is at the center of our service. We are glad when we get to offer you and your loved ones aromatic taste experiences ripened on the banks of the river valleys of Halikko.",
    "home.grow_heading": "We grow all kinds of things!",
    "home.grow_card1":
      "Strawberries, peas and other vegetables grown in the open field ripen sweet and fresh thanks to the long and bright summer days.",
    "home.grow_card2":
      "Strawberries and seedlings are grown in greenhouses from early spring. Thanks to the greenhouses, you can get guaranteed Finnish berries from us from April all the way to the end of October.",
    "home.grow_card3":
      "During the summer we employ hundreds of people who work in the fields, pack, transport and sell the products fresh from the field to the consumer.",
    "home.stats_heading": "A year at Rannikon Puutarha",
    "home.stat_pallets": "Pallets delivered to stores",
    "home.stat_fields": "Football fields of new seedlings planted",
    "home.stat_varieties": "Strawberry varieties growing in our fields",
    "home.stat_crops": "Crops shaping our harvest season",
    "home.quote_text":
      "We listen to our customers closely. This has led to new product ideas and ways of working.",
    "home.quote_role": "entrepreneur, Rannikon Puutarha",
    "home.why_heading": "Why choose Rannikon Puutarha products",
    "home.why_p1":
      "At Rannikko, the whole chain of a garden product is known from seed to store. Strawberries and other garden products are taken care of day and night.",
    "home.why_p2":
      "Entrepreneur Esa Rannikko has followed the miracle of growth since he was a little boy. He has developed the farm in his parents' footsteps, and the next generation is already helping out with the garden work. Esa is a man of quick action in his decisions, and his visions are quickly put into practice.",
    "home.why_p3":
      "For his employees, Esa is a living example that nothing is impossible!",
    "home.social_heading": "Follow our farm on social media",
    "nav.products": "Products",
    "nav.salespoints": "Sales points",
    "nav.selfpicking": "Self picking",
    "nav.jobs": "Jobs",
    "nav.about": "Our story",
    "nav.contact": "Contact",
    "footer.address_title": "Farm address and premises",
    "footer.phone_prefix": "tel:",
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
