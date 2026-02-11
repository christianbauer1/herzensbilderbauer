import { PRICE_BAD_WEATHER_COVERAGE } from "@/lib/constants";

export const getDiscountedRate = (hours: number, baseRate: number): number => {
  if (hours >= 10) return baseRate * 1;
  if (hours >= 8) return baseRate * 1;
  if (hours >= 6) return baseRate * 1;
  return baseRate;
};

export const getFreeDistance = (hours: number): number =>
  Math.min(Math.floor(hours / 2) * 20, 100);

export const calculateTravelCost = (
  distance: number,
  freeDistance: number,
  travelCostPerKm: number,
): number => {
  const extraDistance = Math.max(0, distance - freeDistance);
  return extraDistance * travelCostPerKm;
};

export const calculateTravelTime = (
  distance: number,
  freeDistance: number,
  travelSpeed: number,
): number => {
  const extraDistance = Math.max(0, distance - freeDistance);
  return extraDistance / travelSpeed;
};

interface CalculateTotalCostParams {
  hours: number;
  baseRate: number;
  distance: number;
  travelCostPerKm: number;
  travelTimeRate: number;
  travelSpeed: number;
  badWeatherCoverage: boolean;
}

export const calculateTotalCost = ({
  hours,
  baseRate,
  distance,
  travelCostPerKm,
  travelTimeRate,
  travelSpeed,
  badWeatherCoverage,
}: CalculateTotalCostParams): number => {
  const discountedRate = getDiscountedRate(hours, baseRate);
  const baseCost = discountedRate * hours;
  const freeDistance = getFreeDistance(hours);
  const travelCost = calculateTravelCost(
    distance,
    freeDistance,
    travelCostPerKm,
  );
  const travelTime = calculateTravelTime(distance, freeDistance, travelSpeed);
  let travelTimeCost = travelTimeRate * travelTime;

  travelTimeCost += distance > 400 ? 200 : 0; // Für eine Entfernung > 400 km ca. 4h Fahrt würde ich Zuschlag für Hotel rechnen

  let total = baseCost + travelCost + travelTimeCost;

  total += badWeatherCoverage ? PRICE_BAD_WEATHER_COVERAGE : 0;

  return total;
};

interface EstimateHoursParams {
  guests: number;

  churchWedding: boolean;
  civilWedding: boolean;

  coupleShooting: boolean;
  groupPhotos: boolean;
  firstLook: boolean;
  gettingReady: boolean;
  weddingDance: boolean;
}

export function estimateHours({
  coupleShooting,
  churchWedding,
  civilWedding,
  groupPhotos,
  guests,
  firstLook,
  gettingReady,
  weddingDance,
}: EstimateHoursParams) {
  const weights = {
    coupleShooting: 1,
    churchWedding: 2.5,
    civilWedding: 0.5,
    groupPhotos: 0.5,

    firstLook: 0.5,
    gettingReady: 1,
    weddingDance: 0.5,

    guests: 0.005, // Additional hours per guest
    locations: 0.5, // Additional hours per location switch
    baseBufferTime: 0.5, // Optimal base buffer time
    bufferPerGuest: 0.005, // Optimal buffer time per guest
  };

  let totalHours = 0;
  if (coupleShooting) totalHours += weights.coupleShooting;
  if (churchWedding) totalHours += weights.churchWedding;
  if (civilWedding) totalHours += weights.civilWedding;
  if (groupPhotos) totalHours += weights.groupPhotos;

  if (firstLook) totalHours += weights.firstLook;
  if (gettingReady) totalHours += weights.gettingReady;
  if (weddingDance) totalHours += weights.weddingDance;

  let locationChanges =
    civilWedding && churchWedding ? 3 : civilWedding || churchWedding ? 2 : 1;

  totalHours += guests * weights.guests;
  totalHours += (locationChanges - 1) * weights.locations;

  const bufferTime = weights.baseBufferTime + guests * weights.bufferPerGuest;
  totalHours += bufferTime;

  return convertToHoursAndMinutes(totalHours);
}

function roundToNearestFive(value: number) {
  return Math.round(value * 2) / 2;
}

function convertToHoursAndMinutes(value: number) {
  const roundedValue = roundToNearestFive(value);
  const hours = Math.floor(roundedValue);
  const minutes = (roundedValue - hours) * 60;

  if (minutes === 0) {
    return `${hours} Stunden`;
  } else {
    return `${hours} Stunden ${minutes} Minuten`;
  }
}
