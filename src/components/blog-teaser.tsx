import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getRandomPostListItems } from "@/lib/blog";
import BlogpostCard from "@/components/blog-post-card";

export default async function BlogTeaser() {
  const latestPosts = await getRandomPostListItems();

  return (
    <Section
      sectionClassName="bg-[#E6DDD6]"
      headline={{
        h2: "Mein Blog über die Fotografie & Videografie",
        title: "Die Fotografie & Videografie ist meine Leidenschaft",
        description:
          "In meinem Blog teile ich meine Tipps und Erfahrungen für euer perfektes Fotoshooting oder Videoshooting in Ansbach und Umgebung.",
      }}
    >
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {latestPosts.map((post) => (
          <BlogpostCard key={post.id} post={post} />
        ))}
      </div>
      <Button variant={"outline"} asChild className={`self-center`}>
        <Link href="/blog">Alle Tipps im Blog durchstöbern</Link>
      </Button>
    </Section>
  );
}
