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
    "products.title": "Tuotteet",
    "products.intro":
      "Tuotteemme kypsyvät avomaalla eri aikoihin. Kasvihuoneissa mansikat alkavat kypsyä huhtikuussa ja eri lajikkeet antavat satoa pitkälle syksyyn. Loppukesästä keskitymme erilaisiin meloneihin ja kurpitsoihin, joihin kehittyvät upeat maut valoisan kesän ansiosta. Syksyllä keräämme myös metsämarjoja ja sieniä. Kesän edetessä kannattaa seurata somekanaviamme, jotta tiedät minkä tuotteen sesonki on parhaimmillaan.",
    "products.cat1_title": "Mansikat",
    "products.cat1_text":
      "Kasvihuoneissa mansikat alkavat kypsyä jo huhtikuussa. Pelloillamme kasvaa 15 eri mansikkalajiketta, joten kotimaista marjaa riittää pitkälle lokakuuhun.",
    "products.cat2_title": "Marjat",
    "products.cat2_text":
      "Marjavalikoimamme on karttunut vuosien saatossa. Loppukesän marjat ovat maun lisäksi myös kauniita katsottavia. Syksyllä keräämme myös metsämarjoja Halikon alueen metsistä.",
    "products.cat3_title": "Herneet ja vihannekset",
    "products.cat3_text":
      "Avomaalla kasvaneet herneet ja muut vihannekset kypsyvät pitkän ja valoisan kesäpäivän ansiosta makeiksi ja raikkaiksi.",
    "products.cat4_title": "Melonit ja kurpitsat",
    "products.cat4_text":
      "Loppukesästä keskitymme erilaisiin meloneihin ja kurpitsoihin, joihin kehittyvät upeat maut valoisan kesän ansiosta.",
    "products.juices_heading": "Mehut ja säilykkeet",
    "products.juice1_title": "Raparperimehutiiviste",
    "products.juice1_text":
      "Rannikon puutarhan raparpereista kylmäpuristamalla valmistettu mehutiiviste sopii sellaisenaan niin lapsille kuin aikuiseen makuun ja pohjaksi monenlaisiin juomiin. Laimennussuhde 1+3.",
    "products.juice2_title": "Mansikkamehutiiviste",
    "products.juice2_text":
      "Mansikkamehussa maistuu kesä ja Rannikon mansikat. Mansikkamehutiiviste on valmistettu kylmäpuristamalla, jolloin vitamiinit säilyvät parhaiten ja maku on raikas. Laimennussuhde 1+2.",
    "products.juice3_title": "Mustaherukka-mansikkaglögi",
    "products.juice3_text":
      "Joulun makuinen mustaherukka-mansikkaglögi Rannikon puutarhan marjoista.",
    "products.cta":
      "Seuraa somekanaviamme, niin tiedät minkä tuotteen sesonki on parhaimmillaan.",
    "salespoints.title": "Myyntipisteet",
    "salespoints.subheading": "Myyntipisteemme pääkaupunkiseudulla ja Salossa",
    "salespoints.p1":
      "Rannikon puutarhan makeat mansikat ja maukkaat herneet ovat löytäneet tiensä myös pääkaupunkiseudulle Helsingin Osuuskaupan myymälöihin.",
    "salespoints.p2":
      "Satokausitilanteen mukaan valikoimassamme on mansikoiden ja herneiden lisäksi erilaisia vihannestuotteita. Loppukesällä löydät meiltä myös kotimaiset vesimelonit sekä erilaiset kurpitsat ja metsämarjat.",
    "salespoints.salo_heading":
      "Salon seudulla palvelemme kesällä koulujen alkuun asti seuraavissa myyntipisteissä",
    "salespoints.days_weekdays": "ark.",
    "salespoints.days_sat": "la",
    "salespoints.days_sun": "su",
    "salespoints.days_thu": "to",
    "salespoints.days_thursdays": "torstaisin",
    "salespoints.days_monsat": "ark. ja la",
    "salespoints.badge_24_7": "Itsepalvelu, avoinna 24/7",
    "salespoints.preorder":
      "Isommat määrät suosittelemme tilaamaan etukäteen ja noutamaan puutarhaltamme Halikon asemalta osoitteesta Häntälänkoskentie 86. Palvelemme kesäaikaan joustavasti päivittäin.",
    "salespoints.contact_button": "Ota yhteyttä",
    "selfpicking.title": "Itsepoiminta",
    "selfpicking.intro":
      "Mansikan itsepoimintapellot vaihtelevat sadon kypsymisen mukaan. Opastekyltit johdattavat isommalta tieltä poimittavalle pellolle.",
    "selfpicking.checklist_heading": "Muistilista mansikoiden itsepoimintaan",
    "selfpicking.item1":
      "Voit kerätä marjat omaan astiaan, joissa ne kulkeutuvat mukanasi kotiin.",
    "selfpicking.item2":
      "Voit tulla myös ilman omaa astiaa, jolloin saat henkilökunnalta n. 2 kg vetoisen keräyslaatikon. Lainatusta keräyslaatikosta marjat siirretään 5 kg pahvilaatikkoon.",
    "selfpicking.item3":
      "Mansikkapellolle kannattaa pukea pitkälahkeiset housut nokkosten ja ötököiden varalta.",
    "selfpicking.item4": "Sateen jälkeen saappaat ovat hyvä varustus.",
    "selfpicking.item5":
      "Poimittuasi haluamasi määrän, astiat punnitaan ja sen mukaan veloitetaan.",
    "selfpicking.item6": "Voit maksaa käteisellä tai kortilla.",
    "selfpicking.item7":
      "Mansikat kannattaa pakastaa mahdollisimman tuoreina. Poista kannat ja pilko, survo tai pakasta kokonaisina. Laita marjat ilmatiiviiseen pussiin tai rasiaan ja pakasta.",
    "selfpicking.item8":
      "Itse poimittaessa voit valita juuri sen määrän ja sen kokoisia mansikoita kun itse tarvitset. Moni myös perkaa mansikat valmiiksi jo pellolla omaan astiaan, jos marjat käytetään mehuun tai hilloon.",
    "selfpicking.fields":
      "Poimintapeltojen sijainnin ilmoitamme Rannikon Puutarhan somekanavilla Instagramissa ja Facebookissa.",
    "selfpicking.image1_alt": "Mansikoiden itsepoimintaa Rannikon Puutarhalla",
    "selfpicking.image2_alt": "Mansikoiden itsepoimintaa Rannikon Puutarhalla",
    "jobs.title": "Työpaikat",
    "jobs.intro":
      "Työllistämme kesän aikana satoja ihmisiä, jotka työskentelevät pellolla, pakkaavat, kuljettavat ja myyvät tuotteet tuoreina pellolta kuluttajalle. Satokausi kestää huhtikuun alusta syyskuun loppuun.",
    "jobs.season_badge": "Kausi 1.4. alkaen 30.9. asti",
    "jobs.roles_heading": "Avoimet roolit",
    "jobs.role1_title": "Peltotyöt",
    "jobs.role1_pill1": "Poiminta",
    "jobs.role1_pill2": "Kurpitsanpoiminta",
    "jobs.role1_pill3": "Istutus",
    "jobs.role1_pill4": "Harsotyöt",
    "jobs.role1_pill5": "Muovinkeruu",
    "jobs.role1_pill6": "Kasvihuonetyöt",
    "jobs.role2_title": "Kuljetus ja koneet",
    "jobs.role2_pill1": "Kuljettaja",
    "jobs.role2_pill2": "Traktorityöt",
    "jobs.role3_title": "Kylmiö ja pakkaamo",
    "jobs.role3_pill1": "Kylmiötyöt",
    "jobs.role3_pill2": "Lavojen käsittely",
    "jobs.role3_pill3": "Pakkaus",
    "jobs.role4_title": "Huolto ja siivous",
    "jobs.role4_pill1": "Kastelujärjestelmä",
    "jobs.role4_pill2": "Remonttityöt",
    "jobs.role4_pill3": "Siivous",
    "jobs.role5_title": "Työnjohto ja toimisto",
    "jobs.role5_pill1": "Kenttätyönjohtaja",
    "jobs.role5_pill2": "Asuntolavastaava",
    "jobs.role5_pill3": "Palkanlaskenta",
    "jobs.role5_pill4": "Hallinto",
    "jobs.role5_pill5": "Myyntipistetyöntekijä",
    "jobs.apply_heading": "Hae töihin",
    "jobs.path_fi_title": "Asun jo Suomessa",
    "jobs.path_fi_text":
      "Voimme palkata Suomessa jo asuvia hakijoita, joilla on voimassa oleva oleskelulupa. Oleskelulupa on pakollinen.",
    "jobs.path_fi_button": "Täytä hakemus",
    "jobs.path_abroad_title": "Haen ulkomailta",
    "jobs.path_abroad_text":
      "Jos haet ulkomailta, Rannikon Puutarha hakee työntekijälle viisumin. Kerro hakemuksessa, oletko työskennellyt meillä aiemmin vai oletko uusi hakija. Voit myös ottaa yhteyttä sähköpostitse.",
    "jobs.form_where": "Missä olet nyt?",
    "jobs.form_where_fi": "Asun Suomessa",
    "jobs.form_where_abroad": "Haen ulkomailta",
    "jobs.form_name": "Koko nimi",
    "jobs.form_email": "Sähköposti",
    "jobs.form_phone": "Puhelinnumero",
    "jobs.form_nationality": "Kansalaisuus",
    "jobs.form_period": "Käytettävissä oleva työjakso",
    "jobs.form_from": "Alkaen",
    "jobs.form_to": "Asti",
    "jobs.form_experience": "Työkokemus",
    "jobs.form_message": "Viesti",
    "jobs.form_permit": "Oleskelulupa",
    "jobs.form_passport": "Passi",
    "jobs.form_taxcard": "Verokortti",
    "jobs.form_worked_before": "Oletko työskennellyt meillä aiemmin?",
    "jobs.form_worked_yes": "Kyllä",
    "jobs.form_worked_new": "Olen uusi hakija",
    "jobs.form_required": "pakollinen",
    "jobs.form_optional": "valinnainen",
    "jobs.form_submit": "Hakulomake avautuu pian",
    "jobs.form_note":
      "Sähköinen hakemus otetaan käyttöön pian. Sillä välin voit lähettää hakemuksen sähköpostitse osoitteeseen rannikko@rannikonpuutarha.fi",
    "jobs.portal_text":
      "Työskenteletkö jo meillä? Kirjaudu työntekijäportaaliin.",
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
    "products.title": "Products",
    "products.intro":
      "Our products ripen in the open field at different times. In the greenhouses, strawberries begin to ripen in April and different varieties give a harvest well into autumn. In late summer we focus on different melons and pumpkins, which develop wonderful flavors thanks to the bright summer. In autumn we also gather wild berries and mushrooms. As the summer goes on, it is worth following our social media channels so you know which product is at the peak of its season.",
    "products.cat1_title": "Strawberries",
    "products.cat1_text":
      "In the greenhouses, strawberries begin to ripen as early as April. We grow 15 different strawberry varieties in our fields, so there are Finnish berries well into October.",
    "products.cat2_title": "Berries",
    "products.cat2_text":
      "Our berry selection has grown over the years. Late summer berries are not only tasty but also beautiful to look at. In autumn we also gather wild berries from the forests of the Halikko area.",
    "products.cat3_title": "Peas and vegetables",
    "products.cat3_text":
      "Peas and other vegetables grown in the open field ripen sweet and fresh thanks to the long and bright summer days.",
    "products.cat4_title": "Melons and pumpkins",
    "products.cat4_text":
      "In late summer we focus on different melons and pumpkins, which develop wonderful flavors thanks to the bright summer.",
    "products.juices_heading": "Juices and preserves",
    "products.juice1_title": "Rhubarb juice concentrate",
    "products.juice1_text":
      "A juice concentrate made by cold pressing rhubarb from Rannikon Puutarha. It suits both children and adult tastes as it is, and works as a base for many kinds of drinks. Dilution ratio 1+3.",
    "products.juice2_title": "Strawberry juice concentrate",
    "products.juice2_text":
      "The strawberry juice tastes of summer and Rannikko strawberries. The strawberry juice concentrate is made by cold pressing, which preserves the vitamins best and keeps the taste fresh. Dilution ratio 1+2.",
    "products.juice3_title": "Blackcurrant and strawberry glogg",
    "products.juice3_text":
      "A Christmas flavored blackcurrant and strawberry glogg made from Rannikon Puutarha berries.",
    "products.cta":
      "Follow our social media channels to know which product is at the peak of its season.",
    "salespoints.title": "Sales points",
    "salespoints.subheading":
      "Our sales points in the Helsinki metropolitan area and Salo",
    "salespoints.p1":
      "The sweet strawberries and tasty peas of Rannikon Puutarha have also found their way to the Helsinki metropolitan area, to Helsingin Osuuskauppa stores.",
    "salespoints.p2":
      "Depending on the harvest season, our selection includes different vegetable products in addition to strawberries and peas. In late summer you will also find Finnish watermelons as well as different pumpkins and wild berries from us.",
    "salespoints.salo_heading":
      "In the Salo region we serve you during the summer until schools start at the following sales points",
    "salespoints.days_weekdays": "Mon-Fri",
    "salespoints.days_sat": "Sat",
    "salespoints.days_sun": "Sun",
    "salespoints.days_thu": "Thu",
    "salespoints.days_thursdays": "Thu",
    "salespoints.days_monsat": "Mon-Sat",
    "salespoints.badge_24_7": "Self service, open 24/7",
    "salespoints.preorder":
      "For larger quantities, we recommend ordering in advance and picking up from our farm at Halikko station, at Häntälänkoskentie 86. In the summer season we serve you flexibly every day.",
    "salespoints.contact_button": "Contact us",
    "selfpicking.title": "Self picking",
    "selfpicking.intro":
      "The strawberry self picking fields change as the harvest ripens. Signs guide you from the larger road to the field being picked.",
    "selfpicking.checklist_heading":
      "Checklist for picking your own strawberries",
    "selfpicking.item1":
      "You can pick the berries into your own container, in which they travel home with you.",
    "selfpicking.item2":
      "You can also come without your own container, in which case the staff will give you a collection box that holds about 2 kg. From the borrowed collection box the berries are transferred into a 5 kg cardboard box.",
    "selfpicking.item3":
      "It is a good idea to wear long trousers on the strawberry field in case of nettles and insects.",
    "selfpicking.item4": "After rain, rubber boots are good equipment.",
    "selfpicking.item5":
      "Once you have picked the amount you want, the containers are weighed and you are charged accordingly.",
    "selfpicking.item6": "You can pay with cash or card.",
    "selfpicking.item7":
      "Strawberries are best frozen as fresh as possible. Remove the stems and chop, mash or freeze them whole. Put the berries in an airtight bag or box and freeze.",
    "selfpicking.item8":
      "When picking yourself, you can choose exactly the amount and the size of strawberries you need. Many also clean the strawberries into their own container already on the field, if the berries are used for juice or jam.",
    "selfpicking.fields":
      "We announce the location of the picking fields on Rannikon Puutarha's social media channels on Instagram and Facebook.",
    "selfpicking.image1_alt": "Picking strawberries at Rannikon Puutarha",
    "selfpicking.image2_alt": "Picking strawberries at Rannikon Puutarha",
    "jobs.title": "Jobs",
    "jobs.intro":
      "During the summer we employ hundreds of people who work in the fields, pack, transport and sell the products fresh from the field to the consumer. The season runs from the beginning of April to the end of September.",
    "jobs.season_badge": "Season April 1 to September 30",
    "jobs.roles_heading": "Open roles",
    "jobs.role1_title": "Field work",
    "jobs.role1_pill1": "Picking",
    "jobs.role1_pill2": "Pumpkin picking",
    "jobs.role1_pill3": "Planting",
    "jobs.role1_pill4": "Row cover work",
    "jobs.role1_pill5": "Plastic collection",
    "jobs.role1_pill6": "Greenhouse work",
    "jobs.role2_title": "Transport and machinery",
    "jobs.role2_pill1": "Driver",
    "jobs.role2_pill2": "Tractor work",
    "jobs.role3_title": "Coldroom and packing",
    "jobs.role3_pill1": "Coldroom work",
    "jobs.role3_pill2": "Pallet handling",
    "jobs.role3_pill3": "Packing",
    "jobs.role4_title": "Maintenance and cleaning",
    "jobs.role4_pill1": "Water system",
    "jobs.role4_pill2": "Renovation work",
    "jobs.role4_pill3": "Cleaning",
    "jobs.role5_title": "Supervision and office",
    "jobs.role5_pill1": "Field supervisor",
    "jobs.role5_pill2": "House boss",
    "jobs.role5_pill3": "Payroll",
    "jobs.role5_pill4": "Administration",
    "jobs.role5_pill5": "Sales point worker",
    "jobs.apply_heading": "Apply for work",
    "jobs.path_fi_title": "I already live in Finland",
    "jobs.path_fi_text":
      "We can hire applicants already living in Finland who hold a valid residence permit. A residence permit is required.",
    "jobs.path_fi_button": "Fill in the application",
    "jobs.path_abroad_title": "I am applying from abroad",
    "jobs.path_abroad_text":
      "If you apply from abroad, Rannikon Puutarha applies for the worker visa. Tell us in the application whether you have worked with us before or are a new applicant. You can also contact us by email.",
    "jobs.form_where": "Where are you now?",
    "jobs.form_where_fi": "I live in Finland",
    "jobs.form_where_abroad": "Applying from abroad",
    "jobs.form_name": "Full name",
    "jobs.form_email": "Email",
    "jobs.form_phone": "Phone",
    "jobs.form_nationality": "Nationality",
    "jobs.form_period": "Work period available",
    "jobs.form_from": "From",
    "jobs.form_to": "To",
    "jobs.form_experience": "Experience",
    "jobs.form_message": "Message",
    "jobs.form_permit": "Residence permit",
    "jobs.form_passport": "Passport",
    "jobs.form_taxcard": "Tax card",
    "jobs.form_worked_before": "Have you worked with us before?",
    "jobs.form_worked_yes": "Yes",
    "jobs.form_worked_new": "I am a new applicant",
    "jobs.form_required": "required",
    "jobs.form_optional": "optional",
    "jobs.form_submit": "Application form opens soon",
    "jobs.form_note":
      "The online application opens soon. In the meantime you can send your application by email to rannikko@rannikonpuutarha.fi",
    "jobs.portal_text": "Already working with us? Sign in to the worker portal.",
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
