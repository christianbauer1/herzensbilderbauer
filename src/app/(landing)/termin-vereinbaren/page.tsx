import Section from "@/components/section";
import { antic } from "@/fonts";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_WRITTEN } from "@/lib/constants";

export const metadata = {
  title: "Jetzt Termin mit Fotograf in Ansbach vereinbaren",
  description:
    "Bucht euer Fotoshooting mit mir. Ich freue mich darauf, eure Herzensmomente festzuhalten.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function TerminVereinbaren() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
        <div className={`flex flex-col gap-5 text-left`}>
          <h1 className="-mb-2 text-base text-neutral-400">
            Termin vereinbaren
          </h1>

          <p
            className={`font-mono text-5xl tracking-tighter text-neutral-600 md:text-6xl ${antic.variable}`}
          >
            Jetzt euer Datum anfragen
          </p>
          <p>
            Damit ihr sicher die richtige Entscheidung trefft lernen wir uns in
            einem Videotelefonat oder persönlich in Ansbach kennen. Ihr überlegt
            im Anschluss in Ruhe, ob ihr mit mir arbeiten möchtet, sichert euch
            euer Datum und wir fiebern gemeinsam auf euer Fotoshooting hin!
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
            width={592}
            height={423}
            src={"/images/about-me.jpg"}
            alt={"Familie"}
            className="aspect-[9/11] w-[30rem] max-w-none rounded-2xl bg-gray-100 object-cover object-right-top brightness-100"
          />
        </div>
      </div>
    </Section>
  );
}
