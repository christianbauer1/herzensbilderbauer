"use client";

import { TRAVEL_HOURLY_RATE } from "@/lib/constants";
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import {
  calculateTotalCost,
  getDiscountedRate,
  getFreeDistance,
} from "./utils";
import { InputSection, PricingOverview } from "./components";

// Main Component
const Calculator: React.FC = () => {
  const [hours, setHours] = useState<number>(2);
  const [distance, setDistance] = useState<number>(20);
  const [badWeatherCoverage, setBadWeatherCoverage] = useState<boolean>(false);

  const baseRate = TRAVEL_HOURLY_RATE;
  const travelCostPerKm = 0.6;
  const travelTimeRate = 99;
  const travelSpeed = 60; // Assume a speed of 60 km/h

  const totalCost = calculateTotalCost({
    hours,
    baseRate,
    distance,
    travelCostPerKm,
    travelTimeRate,
    travelSpeed,
    badWeatherCoverage,
  });

  const discount = (
    ((baseRate - getDiscountedRate(hours, baseRate)) /
      getDiscountedRate(hours, baseRate)) *
    100
  ).toFixed(0);

  const freeDistance = getFreeDistance(hours);

  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-background px-8 pb-14 pt-8 md:flex-row">
      <InputSection
        hours={hours}
        distance={distance}
        badWeatherCoverage={badWeatherCoverage}
        setHours={setHours}
        setDistance={setDistance}
        setBadWeatherCoverage={setBadWeatherCoverage}
      />
      <div>
        <Separator orientation="vertical" />
      </div>
      <Separator className="md:hidden" />
      <PricingOverview
        discount={discount}
        freeDistance={freeDistance}
        totalCost={totalCost.toFixed(0)}
        badWeatherCoverage={badWeatherCoverage}
        className="order-1 flex w-full flex-col gap-8 text-gray-500 md:w-1/3"
      />
    </div>
  );
};

export default Calculator;
