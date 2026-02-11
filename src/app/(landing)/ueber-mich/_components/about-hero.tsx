import Image from "next/image";
import React from "react";

import CtaButton from "../../../../components/cta-button";
import { antic } from "@/fonts";

function AboutHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-100/20 pt-14">
      {/* <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      /> */}
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="hidden">Über mich</h1>
          <p
            className={`font-mono ${antic.variable} max-w-2xl text-4xl tracking-tight text-neutral-600 sm:text-6xl lg:col-span-2 xl:col-auto`}
          >
            Servus ich bin der Christian!
          </p>

          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="">
              Mein größtes Anliegen ist, dass ihr euch vor der Kamera wohlfühlt
              und ihr selbst seid. Aus diesem Grund zeigen meine Bilder immer
              echte Emotionen und keine gestellten Posen!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <CtaButton />
            </div>
          </div>

          <Image
            width={288 * 2}
            height={296 * 2}
            src="/images/about-me.jpg"
            alt="Bild vom Fotograf Christian Bauer"
            className="mt-10 aspect-[5/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}

export default AboutHero;
