import "server-only";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

/**
 * Blog post shape used across the app (matches former Prisma Post).
 * Content is read from markdown files in content/blog at build time.
 */
export type BlogPost = {
  id: number;
  /** URL slug (from frontmatter or filename). */
  slug: string;
  /** Filename without .md – used to resolve [slug] from generateStaticParams. */
  fileSlug: string;
  title: string;
  description: string;
  creator: string;
  contentHtml: string;
  previewImageUrl: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  categories: string[];
  recommendedArticles: string[];
};

/** Minimal fields for list/card views – avoids serializing full content into the blog index page. */
export type BlogPostListItem = Pick<
  BlogPost,
  "id" | "slug" | "title" | "description" | "creator" | "previewImageUrl" | "createdAt"
>;

/** Content directory for blog markdown (works in Next 14 static export). */
function getBlogDir(): string {
  return join(process.cwd(), "content", "blog");
}

function parseFrontmatter(raw: string): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  const lines = raw.trim().split("\n");
  for (const line of lines) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    let value: unknown = line.slice(colon + 1).trim();
    if (typeof value === "string" && value === "null") {
      out[key] = null;
      continue;
    }
    if (typeof value === "string" && (value.startsWith("[") || value.startsWith("{"))) {
      try {
        value = JSON.parse(value);
      } catch {
        // keep as string
      }
    }
    out[key] = value;
  }
  return out;
}

const FM_DELIM = "\n---\n";
const FM_START = "---\n";

function parseMarkdownFile(filePath: string, slug: string, index: number): BlogPost {
  const raw = readFileSync(filePath, "utf8");
  // Frontmatter can start at file start (---\n) or after a newline (\n---\n)
  const firstEnd = raw.startsWith(FM_START)
    ? FM_START.length
    : raw.indexOf(FM_DELIM) === -1
      ? -1
      : raw.indexOf(FM_DELIM) + FM_DELIM.length;
  if (firstEnd === -1) {
    throw new Error(`Invalid blog file (no frontmatter): ${filePath}`);
  }
  const second = raw.indexOf(FM_DELIM, firstEnd);
  if (second === -1) {
    throw new Error(`Invalid blog file (no closing frontmatter): ${filePath}`);
  }
  const frontRaw = raw.slice(firstEnd, second);
  const contentHtml = raw.slice(second + FM_DELIM.length).trim();
  const front = parseFrontmatter(frontRaw);
  const createdAt = front.createdAt as string;
  const updatedAt = front.updatedAt as string | null;

  return {
    id: index,
    fileSlug: slug,
    slug: (front.slug as string) ?? slug,
    title: (front.title as string) ?? "",
    description: (front.description as string) ?? "",
    creator: (front.creator as string) ?? "Christian",
    contentHtml,
    previewImageUrl: (front.previewImageUrl as string) || null,
    createdAt: createdAt ? new Date(createdAt) : new Date(0),
    updatedAt: updatedAt ? new Date(updatedAt) : null,
    categories: Array.isArray(front.categories) ? (front.categories as string[]) : [],
    recommendedArticles: Array.isArray(front.recommendedArticles)
      ? (front.recommendedArticles as string[])
      : [],
  };
}

function getBlogSlugs(): string[] {
  try {
    const files = readdirSync(getBlogDir(), { withFileTypes: true });
    return files
      .filter((f) => f.isFile() && f.name.endsWith(".md"))
      .map((f) => f.name.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

let cachedPosts: BlogPost[] | null = null;

function loadAllPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;
  const slugs = getBlogSlugs();
  const dir = getBlogDir();
  const posts: BlogPost[] = slugs.map((slug, index) => {
    const filePath = join(dir, `${slug}.md`);
    return parseMarkdownFile(filePath, slug, index + 1);
  });
  posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  cachedPosts = posts;
  return posts;
}

export function getAllPosts(): BlogPost[] {
  return loadAllPosts();
}

export function getPost(slug: string): BlogPost {
  const posts = loadAllPosts();
  const post = posts.find((p) => p.slug === slug || p.fileSlug === slug);
  if (!post) throw new Error("Post not found!");
  return post;
}

export function getPosts(slugs: string[]): BlogPost[] {
  const posts = loadAllPosts();
  return slugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p != null);
}

export function getRandomPosts(count = 3): BlogPost[] {
  const posts = loadAllPosts();
  const shuffled = [...posts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getRandomPostListItems(count = 3): BlogPostListItem[] {
  return getRandomPosts(count).map(toListItem);
}

export function toListItem(p: BlogPost): BlogPostListItem {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    creator: p.creator,
    previewImageUrl: p.previewImageUrl,
    createdAt: p.createdAt,
  };
}

export function getBlogSlugsStatic(): string[] {
  return getBlogSlugs();
}
