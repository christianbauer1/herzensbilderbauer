import Section from "@/components/section";
import { getAllPosts, toListItem } from "@/lib/blog";
import CtaPageEnd from "@/components/cta-page-end";
import PageinatedBlog from "./_components/paginated-blog";

export const metadata = {
  title: "Blog über Fotografie in Ansbach und Umgebung",
  description:
    "Erfahrt wie ihr euer Fotoshooting perfekt inszeniert. Meine Expertentipps für unvergessliche Fotos in Ansbach und Umgebung.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Blog() {
  const posts = await getAllPosts();
  const listItems = posts.map(toListItem);

  return (
    <main>
      <Section
        showColorBlurs={false}
        headline={{
          h2Ash1: true,
          h2: "Blog über Fotografie",
          title: "Die Fotografie ist meine Leidenschaft",
          description:
            "In meinem Blog teile ich meine Tipps und Erfahrungen für euer perfektes Fotoshooting in Ansbach und Umgebung.",
        }}
      >
        <PageinatedBlog posts={listItems} />
      </Section>
      <CtaPageEnd />
    </main>
  );
}
