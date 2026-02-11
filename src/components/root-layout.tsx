import "@/styles/globals.css";

import Script from "next/script";
import CookieConsent from "./cookie-consent";
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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MRSMZTHH39`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MRSMZTHH39', {
              page_path: window.location.pathname,
              });
          `}
      </Script>

      <body
        className={`font-sans text-lg leading-8 tracking-tight text-neutral-700 ${montserrat.variable}`}
      >
        {children}
        <CookieConsent />

        <Footer />
      </body>
    </html>
  );
}
