import Headline from "@/components/headline";
import { BottomColorblur, TopColorblur } from "@/components/colorblur";
import ImageGrid, { ImageItem } from "../image-grid";

export interface PortfolioProps {
  heading: Heading;
  imageOrVideoUrls: ImageItem[];
}

export default function Portfolio({
  portfolio,
}: {
  portfolio: PortfolioProps;
}) {
  const { heading, imageOrVideoUrls } = portfolio;

  if (!imageOrVideoUrls || imageOrVideoUrls.length === 0) return null;

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <TopColorblur />

      <Headline
        className="mx-auto mb-24 flex max-w-6xl flex-col px-3 sm:mb-32"
        h2={heading.hTag}
        title={heading.title}
        description={heading.description}
      />

      <ImageGrid images={imageOrVideoUrls} />

      <BottomColorblur />
    </div>
  );
}
