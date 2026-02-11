"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function MasonryGrid({
  urls,
}: {
  urls: { url: string; accessCode?: number | null }[];
}) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
      <Masonry columnsCount={4} gutter="2px">
        {urls.map((i, idx) => {
          return <ImageOverlay key={i.url} image={i} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

function ImageOverlay({
  image,
}: {
  image: {
    url: string;
    accessCode?: number | null;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-85 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div className="relative">
            <button
              className="absolute right-4 top-2 text-4xl text-white"
              onClick={handleClose}
            >
              &times;
            </button>

            <Image
              src={image.url}
              alt=""
              width={1000}
              height={600}
              className="max-w-screen max-h-screen object-contain"
            />
          </div>
        </div>
      )}
      <div
        className="cursor-pointer self-center bg-neutral-200"
        onClick={() => setIsOpen(true)}
      >
        <Image src={image.url} alt="" width={500} height={300} />
      </div>
    </>
  );
}
