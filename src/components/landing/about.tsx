import Image from "next/image";
import Quote from "@/components/quote";
import Section from "@/components/section";

export default function About() {
  return (
    <Section
      sectionClassName="isolate overflow-hidden px-6"
      headline={{
        h2: "Über mich",
        title: "Eine persönliche Anmerkung",
      }}
    >
      <div className="relative mx-auto -mt-10 py-24">
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <Quote />
            <blockquote className="sm:text-2xl sm:leading-9">
              <p>
                <span className="font-bold">
                  Eure besonderen Momente erlebt ihr nur einmal. Ihr habt nur
                  eine einzige Chance, diese Augenblicke perfekt einzufangen.
                </span>{" "}
                Authentische Bilder & Videos sind unverzichtbar, denn sie
                bleiben, wenn der Moment vorbei ist. Sie sind mehr als nur
                Bilder, sie sind festgehaltene Momente, geliebte Menschen und
                tiefe Emotionen. Sie gehören euch und werden Generationen
                erfreuen.
              </p>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <Image
              width={288}
              height={296}
              src="/images/about-me.jpg"
              alt="Bild vom Hochzeitsfotograf Christian Bauer"
              className="rounded-full bg-indigo-50 object-cover brightness-110 lg:rounded-3xl"
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <Image
              width={247}
              height={64}
              className="h-12 w-auto lg:h-16"
              src="/images/signature.png"
              alt="Unterschrift Christian Bauer"
            />
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
