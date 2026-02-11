import { BottomColorblur, TopColorblur } from "@/components/colorblur";
import CtaButton from "@/components/cta-button";
import CtaPageEnd from "@/components/cta-page-end";
import Headline from "@/components/headline";
import { CursorArrowRaysIcon, StarIcon } from "@/components/icons";
import Section from "@/components/section";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { GOOGLE_REVIEW_COUNT, REVIEWS } from "@/lib/constants";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: `${GOOGLE_REVIEW_COUNT}x 5/5 Sterne | Kundenstimmen`,
  description: `Hier findest du Kundenstimmen meiner Arbeit mit über ${GOOGLE_REVIEW_COUNT}+ 5 von 5 Bewertungen.`,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  return (
    <div>
      <Section
        showColorBlurs={false}
        headline={{
          h2Ash1: true,
          h2: "Kundenstimmen",
          title: "Was meine Kunden sagen",
          description: (
            <div className="mt-4 flex flex-col items-center self-center sm:flex-row">
              <div className="flex flex-row">
                <p className="mr-3 text-base font-extrabold">5.0</p>
                <div className="flex gap-x-1 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <StarIcon
                      key={idx}
                      className="h-5 w-5 flex-none text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <Button asChild variant={"ghost"} className="underline">
                <Link href={"https://g.co/kgs/nkMNzAa"} target="_blank">
                  {GOOGLE_REVIEW_COUNT.toString()}+ Google Bewertungen
                </Link>
              </Button>
            </div>
          ),
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((t) => (
            <Testimonial key={t.quote} testimonial={t} />
          ))}
        </div>
      </Section>

      <CtaPageEnd />
    </div>
  );
}
