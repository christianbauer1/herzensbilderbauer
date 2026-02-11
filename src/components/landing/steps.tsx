import Link from "next/link";
import {
  ArrowLongRightIcon,
  CakeIcon,
  CalendarDaysIcon,
  CameraIcon,
  SpeechIcon,
} from "@/components/icons";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";

const features = [
  {
    name: "Wunschdatum sichern",
    description:
      "Die Sommermonate sind eine begehrte Zeit für Fotoshootings & Videoshootings. In dieser Zeit des Jahres ist die Nachfrage besonders hoch. Daher ist es wichtig, euren Termin frühzeitig zu reservieren.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Kostenloses Vorgespräch",
    description:
      "Treffen wir uns in Ansbach oder in einem Videotelefonat für ein kostenloses Vorgespräch, um eure Wünsche und Vorstellungen für das Shooting zu besprechen.",
    icon: SpeechIcon,
  },
  {
    name: "Fotoshooting",
    description:
      "Erlebt ein unkompliziertes und professionelles Fotoshooting & Videoshooting an eurem Wunschtermin. Mit meiner Expertise sorge ich dafür, dass jedes Bild eure Persönlichkeit und Emotionen einfängt.",
    icon: CameraIcon,
  },
];

export default function Steps() {
  return (
    <Section
      sectionClassName="bg-[#E6DDD6]"
      headline={{
        h2: "Wie es funktioniert",
        title: "In drei einfachen Schritten zum Termin",
        description: "Entspannt, einfach, zuverlässig",
      }}
    >
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col gap-4">
            <h3 className="flex items-center gap-x-3 font-bold">
              <feature.icon className="h-5 w-5 flex-none" aria-hidden="true" />
              {feature.name}
            </h3>

            <dd className="flex flex-auto flex-col gap-4">
              <p className="flex-auto text-base leading-7">
                {feature.description}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      <Button variant={"outline"} asChild className={`self-center`}>
        <Link href="/termin-vereinbaren">Jetzt Wunschdatum anfragen</Link>
      </Button>
    </Section>
  );
}
