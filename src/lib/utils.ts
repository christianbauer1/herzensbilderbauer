import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "@/env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**Only runs on client! "use client" before */
export function checkIfIsMobileDevice() {
  const userAgent =
    typeof window.navigator === "undefined" ? "" : navigator.userAgent;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  );
}

function getNumberOfWords(text: string) {
  text = text.trim();

  let words = text.split(/\s+/);

  return words.length;
}

export function getTextReadTime(text: string) {
  const wordCount = getNumberOfWords(text);

  const wordsPerMinute = 275;

  let readTime = Math.ceil(wordCount / wordsPerMinute);

  return readTime;
}

export function getDaysLeftForOffer(originalDate: Date, duration: number = 7) {
  originalDate.setDate(originalDate.getDate() + duration);

  let today = new Date();

  let daysLeft = Math.ceil(
    (originalDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  return daysLeft;
}
