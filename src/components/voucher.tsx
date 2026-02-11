import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { antic } from "@/fonts";
import Link from "next/link";

export interface VoucherProps {
  shootingType: string;
  imageUrl: string;
}

export default function Voucher({ shootingType, imageUrl }: VoucherProps) {
  return (
    <div className="relative">
      <Staple className="-z-10 ml-2 mt-2 rotate-1" />
      <Staple className="-z-20 ml-4 mt-4 rotate-2" />

      <div className="z-10 flex flex-col rounded-2xl border bg-white shadow-lg sm:h-80 sm:flex-row">
        <div className="h-52 sm:h-full sm:w-1/3">
          <Image
            alt="Gutschein Bild"
            src={imageUrl}
            height={300}
            width={300}
            className="h-full w-full rounded-s-2xl object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-8 text-center">
          <div>
            <p className="text-sm">Fotoshooting verschenken</p>
            <h3 className={`font-mono ${antic.variable} text-5xl`}>
              Gutschein
            </h3>
          </div>

          <div className="">
            <p className="font-bold">{shootingType}</p>
          </div>
          <Separator className="max-w-48" />

          <Link href="/gutschein-bestellen" className="text-xs font-bold">
            Jetzt bestellen
          </Link>
        </div>
      </div>
    </div>
  );
}

function Staple({ className }: { className: string }) {
  return (
    <div
      className={`absolute flex h-80 w-full flex-row rounded-2xl border bg-white ${className}`}
    >
      <div className="h-full w-1/3 bg-neutral-100"></div>
      <div className="flex flex-1 flex-col items-center justify-center">
        Coupon
      </div>
    </div>
  );
}
