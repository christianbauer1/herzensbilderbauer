import Section from "@/components/section";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { BASE_URL, GOOGLE_REVIEW_COUNT, REVIEWS, SITE_TITLE } from "@/lib/constants";
import Link from "next/link";
import Script from "next/script";
import { StarIcon } from "@/components/icons";
import CtaPageEnd from "@/components/cta-page-end";
import React from "react";

export const metadata = {
  title: `${GOOGLE_REVIEW_COUNT}x 5/5 Sterne | Kundenstimmen`,
  description: `Hier findest du Kundenstimmen meiner Arbeit mit über ${GOOGLE_REVIEW_COUNT}+ 5 von 5 Bewertungen.`,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function getReviewsJsonLd() {
  const reviewsWithQuote = REVIEWS.filter((r) => r.quote?.trim());
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_TITLE,
    url: BASE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      reviewCount: String(GOOGLE_REVIEW_COUNT),
    },
    ...(reviewsWithQuote.length > 0 && {
      review: reviewsWithQuote.map((r) => ({
        "@type": "Review" as const,
        author: { "@type": "Person" as const, name: r.name },
        datePublished: `${r.year}-01-01`,
        reviewBody: r.quote?.trim(),
      })),
    }),
  };
}

export default function Page() {
  const jsonLd = getReviewsJsonLd();

  return (
    <div>
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
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
