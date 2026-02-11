import Hero, { HeroProps } from "./hero";
import Portfolio, { PortfolioProps } from "./portfolio";
import Pricing, { PricingProps } from "./pricing";
import TestimonialsSection from "../testimonials-section";
import BlogTeaser from "../blog-teaser";
import QAndA, { FaqProps } from "./q-and-a";
import CtaPageEnd from "../cta-page-end";
import RatingStats from "./rating-stats";
import OffersOverview from "./offers-overview";
import About from "./about";
import Steps from "./steps";

interface GenericLayoutProps {
  hero: HeroProps;
  portfolio: PortfolioProps;
  pricing?: PricingProps;
  faq: FaqProps;
  /**Nur für Haupt Landing Page relevant */
  showOffersInsteadOfPricing?: boolean;
}

export default function GenericLayout({
  hero,
  portfolio,
  pricing,
  faq,
  showOffersInsteadOfPricing = false,
}: GenericLayoutProps) {
  return (
    <main>
      <Hero hero={hero} />
      <RatingStats />
      <Portfolio portfolio={portfolio} />
      {showOffersInsteadOfPricing ? (
        <OffersOverview />
      ) : (
        pricing && <Pricing pricing={pricing} />
      )}

      <About />
      <Steps />
      <TestimonialsSection />
      <BlogTeaser />
      <QAndA faq={faq} />
      <CtaPageEnd />
    </main>
  );
}
