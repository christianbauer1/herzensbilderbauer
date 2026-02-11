"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckIcon, InformationCircleIcon } from "@/components/icons";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { checkIfIsMobileDevice } from "@/lib/utils";
import Voucher from "../voucher";
import Calculator from "../wedding-calculator";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export interface PricingProps {
  heading: Heading;
  priceTiers: PriceTier[];
  children?: React.ReactNode;
  voucherImage: string;
  shootingType: string;
  useWeddingCalculator?: boolean;
}

export default function Pricing({ pricing }: { pricing: PricingProps }) {
  const {
    heading,
    children,
    priceTiers,
    voucherImage,
    shootingType,
    useWeddingCalculator,
  } = pricing;
  return (
    <Section
      sectionClassName="bg-[#E6DDD6]"
      headline={{
        h2: heading.hTag,
        title: heading.title,
        description: heading.description,
      }}
    >
      {useWeddingCalculator ? (
        <Calculator />
      ) : (
        <>
          <PriceTiers priceTiers={priceTiers} />
          <Voucher imageUrl={voucherImage} shootingType={shootingType} />
        </>
      )}

      {children}
    </Section>
  );
}

export interface PriceTier {
  name: string;
  price: string;
  description: string;
  features: { listItemText: React.ReactNode; tooltipText: React.ReactNode }[];
  mostPopular: boolean;
}

function PriceTiers({ priceTiers }: { priceTiers: PriceTier[] }) {
  return (
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {priceTiers.map((tier) => (
        <PriceCard
          key={tier.name}
          description={tier.description}
          features={tier.features}
          mostPopular={tier.mostPopular}
          name={tier.name}
          price={tier.price}
        />
      ))}
    </div>
  );
}

interface PriceCardProps {
  name: string;
  price: string;
  description: string;
  mostPopular: boolean;
  features: { listItemText: string | any; tooltipText: string | any }[];
}

function PriceCard(props: PriceCardProps) {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>();

  useEffect(() => {
    setIsMobileDevice(checkIfIsMobileDevice());
  }, []);

  return (
    <div
      className={classNames(
        props.mostPopular ? "ring-4 ring-primary" : "ring-1 ring-gray-200",
        "flex flex-col gap-6 rounded-3xl bg-white p-8 xl:p-10",
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-x-4">
          <h3
            className={classNames(
              props.mostPopular && "text-[#b19a81]",
              "text-xl font-bold",
            )}
          >
            {props.name}
          </h3>
          {props.mostPopular ? (
            <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
              Beliebt
            </p>
          ) : null}
        </div>
      </div>

      <p className="text-sm leading-6 text-gray-600">{props.description}</p>

      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-4xl font-black tracking-tight">{props.price}</p>
          <p className="text-xs text-secondary-foreground">Brutto, inkl. USt</p>
        </div>
      </div>

      <Button asChild variant={props.mostPopular ? "default" : "outline"}>
        <Link href={"/termin-vereinbaren"}>Vorgespräch vereinbaren</Link>
      </Button>

      <ul role="list" className="space-y-3 text-sm xl:mt-10">
        {props.features.map((feature, idx) => (
          <li key={idx} className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-primary"
                aria-hidden="true"
              />

              {typeof feature.listItemText === "string" ? (
                <p>{feature.listItemText}</p>
              ) : (
                feature.listItemText
              )}
            </div>

            {isMobileDevice ? (
              <Popover>
                <PopoverTrigger asChild className="cursor-help">
                  <Button variant="link" className="p-0">
                    <InformationCircleIcon className="h-auto w-5 text-secondary-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 text-sm">
                  {typeof feature.tooltipText === "string" ? (
                    <p>{feature.tooltipText}</p>
                  ) : (
                    feature.tooltipText
                  )}
                </PopoverContent>
              </Popover>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild className="cursor-help">
                    <Button variant="link" className="p-0">
                      <InformationCircleIcon className="h-auto w-5 text-secondary-foreground" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="w-80 p-4 text-sm">
                    {typeof feature.tooltipText === "string" ? (
                      <p>{feature.tooltipText}</p>
                    ) : (
                      feature.tooltipText
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
