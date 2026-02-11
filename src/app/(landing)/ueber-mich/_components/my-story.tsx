import React from "react";
import { antic } from "@/fonts";
import Section from "@/components/section";
import Image from "next/image";

function MyStory() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <div className="h-28 w-28">
          <Image
            src="/images/avatarLarge.jpg"
            height={180}
            width={180}
            alt="Christian"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div className={`flex flex-col gap-5 text-left`}>
          <h2 className="-mb-2 text-base text-neutral-400">
            Wer ich bin und wie ich zur Fotografie kam
          </h2>

          <p
            className={`font-mono text-5xl tracking-tighter text-neutral-600 md:text-6xl ${antic.variable}`}
          >
            Meine Geschichte
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>
          Ich bin Christian, glücklich verheiratet und lebe im charmanten
          Ansbach im Herzen Mittelfrankens. Ich war schon immer fasziniert von
          der Frage, was schöne Fotos ausmacht und ob es möglich ist, diesen
          kreativen Prozess technisch zu begreifen.{" "}
          <span className="font-bold">
            Also habe ich mich intensiv mit der Fotografie auseinandergesetzt
          </span>
          , sehr viel fotografiert, Schulungen besucht, viel gelernt und geübt
          und mich schließlich dazu entschieden mich mit der Fotografie
          selbständig zu machen.
        </p>

        <p>
          Ich bin ein eher zurückhaltender Mensch und habe festgestellt, dass
          dies beim Fotografieren eine große Stärke ist. Daher kann ich euch und
          eure Liebsten stets unaufdringlich und unauffällig im Hintergrund
          begleiten.{" "}
          <span className="font-bold">
            Es entstehen ungestellte, ehrliche und authentische Bilder, die euch
            so zeigen, wie ihr wirklich seid.
          </span>{" "}
          So könnt ihr jeden Moment eures besonderen Tages in vollen Zügen
          genießen.
        </p>
      </div>
    </Section>
  );
}

export default MyStory;
