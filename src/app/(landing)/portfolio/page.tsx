import Section from "@/components/section";
import CtaPageEnd from "../../../components/cta-page-end";
import Headline from "@/components/headline";
import ImageGrid from "@/components/image-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InstagramIcon } from "@/components/icons";

export const metadata = {
  title: "Fotografie Portfolio | Ansbach | Meine besten Arbeiten",
  description:
    "Entdeckt meine beeindruckenden Fotos. Ich fange die Liebe und Emotionen deiner besonderen Momente ein.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Portfolio() {
  return (
    <>
      <Section showColorBlurs={false}>
        <Headline
          h2Ash1
          h2="Portfolio"
          title="Emotionen für die Ewigkeit"
          description={
            <div className="mt-6">
              <p className="mb-10">
                Dank der ungestellten, ehrlichen Fotos könnt ihr jede Sekunde
                eures Fotoshootings genießen, um so später immer wieder in diese
                wertvollen emotionalen Augenblicke einzutauchen. Mit meiner
                entspannten Art halte ich für euch nicht nur die großen, sondern
                auch die vielen kleinen Momente im Bild fest. Du findest hier
                auf dieser Seite einen Eindruck meiner Arbeit.{" "}
                <span className="font-bold">
                  Mein aktuellstes Fotografie Portfolio findest du immer auf
                  Instagram.
                </span>
              </p>

              <Button asChild>
                <Link
                  href={"https://www.instagram.com/herzensbilder_bauer/"}
                  target="_blank"
                >
                  Zum Portfolio auf Instagram{" "}
                  <InstagramIcon className="ml-1 h-5 w-auto" />
                </Link>
              </Button>
            </div>
          }
        />
      </Section>

      <ImageGrid
        images={[
          {
            url: "/images/main-portfolio/32.jpg",
            isVideo: true,
            videoUrl:
              "https://www.youtube.com/embed/_-UDItpF3do?si=c0Lxx5y76MueXe-J",
          },
          {
            url: "/images/main-portfolio/33.jpg",
            isVideo: true,
            videoUrl:
              "https://www.youtube.com/embed/wHeuVd1aVxc?si=T9PlsYjD-RsfOgzR",
          },

          {
            url: "/images/main-portfolio/2.jpg",
          },
          {
            url: "/images/main-portfolio/3.jpg",
          },
          {
            url: "/images/main-portfolio/4.jpg",
          },
          {
            url: "/images/main-portfolio/12.jpg",
          },
          {
            url: "/images/main-portfolio/6.jpg",
          },
          {
            url: "/images/main-portfolio/7.jpg",
          },
          {
            url: "/images/main-portfolio/8.jpg",
          },
          {
            url: "/images/main-portfolio/9.jpg",
          },
          {
            url: "/images/main-portfolio/19.jpg",
          },
          {
            url: "/images/main-portfolio/11.jpg",
          },
          {
            url: "/images/main-portfolio/18.jpg",
          },
          {
            url: "/images/main-portfolio/13.jpg",
          },
          {
            url: "/images/main-portfolio/14.jpg",
          },
          {
            url: "/images/main-portfolio/15.jpg",
          },
          {
            url: "/images/main-portfolio/16.jpg",
          },
          {
            url: "/images/main-portfolio/17.jpg",
          },
          {
            url: "/images/main-portfolio/28.jpg",
          },
          {
            url: "/images/main-portfolio/10.jpg",
          },
          {
            url: "/images/main-portfolio/20.jpg",
          },
          {
            url: "/images/main-portfolio/21.jpg",
          },
          {
            url: "/images/main-portfolio/22.jpg",
          },
          {
            url: "/images/main-portfolio/23.jpg",
          },
          {
            url: "/images/main-portfolio/24.jpg",
          },
          {
            url: "/images/main-portfolio/29.jpg",
          },
          {
            url: "/images/main-portfolio/26.jpg",
          },
          {
            url: "/images/main-portfolio/27.jpg",
          },
        ]}
      />

      <Section
        showColorBlurs={false}
        headline={{
          title: "1.000 Fotoshootings",
          description:
            "Ich glaube fest daran, dass man mit tollen Fotos das Leben ein kleines bisschen besser macht. Deswegen habe ich mir ein großes Ziel vorgenommen. Mein Portfolio wird solange erweitert bis das Ziel erreicht ist.",
          h2: "Meine Mission",
        }}
      />

      <CtaPageEnd />
    </>
  );
}
