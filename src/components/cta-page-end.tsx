import Headline from "@/components/headline";
import Section from "@/components/section";
import CtaButton from "./cta-button";

export default function CtaPageEnd() {
  return (
    <Section>
      <Headline
        title="Sichert euer Fotoshooting oder Videoshooting!"
        description={
          <div className="mt-6">
            <p>
              Ich bin oft auch für sehr kurzfristige Fotoshootings und
              Videoshootings offen! Fragt einfach einen Termin für ein{" "}
              <span className="font-extrabold">
                100% kostenloses Vorgespräch
              </span>{" "}
              an. Nach einem kennenlernen seht wie wir bei eurem Fotoshooting
              gemeinsam arbeiten und ihr damit besser entscheiden könnt, ob wir
              zusammenpassen.
            </p>

            <CtaButton className="mt-10" />
          </div>
        }
      />
    </Section>
  );
}
