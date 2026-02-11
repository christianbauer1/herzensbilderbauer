import { GOOGLE_REVIEW_COUNT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "./icons";

function FiveStars() {
  return (
    <div className="flex flex-row items-center gap-1">
      {[1, 1, 1, 1, 1].map((i, idx) => (
        <StarIcon key={idx} className="h-5 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Reviews({
  className,
  onWhiteBackground = false,
}: {
  className?: string;
  onWhiteBackground?: boolean;
}) {
  return (
    <Link href={"https://maps.app.goo.gl/6VFiUprzYokEMpTQA"} target="_blank">
      <div
        className={`flex flex-row items-center gap-4 text-xs font-semibold sm:text-sm ${onWhiteBackground ? "" : "text-[#E6DDD6]"} ${className}`}
      >
        <FiveStars />

        <div className="flex flex-row items-center gap-1">
          <Image
            width={120}
            height={120}
            className="h-8 w-8"
            src={"/images/google_badge_color.webp"}
            alt="Rating Bild"
          />

          <p>{GOOGLE_REVIEW_COUNT}+ Bewertungen</p>
        </div>
      </div>
    </Link>
  );
}
