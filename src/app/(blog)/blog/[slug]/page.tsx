import { getPost, getPosts, getBlogSlugsStatic } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog";
import { BASE_URL, SITE_TITLE } from "@/lib/constants";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getTextReadTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EnvelopeIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { antic } from "@/fonts";
import BlogpostCard from "@/components/blog-post-card";

export function generateStaticParams() {
  return getBlogSlugsStatic().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

function getBlogPostJsonLd(post: BlogPost) {
  const imageUrl = post.previewImageUrl
    ? post.previewImageUrl.startsWith("http")
      ? post.previewImageUrl
      : `${BASE_URL}${post.previewImageUrl.startsWith("/") ? "" : "/"}${post.previewImageUrl}`
    : undefined;
  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    ...(imageUrl && { image: imageUrl }),
    datePublished: post.createdAt.toISOString().split("T")[0],
    ...(post.updatedAt && {
      dateModified: post.updatedAt.toISOString().split("T")[0],
    }),
    author: {
      "@type": "Person" as const,
      name: post.creator,
    },
    publisher: {
      "@type": "Organization" as const,
      name: SITE_TITLE,
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage" as const,
      "@id": canonicalUrl,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  const jsonLd = getBlogPostJsonLd(post);

  return (
    <div className="mx-auto mb-32 mt-48 flex max-w-4xl flex-col break-words px-3">
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <BlogHeader post={post} />

      <ReactMarkdown
        components={{
          h2: (props) => (
            <h2
              className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
              {...props}
            />
          ),
          h4: (props) => (
            <h4
              className="scroll-m-20 text-xl font-semibold tracking-tight"
              {...props}
            />
          ),
          blockquote: (props) => (
            <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
          ),
          p: (props) => (
            <p className="leading-12 [&:not(:first-child)]:mt-6" {...props}></p>
          ),
        }}
      >
        {post.contentHtml}
      </ReactMarkdown>

      <TagsBottom post={post} />

      <Separator />

      <CreatorInfoBottom post={post} />

      <Separator />

      <ReadMore post={post} />
    </div>
  );
}

async function ReadMore({ post }: { post: BlogPost }) {
  let recommendedArticles: BlogPost[];
  if (!post.recommendedArticles?.length) {
    recommendedArticles = getPosts([
      "echte-hochzeitsgeschichten-inspirationen-und-tipps",
      "regen-am-hochzeitstag-tipps-fuer-perfekte-fotos",
      "gruppenfotos-bei-hochzeiten-tipps-zur-perfektion",
    ]);
  } else {
    recommendedArticles = getPosts(post.recommendedArticles);
  }

  return (
    <div className="py-20">
      <span
        className={`font-mono ${antic.variable} mt-10 scroll-m-20 pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0`}
      >
        Mehr lesen
      </span>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {recommendedArticles.map((p) => (
          <BlogpostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}

function CreatorInfoBottom({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col gap-4 py-20">
      <Image
        width={64}
        height={64}
        src="/images/avatarLarge.jpg"
        alt={post.creator || "Christian"}
        className="rounded-full bg-indigo-50 object-cover brightness-110"
      />

      <div className="flex flex-row items-start justify-between">
        <div>
          <span className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Geschrieben von {post.creator}
          </span>
          <p className="mt-3 text-base leading-7 text-secondary-foreground">
            Als leidenschaftlicher Fotograf fange ich die schönsten und
            emotionalsten Momente eures besonderen Tages mit Liebe und einem
            einfühlsamen Blick ein, um Erinnerungen zu schaffen, die für immer
            halten.
          </p>
        </div>

        <div className="flex flex-row items-center gap-3">
          <Button asChild>
            <Link href={"/termin-vereinbaren"}>
              <EnvelopeIcon className="w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function TagsBottom({ post }: { post: BlogPost }) {
  return (
    <div className="mb-32 mt-16 flex flex-wrap gap-3">
      {post.categories?.map((t, idx) => (
        <Link
          href={"/blog"}
          key={idx}
          className="inline-flex items-center rounded-full bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 hover:bg-gray-100"
        >
          {t}
        </Link>
      ))}
    </div>
  );
}

function CreatorInfo({ post }: { post: BlogPost }) {
  return (
    <div className="col-end-1 flex flex-row items-center gap-3">
      <Image
        width={64}
        height={64}
        src="/images/avatarLarge.jpg"
        alt={post.creator || "Christian"}
        className="rounded-full bg-indigo-50 object-cover brightness-110"
      />

      <div className="flex flex-col">
        <div className="-mb-1 flex flex-row">
          <span>
            {post.creator} ·{" "}
            <Link href="/termin-vereinbaren" className="font-bold text-primary">
              Kontakt
            </Link>
          </span>
        </div>
        <div className="flex flex-row text-base text-slate-400">
          {getTextReadTime(post.contentHtml)} min Lesezeit ·{" "}
          {post.createdAt?.toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}

function BlogHeader({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col gap-8">
      <h1
        className={`font-mono ${antic.variable} scroll-m-20 text-5xl md:text-6xl`}
      >
        {post.title}
      </h1>

      <CreatorInfo post={post} />

      {post.previewImageUrl && (
        <div className="relative w-full">
          <Image
            width={576}
            height={288}
            src={post.previewImageUrl || "/images/placeholder-blog-preview.jpg"}
            alt={`Vorschaubild für den Blogbeitrag "${post.title}"`}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
        </div>
      )}
    </div>
  );
}
