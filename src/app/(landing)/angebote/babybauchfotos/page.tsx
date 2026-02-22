import GenericLayout from "@/components/landing/generic-layout";
import { PriceTier } from "@/components/landing/pricing";
import {
  DEFAULT_HOURLY_RATE,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
} from "@/lib/constants";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Babybauchfotograf in Ansbach | Unvergessliche Momente festhalten",
  description:
    "Dein professioneller Babybauchfotograf in Ansbach. Ich halte eure Schwangerschaft in emotionalen Bildern fest.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  const heroImg = "/images/angebote/babybauchfotos/hero.jpg";
  return (
    <GenericLayout
      hero={{
        imageClassName: "object-left",
        imgUrl: heroImg,
        heading: {
          hTag: "Babybauchfotograf in Ansbach",
          title: "Mit meinen Fotos bleibt eure Schwangerschaft ewig lebendig",
          description:
            "Mit Erfahrung, Leidenschaft und kreativem Auge fange ich die magischen Momente und tiefen Emotionen eurer Schwangerschaft ein, um sie in beeindruckenden Bildern für die Ewigkeit festzuhalten.",
        },
      }}
      portfolio={{
        heading: {
          hTag: "Portfolio meiner Babybauchfotos",
          title: "Eindrücke meiner Babybauchfotos für euch",
          description:
            "Mein Portfolio meiner Babybauchfotos zeigen die Liebe und das Glück, die ich bei zahlreichen Schwangerschaft über die Zeit als Babybauchfotograf dokumentiert habe. Gefallen euch die Bilder? Dann würde ich mich total freuen, von euch zu hören!",
        },
        imageOrVideoUrls: [
          {
            url: "/images/angebote/babybauchfotos/1.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/2.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/3.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/4.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/6.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/7.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/8.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/9.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/10.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/11.jpg",
          },
          {
            url: "/images/angebote/babybauchfotos/5.jpg",
          },
        ],
      }}
      pricing={{
        shootingType: "Babybauchfotoshooting",
        voucherImage: heroImg,
        heading: {
          hTag: "Preise für Babybauchfotografie",
          title: "Transparente Preise",
          description:
            "Meine Babybauchfotografie-Pakete bieten transparente Preise und maßgeschneiderte Optionen, um eure Schwangerschaft perfekt festzuhalten.",
        },
        priceTiers,
      }}
      faq={{
        heading: {
          hTag: "Fragen und Antworten über die Babybauchfotografie in Ansbach",
          title: "Oft wollen unsere Paare wissen...",
        },
        questionsAndAnswers,
      }}
    />
  );
}

const priceTiers: PriceTier[] = [
  {
    name: "Zauberhafte Erwartung",
    price: `${DEFAULT_HOURLY_RATE.toString()} €`,
    description:
      "Perfekt für intime Babybauch-Shootings mit dem Partner, um die besondere Zeit der Schwangerschaft festzuhalten",
    features: [
      {
        listItemText: "Keine versteckten Kosten",
        tooltipText:
          "Der Preis den ihr hier seht, ist der den ihr bezahlt. Nichts weiter.",
      },
      {
        listItemText: "Digitales Vorgespräch",
        tooltipText: "Damit wir uns entspannt kennenlernen können.",
      },
      {
        listItemText: "Bis zu 60 Minuten",
        tooltipText:
          "Mindestens solange. Und keine Sorge, wir haben keinen Zeitstress. Falls es doch länger gehen sollte als erwartet, besprechen wir gern vor Ort wielange wir verlängern sollen.",
      },
      {
        listItemText: "Alle Bilder des Tages",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotos im Reportagenstil",
        tooltipText:
          "Ich begleite euch unauffällig im Hintergrund, dabei entstehen die schönsten, natürlichsten Bilder. Nichts ist dabei gestellt.",
      },
      {
        listItemText: "Intimes Paarshooting",
        tooltipText:
          "Ich fotografiere euch beide entweder bei einem schönen Spaziergang in der Natur oder bei uns im Fotostudio.",
      },
      {
        listItemText: "Hochwertige Bildbearbeitung",
        tooltipText: "Ist immer inklusive und erfolgt mit modernster Software.",
      },
      {
        listItemText: "Lieferzeit ca. 2 Wochen",
        tooltipText:
          "Die aufwendige Arbeit beginnt in der Regel nach dem Shooting. Weil pro Stunde Shooting locker hunderte Bilder zusammenkommen können, müssen diese zunächst sortiert und bearbeitet werden.",
      },
      {
        listItemText: "Wunderschöne Onlinegalerie",
        tooltipText:
          "Ich informiere euch, sobald eure Bilder online sind. Ihr und eure Liebsten können eure Bilder dann jederzeit online in eurem eigenen Passwortgeschützten Bereich in unserer Herzensbildercloud ansehen und abrufen.",
      },
    ],
    mostPopular: false,
  },
  {
    name: "Kleines Wunder",
    price: `${(DEFAULT_HOURLY_RATE * 2).toString()} €`,
    description:
      "Ideal für umfangreiche Babybauch-Shootings mit Kleider- und Ortswechseln, inklusive Studioaufnahmen",
    features: [
      {
        listItemText: "Keine versteckten Kosten",
        tooltipText:
          "Der Preis den ihr hier seht, ist der den ihr bezahlt. Nichts weiter.",
      },
      {
        listItemText: "Persönliches Vorgespräch",
        tooltipText:
          "Damit wir uns in echt kennenlernen können um zu checken ob wir zusammenpassen.",
      },
      {
        listItemText: "Bis zu 2 Stunden",
        tooltipText:
          "Mindestens solange. Und keine Sorge, wir haben keinen Zeitstress. Falls es doch länger gehen sollte als erwartet, besprechen wir gern vor Ort wielange wir verlängern sollen.",
      },
      {
        listItemText: "Alle Bilder des Tages",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotos im Reportagenstil",
        tooltipText:
          "Ich begleite euch unauffällig im Hintergrund, dabei entstehen die schönsten, natürlichsten Bilder. Nichts ist dabei gestellt.",
      },
      {
        listItemText: "Intimes Paarshooting in der Natur und im Fotostudio",
        tooltipText:
          "Wir beginnen unser Babybauchshooting in unserem Fotostudio und machen anschließend einen schönen Foto-Spaziergang durch die Natur. Dabei inklusive sind mehrere Outfit- und Ortswechsel.",
      },
      {
        listItemText: "Hochwertige Bildbearbeitung",
        tooltipText: "Ist immer inklusive und erfolgt mit modernster Software.",
      },
      {
        listItemText: "Lieferzeit ca. 2 Wochen",
        tooltipText:
          "Die aufwendige Arbeit beginnt in der Regel nach dem Shooting. Weil pro Stunde Shooting locker hundert Bilder zusammenkommen können, müssen diese zunächst sortiert und bearbeitet werden.",
      },
      {
        listItemText: "Wunderschöne Onlinegalerie",
        tooltipText:
          "Ich informiere euch, sobald eure Bilder online sind. Ihr und eure Liebsten können eure Bilder dann jederzeit online in eurem eigenen Passwortgeschützten Bereich in unserer Herzensbildercloud ansehen und abrufen.",
      },
    ],
    mostPopular: true,
  },
];

const questionsAndAnswers = [
  {
    question:
      "Warum sollten wir dich als unseren Babybauchfotograf aus Ansbach buchen?",
    answer: (
      <p>
        <span className="font-extrabold">Ganz ehrlich:</span> Es gibt so viele
        tolle Babybauchfotografen in Ansbach und Umgebung und auch
        deutschlandweit, die Wahl des richtigen Babybauchfotografen ist deswegen
        eine sehr persönliche Entscheidung. Ich bin kein Verkäufer, deswegen
        habe ich an dieser Stelle auch keinen tollen Pitch. Ich kann euch nur
        etwas über meine Philosophie und Herangehensweise an die
        Babybauchfotografie erzählen:{" "}
        <span className="font-extrabold">
          Es geht nicht nur darum, schöne Bilder zu machen
        </span>{" "}
        – das können viele. Es geht darum, jemanden zu finden, der die kleinen,
        flüchtigen Momente einfangen kann, die eure Geschichte erzählen. Jemand,
        der die Blicke, das Lachen, die Tränen der Freude und die Liebe, die in
        der Luft liegt, sieht und für immer festhält. Ich strebe danach,{" "}
        <span className="font-extrabold">
          nicht nur ein Babybauchfotograf zu sein, sondern ein
          Geschichtenerzähler
        </span>
        , der die Essenz eures besonderen Tages einfängt. Es wäre mir eine Ehre,
        diese Rolle für euch zu übernehmen und die Erinnerungen zu schaffen, die
        ihr für den Rest eures Lebens schätzen werdet...
      </p>
    ),
  },
  {
    question: "Wie sind die Preise für dich als Babybauchfotograf in Ansbach?",

    answer: (
      <p>
        Natürlich ist es sehr wichtig, zu wissen, wie teuer eure Fotos sein
        werden. Die Preise für einen Babybauchfotografen in Ansbach werden meist
        gut unter Verschluss gehalten. Nicht bei mir! Bei mir findet ihr meine
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
    question: "Was ist, wenn es bei unserem Fotoshooting regnet?",

    answer: (
      <p>
        <span className="font-extrabold">Bombastisch!</span> Wolken am Himmel
        machen super diffuses Licht. Ich wünsche euch natürlich immer den
        wunderschönsten und sonnigsten Tag, den ihr euch erhofft. Sollte dem
        dann doch nicht so sein, haben wir einen Plan B. Entweder wir machen ein
        total romantisches Regenshooting, machen das Fotoshooting in meinem
        Studio oder schlimmstenfalls verschieben wir auf einen anderen Tag.
        Keine Sorge, wir finden eine Lösung!
      </p>
    ),
  },

  {
    question:
      "Wie weit im Voraus müssen wir dich für unsere Babybauchshooting buchen?",
    answer: (
      <div>
        Meldet euch am besten 2 bis 4 Wochen im Voraus, dann findent wir einen
        Termin der passt!
      </div>
    ),
  },

  {
    question: "Ein paar unserer Fragen wurden noch nicht beantwortet?",
    answer: (
      <p>
        Ihr könnt euch jederzeit unter{" "}
        <Link href={EMAIL_ADDRESS} className="font-extrabold underline">
          {EMAIL_ADDRESS}
        </Link>{" "}
        melden. Oder mal bei mir unter{" "}
        <Link href={`tel:${PHONE_NUMBER}`} className="font-extrabold underline">
          {PHONE_NUMBER}
        </Link>{" "}
        anrufen, smsn, whatsappen, telegrammen, signalen, was auch immer euch am
        liebsten ist.
      </p>
    ),
  },
];
