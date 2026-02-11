"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PlayIcon, StarIcon } from "./icons";
import Link from "next/link";

const containerClassName =
  "relative flex h-96 flex-col overflow-hidden rounded-3xl border";

export interface TestimonialProps {
  name: string;
  quote?: string;
  location: string;
  year: number;
  imgUrl?: string;
  videotestimonialUrl?: string;
  type?: "Google" | "Whatsapp";
  reviewUrl?: string;
}

export default function Testimonial({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) {
  if (testimonial.videotestimonialUrl) {
    return <VideoTestimonial testimonial={testimonial} />;
  }

  return (
    <div className={`${containerClassName} justify-between px-6 py-8`}>
      <p className="line-clamp-[9] text-sm leading-6">"{testimonial.quote}"</p>

      <div className="flex flex-col gap-2">
        {!testimonial.type || testimonial.type === "Google" ? (
          <div className="flex gap-x-1 text-primary">
            {Array.from({ length: 5 }).map((_, idx) => (
              <StarIcon
                key={idx}
                className="h-5 w-5 flex-none text-yellow-400"
                aria-hidden="true"
              />
            ))}
          </div>
        ) : null}

        <div className="relative mx-0 flex max-w-2xl flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            {!testimonial.imgUrl ? null : (
              <Image
                width={60}
                height={60}
                alt={`Vorschaubild von ${testimonial.name} aus ${testimonial.location}`}
                className="h-12 w-12 rounded-full object-cover"
                src={testimonial.imgUrl}
              />
            )}

            <div className="flex flex-col">
              <h3 className={`font-bold`}>{testimonial.name}</h3>
              <div className="text-sm">{testimonial.location}</div>
            </div>
          </div>

          {!testimonial.type || testimonial.type === "Google" ? (
            <div>
              {testimonial.reviewUrl ? (
                <Link href={testimonial.reviewUrl} target="_blank">
                  <Image
                    width={20}
                    height={20}
                    className="h-8 w-auto"
                    src="/images/google_badge_color.webp"
                    alt="Google Logo"
                  />
                </Link>
              ) : (
                <Image
                  width={20}
                  height={20}
                  className="h-8 w-auto"
                  src="/images/google_badge_color.webp"
                  alt="Google Logo"
                />
              )}
            </div>
          ) : (
            <Image
              width={20}
              height={20}
              className="h-8 w-auto"
              src="/images/whatapp_badge.svg"
              alt="Google Logo"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function BlurryOverlay() {
  return (
    <div>
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
    </div>
  );
}

function OverlayImage({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Image
        fill
        sizes="(min-width: 1280px) 365px, (min-width: 1040px) calc(16.82vw + 153px), (min-width: 780px) calc(50vw - 20px), calc(100vw - 24px)"
        alt={`Vorschaubild von ${testimonial.name} aus ${testimonial.location}`}
        className="h-full w-full object-cover brightness-75 saturate-150"
        src={
          !testimonial.imgUrl
            ? "/images/placeholders/placeholder-1.jpg"
            : testimonial.imgUrl
        }
      />
    </div>
  );
}

function VideoTestimonial({ testimonial }: { testimonial: TestimonialProps }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const myVideo = useRef<HTMLVideoElement | null>(null);

  const playPause = () => {
    setShowOverlay(!showOverlay);
    if (myVideo.current?.paused) myVideo.current.play();
    else myVideo.current?.pause();
  };

  return (
    <div
      className={`cursor-pointer justify-end ${containerClassName}`}
      onClick={playPause}
    >
      <video ref={myVideo} className="object-cover object-top" playsInline>
        <source src={testimonial.videotestimonialUrl} type="video/mp4" />
      </video>

      {showOverlay && (
        <>
          <OverlayImage testimonial={testimonial} />
          <BlurryOverlay />
        </>
      )}

      <div className="absolute flex w-full flex-row items-center justify-between px-6 py-8 text-white">
        <div className="flex flex-col">
          <h3 className={`font-bold`}>{testimonial.name}</h3>
          <div className="text-sm">
            {testimonial.location}, {testimonial.year.toString()}
          </div>
        </div>

        <PlayIcon className="mt-4 h-12" />
      </div>
    </div>
  );
}
