import { Montserrat, Antic_Didone } from "next/font/google";

export const antic = Antic_Didone({
  weight: "400",
  variable: "--font-antic",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
