import Section from "@/components/section";
import { antic } from "@/fonts";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_WRITTEN } from "@/lib/constants";

export const metadata = {
  title: "Gutschein für Fotoshooting in Ansbach bestellen",
  description:
    "Bestellt einen Gutschein für ein Fotoshooting. Ich freue mich darauf, eure Herzensmomente festzuhalten.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
        <div className={`flex flex-col gap-5 text-left`}>
          <h1 className="-mb-2 text-base text-neutral-400">
            Gutschein bestellen
          </h1>

          <p
            className={`font-mono text-5xl tracking-tighter text-neutral-600 md:text-6xl ${antic.variable}`}
          >
            Fotofreude verschenken
          </p>
          <p>
            Wie wäre es zum Beispiel mit einem Fotoshooting mit der Familie zu
            Weihnachten? Oder als Geburtstagsgeschenk für die Großeltern? Dafür
            biete ich dir auch die Möglichkeit ein Gutschein zu erstellen, den
            du dann verschenken kannst um jemand anderem eine Freude zu machen.
            In meinen Augen eine richtig schöne Geschenkidee, da sie persönlich
            ist und man in einigen Jahren noch was davon hat. Auf Anfrage
            erstelle ich dir sehr gerne einen Gutschein. Du kannst bei mir aber
            auch einen Wertgutschein kaufen, wenn du dir bei der Art des
            Fotoshootings noch unsicher bist.
          </p>

          <div className="mt-4 flex flex-col gap-8">
            <div className="flex flex-row items-center gap-3">
              <MailIcon className="text-primary" />
              <p className="text-accent-foreground">
                <Link href={EMAIL_ADDRESS}>{EMAIL_ADDRESS}</Link>
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <PhoneIcon className="text-primary" />
              <p className="text-accent-foreground">
                <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_WRITTEN}</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Image
            width={350}
            height={500}
            src={"/images/offers/paarshooting.jpeg"}
            alt={"Glückliches Paar"}
            className="aspect-[9/11] w-[25rem] max-w-none rounded-2xl bg-gray-100 object-cover object-right-top brightness-100"
          />
        </div>
      </div>
    </Section>
  );
}
