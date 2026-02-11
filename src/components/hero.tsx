import React from "react";
import Section from "./section";
import Image from "next/image";
import Headline from "./headline";

type ImageProps = { alt: string; url: string };
type StringArrayLength4 = [ImageProps, ImageProps, ImageProps, ImageProps];

export default function Hero({
  images,
  h2,
  title,
  description,
}: {
  h2: string;
  title: string;
  description: React.ReactNode | string;
  images?: StringArrayLength4;
}) {
  return (
    <Section showColorBlurs={false}>
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <Headline
              className="lg:text-left"
              h2={h2}
              title={title}
              description={description}
            />
          </div>

          {images && (
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto md:self-end lg:ml-auto lg:w-auto lg:flex-none">
                <Image
                  width={592}
                  height={423}
                  src={images?.[0].url}
                  alt={images[0].alt}
                  className="aspect-[7/6] w-[37rem] max-w-none rounded-2xl bg-gray-100 object-cover object-top brightness-100"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <Image
                    width={384}
                    height={288}
                    src={images[1].url}
                    alt={images[1].alt}
                    className="aspect-[4/5] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-100 object-cover brightness-110"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    width={592}
                    height={423}
                    src={images[2].url}
                    alt={images[2].alt}
                    className="aspect-[7/7] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-100 object-cover  brightness-110"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    width={384}
                    height={288}
                    src={images[3].url}
                    alt={images[3].alt}
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-100 object-cover brightness-110"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
