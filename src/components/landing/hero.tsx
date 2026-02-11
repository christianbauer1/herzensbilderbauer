import Section from "../section";
import { antic } from "@/fonts";
import CtaButton from "../cta-button";
import { Button } from "../ui/button";
import Link from "next/link";
import Reviews from "../reviews";

export interface HeroProps {
  heading: Heading;
  imgUrl: string;
  imageClassName?: string;
  videoUrl?: string;
}

export default function Hero({ hero }: { hero: HeroProps }) {
  const { heading, imgUrl, imageClassName, videoUrl } = hero;
  return (
    <Section
      imageUrl={imgUrl}
      videoUrl={videoUrl}
      useDefaultGap={false}
      showColorBlurs={false}
      containerClassName="md:pt-96 text-center gap-8"
      overlayColor="bg-black/60"
      imageClassName={imageClassName}
    >
      <div className="flex flex-col items-center">
        <h1 className="mb-1 text-sm text-[#E6DDD6]">{heading.hTag}</h1>
        <Reviews className="mb-4" />

        <div
          className={`font-mono text-5xl tracking-tight text-[#E6DDD6] lg:text-7xl ${antic.variable}`}
        >
          {heading.title}
        </div>
      </div>

      <p className="text-white">{heading.description}</p>

      <div className="flex flex-col gap-5 self-center md:flex-row">
        <CtaButton />

        <Button asChild variant={"link"}>
          <Link href="/fotos-erhalten">Deine Bilder herunterladen</Link>
        </Button>
      </div>
    </Section>
  );
}
