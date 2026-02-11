import Section from "@/components/section";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { antic } from "@/fonts";
import { Separator } from "@/components/ui/separator";
import { DEFAULT_HOURLY_RATE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export interface OfferCardProps {
  offerName: string;
  pricing: number;
}

export default function OffersOverview({ h2Ash1 }: { h2Ash1?: boolean }) {
  const offers: OfferCardProps[] = [
    {
      offerName: "Hochzeitsreportage",
      pricing: 599,
    },
    {
      offerName: "Boho Fotostudio",
      pricing: Math.ceil(DEFAULT_HOURLY_RATE),
    },
    {
      offerName: "Babyfotografie",
      pricing: DEFAULT_HOURLY_RATE,
    },
    {
      offerName: "Babybauchfotos",
      pricing: DEFAULT_HOURLY_RATE,
    },
    {
      offerName: "Taufe und Kommunion",
      pricing: 1080,
    },

    {
      offerName: "Familien und Paare",
      pricing: Math.ceil(DEFAULT_HOURLY_RATE),
    },
  ];

  return (
    <Section
      sectionClassName="bg-[#E6DDD6]"
      headline={{
        h2: "Angebote und Preise",
        title: "Transparente Preise",
        description:
          "Herzensbilder Bauer steht für authentische, natürliche, emotionale Fotos & Videos und einzigartige Erinnerungen. Ich heiße Christian Bauer bin Fotograf & Videograf in Ansbach und Umgebung und freue mich, Dich fotografisch & videografisch zu begleiten.",
        h2Ash1,
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o) => (
          <OfferCard key={o.offerName} offer={o} />
        ))}
      </div>
      <Button className="self-center" variant={"outline"} asChild>
        <Link href={"/angebote"}>Zu allen Angeboten & Preisen</Link>
      </Button>
    </Section>
  );
}

export function OfferCard({ offer }: { offer: OfferCardProps }) {
  const lowerCaseOffer = offer.offerName.toLowerCase().split(" ").join("-");

  return (
    <Link href={`/angebote/${lowerCaseOffer}`}>
      <div
        className={`relative flex h-96 flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-100 px-6 py-20`}
      >
        <div className="absolute inset-0 h-full w-full">
          <Image
            fill
            sizes="(min-width: 1280px) 365px, (min-width: 1040px) calc(16.82vw + 153px), (min-width: 780px) calc(50vw - 20px), calc(100vw - 24px)"
            alt={`Vorschaubild für das Angebot ${offer.offerName}`}
            className="h-full w-full object-cover brightness-75 saturate-150"
            src={`/images/offers/${lowerCaseOffer}.jpeg`}
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
          <h3 className={`${antic.variable} font-mono text-2xl text-white`}>
            {offer.offerName}
          </h3>
          <Separator />

          <div className="text-sm text-white">
            ab {offer.pricing.toString()} €
          </div>
        </div>
      </div>
    </Link>
  );
}
