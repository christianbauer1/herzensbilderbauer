import "@/styles/globals.css";

import CookieConsent from "./cookie-consent";
import Analytics from "./analytics";
import { montserrat } from "@/fonts";
import Footer from "./footer";
import Banner from "./banner";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans text-lg leading-8 tracking-tight text-neutral-700 ${montserrat.variable}`}
      >
        {/* Nur laden, wenn Nutzer Statistik-Cookies akzeptiert hat */}
        <Analytics />

        {children}
        <CookieConsent />

        <Footer />
      </body>
    </html>
  );
}
