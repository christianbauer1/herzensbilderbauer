"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_STORAGE_KEY = "cookieConsent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const cookieConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!cookieConsent) {
        setShow(true);
      }
    } catch {
      // Wenn localStorage nicht verfügbar ist, Banner trotzdem anzeigen
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");
    } catch {
      // ignore write errors
    }
    window.dispatchEvent(new Event("cookie-consent-changed"));
    setShow(false);
  };

  const declineCookies = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "declined");
    } catch {
      // ignore write errors
    }
    window.dispatchEvent(new Event("cookie-consent-changed"));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-4 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
      <p className="max-w-6xl text-sm leading-6">
        Hilf uns, unsere Website zu verbessern. Wir verwenden dafür optionale{" "}
        <span className="font-semibold">Google-Dienste</span> (z. B. Google
        Analytics und Google Maps). Diese werden{" "}
        <span className="font-semibold">nur geladen, wenn du ausdrücklich
          zustimmst</span>
        . Weitere Infos findest du in unserer{" "}
        <Link
          href="/datenschutz"
          className="underline underline-offset-2 hover:text-black"
        >
          Datenschutzerklärung
        </Link>
        .
      </p>

      <div className="flex flex-row gap-3">
        <Button variant={"ghost"} onClick={declineCookies}>
          Ablehnen
        </Button>
        <Button onClick={acceptCookies}>Alle akzeptieren</Button>
      </div>
    </div>
  );
}
