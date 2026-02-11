import CtaButton from "@/components/cta-button";
import Headline from "@/components/headline";
import About from "@/components/landing/about";
import Section from "@/components/section";
import { antic } from "@/fonts";
import { DISCOUNT_VIDEO_PRICE } from "@/lib/constants";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: `Hochzeitsvideo für nur ${DISCOUNT_VIDEO_PRICE} €`,
  description: `Nur für kurze Zeit bezahlst du nur ${DISCOUNT_VIDEO_PRICE} € für ein professionelles Hochzeitsvideo.`,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  return (
    <>
      <Section showColorBlurs={false}>
        <Headline
          h2Ash1
          h2={`Highlightvideo deiner Hochzeit für nur ${DISCOUNT_VIDEO_PRICE} €`}
          title="Nur für kurze Zeit"
          description={
            <div className="mt-6 flex flex-col items-center gap-12 text-center">
              <p>
                Mit großer Freude teile ich dir mit, dass ich mich, bisher
                bekannt für meine Fotografie, nun auch für die Videografie
                öffnen werde. Dafür brauche ich deine Unterstützung! Im Rahmen
                dieser zeitlich begrenzen Aktion hast du die einzigartige
                Möglichkeit, einen Highlight Videofilm zusätzlich zu deiner
                fotografischen Hochzeitsreportage von mir erstellen zu lassen.
                Das ganze kostet für kurze Zeit nur {DISCOUNT_VIDEO_PRICE} €. Es
                ist eine wunderbare Gelegenheit, wertvolle Momente fotografische
                und videografisch festzuhalten und gleichzeitig meine neue Reise
                zu unterstützen. Ich freue mich auf diese gemeinsame Erfahrung!
              </p>
              <div className="flex flex-row items-center gap-3">
                <p className="text-sm font-bold">Wie es funktioniert</p>
                <ArrowDown className="h-8 w-auto animate-bounce" />
              </div>
            </div>
          }
        />
      </Section>
      <div>
        <div className="flex flex-wrap">
          {[
            "/images/portfolio-teaser/1.jpg",
            "/images/portfolio-teaser/2.jpg",
            "/images/portfolio-teaser/3.jpg",
            "/images/portfolio-teaser/4.jpg",
          ].map((i, idx) => (
            <div className="h-1/2 w-full md:w-1/2 lg:w-1/4" key={idx}>
              <Image
                src={i}
                className="h-full w-full object-cover"
                alt="blurred background"
                width={480}
                height={720}
              />
            </div>
          ))}
        </div>
        <div className="-mt-2 flex flex-wrap">
          {[
            "/images/portfolio-teaser/5.jpg",
            "/images/portfolio-teaser/6.jpg",
          ].map((i, idx) => (
            <div className="h-1/3 w-full md:w-1/2" key={idx}>
              <Image
                src={i}
                className="h-full w-full object-cover"
                alt="blurred background"
                width={960}
                height={640}
              />
            </div>
          ))}
        </div>
      </div>
      <Section showColorBlurs={false}>
        <Headline
          h2="Wie es funktioniert"
          title="Es ist ganz einfach"
          description={
            <div className="mt-6 flex flex-col items-center gap-12 text-center">
              <p>
                Du buchst das die Hochzeitsreportage{" "}
                <Link
                  className="font-bold underline"
                  href={"/angebote/hochzeitsreportage"}
                >
                  "Hochzeitsglanz"
                </Link>{" "}
                bei mir und erhälst zusätzlich einen Hochzeits-Highlightfilm
                (Dauer: 5 bis 15 min) im Wert von über 2.000 € eurer schönsten
                Momente. Du bezahlst für diesen Aktionszeitraum stattdessen nur{" "}
                {DISCOUNT_VIDEO_PRICE} €. Alles, um was ich im Gegenzug bitte,
                ist die Erlaubnis, dein wunderschönes Video in meinem Portfolio
                präsentieren zu dürfen. Falls du Interesse an einem
                Hochzeitsvideo hast oder jemanden kennst, der daran interessiert
                sein könnte, zögere bitte nicht, Kontakt mit mir aufzunehmen!
                Ich freue mich darauf, von dir zu hören!
              </p>
            </div>
          }
        />

        <CtaButton />
      </Section>
      <About />
    </>
  );
}

const genres: GenreCardProps[] = [
  // {
  //   name: "Schwangerschaft",
  //   imgUrl: "/images/offers/babybauchfotos.jpeg",
  // },
  {
    name: "Babies und Kleinkinder",
    imgUrl: "/images/offers/babyfotografie.jpeg",
  },

  {
    name: "Taufe, Kommunion und Konfirmation",
    imgUrl: "/images/offers/taufe-und-kommunion.jpeg",
  },
];

interface GenreCardProps {
  name: string;
  imgUrl: string;
}

function GenreCard({ genre }: { genre: GenreCardProps }) {
  return (
    <div
      className={`relative flex h-96 flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-100 px-6 py-20`}
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          fill
          sizes="(min-width: 1280px) 365px, (min-width: 1040px) calc(16.82vw + 153px), (min-width: 780px) calc(50vw - 20px), calc(100vw - 24px)"
          alt={`Vorschaubild für das Angebot ${genre.name}`}
          className="h-full w-full object-cover brightness-75 saturate-150"
          src={genre.imgUrl}
        />
      </div>

      <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply" />
      <div
        className="absolute -left-80 -top-56 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-yellow-100 to-red-200 opacity-[0.45]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-center justify-center gap-1 lg:mx-0">
        <h3
          className={`${antic.variable} text-center font-mono text-2xl text-white`}
        >
          {genre.name}
        </h3>
      </div>
    </div>
  );
}
