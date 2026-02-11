import Image from "next/image";
import Link from "next/link";

import { GOOGLE_REVIEW_COUNT } from "@/lib/constants";
import Section from "../section";
import { StarIcon } from "../icons";

export default function RatingStats() {
  return (
    <>
      <Section sectionClassName="bg-[#E6DDD6]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          <Link href={"https://maps.app.goo.gl/6VFiUprzYokEMpTQA"}>
            <RatingLayout
              images={["/images/google_badge_color.webp"]}
              title={`5 von 5 Sterne, ${GOOGLE_REVIEW_COUNT}+ Bewertungen`}
              description={"Fotograf & Videograf mit bester Preis/Leistung"}
              classNameImage="-ml-[16px]"
            />
          </Link>

          <RatingLayout
            images={["/images/main-portfolio/2.jpg"]}
            title={`"So können wir euch Christian wärmstens empfehlen!"`}
            description="Sandra & Jakob"
          />

          <RatingLayout
            images={[
              "/images/main-portfolio/1.jpg",
              "/images/main-portfolio/3.jpg",
              "/images/main-portfolio/6.jpg",
              "/images/main-portfolio/7.jpg",
              "/images/main-portfolio/18.jpg",
            ]}
            title={`Werde ein Teil von hunderten überglücklichen Kunden`}
            description="Bei Herzensbilder Bauer"
          />

          {/* <RatingLayout img="/images/main-portfolio/13.jpg"></RatingLayout> */}
        </div>
      </Section>
    </>
  );
}

function RatingLayout({
  images,
  title,
  description,
  classNameImage,
}: {
  images: string[];
  title: string;
  description: string;
  classNameImage?: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex -space-x-6 overflow-hidden">
        {images.map((img) => (
          <div key={img} className={`inline-block h-20 w-20 ${classNameImage}`}>
            <Image
              width={120}
              height={120}
              className="h-full w-full rounded-full object-cover"
              src={img}
              alt="Rating Bild"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center gap-1">
        {[1, 1, 1, 1, 1].map((i, idx) => (
          <StarIcon key={idx} className="h-5 text-yellow-400" />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">{title}</p>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
