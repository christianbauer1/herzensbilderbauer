"use client";

import Image from "next/image";
import React from "react";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function BasicMasonryGrid({ urls }: { urls: string[] }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
      <Masonry columnsCount={4} gutter="15px">
        {urls.map((i, idx) => {
          return (
            <div key={i} className="self-center bg-neutral-200">
              <Image src={i} alt="" width={500} height={300} />
            </div>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}
