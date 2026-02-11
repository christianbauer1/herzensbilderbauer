"use client";

import { Button } from "@/components/ui/button";
import { ARTICLES_PER_PAGE } from "@/lib/constants";
import type { BlogPostListItem } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PageinatedBlog({ posts }: { posts: BlogPostListItem[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = posts.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE,
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="mt-8 space-y-20 lg:mt-20 lg:space-y-20">
          {currentArticles.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="mt-24 flex items-center justify-between">
        <Button
          variant="secondary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={"disabled:opacity-50"}
        >
          Vorherige
        </Button>

        <span className="text-xs">
          Seite {currentPage} von {totalPages}
        </span>

        <Button
          variant="secondary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={"disabled:opacity-50"}
        >
          Nächste
        </Button>
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPostListItem }) {
  return (
    <article key={post.id}>
      <Link
        href={`/blog/${post.slug}`}
        className="relative isolate flex flex-col gap-8 lg:flex-row"
      >
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          <Image
            width={576}
            height={288}
            src={post.previewImageUrl || "/images/placeholder-blog-preview.jpg"}
            alt={`Vorschaubild für den Blogbeitrag "${post.title}"`}
            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
          />

          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div>
          <div className="flex items-center gap-x-4 text-xs">
            <time className="text-xs text-accent-foreground">
              {post.createdAt?.toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="group relative max-w-xl">
            <h3 className="mt-3 text-lg font-extrabold group-hover:text-primary">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
            <p className="mt-5 text-sm leading-6 text-gray-600">
              {post.description}
            </p>
          </div>
          <div className="mt-6 flex border-t border-gray-900/5 pt-6">
            <div className="relative flex items-center gap-x-4">
              <Image
                width={64}
                height={64}
                src="/images/avatarLarge.jpg"
                alt={post.creator || "Christian"}
                className="h-10 w-10 rounded-full bg-gray-50"
              />

              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <span className="absolute inset-0" />
                  {post.creator}
                </p>
                <p className="text-gray-600">Fotograf</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
