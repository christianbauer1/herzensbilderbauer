import Link from "next/link";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";

export default function CtaPriceComparison() {
  return (
    <Section sectionClassName="bg-[#E6DDD6]">
      <div className="relative isolate overflow-hidden rounded-3xl bg-white px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        {/* <RadialGradient /> */}

        <div className="mx-auto flex flex-col gap-8 text-center lg:mx-0 lg:max-w-96 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="font-mono text-3xl font-semibold tracking-tighter sm:text-4xl">
            Preisvergleich aller Hochzeitsfotografen aus Ansbach
          </h2>

          <p className="-mt-2">
            Ich habe über 23 Hochzeitsfotografen aus Ansbach und Umgebung nach
            ihrem Preis gefragt und für euch aufgelistet.
          </p>

          <Button className="self-center lg:self-start">
            <Link href={"/preisvergleich-erhalten"}>
              Kostenlosen Preisvergleich erhalten
            </Link>
          </Button>
        </div>

        <div className="relative mt-16 h-80 lg:mt-8">
          <div className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white ring-1 ring-white/10 lg:py-4">
            <Teaser />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Teaser() {
  const people = [
    {
      name: "Momentfotografie, Madeleine Schindler",
      price: "0000,-",
      origin: "Ansbach",
    },
    {
      name: "Fototastisches, Heike Stuffer",
      price: "0000,-",
      origin: "Ansbach",
    },
    {
      name: "Fotostudio Rother",
      price: "0000,-",
      origin: "Ansbach",
    },
    {
      name: "kristinafrom.fotografie",
      price: "0000,-",
      origin: "Ansbach",
    },
    {
      name: "Fotografie Petra Schaupner",
      price: "0000,-",
      origin: "Ansbach",
    },
    {
      name: "Semagraphy",
      price: "0000,-",
      origin: "Ansbach",
    },
    {
      name: "Spiegelhof Fotografie",
      price: "0000,-",
      origin: "Wolframs-Eschenbach",
    },
    {
      name: "Irina Mehnert Photography",
      price: "0000,-",
      origin: "Wolframs-Eschenbach",
    },
  ];
  return (
    <div className="flow-root overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <table className="w-full text-left">
          <thead className="bg-white">
            <tr>
              <th
                scope="col"
                className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                Hochzeitsfotograf/in
                <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
              </th>
              <th
                scope="col"
                className="table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Preis
              </th>
              <th
                scope="col"
                className="table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Herkunft
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, idx) => (
              <tr key={idx}>
                <td className="relative w-48 py-4 text-sm font-medium text-gray-900">
                  {person.name}
                  <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                  <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                </td>
                <td className="relative table-cell px-3 py-4 text-sm text-gray-500">
                  <div className="absolute h-5 w-12 bg-gray-200/50 backdrop-blur-md"></div>
                  {person.price}
                </td>
                <td className="table-cell px-3 py-4 text-sm text-gray-500">
                  {person.origin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
