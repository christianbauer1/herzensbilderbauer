import Image from "next/image";
import ButtonVideo from "./button-video";

export type ImageItem = {
  url: string;
  isVideo?: boolean;
  videoUrl?: string;
};

type Row = {
  className: string;
  images: ImageItem[];
};

function generateRows(images: ImageItem[]): Row[] {
  let rows: Row[] = [];
  for (let i = 0; i < images.length; ) {
    let row: Row;
    if (i % 6 < 4) {
      row = {
        className: "w-full md:w-1/2 lg:w-1/4",
        images: images.slice(i, i + 4),
      };
      i += 4;
    } else {
      row = {
        className: "w-full md:w-1/2",
        images: images.slice(i, i + 2),
      };
      i += 2;
    }
    rows.push(row);
  }
  return rows;
}

/**Rendered eine responsive dynamische Bildergalerie. Dabei hat auf großen Bildschirmen die erste Reihe 4 Bilder im Hochformat und die 2. Reihe immer 2 Bilder im Querformat. Entsprechende Bilder wählen die für diese Formate passen. */
const ImageGrid = ({ images }: { images: ImageItem[] }) => {
  const rows = generateRows(images);

  return (
    <div className="flex flex-col">
      {rows.map((row, idx) => (
        <div className={`flex flex-wrap`} key={idx}>
          {row.images.map((image, imageIdx) => (
            <div
              className={`relative h-[550px] ${row.className}`}
              key={image.url}
            >
              {image.isVideo ? (
                <div className="relative h-full w-full">
                  <Image
                    src={image.url}
                    alt={`Portfolio Bild ${idx}-${imageIdx}`}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="/images/blur.jpg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ButtonVideo
                      showPlayButton
                      className="h-16 w-16 bg-white"
                      videoUrl={image.videoUrl as string}
                      videoTitle="Hochzeitsvideo"
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={image.url}
                  alt={`Portfolio Bild ${idx}-${imageIdx}`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/images/blur.jpg"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
