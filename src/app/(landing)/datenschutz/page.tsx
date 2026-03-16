import React from "react";
import { antic } from "@/fonts";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/lib/constants";

export default function Page() {
  return (
    <div className="mx-auto mb-32 mt-48 flex max-w-4xl flex-col gap-4 px-3">
      <h1
        className={`font-mono ${antic.variable} scroll-m-20 text-5xl md:text-6xl`}
      >
        Datenschutzerklärung
      </h1>

      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
        informieren wir Sie darüber, welche Daten bei der Nutzung dieser Website
        verarbeitet werden und welche Rechte Sie als betroffene Person haben.
        Die Erklärung bezieht sich ausschließlich auf diese Website.
      </p>

      <h2 className="font-bold">1. Verantwortliche Stelle</h2>

      <p>Christian Bauer</p>
      <p>Jüdtstr. 24</p>
      <p>91522 Ansbach</p>

      <h3 className="font-bold">Kontakt</h3>
      <p>Telefon: {PHONE_NUMBER}</p>
      <p>Email: {EMAIL_ADDRESS}</p>

      <h2 className="font-bold">2. Hosting dieser Website</h2>
      <p>
        Diese Website wird als statische Seite bei GitHub Pages, einem Dienst
        der GitHub, Inc. (88 Colin P. Kelly Jr. Street, San Francisco, CA 94107,
        USA) gehostet und von dort ausgeliefert.
      </p>
      <p>
        Beim Aufruf der Seiten werden durch GitHub bzw. den beim Abruf
        eingesetzten Provider technisch notwendige Daten verarbeitet,
        insbesondere:
      </p>
      <ul className="list-disc pl-6">
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Abrufs</li>
        <li>aufgerufene Datei/Seite</li>
        <li>übertragene Datenmenge</li>
        <li>verwendeter Browser und Betriebssystem</li>
      </ul>
      <p>
        Die Verarbeitung dieser Daten erfolgt zur Auslieferung der Website, zur
        Sicherstellung des technischen Betriebs sowie zur Abwehr von Angriffen
        auf die Infrastruktur. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an der sicheren und stabilen Bereitstellung des
        Online-Angebots).
      </p>
      <p>
        GitHub kann die genannten Daten in eigener Verantwortung weiter
        verarbeiten. Weitere Informationen finden Sie in der{" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          Datenschutzerklärung von GitHub
        </a>
        .
      </p>

      <h2 className="font-bold">3. Cookies und Einwilligungsverwaltung</h2>
      <p>
        Wir setzen auf dieser Website nur technisch notwendige Cookies sowie –
        nach Ihrer Einwilligung – Cookies zu Statistikzwecken (Google Analytics)
        ein.
      </p>
      <p>
        Notwendige Cookies sind für den Betrieb der Website erforderlich und
        beruhen auf Art. 6 Abs. 1 lit. f DSGVO. Statistik-Cookies werden nur
        gesetzt, wenn Sie im Cookie-Banner aktiv zustimmen (Art. 6 Abs. 1 lit. a
        DSGVO, § 25 Abs. 1 TTDSG). Ihre Auswahl wird in einem lokalen
        Speicher-Eintrag (Cookie-Einstellung) gespeichert, damit wir Ihre
        Entscheidung bei künftigen Besuchen berücksichtigen können.
      </p>
      <p>
        Sie können Ihre Entscheidung jederzeit über das Cookie-Banner ändern,
        indem Sie Ihre Einwilligung widerrufen oder neu erteilen.
      </p>

      <h2 className="font-bold">4. Google Analytics</h2>
      <p>
        Diese Website nutzt – nur nach Ihrer ausdrücklichen Einwilligung – den
        Webanalysedienst Google Analytics, einen Dienst der Google Ireland
        Limited, Gordon House, Barrow Street, Dublin 4, Irland
        (&quot;Google&quot;).
      </p>
      <p>
        Google Analytics verwendet Cookies, die eine Analyse der Benutzung der
        Website durch Sie ermöglichen. Die durch das Cookie erzeugten
        Informationen über Ihre Nutzung dieser Website (z. B. aufgerufene
        Seiten, Verweildauer, verwendetes Endgerät und Browser, ungefährer
        Standort auf Basis der IP-Adresse) werden in der Regel an einen Server
        von Google übertragen und dort gespeichert. Dabei kann es zu einer
        Übermittlung in die USA kommen.
      </p>
      <p>
        Wir haben Google Analytics so implementiert, dass es nur geladen wird,
        wenn Sie im Cookie-Banner ausdrücklich zugestimmt haben. Rechtsgrundlage
        für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1
        TTDSG. Sie können Ihre Einwilligung jederzeit mit Wirkung für die
        Zukunft widerrufen, indem Sie im Cookie-Banner die Statistik-Cookies
        deaktivieren.
      </p>
      <p>
        Soweit Daten von Google auf Servern in den USA verarbeitet werden,
        erfolgt dies auf Grundlage von Art. 46 DSGVO (Standardvertragsklauseln)
        bzw. weiterer von Google eingesetzter Garantien. Nähere Informationen
        zur Datenverarbeitung durch Google und zu Einstellungsmöglichkeiten
        finden Sie in der{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          Datenschutzerklärung von Google
        </a>{" "}
        und in den{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          Hinweisen zu Google-Partnerseiten
        </a>
        .
      </p>

      <h2 className="font-bold">5. Kontaktaufnahme</h2>
      <p>
        Sie können mit uns telefonisch oder per E-Mail Kontakt aufnehmen. In
        diesem Fall verarbeiten wir die von Ihnen übermittelten
        personenbezogenen Daten (z. B. Name, Telefonnummer, E-Mail-Adresse,
        Inhalte Ihrer Nachricht), um Ihre Anfrage zu bearbeiten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw.
        vorvertragliche Maßnahmen), soweit Ihre Anfrage mit einem Vertrag
        zusammenhängt oder auf den Abschluss eines Vertrages gerichtet ist,
        ansonsten Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
        Beantwortung von Anfragen).
      </p>
      <p>
        Die Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage
        nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungsfristen
        entgegenstehen.
      </p>

      <h2 className="font-bold">6. Speicherdauer</h2>
      <p>
        Soweit in dieser Erklärung nicht anders beschrieben, werden
        personenbezogene Daten grundsätzlich nur so lange gespeichert, wie dies
        für den jeweiligen Zweck erforderlich ist oder wir gesetzlich dazu
        verpflichtet sind.
      </p>

      <h2 className="font-bold">7. Ihre Rechte</h2>
      <p>
        Ihnen stehen nach der DSGVO insbesondere folgende Rechte zu (sofern die
        jeweiligen gesetzlichen Voraussetzungen erfüllt sind):
      </p>
      <ul className="list-disc pl-6">
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>
          Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO), insb.
          gegen Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
        </li>
        <li>
          Recht, eine einmal erteilte Einwilligung jederzeit mit Wirkung für die
          Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO)
        </li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte können Sie sich jederzeit unter den oben
        genannten Kontaktdaten an uns wenden.
      </p>

      <h2 className="font-bold">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die
        Verarbeitung Ihrer personenbezogenen Daten zu beschweren (Art. 77
        DSGVO).
      </p>

      <h2 className="font-bold">9. Stand dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell und gilt ab dem 16. März 2026.
        Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
        gesetzlicher bzw. behördlicher Vorgaben kann eine Anpassung erforderlich
        werden. Die jeweils aktuelle Fassung stellen wir Ihnen auf dieser Seite
        zur Verfügung.
      </p>
    </div>
  );
}
