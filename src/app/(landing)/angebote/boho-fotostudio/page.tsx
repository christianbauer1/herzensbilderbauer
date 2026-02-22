import Section from "@/components/section";
import Headline from "@/components/headline";
import ImageGrid from "@/components/image-grid";
import Image from "next/image";
import CtaButton from "@/components/cta-button";
import { antic } from "@/fonts";
import RatingStats from "@/components/landing/rating-stats";
import { TopColorblur } from "@/components/colorblur";
import CtaPageEnd from "@/components/cta-page-end";
import Pricing, { PriceTier } from "@/components/landing/pricing";
import About from "@/components/landing/about";
import TestimonialsSection from "@/components/testimonials-section";
import BlogTeaser from "@/components/blog-teaser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarDaysIcon, CameraIcon, SpeechIcon } from "@/components/icons";
import {
  DEFAULT_HOURLY_RATE,
  EMAIL_ADDRESS,
  GOOGLE_REVIEW_COUNT,
  PHONE_NUMBER,
  PHONE_NUMBER_WRITTEN,
} from "@/lib/constants";
import QAndA from "@/components/landing/q-and-a";
import Reviews from "@/components/reviews";

export const metadata = {
  title: "Fotostudio im Boho-Stil | Ansbach",
  description:
    "Ich biete euch Bilder in meinem einzigartigen Boho-Fotostudio in Ansbach an.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  const features = [
    {
      name: "Wunschdatum sichern",
      description:
        "Du meldest dich einfach bei mir und wir finden zu jeder Jahreszeit einen passenden Termin, für dein Fotoshooting im Boho Stil mit Wohlfühlgarantie.",
      icon: CalendarDaysIcon,
    },
    {
      name: "Ankommen & Kennenlernen",
      description:
        "Die meisten Menschen fühlen sich vor der Kamera nicht so wohl, deswegen nehmen wir uns erstmal einen ruhigen Moment zum quatschen und kennenlernen.",
      icon: SpeechIcon,
    },
    {
      name: "Fotoshooting",
      description:
        "Erlebe ein unkompliziertes und professionelles Fotoshooting. Mit meiner Expertise sorge ich dafür, dass jedes Bild deine Persönlichkeit und Emotionen einfängt.",
      icon: CameraIcon,
    },
  ];

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div
              className={`max-w-2xl text-neutral-600 lg:col-span-2 xl:col-auto`}
            >
              <Reviews className="mb-2" onWhiteBackground />
              <h1
                className={`font-mono text-4xl tracking-tight sm:text-6xl ${antic.variable} `}
              >
                Willkommen im einzigen Boho Fotostudio in Ansbach & Umgebung
              </h1>
            </div>

            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="">
                In unserem Boho-Fotostudio erwartet Euch eine inspirierende
                Atmosphäre mit wechselnden Designelementen, modernen
                Hintergrundwänden, schönen Trockenpflanzen und viel natürlichem
                Licht. Ein lebendiger Ort, der Euch inspirieren wird.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <CtaButton />
              </div>
            </div>

            <Image
              width={288 * 2}
              height={296 * 2}
              src="/images/angebote/boho-fotostudio/hero.jpg"
              alt="Bild aus dem Boho Fotostudio"
              className="mt-10 aspect-[5/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      <RatingStats />

      <div className="relative overflow-hidden py-24 sm:py-32">
        <TopColorblur />

        <Headline
          className="mx-auto mb-24 flex max-w-6xl flex-col px-3 sm:mb-32"
          h2={"Eindrücke aus dem Boho Fotostudio in Ansbach"}
          title={"Tolle Düfte & Jazz Musik"}
          description={
            "Du interessierst dich für ein Fotoshooting in meinem Boho Fotostudio in Ansbach? Dich erwartet eine entspannte Atmosphäre mit tollen Düften und ruhiger Background Jazz Musik. Gerne heiße ich dich allein oder mit deiner kleinen Familie bis zu 4 Personen herzlich Willkommen. Wir möchten deinen Besuch bei uns zu einem kleinen unvergesslichen Erlebnis machen."
          }
        />

        <ImageGrid
          images={[
            {
              url: "/images/angebote/boho-fotostudio/6.jpg",
            },
            {
              url: "/images/angebote/boho-fotostudio/2.jpg",
            },
            {
              url: "/images/angebote/boho-fotostudio/1.jpg",
            },
            {
              url: "/images/angebote/boho-fotostudio/3.jpg",
            },
            {
              url: "/images/angebote/boho-fotostudio/4.jpg",
            },
            {
              url: "/images/angebote/boho-fotostudio/5.jpg",
            },
          ]}
        />
      </div>

      <Pricing
        pricing={{
          shootingType: "Boho Fotoshooting",
          voucherImage: "/images/main-portfolio/8.jpg",
          heading: {
            hTag: "Preise für dein Boho Fotoshooting",
            title: "Transparente Preise",
            description:
              "Meine Boho Fotoshooting-Pakete bieten transparente Preise und maßgeschneiderte Optionen.",
          },
          priceTiers,
        }}
      />

      <About />

      <Section
        sectionClassName="bg-[#E6DDD6]"
        headline={{
          h2: "Wie das Boho Fotoshooting abläuft",
          title: "Erstmal Ankommen & kennenlernen",
          description: "Entspannt, einfach, zuverlässig",
        }}
      >
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col gap-4">
              <h3 className="flex items-center gap-x-3 font-bold">
                <feature.icon
                  className="h-5 w-5 flex-none"
                  aria-hidden="true"
                />
                {feature.name}
              </h3>

              <dd className="flex flex-auto flex-col gap-4">
                <p className="flex-auto text-base leading-7">
                  {feature.description}
                </p>
              </dd>
            </div>
          ))}
        </dl>

        <Button variant={"outline"} asChild className={`self-center`}>
          <Link href="/termin-vereinbaren">Jetzt Wunschdatum anfragen</Link>
        </Button>
      </Section>

      <TestimonialsSection />
      <BlogTeaser />
      <QAndA
        faq={{
          heading: {
            hTag: "Fragen und Antworten über das Boho Fotoshooting in Ansbach",
            title: "Oft wollen unsere Kunden wissen...",
          },
          questionsAndAnswers,
        }}
      />
      <CtaPageEnd />
    </>
  );
}

const priceTiers: PriceTier[] = [
  {
    name: "Natürliche Schönheit",
    price: `${DEFAULT_HOURLY_RATE.toString()} €`,
    description:
      "Einfach nur du selbst. Ein authentisches Fotoshooting für eine Person.",
    features: [
      {
        listItemText: "Etwa 20 Profi-Fotos",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotoshooting im Boho Fotostudio",
        tooltipText:
          "Ich fotografiere dich in unserem behaglichen Fotostudio mit zahlreichen Requisiten",
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
    name: "Boho Memories",
    price: `${(DEFAULT_HOURLY_RATE * 4).toString()} €`,
    description:
      "Das perfekte Boho Fotoshooting für Einzelpersonen, Paare und kleine Familien.",
    features: [
      {
        listItemText: "Alle Bilder des Tages",
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
    name: "Traumfänger",
    price: `${(DEFAULT_HOURLY_RATE * 3).toString()} €`,
    description:
      "Das perfekte Boho Fotoshooting für Einzelpersonen, Paare und kleine Familien.",
    features: [
      {
        listItemText: "Etwa 50 Profi-Fotos",
        tooltipText: "Bei mir bekommt ihr alle Bilder des Tages ohne Aufpreis.",
      },
      {
        listItemText: "Fotoshooting im Boho Fotostudio",
        tooltipText:
          "Ich fotografiere dich in unserem behaglichen Fotostudio mit zahlreichen Requisiten",
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
    question:
      "Warum sollten wir dich als unseren Boho Fotografen aus Ansbach wählen?",
    answer: (
      <p>
        <span className="font-extrabold">Ganz ehrlich:</span> Es gibt so viele
        tolle Fotografen in Ansbach und Umgebung und auch deutschlandweit, die
        Wahl des richtigen Fotografen ist deswegen eine sehr persönliche
        Entscheidung. Ich bin kein Verkäufer, deswegen habe ich an dieser Stelle
        auch keinen tollen Pitch. Ich kann euch nur etwas über meine Philosophie
        und Herangehensweise an die Fotografie erzählen:{" "}
        <span className="font-extrabold">
          Es geht nicht nur darum, schöne Bilder zu machen
        </span>{" "}
        – das können viele. Es geht darum, jemanden zu finden, der die kleinen,
        flüchtigen Momente einfangen kann, die eure Geschichte erzählen. Jemand,
        der die Blicke, das Lachen und die Liebe, die in der Luft liegt, sieht
        und für immer festhält. Ich strebe danach,{" "}
        <span className="font-extrabold">
          nicht nur ein Fotografen zu sein, sondern ein Geschichtenerzähler
        </span>
        , der die Essenz der ersten Lebenszeit einfängt. Es wäre mir eine Ehre,
        diese Rolle für euch zu übernehmen und die Erinnerungen zu schaffen, die
        ihr für den Rest eures Lebens schätzen werdet...
      </p>
    ),
  },
  {
    question: "Wie sind die Preise für dich als Boho Fotografen in Ansbach?",

    answer: (
      <p>
        Natürlich ist es sehr wichtig, zu wissen, wie teuer eure Fotos sein
        werden. Die Preise für einen Fotografen in Ansbach werden meist gut
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
      "Wie weit im Voraus müssen wir dich für unsere Boho Fotoshooting buchen?",
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
        <Link href={EMAIL_ADDRESS} className="font-extrabold underline">
          {EMAIL_ADDRESS}
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
