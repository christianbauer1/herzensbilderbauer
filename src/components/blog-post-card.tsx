import type { BlogPostListItem } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogpostCard({ post }: { post: BlogPostListItem }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        key={post.id}
        className="flex flex-col items-start justify-between"
      >
        <div className="relative w-full">
          <Image
            width={576}
            height={288}
            src={post.previewImageUrl || "/images/placeholder-blog-preview.jpg"}
            alt={`Vorschaubild für den Blogbeitrag "${post.title}"`}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time className="text-accent-foreground text-xs">
              {post.createdAt?.toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="group relative">
            <h3 className="group-hover:text-primary mt-3 font-extrabold">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
            <p className="text-secondary-foreground mt-5 line-clamp-3 text-sm leading-6">
              {post.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
