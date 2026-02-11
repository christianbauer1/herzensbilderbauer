import OffersOverview from "@/components/landing/offers-overview";
import CtaPageEnd from "../../../components/cta-page-end";

export const metadata = {
  title: "Alle Fotografie Angebote und Preise | Profifotograf Ansbach",
  description:
    "Entdeckt alle meine Angebote. Ich fange die Liebe und Emotionen deiner besonderen Momente ein.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Page() {
  return (
    <>
      <OffersOverview h2Ash1 />

      <CtaPageEnd />
    </>
  );
}
