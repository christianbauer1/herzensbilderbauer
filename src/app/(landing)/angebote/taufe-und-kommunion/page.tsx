import GenericLayout from "@/components/landing/generic-layout";
import { PriceTier } from "@/components/landing/pricing";
import { FormattedQuestion } from "@/components/landing/q-and-a";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_WRITTEN,
  TRAVEL_HOURLY_RATE,
} from "@/lib/constants";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Fotograf für Taufe und Kommunion in Ansbach",
  description:
    "Dein professioneller Fotograf für Taufe und Kommunion in Ansbach.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  const heroImg = "/images/angebote/taufe-und-kommunion/6.jpg";
  return (
    <GenericLayout
      hero={{
        imgUrl: heroImg,
        heading: {
          hTag: "Fotograf für Taufe und Kommunion in Ansbach",
          description:
            "Mit Erfahrung, Leidenschaft und kreativem Auge fange ich die magischen Momente und tiefen Emotionen eurer Taufe und Kommunion ein, um sie in beeindruckenden Bildern für die Ewigkeit festzuhalten.",
          title:
            "Mit meinen Fotos bleibt eure Taufe und Kommunion ewig lebendig",
        },
      }}
      portfolio={{
        heading: {
          hTag: "Portfolio meiner Taufen und Kommunionen",
          title: "Ein paar Eindrücke für euch",
          description:
            "Mein Portfolio meiner Bilder für Taufen und Kommunionen zeigen die Liebe und das Glück, die ich bei zahlreichen Events über die Zeit als Fotograf dokumentiert habe. Gefallen euch die Bilder? Dann würde ich mich total freuen, von euch zu hören!",
        },
        imageOrVideoUrls: [
          {
            url: "/images/angebote/taufe-und-kommunion/1.jpg",
          },
          {
            url: "/images/angebote/taufe-und-kommunion/2.jpg",
          },
          {
            url: "/images/angebote/familien-und-paare/2.jpg",
          },
          {
            url: "/images/angebote/taufe-und-kommunion/3.jpg",
          },
          {
            url: "/images/angebote/taufe-und-kommunion/hero.jpeg",
          },
        ],
      }}
      pricing={{
        shootingType: "Taufe und Kommunion",
        voucherImage: heroImg,
        heading: {
          hTag: "Preise für Taufen und Kommunionen",
          title: "Transparente Preise",
          description:
            "Meine Preispakete bieten transparente Preise und maßgeschneiderte Optionen, um euren einzigartigen Tag perfekt festzuhalten.",
        },
        priceTiers,
      }}
      faq={{
        heading: {
          hTag: "Fragen und Antworten über die Fotografie für Taufen und Kommunionen in Ansbach",
          title: "Oft wollen unsere Kunden wissen...",
        },
        questionsAndAnswers,
      }}
    />
  );
}

const priceTiers: PriceTier[] = [
  {
    name: "Heilige Harmonie",
    price: `${TRAVEL_HOURLY_RATE * 6} €`,
    description:
      "Ideale Wahl für fast alle Taufen und Kommunionen mit vielen Gästen und umfangreicher Berichterstattung",
    features: [
      {
        listItemText: "Keine versteckten Kosten",
        tooltipText:
          "Der Preis den ihr hier seht, ist der den ihr bezahlt. Nichts weiter. Die einzige Ausnahme sind weitere Anfahrten, wobei die unten genannte km-Pauschale inkl. ist.",
      },
      {
        listItemText: "Persönliches Vorgespräch",
        tooltipText:
          "Damit wir uns in echt kennenlernen können um zu checken ob wir zusammenpassen.",
      },
      {
        listItemText: "Bis zu 4 Stunden vor Ort",
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
          "Ich begleite die Taufe oder Kommunion unauffällig im Hintergrund, dabei entstehen die schönsten, natürlichsten Bilder. Nichts ist dabei gestellt.",
      },
      {
        listItemText: "Familienshooting & Gruppenfotos",
        tooltipText:
          "Ich fotografiere euch und eure liebsten um schöne Erinnerungen in Fotos festzuhalten.",
      },
      {
        listItemText: "Hochwertige Bildbearbeitung",
        tooltipText: "Ist immer inklusive und erfolgt mit modernster Software.",
      },
      {
        listItemText: "Anfahrt 20 km inkl.",
        tooltipText:
          "Alles in diesem Umkreis von Ansbach ist inklusive. Darüber hinaus wird das anteilige Stundenhonorar und eine Pauschale von 50 Cent/km fällig.",
      },
      {
        listItemText: "Lieferzeit ca. 3 Wochen",
        tooltipText:
          "Die aufwendige Arbeit beginnt in der Regel nach dem Shooting. Weil pro Stunde Shooting locker hundert Bilder zusammenkommen können, müssen diese zunächst sortiert und bearbeitet werden.",
      },
      {
        listItemText: "Wunderschöne Onlinegalerie",
        tooltipText:
          "Ich informiere euch und gerne auch eure Gäste, sobald eure Bilder online sind. Ihr und eure Liebsten können eure Bilder dann jederzeit online in eurem eigenen Passwortgeschützten Bereich in unserer Herzensbildercloud ansehen und abrufen.",
      },
    ],
    mostPopular: true,
  },
];

const questionsAndAnswers = [
  {
    question: (
      <FormattedQuestion
        question="Warum sollten wir dich als unseren Fotograf für Taufe und Kommunion aus Ansbach
          wählen?"
        buttonProps={{
          videoUrl:
            "https://www.youtube.com/embed/Nn17hyeWJfw?si=0HwiVY4pIaYNht9U",
          videoTitle:
            "Christian erklärt warum sich das Paar für ihn als Fotograf für Taufe und Kommunion entscheiden sollte",
        }}
      />
    ),
    answer: (
      <p>
        <span className="font-extrabold">Ganz ehrlich:</span> Es gibt so viele
        tolle Fotografen für Taufen und Kommunionen in Ansbach und Umgebung und
        auch deutschlandweit, die Wahl des richtigen Fotografen ist deswegen
        eine sehr persönliche Entscheidung. Ich bin kein Verkäufer, deswegen
        habe ich an dieser Stelle auch keinen tollen Pitch. Ich kann euch nur
        etwas über meine Philosophie und Herangehensweise an die Fotografie für
        Taufen und Kommunionen erzählen:{" "}
        <span className="font-extrabold">
          Es geht nicht nur darum, schöne Bilder zu machen
        </span>{" "}
        – das können viele. Es geht darum, jemanden zu finden, der die kleinen,
        flüchtigen Momente einfangen kann, die eure Geschichte erzählen. Jemand,
        der die Blicke, das Lachen, die Tränen der Freude und die Liebe, die in
        der Luft liegt, sieht und für immer festhält. Ich strebe danach,{" "}
        <span className="font-extrabold">
          nicht nur ein Fotograf für Taufe und Kommunion zu sein, sondern ein
          Geschichtenerzähler
        </span>
        , der die Essenz eures besonderen Tages einfängt. Es wäre mir eine Ehre,
        diese Rolle für euch zu übernehmen und die Erinnerungen zu schaffen, die
        ihr für den Rest eures Lebens schätzen werdet...
      </p>
    ),
  },
  {
    question: (
      <FormattedQuestion
        question="Wie sind die Preise für dich als Fotograf für Taufe und Kommunion in Ansbach?"
        buttonProps={{
          videoUrl:
            "https://www.youtube.com/embed/VO5ASQhR-7c?si=yLONrYUigtDtxa2j",
          videoTitle:
            "Christian erklärt die Preise für Fotografie für Taufe und Kommunion in Ansbach",
        }}
      />
    ),
    answer: (
      <p>
        Natürlich ist es sehr wichtig, zu wissen, wie teuer eure Fotos sein
        werden. Die Preise für einen Fotograf für Taufe und Kommunion in Ansbach
        werden meist gut unter Verschluss gehalten. Nicht bei mir! Bei mir
        findet ihr meine Kosten transparent aufgelistet. Außerdem gibt es bei
        mir ausschließlich Rundum-Sorglos-Pakete. Die Preise hängen von der
        Dauer und der Art des Fotoshootings ab. Stöbert gern in den Angeboten um
        mehr zu erfahren. Was auf jeden Fall immer bei jedem Paket dabei ist:
        Unterstützung bei der Planung, Professionelle Nachbearbeitung der
        Bilder, Online-Galerie mit allen hochauflösenden Bildern in unserer
        Herzensbilder Cloud, und vieles mehr.
      </p>
    ),
  },

  {
    question: (
      <FormattedQuestion
        question="Was ist, wenn es bei unserem Fotoshooting regnet?"
        buttonProps={{
          videoUrl:
            "https://www.youtube.com/embed/82GrVsRbhfY?si=Zmy7wTIIwzvRDL3r",
          videoTitle:
            "Christian beruhigt, dass es keinen Grund zur Sorge für einen Wetterausfall gibt",
        }}
      />
    ),
    answer: (
      <p>
        <span className="font-extrabold">Bombastisch!</span> Wolken am Himmel
        machen super diffuses Licht. Ich wünsche euch natürlich immer den
        wunderschönsten und sonnigsten Tag, den ihr euch erhofft. Sollte dem
        dann doch nicht so sein, haben wir einen Plan B. Das Käffchen muss dann
        drinnen stattfinden. Für unsere gemeinsame Familienfoto-Session bedeutet
        das, dass wir Motive drinnen suchen. Gibt es immer zu genüge. Und es
        regnet ja nie wirklich durch. Wenn der Regen einen Pause macht, können
        wir zusammen rausgehen und das wunderbar weiche Licht nutzen, das uns
        die dicke Wolkendecke gibt. Sieht immer hammer aus! Im Individual
        Highlight Paket biete ich sogar eine{" "}
        <span className="font-extrabold">Schlechtwetterabsicherung</span> an.
        Damit würden wir das Familien-Shooting an einem anderen schönen Tag
        wiederholen. Damit seid ihr optimal abgesichert.
      </p>
    ),
  },
  {
    question:
      "Arbeitest du als Fotograf für Taufe und Kommunion auch außerhalb Ansbach und Umgebung?",
    answer: (
      <p>
        <span className="font-extrabold">Ja!</span> Ich begleite Fotoreportagen
        unabhängig vom Ort und war bereits in ganz Deutschland unterwegs, wie du
        in meinen Kundenbewertungen nachlesen kannst. Mit meinem Luxery
        Highlight Paket begleite ich deine Fotoreportage sogar{" "}
        <span className="font-extrabold">weltweit</span>! Schreibt mir gern eine
        unverbindliche Anfrage.
      </p>
    ),
  },
  {
    question:
      "Auf welchen Sprachen kannst du unsere Taufe und Kommunion begleiten?",
    answer: (
      <div>
        Ich selbst spreche{" "}
        <span className="font-extrabold">Deutsch, Englisch & Französisch</span>.
        Wenn ihr das Paket Dream Splendor oder Individueller Zauber bucht,
        spricht meine Begleitfotografin neben den genannten Sprachen zusätzlich
        fließend <span className="font-extrabold">Italienisch & Spanisch</span>.
        Wir sind also bestens für eine Multikulturelle Taufe und Kommunion
        gewappnet!
      </div>
    ),
  },

  {
    question:
      "Wie weit im Voraus müssen wir dich für unsere Taufe und Kommunion buchen?",
    answer: (
      <div>
        Da ich für Fotoreportagen überraschenderweise viele schöne Anfragen erst
        sehr kurzfristig bekomme, halte ich mir gerne ein paar Termine im Sommer
        frei.{" "}
        <span className="font-extrabold">
          Ihr habt also auch noch 2 oder 3 Monate vor eurer Taufe und Kommunion
        </span>{" "}
        gute Chancen. Um sicherzugehen, empfehle ich aber ca. 6 Monate im Voraus
        anzufragen.
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
