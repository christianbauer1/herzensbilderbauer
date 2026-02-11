"use client";

import { ChevronRight, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@//components/ui/dialog";
import { PHONE_NUMBER, PHONE_NUMBER_WRITTEN } from "@/lib/constants";

export default function AskForPrintMedia({
  daysLeftForOffer,
}: {
  daysLeftForOffer: number;
}) {
  const discount = daysLeftForOffer <= 0 ? "10%" : "25%";

  const event = ({ action, category, label, value }: any) => {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  const askForPrintMedia = () => {
    event({
      action: "asked_for_ordering_print_media",
      category: "ecommerce",
      label: "User asked for print media",
      value: "print_media",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col items-center justify-center gap-8 self-center px-4 py-12 text-center">
          <div>
            <p className="text-6xl font-black">Spare {discount}</p>
          </div>

          <p>Auf alle Fotoprodukte in Profi-Qualität</p>

          {daysLeftForOffer > 0 ? (
            <div
              onClick={askForPrintMedia}
              className="flex cursor-pointer flex-row items-center rounded-full bg-white px-4 py-2 text-sm font-bold"
            >
              Nur noch für {daysLeftForOffer} Tage{" "}
              <ChevronRight className="ml-2 h-4" />
            </div>
          ) : (
            <div
              onClick={askForPrintMedia}
              className="flex cursor-pointer flex-row items-center rounded-full bg-white px-4 py-2 text-sm font-bold"
            >
              Zum Angebot
              <ChevronRight className="ml-2 h-4" />
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="rounded-2xl bg-white p-6 sm:max-w-[500px]">
        <DialogHeader className="mb-8">
          {daysLeftForOffer > 0 && (
            <div className="mb-5 self-start rounded-full bg-primary px-4 py-2 text-xs font-bold">
              Rabatt nur noch für {daysLeftForOffer} Tage gültig
            </div>
          )}

          <DialogTitle>Fotoprodukte in Profi-Qualität bestellen</DialogTitle>
          <DialogDescription>
            Damit ihr die wundervollen Herzens-Momente nie mehr vergesst. Nur
            für kurze Zeit könnt ihr {discount} sparen.{" "}
            <span className="font-bold">Sichert euch jetzt den Rabatt!</span>{" "}
            Nehmt gern Kontakt zu uns auf um unverbindlich mehr zu erfahren.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-8 text-sm">
          <div className="flex flex-row items-center gap-3">
            <MailIcon className="text-primary" />
            <p className="text-accent-foreground">
              <Link href={"mailto:hey@herzensbilderbauer.de"}>
                hey@herzensbilderbauer.de
              </Link>
            </p>
          </div>

          <div className="flex flex-row items-center gap-3">
            <PhoneIcon className="text-primary" />
            <p className="text-accent-foreground">
              <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_WRITTEN}</Link>
            </p>
          </div>
        </div>

        <DialogFooter className="mt-8">
          <Button asChild>
            <Link href={`tel:${PHONE_NUMBER}`}>Jetzt anrufen</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
