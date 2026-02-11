import GenericLayout from "@/components/landing/generic-layout";
import { PriceTier } from "@/components/landing/pricing";
import {
  DEFAULT_HOURLY_RATE,
  PHONE_NUMBER,
  PHONE_NUMBER_WRITTEN,
} from "@/lib/constants";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Babyfotograf in Ansbach | Unvergessliche Momente festhalten",
  description:
    "Dein professioneller Babyfotograf in Ansbach. Ich halte die ersten Lebensmonate in emotionalen Bildern fest.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  const heroImg = "/images/angebote/babyfotografie/hero.jpg";
  return (
    <GenericLayout
      hero={{
        imageClassName: "",
        imgUrl: heroImg,
        heading: {
          hTag: "Babyfotograf in Ansbach",
          title:
            "Mit meinen Fotos bleiben die ersten Lebensmonate ewig lebendig",
          description:
            "Mit Erfahrung, Leidenschaft und kreativem Auge fange ich die magischen Momente und tiefen Emotionen der ersten Lebensmonate eures Kindes ein, um sie in beeindruckenden Bildern für die Ewigkeit festzuhalten.",
        },
      }}
      portfolio={{
        heading: {
          hTag: "Portfolio meiner Babyfotografie",
          title: "Eindrücke meiner Babyfotografie für euch",
          description:
            "Mein Portfolio meiner Babyfotos zeigt die Liebe und das Glück, die ich bei zahlreichen Schwangerschaft über die Zeit als Babybauchfotograf dokumentiert habe. Gefallen euch die Bilder? Dann würde ich mich total freuen, von euch zu hören!",
        },
        imageOrVideoUrls: [
          {
            url: "/images/angebote/babyfotografie/3.jpg",
          },
          {
            url: "/images/angebote/babyfotografie/2.jpg",
          },
          {
            url: "/images/angebote/babyfotografie/1.jpg",
          },
          {
            url: "/images/angebote/babyfotografie/4.jpg",
          },
          {
            url: "/images/angebote/babyfotografie/5.jpg",
          },
          {
            url: "/images/angebote/babyfotografie/6.jpg",
          },
        ],
      }}
      pricing={{
        shootingType: "Babyfotoshooting",
        voucherImage: heroImg,
        heading: {
          hTag: "Preise für Babyfotografie",
          title: "Transparente Preise",
          description:
            "Meine Babyfotografie-Pakete bieten transparente Preise und maßgeschneiderte Optionen, um die ersten Lebensmonate perfekt festzuhalten.",
        },
        priceTiers,
      }}
      faq={{
        heading: {
          hTag: "Fragen und Antworten über die Babyfotografie in Ansbach",
          title: "Oft wollen unsere frischgewordenen Eltern wissen...",
        },
        questionsAndAnswers,
      }}
    />
  );
}

const priceTiers: PriceTier[] = [
  {
    name: "Erste Momente",
    price: `${DEFAULT_HOURLY_RATE.toString()} €`,
    description: "Ein intimes Baby-Fotoshooting nur für euer kleines Wunder",
    features: [
      {
        listItemText: "Etwa 20 Profi-Fotos",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotoshooting deines Babies im Boho Fotostudio",
        tooltipText:
          "Ich fotografiere euer Baby in unserem behaglichen Fotostudio mit zahlreichen Requisiten",
      },
      {
        listItemText: "Hochwertige Bildbearbeitung in meinem Stil",
        tooltipText:
          "Ich bearbeite alle und jedes einzelne Bild in dem Stil, wie du sie auf meiner Website findest.",
      },
      {
        listItemText: "Revisionen von bis zu 2 Bildern",
        tooltipText:
          "Die Bildbearbeitung ist in dem Stil wie du sie in meinem Portfolio findest. Du hast hier die Möglichkeit bis zu 2 Bilder 1x nach Auslieferung von mir neu bearbeiten zu lassen. Die Revision von jedem weiteren Bild kostet 19 €.",
      },
      {
        listItemText: "Lieferzeit ca. 4 Wochen",
        tooltipText:
          "Die aufwendige Arbeit beginnt in der Regel nach dem Shooting. Weil pro Stunde Shooting locker hundert Bilder zusammenkommen können, müssen diese zunächst sortiert und bearbeitet werden.",
      },
      {
        listItemText: "Wunderschöne Onlinegalerie",
        tooltipText:
          "Ich informiere euch, sobald eure Bilder online sind. Ihr und eure Liebsten können eure Bilder dann jederzeit online in eurem eigenen Passwortgeschützten Bereich in unserer Herzensbildercloud ansehen und abrufen.",
      },
      {
        listItemText: "Sicherung deiner Bilder für 1 Monat",
        tooltipText:
          "Solange es Herzensbilder Bauer gibt, speichere ich deine Fotos in meiner Herzensbilder Cloud ab. Du kannst sie 1 Monat lang in höchter Qualität downloaden. Danach kostet das Herunterladen deiner Bilder in Profi-Qualität jeweils 19,99 €.",
      },
    ],
    mostPopular: false,
  },
  {
    name: "Jahreswunder",
    price: `${(DEFAULT_HOURLY_RATE * 5).toString()} €`,
    description:
      "Ein einjähriges Fotoshooting bei dem das erste Lebensjahr eures Kindes in sechs Fotoshooting Sitzungen festgehalten wird",
    features: [
      {
        listItemText: "1 Fotoshooting geschenkt",
        tooltipText:
          "Ihr spart euch beim Jahresshooting die Kosten für ein Fotoshooting.",
      },
      {
        listItemText: "Alle Bilder dieser Zeit",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotoshooting im Boho Fotostudio",
        tooltipText:
          "Ich fotografiere dich in unserem behaglichen Fotostudio mit zahlreichen Requisiten",
      },
      {
        listItemText: "Fotoshooting in der Natur",
        tooltipText:
          "Boho Fotoshootings stehen für Natur, Coziness, Authentizität. Dafür gehen wir in die Natur und machen dort natürliche und kräftige Bilder zu jeder Jahreszeit.",
      },

      {
        listItemText: "Hochwertige Bildbearbeitung in meinem Stil",
        tooltipText:
          "Ich bearbeite alle und jedes einzelne Bild in dem Stil, wie du sie auf meiner Website findest.",
      },
      {
        listItemText: "Revision von allen Bildern",
        tooltipText:
          "Die Bildbearbeitung ist in dem Stil wie du sie in meinem Portfolio findest. Du hast hier die Möglichkeit alle Bilder 1x nach Auslieferung von mir neu bearbeiten zu lassen.",
      },
      {
        listItemText: "Schlechtwetterabsicherung",
        tooltipText:
          "Wenn das Wetter unerwartet sehr schlecht ist (Starkregen, Hagel, Schneesturm, Überflutung) sodass das Fotoshooting im Freien nicht stattfinden kann, bieten wir dir hier eine Schlechtwetterabsicherung an. Das Fotoshooting kann kostenfrei an einem Ort nach Wahl in einem Umkreis von 10 km um Ansbach herum nachgeholt werden.",
      },
      {
        listItemText: "Lieferzeit ca. 1 Wochen",
        tooltipText:
          "Die aufwendige Arbeit beginnt in der Regel nach dem Shooting. Weil pro Stunde Shooting locker hundert Bilder zusammenkommen können, müssen diese zunächst sortiert und bearbeitet werden.",
      },
      {
        listItemText: "Wunderschöne Onlinegalerie mit dauerhaftem Zugang",
        tooltipText:
          "Ich informiere euch, sobald eure Bilder online sind. Ihr und eure Liebsten können eure Bilder dann jederzeit online in eurem eigenen Passwortgeschützten Bereich in unserer Herzensbildercloud ansehen und abrufen. Dein Zugang zur Herzensbildercloud gilt solange es Herzensbilder Bauer gibt.",
      },
      {
        listItemText: "Dauerhafte Sicherung deiner Bilder",
        tooltipText:
          "Solange es Herzensbilder Bauer gibt, speichere ich deine Fotos in meiner Herzensbilder Cloud ab. Du kannst sie jederzeit in höchter Qualität downloaden, solltest du sie selbst mal verlieren.",
      },
    ],
    mostPopular: true,
  },
  {
    name: "Familienglück",
    price: `${(DEFAULT_HOURLY_RATE * 2).toString()} €`,
    description: "Ein intimies Familienshooting mit euch und eurem Baby",
    features: [
      {
        listItemText: "Etwa 40 Profi-Fotos",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotoshooting im Boho Fotostudio",
        tooltipText:
          "Ich fotografiere euch in unserem behaglichen Fotostudio mit zahlreichen Requisiten",
      },
      {
        listItemText: "ODER Fotoshooting in der Natur",
        tooltipText:
          "Boho Fotoshootings stehen für Natur, Coziness, Authentizität. Dafür gehen wir in die Natur und machen dort natürliche und kräftige Bilder zu jeder Jahreszeit.",
      },

      {
        listItemText: "Hochwertige Bildbearbeitung in meinem Stil",
        tooltipText:
          "Ich bearbeite alle und jedes einzelne Bild in dem Stil, wie du sie auf meiner Website findest.",
      },
      {
        listItemText: "Revision von bis zu 5 Bildern",
        tooltipText:
          "Die Bildbearbeitung ist in dem Stil wie du sie in meinem Portfolio findest. Du hast hier die Möglichkeit bis zu 5 Bilder 1x nach Auslieferung von mir neu bearbeiten zu lassen.",
      },
      {
        listItemText: "Lieferzeit ca. 4 Wochee",
        tooltipText:
          "Die aufwendige Arbeit beginnt in der Regel nach dem Shooting. Weil pro Stunde Shooting locker hundert Bilder zusammenkommen können, müssen diese zunächst sortiert und bearbeitet werden.",
      },
      {
        listItemText: "Wunderschöne Onlinegalerie",
        tooltipText:
          "Ich informiere euch, sobald eure Bilder online sind. Ihr und eure Liebsten können eure Bilder dann jederzeit online in eurem eigenen Passwortgeschützten Bereich in unserer Herzensbildercloud ansehen und abrufen. Dein Zugang zur Herzensbildercloud gilt solange es Herzensbilder Bauer gibt.",
      },
      {
        listItemText: "Sicherung deiner Bilder für 1 Monat",
        tooltipText:
          "Solange es Herzensbilder Bauer gibt, speichere ich deine Fotos in meiner Herzensbilder Cloud ab. Du kannst sie 1 Monat lang in höchter Qualität downloaden. Danach kostet das Herunterladen deiner Bilder in Profi-Qualität jeweils 19,99 €.",
      },
    ],
    mostPopular: false,
  },
];

const questionsAndAnswers = [
  {
    question: "Warum sollten wir dich als unseren Babyfotograf aus Ansbach",
    answer: (
      <p>
        <span className="font-extrabold">Ganz ehrlich:</span> Es gibt so viele
        tolle Babyfotografen in Ansbach und Umgebung und auch deutschlandweit,
        die Wahl des richtigen Babybauchfotografen ist deswegen eine sehr
        persönliche Entscheidung. Ich bin kein Verkäufer, deswegen habe ich an
        dieser Stelle auch keinen tollen Pitch. Ich kann euch nur etwas über
        meine Philosophie und Herangehensweise an die Babyfotografie erzählen:{" "}
        <span className="font-extrabold">
          Es geht nicht nur darum, schöne Bilder zu machen
        </span>{" "}
        – das können viele. Es geht darum, jemanden zu finden, der die kleinen,
        flüchtigen Momente einfangen kann, die eure Geschichte erzählen. Jemand,
        der die Blicke, das Lachen und die Liebe, die in der Luft liegt, sieht
        und für immer festhält. Ich strebe danach,{" "}
        <span className="font-extrabold">
          nicht nur ein Babyfotograf zu sein, sondern ein Geschichtenerzähler
        </span>
        , der die Essenz der ersten Lebenszeit einfängt. Es wäre mir eine Ehre,
        diese Rolle für euch zu übernehmen und die Erinnerungen zu schaffen, die
        ihr für den Rest eures Lebens schätzen werdet...
      </p>
    ),
  },
  {
    question: "Wie sind die Preise für dich als Babyfotografen in Ansbach?",

    answer: (
      <p>
        Natürlich ist es sehr wichtig, zu wissen, wie teuer eure Fotos sein
        werden. Die Preise für einen Babyfotografen in Ansbach werden meist gut
        unter Verschluss gehalten. Nicht bei mir! Bei mir findet ihr meine
        Kosten transparent aufgelistet. Außerdem gibt es bei mir ausschließlich
        Rundum-Sorglos-Pakete. Die Preise hängen von der Dauer und der Art des
        Fotoshootings ab. Stöbert gern in den Angeboten um mehr zu erfahren. Was
        auf jeden Fall immer bei jedem Paket dabei ist: Unterstützung bei der
        Planung, Professionelle Nachbearbeitung der Bilder, Online-Galerie mit
        allen hochauflösenden Bildern in unserer Herzensbilder Cloud, und vieles
        mehr.
      </p>
    ),
  },

  {
    question:
      "Wie weit im Voraus müssen wir dich für unsere Babyfotoshooting buchen?",
    answer: (
      <div>
        Meldet euch am besten 2 bis 4 Wochen im Voraus, dann finden wir einen
        Termin der passt!
      </div>
    ),
  },

  {
    question: "Ein paar unserer Fragen wurden noch nicht beantwortet?",
    answer: (
      <p>
        Ihr könnt euch jederzeit unter{" "}
        <Link
          href={"mailto:hey@herzensbilderbauer.de"}
          className="font-extrabold underline"
        >
          hey@herzensbilderbauer.de
        </Link>{" "}
        melden. Oder mal bei mir unter{" "}
        <Link href={`tel:${PHONE_NUMBER}`} className="font-extrabold underline">
          {PHONE_NUMBER_WRITTEN}
        </Link>{" "}
        anrufen, smsn, whatsappen, telegrammen, signalen, was auch immer euch am
        liebsten ist.
      </p>
    ),
  },
];
