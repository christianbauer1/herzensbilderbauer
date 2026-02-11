import { BASE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/private/",
          "/bildergalerie",
          "/bildergalerie/*",
          "/bildergalerie-freischalten",
          "/bildergalerie-freischalten*",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
