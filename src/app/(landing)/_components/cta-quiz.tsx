import Link from "next/link";
import Headline from "@/components/headline";
import { ArrowLongRightIcon } from "@/components/icons";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";

export default function CtaQuiz() {
  return (
    <Section sectionClassName="bg-red-100">
      <Headline
        title="Wie lange sollte ein Fotograf auf eurer Feier sein?"
        description={
          <div className="mt-6">
            <p>
              Ihr seid euch unsicher ob eine Begleitung von 4 Stunden ausreicht?{" "}
              <span className="font-extrabold">Diese 5 einfachen Fragen</span>{" "}
              helfen euch herauszufinden wie lange ein Hochzeitsfotograf auf
              eurer Hochzeit sein sollte. Findet in{" "}
              <span className="font-extrabold">unter einer Minute</span> heraus
              welchen Leistungsumfang ihr bei eurem Hochzeitsfotografen
              beauftragen solltet.
            </p>

            <Button asChild variant={"outline"} className={`mt-12 self-center`}>
              <Link href="/quiz">
                Beantwortet jetzt 5 einfache Fragen{" "}
                <ArrowLongRightIcon className="ml-2 h-5" />
              </Link>
            </Button>
          </div>
        }
      />
    </Section>
  );
}
