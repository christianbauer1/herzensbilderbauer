import { antic } from "@/fonts";
import { CheckIcon } from "@/components/icons";
import Section from "@/components/section";

const features = [
  {
    name: "Morgens brauche ich erstmal...",
    description: "geputzte Zähne",
  },
  {
    name: "Mein Lieblingsessen ist...",
    description: "Pizza... Ich könnte mich reinlegen",
  },
  {
    name: "Ein Talent, das ich gerne hätte, ist...",
    description: "schön singen zu können",
  },
  {
    name: "Mein Lieblingsbuch ist...",
    description: "Das Café am Rande der Welt",
  },
  {
    name: "Eine Sache, die die meisten Leute nicht über mich wissen, ist...",
    description: "dass ich Rap Musik liebe",
  },
  {
    name: "Das inspirierendste Zitat für mich ist...",
    description:
      "Der gute Vorsatz ist ein Gaul, der oft gesattelt aber selten geritten wird.",
  },
];

export default function Example() {
  return (
    <Section sectionClassName="bg-[#E6DDD6]">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div className="flex flex-col gap-5">
          <h2 className="text-base text-neutral-400">Fun Facts über mich</h2>
          <p
            className={`font-mono text-5xl tracking-tighter text-neutral-600 md:text-6xl ${antic.variable}`}
          >
            Über mich
          </p>
          <p>
            Ein kleiner Überblick für euch, damit ihr euch besser vorstellen
            könnt wen ihr vor euch habt!
          </p>
        </div>
        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="text-gray-500">
                <CheckIcon
                  className="absolute left-0 top-1 h-5 w-5"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <dd className={`mt-2 text-2xl font-extrabold`}>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
