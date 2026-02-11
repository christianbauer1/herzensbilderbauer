import GenericLayout from "@/components/landing/generic-layout";
import { PriceTier } from "@/components/landing/pricing";
import { FormattedQuestion } from "@/components/landing/q-and-a";
import {
  DISCOUNT_VIDEO_PRICE,
  PHONE_NUMBER,
  PHONE_NUMBER_WRITTEN,
  TRAVEL_HOURLY_RATE,
} from "@/lib/constants";
import Link from "next/link";
import React from "react";

export const metadata = {
  title:
    "Hochzeitsfotograf und Hochzeitsvideograf in Ansbach | Unvergessliche Momente festhalten",
  description:
    "Dein professioneller Hochzeitsfotograf und Hochzeitsvideograf in Ansbach. Ich halte eure einzigartige Hochzeit in emotionalen Bildern und Videos fest.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  const heroImg = "/images/angebote/hochzeitsreportage/hero.jpg";
  return (
    <GenericLayout
      hero={{
        imgUrl: heroImg,
        heading: {
          hTag: "Hochzeitsfotograf und Hochzeitsvideograf in Ansbach",
          description:
            "Mit Erfahrung, Leidenschaft und kreativem Auge fange ich die magischen Momente und tiefen Emotionen eurer Hochzeit ein, um sie in beeindruckenden Bildern und Videos für die Ewigkeit festzuhalten.",
          title:
            "Mit meinen Fotos und Videos bleibt eure Hochzeit ewig lebendig",
        },
        videoUrl:
          "https://firebasestorage.googleapis.com/v0/b/herzensbilderbauer-b0e58.appspot.com/o/kevshort.mp4?alt=media&token=7b4ac37f-52ea-4f37-add1-4a9454bfd715",
      }}
      portfolio={{
        heading: {
          hTag: "Portfolio meiner Hochzeitsbilder und Hochzeitsvideos",
          title:
            "Eindrücke meiner Hochzeitsbilder und Hochzeitsvideos für euch",
          description:
            "Mein Portfolio meiner Hochzeitsbilder und Hochzeitsvideos zeigt die Liebe und das Glück, die ich bei zahlreichen Hochzeiten über die Zeit als Hochzeitsfotograf und Hochzeitsvideograf dokumentiert habe. Gefallen euch die Bilder und Videos? Dann würde ich mich total freuen, von euch zu hören!",
        },
        imageOrVideoUrls: [
          {
            url: "/images/main-portfolio/32.jpg",
            isVideo: true,
            videoUrl:
              "https://www.youtube.com/embed/_-UDItpF3do?si=PGjwW7aKPHv2ONcg",
          },

          {
            url: "/images/main-portfolio/33.jpg",
            isVideo: true,
            videoUrl:
              "https://www.youtube.com/embed/wHeuVd1aVxc?si=T9PlsYjD-RsfOgzR",
          },
          {
            url: "/images/angebote/hochzeitsreportage/20.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/23.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/26.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/25.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/4.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/2.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/1.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/3.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/19.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/18.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/14.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/15.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/16.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/17.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/11.jpg",
          },
          {
            url: "/images/angebote/hochzeitsreportage/12.jpg",
          },
        ],
      }}
      pricing={{
        shootingType: "Hochzeitsreportage",
        voucherImage: heroImg,
        heading: {
          hTag: "Preise für Hochzeitsfotografie",
          title: "Transparente Preise",
        },
        priceTiers,
      }}
      faq={{
        heading: {
          hTag: "Fragen und Antworten über die Hochzeitsfotografen in Ansbach",
          title: "Oft wollen unsere Paare wissen...",
        },
        questionsAndAnswers,
      }}
    />
  );
}

const priceTiers: PriceTier[] = [
  {
    name: "Liebesversprechen",
    price: `599 €`,

    description: "Das kleinste Paket für eure intime Hochzeit.",
    features: [
      {
        listItemText: "Kostenloses Vorgespräch",
        tooltipText: "Damit wir uns entspannt kennenlernen können.",
      },
      {
        listItemText: "Bis zu 2 Stunden vor Ort",
        tooltipText:
          "Gerne könnt ihr jede weitere Stunde mit 299 € dazubuchen. Falls ihr extra lange feiern wollt, oder ich zB. beim Getting Ready mit dabei sein soll.",
      },

      {
        listItemText: "Etwa 80 Profi-Fotos",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },

      {
        listItemText: "Brautpaarshooting",
        tooltipText: "Ich fotografiere euch zwei an einem Ort eurer Wahl.",
      },
      {
        listItemText: "Begleitung der Trauung",
        tooltipText:
          "Ich begleite eure Trauung ganz dezent im Hintergrund und fange hierbei die Emotionen und Erinnerungen ein.",
      },
      {
        listItemText: "Bis zu 3 Gruppenfotos",
        tooltipText:
          "Ich fotografiere euch und eure liebsten um schöne Erinnerungen in Fotos festzuhalten.",
      },
      {
        listItemText: "Hochwertige Bildbearbeitung in meinem Stil",
        tooltipText:
          "Ich bearbeite alle und jedes einzelne Bild in dem Stil, wie du sie auf meiner Website findest.",
      },
      {
        listItemText: "Revisionen von bis zu 3 Bildern",
        tooltipText:
          "Die Bildbearbeitung ist in dem Stil wie du sie in meinem Portfolio findest. Du hast hier die Möglichkeit bis zu drei Bilder 1x nach Auslieferung von mir neu bearbeiten zu lassen. Die Revision von jedem weiteren Bild kostet 19 €.",
      },
      {
        listItemText: "Anfahrt 10 km inkl.",
        tooltipText:
          "Alles in diesem Umkreis von Ansbach ist inklusive. Darüber hinaus wird das anteilige Stundenhonorar und eine Pauschale von 50 Cent/km fällig.",
      },
      {
        listItemText: "Lieferzeit ca. 4 Wochen",
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
  {
    name: "Hochzeitsglanz",
    price: `1.799 €`,
    description: "Die perfekte Ganztagsbegleitung für alle Hochzeiten.",
    features: [
      {
        listItemText: (
          <p className="font-bold">
            Highlightvideo für nur {DISCOUNT_VIDEO_PRICE} €
            <br />
            <Link href={"/highlightvideo"} className="font-bold">
              Mehr erfahren
            </Link>{" "}
            <span aria-hidden="true" className="">
              &rarr;
            </span>{" "}
          </p>
        ),
        tooltipText: (
          <p>
            Nur für kurze Zeit!{" "}
            <Link href={"/highlightvideo"} className="font-bold underline">
              Mehr erfahren
            </Link>
          </p>
        ),
      },
      {
        listItemText: "Kostenloses Vorgespräch",
        tooltipText:
          "Damit wir uns in echt kennenlernen können um zu checken ob wir zusammenpassen.",
      },
      {
        listItemText: "Bis zu 10 Stunden vor Ort",
        tooltipText:
          "Gerne könnt ihr jede weitere Stunde mit 149 € dazubuchen. Falls ihr extra lange feiern wollt, oder ich zB. beim Getting Ready mit dabei sein soll.",
      },

      {
        listItemText: "Alle Bilder des Tages",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotos im Reportagenstil",
        tooltipText:
          "Ich begleite die Trauung und Hochzeitsfeier unauffällig im Hintergrund, dabei entstehen die schönsten, natürlichsten Bilder. Nichts ist dabei gestellt.",
      },
      {
        listItemText: "Begleitung der Trauung",
        tooltipText:
          "Ich begleite eure Trauung ganz dezent im Hintergrund und fange hierbei die Emotionen und Erinnerungen ein.",
      },
      {
        listItemText: "Begleitung der Feier",
        tooltipText:
          "Ich begleite eure Feier ganz dezent im Hintergrund und fange hierbei die Emotionen und Erinnerungen ein.",
      },
      {
        listItemText: "Brautpaarshooting",
        tooltipText: "Ich fotografiere euch zwei an einem Ort eurer Wahl.",
      },
      {
        listItemText: "Getting Ready",
        tooltipText:
          "Ich fotografiere euch bei den Vorbereitungen auf euren großen Tag.",
      },
      {
        listItemText: "First Look",
        tooltipText:
          "Ich fotografiere den Moment bevor ihr euch zum ersten Mal in euren Hochzeitskleidern seht.",
      },
      {
        listItemText: "Soviele Gruppenfotos wie ihr möchtet",
        tooltipText:
          "Ich fotografiere euch und eure liebsten um schöne Erinnerungen in Fotos festzuhalten.",
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
          "Wenn das Wetter unerwartet sehr schlecht ist (Starkregen, Hagel, Schneesturm, Überflutung) sodass das Brautshooting im Freien nicht stattfinden kann, bieten wir dir hier eine Schlechtwetterabsicherung an. Das Brautpaarshooting kann kostenfrei auch nach der Hochzeit an einem Ort nach Wahl in einem Umkreis von 10 km um Ansbach herum in Form eines After-Wedding-Shootings nachgeholt werden.",
      },
      {
        listItemText: "Anfahrt 30 km inkl.",
        tooltipText:
          "Alles in diesem Umkreis von Ansbach ist inklusive. Darüber hinaus wird das anteilige Stundenhonorar und eine Pauschale von 50 Cent/km fällig.",
      },
      {
        listItemText: "Lieferzeit ca. 2 Wochen",
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
    name: "Liebesgeschichte",
    price: `1.199 €`,
    description: "Die einfache Halbtagsbegleitung für Hochzeiten.",
    features: [
      {
        listItemText: "Kostenloses Vorgespräch",
        tooltipText:
          "Damit wir uns in echt kennenlernen können um zu checken ob wir zusammenpassen.",
      },
      {
        listItemText: "Bis zu 4 Stunden vor Ort",
        tooltipText:
          "Gerne könnt ihr jede weitere Stunde mit 299 € dazubuchen. Falls ihr extra lange feiern wollt, oder ich zB. beim Getting Ready mit dabei sein soll.",
      },

      {
        listItemText: "Etwa 160 Profi-Fotos",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotos im Reportagenstil",
        tooltipText:
          "Ich begleite die Trauung und Hochzeitsfeier unauffällig im Hintergrund, dabei entstehen die schönsten, natürlichsten Bilder. Nichts ist dabei gestellt.",
      },
      {
        listItemText: "Begleitung der Trauung",
        tooltipText:
          "Ich begleite eure Trauung ganz dezent im Hintergrund und fange hierbei die Emotionen und Erinnerungen ein.",
      },
      {
        listItemText: "Begleitung der Feier",
        tooltipText:
          "Ich begleite eure Feier ganz dezent im Hintergrund und fange hierbei die Emotionen und Erinnerungen ein.",
      },
      {
        listItemText: "Brautpaarshooting",
        tooltipText: "Ich fotografiere euch zwei an einem Ort eurer Wahl.",
      },
      {
        listItemText: "Bis zu 10 Gruppenfotos",
        tooltipText:
          "Ich fotografiere euch und eure liebsten um schöne Erinnerungen in Fotos festzuhalten.",
      },
      {
        listItemText: "Hochwertige Bildbearbeitung in meinem Stil",
        tooltipText:
          "Ich bearbeite alle und jedes einzelne Bild in dem Stil, wie du sie auf meiner Website findest.",
      },
      {
        listItemText: "Revision von bis zu 15 Bildern",
        tooltipText:
          "Die Bildbearbeitung ist in dem Stil wie du sie in meinem Portfolio findest. Du hast hier die Möglichkeit bis zu 15 Bilder 1x nach Auslieferung von mir neu bearbeiten zu lassen.",
      },

      {
        listItemText: "Anfahrt 15 km inkl.",
        tooltipText:
          "Alles in diesem Umkreis von Ansbach ist inklusive. Darüber hinaus wird das anteilige Stundenhonorar und eine Pauschale von 50 Cent/km fällig.",
      },
      {
        listItemText: "Lieferzeit ca. 4 Wochen",
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
    question: (
      <FormattedQuestion
        question="Warum sollten wir dich als unseren Hochzeitsfotografen aus Ansbach
          wählen?"
        buttonProps={{
          videoUrl:
            "https://www.youtube.com/embed/Nn17hyeWJfw?si=0HwiVY4pIaYNht9U",
          videoTitle:
            "Christian erklärt warum sich das Paar für ihn als Hochzeitsfotografen entscheiden sollte",
        }}
      />
    ),
    answer: (
      <p>
        <span className="font-extrabold">Ganz ehrlich:</span> Es gibt so viele
        tolle Hochzeitsfotografen in Ansbach und Umgebung und auch
        deutschlandweit, die Wahl des richtigen Hochzeitsfotografen ist deswegen
        eine sehr persönliche Entscheidung. Ich bin kein Verkäufer, deswegen
        habe ich an dieser Stelle auch keinen tollen Pitch. Ich kann euch nur
        etwas über meine Philosophie und Herangehensweise an die
        Hochzeitsfotografie erzählen:{" "}
        <span className="font-extrabold">
          Es geht nicht nur darum, schöne Bilder zu machen
        </span>{" "}
        – das können viele. Es geht darum, jemanden zu finden, der die kleinen,
        flüchtigen Momente einfangen kann, die eure Geschichte erzählen. Jemand,
        der die Blicke, das Lachen, die Tränen der Freude und die Liebe, die in
        der Luft liegt, sieht und für immer festhält. Ich strebe danach,{" "}
        <span className="font-extrabold">
          nicht nur ein Hochzeitsfotograf zu sein, sondern ein
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
        question="Wie sind die Preise für dich als Hochzeitsfotografen in Ansbach?"
        buttonProps={{
          videoUrl:
            "https://www.youtube.com/embed/VO5ASQhR-7c?si=yLONrYUigtDtxa2j",
          videoTitle:
            "Christian erklärt die Preise für Hochzeitsfotografie in Ansbach",
        }}
      />
    ),
    answer: (
      <p>
        Natürlich ist es sehr wichtig, zu wissen, wie teuer eure Fotos sein
        werden. Die Preise für einen Hochzeitsfotografen in Ansbach werden meist
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
        machen super diffuses Licht. Ich wünsche euch als dem Brautpaar
        natürlich immer den wunderschönsten und sonnigsten Tag, den ihr euch
        erhofft. Sollte dem dann doch nicht so sein, haben wir einen Plan B. Das
        Käffchen muss dann drinnen stattfinden. Für unsere gemeinsame
        Paarfoto-Session bedeutet das, dass wir Motive drinnen suchen. Gibt es
        immer zu genüge. Und es regnet ja nie wirklich durch. Wenn der Regen
        einen Pause macht, können wir zusammen rausgehen und das wunderbar
        weiche Licht nutzen, das uns die dicke Wolkendecke gibt. Sieht immer
        hammer aus! Im Individueller Zauber Paket biete ich sogar eine{" "}
        <span className="font-extrabold">Schlechtwetterabsicherung</span> an.
        Damit würden wir das Paar-Shooting an einem anderen schönen Tag
        wiederholen. Damit seid ihr optimal abgesichert.
      </p>
    ),
  },
  {
    question:
      "Arbeitest du als Hochzeitsfotograf auch außerhalb Ansbach und Umgebung?",
    answer: (
      <p>
        <span className="font-extrabold">Ja!</span> Ich begleite
        Hochzeitsreportagen unabhängig vom Ort und war bereits in ganz
        Deutschland unterwegs, wie du in meinen Kundenbewertungen nachlesen
        kannst. Mit meinem Individueller Zauber Paket begleite ich deine
        Hochzeitsreportage sogar{" "}
        <span className="font-extrabold">weltweit</span>! Schreibt mir gern eine
        unverbindliche Anfrage.
      </p>
    ),
  },
  {
    question: "Auf welchen Sprachen kannst du unsere Hochzeit begleiten?",
    answer: (
      <div>
        Ich selbst spreche{" "}
        <span className="font-extrabold">Deutsch, Englisch & Französisch</span>.
        Wenn ihr das Paket Dream Splendor oder Individueller Zauber bucht,
        spricht meine Begleitfotografin neben den genannten Sprachen zusätzlich
        fließend <span className="font-extrabold">Italienisch & Spanisch</span>.
        Wir sind also bestens für eine Multikulturelle Hochzeit gewappnet!
      </div>
    ),
  },

  {
    question:
      "Wie weit im Voraus müssen wir dich für unsere Hochzeitsreportage buchen?",
    answer: (
      <div>
        Da ich für Hochzeitsreportagen überraschenderweise viele schöne Anfragen
        erst sehr kurzfristig bekomme, halte ich mir gerne ein paar Termine im
        Sommer frei.{" "}
        <span className="font-extrabold">
          Ihr habt also auch noch 2 oder 3 Monate vor eurer Hochzeit
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
