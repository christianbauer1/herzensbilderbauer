import { BASE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap() {
  const posts = await getAllPosts();

  const post = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.createdAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/angebote`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/angebote/hochzeitsreportage`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/angebote/boho-fotostudio`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/angebote/babyfotografie`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/angebote/babybauchfotos`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/angebote/taufe-und-kommunion`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/angebote/familien-und-paare`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ueber-mich`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "yearly",
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/termin-vereinbaren`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "yearly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/gutschein-bestellen`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/fotos-erhalten`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: new Date("2024-11-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...post,
  ];
}
