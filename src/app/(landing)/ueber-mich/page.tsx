import MyStory from "./_components/my-story";
import AboutHero from "./_components/about-hero";
import FunFacts from "./_components/fun-facts";
import CtaPageEnd from "../../../components/cta-page-end";
import RatingStats from "@/components/landing/rating-stats";

export const metadata = {
  title: "Über mich | Christian Bauer | Fotograf in Ansbach",
  description:
    "Ich bin Christian, der beste Fotograf aus Ansbach. Ich freue mich euch kennenzulernen.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function UeberMich() {
  return (
    <>
      <AboutHero />

      <RatingStats />

      <MyStory />

      <FunFacts />

      <CtaPageEnd />
    </>
  );
}
