"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-4 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
      <p className="max-w-6xl text-sm leading-6">
        Diese Website verwendet{" "}
        <span className="font-extrabold">Cookies von Google</span>, um ihre
        Dienste bereitzustellen und Zugriffe zu analysieren. Informationen
        darüber, wie Sie die Website verwenden, werden an Google weitergegeben.
        Durch die Nutzung dieser Website erklärst du dich damit einverstanden,
        dass auf der Website Cookies verwendet werden.
      </p>

      <div className="flex flex-row gap-3">
        <Button variant={"ghost"} asChild>
          <Link
            href="https://policies.google.com/technologies/cookies"
            target="_blank"
          >
            Mehr Informationen
          </Link>
        </Button>
        <Button variant={"outline"} onClick={acceptCookies}>
          Alles klar!
        </Button>
      </div>
    </div>
  );
}
