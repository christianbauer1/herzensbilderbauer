import Image from "next/image";
import { BottomColorblur, TopColorblur } from "./colorblur";
import Headline from "./headline";
import { Oi } from "next/font/google";
import { setDefaultHighWaterMark } from "stream";

export default function Section({
  containerClassName,
  sectionClassName,
  children,
  imageUrl,
  imageAltText,
  headline: header,
  overlayColor,
  showColorBlurs = true,
  useDefaultGap = true,
  imageClassName,
  videoUrl,
}: {
  containerClassName?: string;
  sectionClassName?: string;
  children: React.ReactNode;
  imageAltText?: string;
  imageUrl?: string;
  headline?: HeadlineProps;
  showColorBlurs?: boolean;
  overlayColor?: string;
  useDefaultGap?: boolean;
  imageClassName?: string;
  videoUrl?: string;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden py-24 sm:py-32 ${sectionClassName}`}
    >
      <div className={`absolute inset-0 -z-10 h-full w-full ${overlayColor}`} />

      {videoUrl && (
        <div className="absolute inset-0 -z-20 h-full w-full">
          <video
            className={`h-full w-full object-cover ${imageClassName}`}
            playsInline
            muted
            loop
            autoPlay
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}

      {imageUrl && !videoUrl && (
        <div className="absolute inset-0 -z-20 h-full w-full">
          <Image
            priority
            fill
            src={imageUrl}
            alt={imageAltText || "Section Hintergrundbild"}
            className={`h-full w-full object-cover ${imageClassName}`}
          />
        </div>
      )}

      <div
        className={`mx-auto flex max-w-6xl flex-col px-3 ${containerClassName} ${useDefaultGap && "gap-12 md:gap-16"}`}
      >
        {showColorBlurs && <TopColorblur />}

        {header && <Headline {...header} />}

        {children}

        {showColorBlurs && <BottomColorblur />}
      </div>
    </section>
  );
}
