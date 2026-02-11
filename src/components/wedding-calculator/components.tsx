"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Slider } from "../ui/slider";
import CtaButton from "../cta-button";
import { Switch } from "@/components/ui/switch";
import {
  PRICE_BAD_WEATHER_COVERAGE,
  TRAVEL_HOURLY_RATE,
} from "@/lib/constants";
import { useState } from "react";
import { estimateHours } from "./utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { CheckIcon, InformationCircleIcon } from "../icons";
import { Separator } from "../ui/separator";
import { CarIcon, ClockIcon, UmbrellaIcon } from "lucide-react";

interface InputSectionProps {
  hours: number;
  distance: number;
  badWeatherCoverage: boolean;
  setHours: React.Dispatch<React.SetStateAction<number>>;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
  setBadWeatherCoverage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputSection: React.FC<InputSectionProps> = ({
  hours,
  distance,
  badWeatherCoverage,
  setHours,
  setDistance,
  setBadWeatherCoverage,
}) => {
  return (
    <div className="flex w-full flex-col gap-8 md:w-2/3">
      <div className="flex flex-col gap-4">
        <div>
          <Popover>
            <PopoverTrigger asChild className="cursor-pointer">
              <Button variant="ghost" className="gap-2 p-0 text-base font-bold">
                <CarIcon className="h-auto w-5 text-secondary-foreground" />
                Gesamtfahrtstrecke
                <InformationCircleIcon className="h-auto w-5 text-secondary-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 text-sm">
              <DistancePopoverContent />
            </PopoverContent>
          </Popover>

          <p className="text-xs text-neutral-500">Ab Brodswinden 23, Ansbach</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Slider
            className="max-w-96"
            defaultValue={[distance]}
            onValueChange={([newValue]) => {
              if (newValue !== undefined) {
                setDistance(newValue);
              }
            }}
            min={0}
            max={500}
            step={10}
          />

          <p className="font-bold">{"km"}</p>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <div>
          <Popover>
            <PopoverTrigger asChild className="cursor-pointer">
              <Button variant="ghost" className="gap-2 p-0 text-base font-bold">
                <UmbrellaIcon className="h-auto w-5 text-secondary-foreground" />
                Schlechtwetterabsicherung
                <InformationCircleIcon className="h-auto w-5 text-secondary-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 text-sm">
              <div className="flex flex-col gap-4 text-sm text-neutral-500">
                Stellt euch vor, an einem der schönsten Tage eures Lebens regnet
                es den ganzen Tag in Strömen, obwohl ihr mit schönem Wetter
                gerechnet habt. Das kann die Stimmung trüben und die geplanten
                Fotosessions ins Wasser fallen lassen. Aber keine Sorge, es gibt
                eine einfache Lösung: die Schlechtwetterabsicherung.
                <p className="font-bold">
                  Die Vorteile der Schlechtwetterabsicherung
                </p>
                <p>
                  (1) Kostenersparnis: Wenn es regnet und wir länger bleiben
                  müssen, um auf besseres Wetter zu warten, kostet das{" "}
                  {TRAVEL_HOURLY_RATE} € pro Stunde bzw. entsprechend anteilig,
                  falls es keine volle Stunde wird. Die
                  Schlechtwetterabsicherung hingegen kostet nur{" "}
                  {PRICE_BAD_WEATHER_COVERAGE} €. Das ist sogar günstiger als
                  eine Verlängerung von 15 Minuten Fotografieren.
                </p>
                <p>
                  (2) Flexibilität: Bei starkem Regen, der immer häufiger
                  vorkommt, ist das Fotoshooting draußen schlichtweg technisch
                  nicht möglich, da neben eurem Brautkleid, den Requisiten und
                  dem Anzug des Bräutigams, die Kamera und das Equipment
                  beschädigt werden könnten.
                </p>
                <p>
                  (3) Sicherheit und Qualität: Mit der Schlechtwetterabsicherung
                  seid ihr auf der sicheren Seite. Sollte es in Strömen regnen,
                  holen wir das Brautpaarshooting in einem
                  After-Wedding-Shooting über 1 Stunde in Ansbach in der Natur
                  oder in meinem Boho-Fotostudio nach. So bekommt ihr trotzdem
                  wunderschöne Erinnerungen, ohne Kompromisse bei der Qualität
                  einzugehen.
                </p>
                Die Schlechtwetterabsicherung bietet euch also nicht nur
                finanzielle Vorteile, sondern auch die Sicherheit, dass eure
                besonderen Momente perfekt festgehalten werden – unabhängig vom
                Wetter. Investiert in diese Absicherung und genießt euren Tag
                sorgenfrei! 🌦️📸
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Switch
            checked={badWeatherCoverage}
            onCheckedChange={setBadWeatherCoverage}
          />

          <p className="text-sm font-normal italic text-neutral-400">
            optimal abgesichert für nur {PRICE_BAD_WEATHER_COVERAGE} €
          </p>
        </div>
      </div>

      <Separator />

      <SliderSection
        title="Dauer der Hochzeitsreportage"
        value={hours}
        setValue={setHours}
        min={2}
        max={12}
        step={0.5}
        unit="Stunden"
        accordionTitle={
          <>
            <p>
              Wie lang sollte ich eure Hochzeit begleiten?{" "}
              <span className="font-bold">
                Lass uns die Dauer hier abschätzen.
              </span>
            </p>
          </>
        }
        accordionContent={
          <div>
            <PhotographyTimeEstimator setHours={setHours} />
          </div>
        }
      />
    </div>
  );
};

interface SliderSectionProps {
  title: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
  step: number;
  unit: string;
  accordionTitle: React.ReactNode;
  accordionContent: React.ReactNode;
}

export const SliderSection: React.FC<SliderSectionProps> = ({
  title,
  value,
  setValue,
  min,
  max,
  step,
  unit,
  accordionTitle,
  accordionContent,
}) => (
  <div className="flex flex-col">
    <div className="flex flex-row gap-2">
      <ClockIcon className="h-auto w-5 text-secondary-foreground" />
      <p className="text-base font-bold">{title}</p>
    </div>

    <Accordion type="single" collapsible className="-mt-1.5 w-full">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="text-sm font-normal text-neutral-500">
          <div className="flex flex-col gap-8 text-xs">{accordionTitle}</div>
        </AccordionTrigger>
        <AccordionContent>{accordionContent}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <div className="mt-1 flex flex-row items-center gap-4">
      <Slider
        className="max-w-96"
        defaultValue={[value]}
        onValueChange={([newValue]) => {
          if (newValue !== undefined) {
            setValue(newValue);
          }
        }}
        min={min}
        max={max}
        step={step}
      />

      <p className="font-bold">{unit}</p>
    </div>
  </div>
);

interface PricingOverviewProps {
  className: string;
  totalCost: string;
  freeDistance: number;
  discount: string;
  badWeatherCoverage: boolean;
}

export const PricingOverview: React.FC<PricingOverviewProps> = ({
  className,
  totalCost,
  freeDistance,
  discount,
  badWeatherCoverage,
}) => (
  <div className={className}>
    <div className="flex flex-col gap-3">
      <p className="font-bold">Übersicht</p>
      {freeDistance !== 0 && (
        <ListItem title="Freikilometer" content={`${freeDistance} km`} />
      )}
      {discount !== "0" && (
        <ListItem title="Rabatt" content={`${discount} %`} />
      )}

      {badWeatherCoverage && (
        <ListItem
          title="Schlechtwetterabsicherung"
          content={`${PRICE_BAD_WEATHER_COVERAGE} €`}
        />
      )}

      <Separator className="hidden md:flex" />

      <ListItem large title="Gesamt" content={`${totalCost} €`} />
    </div>
    <div>
      <CtaButton className="self-start" />
      <div className="mt-6 flex flex-col gap-3">
        {[
          "~ 50 Bilder pro Stunde",
          "Hochwertige Bildbearbeitung",
          "Bearbeitung jedes einzelnen Bildes",
          "Wunderschöne Onlinegalerie",
        ].map((e) => (
          <div
            key={e}
            className="flex flex-row items-center gap-3 text-xs text-gray-500"
          >
            <CheckIcon
              className="h-6 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            {e}
          </div>
        ))}
      </div>
    </div>
  </div>
);

interface ListItemProps {
  title: string;
  content: string;
  large?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  content,
  large = false,
}) => (
  <div className="flex flex-row justify-between gap-4 text-sm">
    <p className={large ? "font-bold" : ""}>{title}</p>
    <p className={large ? "text-2xl font-bold" : ""}>{content}</p>
  </div>
);

function PhotographyTimeEstimator({
  setHours,
}: {
  setHours: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [numberOfGuests, setNumberOfGuests] = useState(40);

  const [wantsCouplePhotos, setWantsCouplePhotos] = useState(true);
  const [wantsGroupPhotos, setWantsGroupPhotos] = useState(true);
  const [wantsPreppingPhotos, setWantsPreppingPhotos] = useState(false);
  const [wantsFirstLookPhotos, setWantsFirstLookPhotos] = useState(false);
  const [wantsWeddingDancePhotos, setWantsWeddingDancePhotos] = useState(false);

  const [isChurchWedding, setIsChurchWedding] = useState(false);
  const [isCivilWedding, setIsCivilWedding] = useState(false);

  return (
    <div className="flex flex-col gap-4 text-neutral-500">
      <p className="mt-4 text-sm font-bold">Rahmendaten</p>

      <div className="mb-8 flex flex-row items-center gap-4">
        <Slider
          className="max-w-96"
          defaultValue={[numberOfGuests]}
          onValueChange={([newValue]) => {
            if (newValue !== undefined) {
              setNumberOfGuests(newValue);
            }
          }}
          min={0}
          max={300}
          step={10}
        />

        <p className="font-bold">Gäste</p>
      </div>
      <SwitchWithImage
        value={isCivilWedding}
        setValue={setIsCivilWedding}
        label="Standesamt"
        imageSrc="/images/time-estimator/civil.png"
        altText="Trauung Fotos"
        description="Trauung"
      />
      <SwitchWithImage
        value={isChurchWedding}
        setValue={setIsChurchWedding}
        label="Kirche oder freie Trauung"
        imageSrc="/images/time-estimator/church.png"
        altText="Trauung Fotos"
        description="Eure Zeremonie"
      />

      <p className="mt-4 text-sm font-bold">Grundumfang</p>

      <SwitchWithImage
        value={wantsCouplePhotos}
        setValue={setWantsCouplePhotos}
        label="Brautpaarfotos"
        imageSrc="/images/time-estimator/couple.png"
        altText="Paarfotos"
        description="Natürlich & ungestellt"
      />
      <SwitchWithImage
        value={wantsGroupPhotos}
        setValue={setWantsGroupPhotos}
        label="Gruppenfotos"
        imageSrc="/images/time-estimator/group.png"
        altText="Gruppenfotos"
        description="Von euch und euren Gästen"
      />
      <SwitchWithImage
        value={wantsFirstLookPhotos}
        setValue={setWantsFirstLookPhotos}
        label="First Look"
        imageSrc="/images/time-estimator/first.png"
        altText="First Look Fotos"
        description="Der Augenblick davor"
      />

      <p className="mt-4 text-sm font-bold">Spezielle Momente</p>

      <SwitchWithImage
        value={wantsPreppingPhotos}
        setValue={setWantsPreppingPhotos}
        label="Getting Ready"
        imageSrc="/images/time-estimator/prepping.png"
        altText="Getting Ready Fotos"
        description="Ruhige Momente vor eurem Tag"
      />

      <SwitchWithImage
        value={wantsWeddingDancePhotos}
        setValue={setWantsWeddingDancePhotos}
        label="Hochzeitstanz"
        imageSrc="/images/time-estimator/dance.png"
        altText="Hochzeitstanz Fotos"
        description="Euer erster Tanz als Ehepaar"
      />

      <p className="mt-4 text-sm font-bold">Meine Empfehlung</p>
      <p className="text-xl">
        ~{" "}
        {estimateHours({
          churchWedding: isChurchWedding,
          civilWedding: isCivilWedding,
          coupleShooting: wantsCouplePhotos,
          groupPhotos: wantsGroupPhotos,
          guests: numberOfGuests,
          firstLook: wantsFirstLookPhotos,
          gettingReady: wantsPreppingPhotos,
          weddingDance: wantsWeddingDancePhotos,
        })}
      </p>
    </div>
  );
}

interface SwitchWithImageProps {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  imageSrc: string;
  altText: string;
  description: string;
}

const SwitchWithImage: React.FC<SwitchWithImageProps> = ({
  value,
  setValue,
  label,
  imageSrc,
  altText,
  description,
}) => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 rounded-3xl border border-neutral-400/40 p-2">
      <div className="flex flex-row items-center gap-5">
        <Image
          src={imageSrc}
          alt={altText}
          width={300}
          height={300}
          className="h-16 w-16 rounded-2xl md:h-28 md:w-28"
        />
        <div className="flex flex-col text-sm text-neutral-500">
          <p className="font-bold">{label}</p>
          <p>{description}</p>
        </div>
      </div>
      <Switch checked={value} onCheckedChange={setValue} />
    </div>
  );
};

function DistancePopoverContent() {
  return (
    <div className="flex flex-col gap-4 text-sm text-neutral-500">
      <p className="font-bold">
        Wie du die Gesamtfahrtstrecke berechnen kannst
      </p>
      Für die Berechnung empfehle ich Google oder Apple Maps. Im folgenden
      Beispiel heiratet das Brautpaar in Weidenbach und feiert im Anschluss in
      Wolframs-Eschenbach. Hier ergibt sich eine gesamte Fahrtstrecke von ca. 40
      km. Diesen Wert tragt ihr hier ein.
      <Image
        src={"/images/distance_calculation_1.png"}
        height={300}
        width={300}
        alt="Berechnung der Entfernung, Beispiel 1."
      />
      Falls eure Hochzeit an einem einzigen Ort stattfindet, nehmt ihr die
      kürzeste Entfernung an, in diesem Fall 12,9 km. Für die Hin- und Rückfahrt
      multipliziert ihr diesen Wert x2, daraus ergibt sich eine Gesamtstrecke
      von ca. 30 km. Diesen Wert tragt ihr hier ein.
      <Image
        src={"/images/distance_calculation_2.png"}
        height={300}
        width={300}
        alt="Berechnung der Entfernung, Beispiel 2."
      />
    </div>
  );
}
