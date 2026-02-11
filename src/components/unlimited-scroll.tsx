"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MasonryGrid from "./masonry-grid";

type ImageListProps = {
  imgUrls: string[];
  daysLeftForOffer: number;
};

const NUMBER_OF_IMAGES_TO_DISPLAY = 80;

export default function UnlimitedScroll({
  imgUrls,
  daysLeftForOffer,
}: ImageListProps) {
  const [offset, setOffset] = useState(NUMBER_OF_IMAGES_TO_DISPLAY * 2);
  const [urls, setUrls] = useState<string[]>(
    imgUrls.slice(0, NUMBER_OF_IMAGES_TO_DISPLAY),
  );
  const { ref, inView } = useInView();

  const loadMoreImages = () => {
    const newUrls = imgUrls.slice(offset, offset + NUMBER_OF_IMAGES_TO_DISPLAY);
    setUrls([...urls, ...newUrls]);
    setOffset(offset + NUMBER_OF_IMAGES_TO_DISPLAY * 2);
  };

  useEffect(() => {
    if (inView) {
      loadMoreImages();
    }
  }, [inView]);

  return (
    <div>
      {/* <MasonryGrid daysLeftForOffer={daysLeftForOffer} urls={urls} /> */}

      <div ref={ref}></div>
    </div>
  );
}
