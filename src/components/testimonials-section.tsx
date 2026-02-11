import Link from "next/link";
import { CursorArrowRaysIcon, StarIcon } from "@/components/icons";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { GOOGLE_REVIEW_COUNT, REVIEWS } from "@/lib/constants";
import Testimonial from "./testimonial";

export default function TestimonialsSection() {
  return (
    <Section
      headline={{
        h2: "Testimonials",
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
        {REVIEWS.slice(0, 6).map((t) => (
          <Testimonial key={t.quote} testimonial={t} />
        ))}
      </div>

      <Button asChild className={`self-center`}>
        <Link href="/kundenstimmen">
          Alle Kundenstimmen entdecken{" "}
          <CursorArrowRaysIcon className="ml-2 h-5" />
        </Link>
      </Button>
    </Section>
  );
}
