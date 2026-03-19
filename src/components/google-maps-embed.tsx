"use client";

import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "cookieConsent";
const CONSENT_ACCEPTED_VALUE = "accepted";

function hasGoogleMapsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === CONSENT_ACCEPTED_VALUE;
  } catch {
    return false;
  }
}

export default function GoogleMapsEmbed() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () => setEnabled(hasGoogleMapsConsent());
    update();

    window.addEventListener("cookie-consent-changed", update);
    return () => window.removeEventListener("cookie-consent-changed", update);
  }, []);

  if (!enabled) return null;

  return (
    <iframe
      className="h-64 w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.033830972777!2d10.608484177072077!3d49.261145372278165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798b976d1f1b993%3A0xdd274c0d711fad0e!2sHerzensbilder%20Bauer!5e1!3m2!1sde!2sde!4v1731936603895!5m2!1sde!2sde"
      width="600"
      height="450"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

