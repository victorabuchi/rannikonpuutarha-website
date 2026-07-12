import styles from "./page.module.css";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Tietosuojaseloste</h1>
        </div>
      </section>

      <div className="container">
        <article className={styles.article} lang="fi">
          <h2>1. Rekisterinpitäjä</h2>
          <p>Rannikon Puutarha Oy</p>
          <p>Jokikaustantie 456, 25240 Hajala</p>
          <p>puh. 0400 826 360</p>
          <p>y-tunnus: 2990413-4</p>

          <h2>2. Rekisterin tietosisältö</h2>
          <p>
            Verkkokaupan asiakasrekisteriin tallentuvat seuraavat asiakastiedot,
            jotka ovat käyttäjän itsensä antamat tai henkilön tunnistavat
            tiedot:
          </p>
          <p>Tunnistamistiedot</p>
          <ul>
            <li>
              Henkilön etu- ja sukunimi, yrityksen nimi, lähiosoite,
              toimitusosoite, sähköpostiosoite ja puhelinnumero
            </li>
          </ul>
          <p>
            Palvelujen käytöstä havainnoidut ja analytiikan avulla johdetut
            tiedot
          </p>
          <ul>
            <li>Ostoshistoria, mm. tilatut tuotteet ja niiden hintatiedot</li>
            <li>Toimitustiedot, kuten valittu toimitustapa ja toimitusosoite</li>
            <li>Verkkoyhteyden IP-osoite</li>
          </ul>
          <p>
            Rannikon Puutarhan verkkokauppa edellyttää vähintään 13 vuoden
            ikää, joten rekisteri ei sisällä alle 13-vuotiaiden henkilötietoja.
          </p>

          <h2>3. Tilausrekisterin suojauksen periaatteet</h2>
          <p>
            Turvaamme asiakkaidemme yksityisyyden suojan ja vastaamme siitä,
            että kaikki henkilötietojen käsittely tapahtuu voimassa olevan lain
            mukaisesti. Asiakkaamme voivat tilata verkkokaupastamme tuotteita
            ilman rekisteröitymistä, mutta tarvitsemme tiettyjä henkilötietoja,
            jotta kauppa olisi sujuvaa.
          </p>
          <p>
            Rekisterin käsittelyssä noudatetaan huolellisuutta ja
            tietojärjestelmien avulla käsiteltävät tiedot suojataan
            asianmukaisesti. Kun tietoja säilytetään Internet-palvelimilla,
            niiden laitteiston fyysisestä ja digitaalisesta tietoturvasta
            huolehditaan asiaankuuluvasti. Rekisterinpitäjä huolehtii siitä,
            että tallennettuja tietoja sekä palvelimien käyttöoikeuksia ja
            muita henkilötietojen turvallisuuden kannalta kriittisiä tietoja
            käsitellään luottamuksellisesti ja vain niiden työntekijöiden tai
            kumppanien toimesta, joiden työnkuvaan se kuuluu.
          </p>
          <p>
            Vaitiolovelvollisuus sitoo asiakasrekisteritietoja käsitteleviä
            työntekijöitä. Tietoja kerrotaan tai luovutetaan ulkopuolisille
            vain lakiin perustuvan ilmoitusvelvollisuuden johdosta, kuten
            asiakkaan omasta pyynnöstä tai viranomaisen lakiin perustuvasta
            pyynnöstä.
          </p>

          <h2>4. Sinun oikeutesi rekisteröitynä henkilönä</h2>
          <p>Henkilötietoja käytetään:</p>
          <ul>
            <li>Asiakassuhteen hoitamiseen</li>
            <li>Verkkokaupasta tehtyjen tilausten toimitukseen ja käsittelyyn</li>
            <li>
              Rannikon Puutarhan verkkokaupan toiminnan ja palveluiden
              kehittämiseen
            </li>
            <li>Asiakaskokemuksen parantamiseen</li>
            <li>Analytiikkaan ja tilastollisiin tarkoituksiin</li>
            <li>Paremman asiakaspalvelun tarjoamiseen</li>
          </ul>
          <p>Asiakkaana sinulla on oikeus:</p>
          <ul>
            <li>
              Saada pääsy itseäsi koskeviin henkilötietoihin, mukaan lukien
              oikeus saada jäljennös sinua koskevista henkilötiedoista
            </li>
            <li>
              Pyytää itseäsi koskevien henkilötietojen oikaisemista tai
              poistamista
            </li>
          </ul>

          <h2>5. Kuka käsittelee henkilötietojani?</h2>
          <p>
            Asiakastietoihin on pääsy vain Rannikon Puutarhan omilla
            työntekijöillä, joilla on työtehtäviensä perusteella oikeus
            käsitellä rekisteriin tallennettuja tietoja. Tilauksia käsittelevä
            henkilökuntamme on koulutettu käyttämään henkilötietoja
            turvallisesti ja eettisesti.
          </p>
          <p>
            Rekisteriä säilytetään sähköisesti ja suojattuna asianmukaisesti
            ulkopuolisilta. Rekisterin käyttöoikeus edellyttää henkilökohtaista
            käyttäjätunnusta ja salasanaa. Henkilötietoja ei siirretä EU- tai
            ETA-alueen ulkopuolelle. Myös eräillä viranomaisilla on lakiin
            perustuva tiedonsaantioikeus. Tällaisia viranomaisia ovat mm.
            poliisi-, tulli-, rajavartio- ja veroviranomaiset.
          </p>

          <h2>6. Kuinka kauan tietojani säilytetään?</h2>
          <p>
            Säilytämme henkilökohtaisia tietojasi vain tarvittavan ajan, jotta
            voimme täyttää tässä selosteessa kuvatut käyttötarkoitukset. Kun
            teet tilauksen, tallennetaan antamasi tiedot Rannikon Puutarhan
            verkkokaupan järjestelmään, jotta sinut voidaan pitää ajan tasalla
            tilauksestasi. Yhteystietosi poistetaan tilauksen tekemisen
            ajankohdasta saman vuoden loppuun mennessä. Emme siis säilytä
            henkilötietoja pidempään kuin mitä on välttämätöntä.
          </p>
          <p>
            Asiakkaan pyynnöstä häntä koskeva henkilötieto voidaan poistaa
            Rannikon Puutarhan verkkokaupan järjestelmästä. Poistotoimenpide on
            peruuttamaton, emmekä voi palauttaa poistettuja asiakastilejä.
          </p>

          <h2>7. Kuinka saan järjestelmään itsestäni tallennetut tiedot?</h2>
          <p>
            Voit pyytää Rannikon Puutarhan verkkokaupan järjestelmään
            tallennetut tiedot ottamalla yhteyttä sähköpostilla:{" "}
            <a href="mailto:toimisto@rannikonpuutarha.fi">
              toimisto@rannikonpuutarha.fi
            </a>
          </p>

          <h2>8. Voidaanko tätä tietosuojaselostetta muuttaa?</h2>
          <p>
            Palveluiden kehityksen ja lainsäädännön muutosten johdosta
            pidätämme oikeuden muuttaa tietosuojaselostetta.
          </p>
        </article>
      </div>
    </>
  );
}
