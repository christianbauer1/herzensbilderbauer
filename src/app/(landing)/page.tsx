import GenericLayout from "@/components/landing/generic-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLongRightIcon } from "@/components/icons";
import {
  DEFAULT_HOURLY_RATE,
  PHONE_NUMBER,
  TRAVEL_HOURLY_RATE,
} from "@/lib/constants";

export const metadata = {
  title: "Fotograf & Videograf in Ansbach",
  description:
    "Dein professioneller Fotograf & Videograf in Ansbach. Ich halte eure einzigartigen Momente mit emotionalen Bildern und Videos fest.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function HomePage() {
  return (
    <GenericLayout
      hero={{
        imageClassName: "object-bottom",
        heading: {
          hTag: "Fotograf und Videograf in Ansbach",
          title:
            "Momente die bleiben: Dein Experte für emotionale Fotografie & Videografie",
          description:
            "Mit Erfahrung, Leidenschaft und kreativem Auge fange ich die magischen Momente und tiefen Emotionen ein, um sie in beeindruckenden Bildern und Videos für die Ewigkeit festzuhalten.",
        },
        imgUrl: "/images/hero.jpg",
        videoUrl:
          "/videos/kevshort.mp4",
      }}
      portfolio={{
        heading: {
          hTag: "Fotografie & Videografie Portfolio",
          title: "Eindrücke für euch",
          description: (
            <>
              <p>
                Mein Portfolio zeigt die Liebe und das Glück, die ich bei
                zahlreichen Foto- und Videoshootings über die Zeit als Fotograf
                und Videograf dokumentiert habe. Gefällt es euch? Dann würde ich
                mich total freuen, von euch zu hören!
              </p>
              <Button asChild className={`mt-5 self-center`}>
                <Link href="/portfolio">
                  Zum Portfolio <ArrowLongRightIcon className="ml-2 h-5" />
                </Link>
              </Button>
            </>
          ),
        },
        imageOrVideoUrls: [
          {
            url: "/images/main-portfolio/32.jpg",
            isVideo: true,
            videoUrl:
              "https://www.youtube.com/embed/_-UDItpF3do?si=GDSSBR-CZ0BsSD4p",
          },

          {
            url: "/images/main-portfolio/16.jpg",
          },
          {
            url: "/images/portfolio-teaser/10.jpg",
          },
          {
            url: "/images/main-portfolio/22.jpg",
          },
          {
            url: "/images/main-portfolio/33.jpg",
            isVideo: true,
            videoUrl:
              "https://www.youtube.com/embed/wHeuVd1aVxc?si=T9PlsYjD-RsfOgzR",
          },
          {
            url: "/images/main-portfolio/31.jpg",
          },
        ],
      }}
      showOffersInsteadOfPricing
      faq={{
        heading: {
          hTag: "Fragen und Antworten über die Fotografie & Videografie in Ansbach",
          title: "Oft wollen unsere Kunden wissen...",
        },
        questionsAndAnswers: [
          // Ich habe die Videos rausgenommen, weil sie veraltet sind. So füge ich es wieder ein:
          // {
          //   question: <FormattedQuestion question="Wie ist dein Name?" buttonProps={{videoUrl: "youtube URL", videoTitle: "Suchmaschinenfreundlicher Videotitel"}} />,
          //   answer: "Christian Bauer",
          // },
          {
            question:
              "Warum sollten wir dich als unseren Fotografen & Videografen aus Ansbach wählen?",
            answer: (
              <p>
                <span className="font-extrabold">Ganz ehrlich:</span> Es gibt so
                viele tolle Fotografen & Videografen in Ansbach und Umgebung und
                auch deutschlandweit, die Wahl des richtigen Fotografen und/oder
                Videografen ist deswegen eine sehr persönliche Entscheidung. Ich
                bin kein Verkäufer, deswegen habe ich an dieser Stelle auch
                keinen tollen Pitch. Ich kann euch nur etwas über meine
                Philosophie und Herangehensweise an die Fotografie & Videografie
                erzählen:{" "}
                <span className="font-extrabold">
                  Es geht nicht nur darum, schöne Bilder & Videos zu machen
                </span>{" "}
                – das können viele. Es geht darum, jemanden zu finden, der die
                kleinen, flüchtigen Momente einfangen kann, die eure Geschichte
                erzählen. Jemand, der die Blicke, das Lachen, die Tränen der
                Freude und die Liebe, die in der Luft liegt, sieht und für immer
                festhält. Ich strebe danach,{" "}
                <span className="font-extrabold">
                  nicht nur ein Fotograf & Videograf zu sein, sondern ein
                  Geschichtenerzähler
                </span>
                , der die Essenz eures besonderen Tages einfängt. Es wäre mir
                eine Ehre, diese Rolle für euch zu übernehmen und die
                Erinnerungen zu schaffen, die ihr für den Rest eures Lebens
                schätzen werdet...
              </p>
            ),
          },
          {
            question:
              "Wie sind die Preise für dich als Fotograf & Videograf in Ansbach?",
            answer: (
              <p>
                Die Preise für einen Fotograf & Videograf in Ansbach werden
                meist gut unter Verschluss gehalten. Nicht bei mir! In meinen{" "}
                <Link href="/angebote" className="font-extrabold text-primary">
                  Preisen
                </Link>{" "}
                findet ihr meine Kosten transparent aufgelistet. Bei mir findet
                ihr ausschließlich Rundum-Sorglos-Pakete. Die Preise hängen von
                der Dauer und der Art des Fotoshootings & Videoshootings ab. Ein
                kleines Fotoshooting zum Beispiel für Paare beginnt bei etwa{" "}
                {Math.round(DEFAULT_HOURLY_RATE * 0.5)} € und eine
                Hochzeitsreportage beginnt bei {TRAVEL_HOURLY_RATE * 2} €. Die
                Preise variieren dabei je nachdem was ihr gern möchtet. Stöbert
                gern in den Angeboten um mehr zu erfahren. Was auf jeden Fall
                immer bei jedem Paket dabei ist: Unterstützung bei der Planung,
                Professionelle Nachbearbeitung der Bilder, Online-Galerie mit
                allen hochauflösenden Bildern in unserer Herzensbilder Cloud
                (min. 6 Monate verfügbar), und vieles mehr.
              </p>
            ),
          },
          {
            question:
              "Was ist, wenn es bei unserem Fotoshooting oder Videoshooting regnet?",
            answer: (
              <p>
                <span className="font-extrabold">Bombastisch!</span> Wolken am
                Himmel machen super diffuses Licht. Ich wünsche euch natürlich
                immer den wunderschönsten und sonnigsten Tag, den ihr euch
                erhofft. Sollte dem dann doch nicht so sein, haben wir einen
                Plan B. Je nach der Art des Fotoshootings haben wir hier mehrere
                Optionen. Bei einem Brautpaarshooting muss das Käffchen dann
                drinnen stattfinden. Für unsere gemeinsame Paarfoto-Session
                bedeutet das, dass wir Motive drinnen suchen. Gibt es immer zu
                genüge. Und es regnet ja nie wirklich durch. Wenn der Regen
                einen Pause macht, können wir zusammen rausgehen und das
                wunderbar weiche Licht nutzen, das uns die dicke Wolkendecke
                gibt. Sieht immer hammer aus! Im Individueller Zauber Paket
                biete ich sogar eine{" "}
                <span className="font-extrabold">
                  Schlechtwetterabsicherung
                </span>{" "}
                an. Damit würden wir das Paar-Shooting an einem anderen schönen
                Tag wiederholen. Damit seid ihr optimal abgesichert. Bei allen
                anderen Fotoshootings haben wir immer die Option auf mein
                Fotostudio oder spontan auf einen anderen Tag auszuweichen.
              </p>
            ),
          },
          {
            question:
              "Arbeitest du als Fotograf und Videograf auch außerhalb Ansbach und Umgebung?",
            answer: (
              <p>
                <span className="font-extrabold">Ja!</span> Ich begleite
                Fotoshootings und Videoshootings unabhängig vom Ort und war
                bereits in ganz Deutschland unterwegs, wie du in meinen
                Kundenbewertungen nachlesen kannst. Gerne begleite ich euch auch{" "}
                <span className="font-extrabold">weltweit</span>! Schreibt mir
                gern eine unverbindliche Anfrage.
              </p>
            ),
          },
          {
            question:
              "Auf welchen Sprachen kannst du unser Fotoshooting und Videoshooting begleiten?",
            answer: (
              <div>
                Ich selbst spreche{" "}
                <span className="font-extrabold">
                  Deutsch, Englisch & Französisch
                </span>
                . Wenn ihr das Paket Dream Splendor oder Individueller Zauber
                bucht, spricht meine Kollegin neben den genannten Sprachen
                zusätzlich fließend{" "}
                <span className="font-extrabold">Italienisch & Spanisch</span>.
                Wir sind also bestens für ein Multikulturelles Fotoshooting und
                Videoshooting gewappnet!
              </div>
            ),
          },

          {
            question: "Wie weit im Voraus müssen wir dich buchen?",
            answer: (
              <div>
                Das kommt ganz auf die Art des Fotoshootings oder Videoshootings
                an. Da ich für Hochzeitsreportagen überraschenderweise viele
                schöne Anfragen erst sehr kurzfristig bekomme, halte ich mir
                gerne ein paar Termine im Sommer frei.{" "}
                <span className="font-extrabold">
                  Ihr habt also auch noch 2 oder 3 Monate vor eurer Hochzeit
                </span>{" "}
                gute Chancen. Um sicherzugehen, empfehle ich aber ca. 6 bis 9
                Monate im Voraus anzufragen. Für alle anderen Shooting bekommt
                ihr in der Regel sehr kurzfristig einen Termin bei mir.
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
                <Link href={PHONE_NUMBER} className="font-extrabold underline">
                  {PHONE_NUMBER}
                </Link>{" "}
                anrufen, smsn, whatsappen, telegrammen, signalen, was auch immer
                euch am liebsten ist.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
