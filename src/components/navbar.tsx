"use client";

import Link from "next/link";
import { DISCOUNT_VIDEO_PRICE, SITE_TITLE } from "@/lib/constants";
import NavbarMobile from "./navbar-mobile";
import Image from "next/image";
import { useState } from "react";
import { XIcon } from "./icons";

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div
          className={`sm:before:flex-1" fixed left-0 top-0 isolate z-20 flex w-full items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5`}
        >
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#fcd289] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#fff200] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <p className="animate-pulse text-sm leading-6 text-gray-900">
            Hochzeitsvideo für nur {DISCOUNT_VIDEO_PRICE} €. Nur für kurze Zeit!{" "}
            <Link
              onClick={() => setShowBanner(false)}
              href={"/highlightvideo"}
              className="whitespace-nowrap font-semibold"
            >
              Mehr erfahren&nbsp;
              <span aria-hidden="true" className="">
                &rarr;
              </span>
            </Link>
          </p>
          <div className="flex flex-1 justify-end">
            <button
              onClick={() => setShowBanner(false)}
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <Link
        href="/"
        className={`fixed left-4 z-20 ${showBanner ? "top-20" : "top-6"} `}
      >
        <span className="sr-only">{SITE_TITLE}</span>

        <Image
          height={40}
          width={60}
          src="/images/logo.png"
          alt={SITE_TITLE + " Logo"}
          className="h-10 w-auto"
        />
      </Link>
      <NavbarMobile
        className={`fixed right-4 z-20 ${showBanner ? "top-20" : "top-6"}`}
      />
    </>
  );
}
