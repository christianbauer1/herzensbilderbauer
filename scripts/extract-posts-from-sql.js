/**
 * Extracts Post rows from blog_export.sql and writes one markdown file per post.
 * Run from project root: node scripts/extract-posts-from-sql.js
 *
 * PostgreSQL COPY format: tab-separated columns, \n and \t in content are escaped.
 * Columns: id, slug, title, description, creator, contentHtml, previewImageUrl, createdAt, updatedAt, categories, recommendedArticles
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const projectRoot = join(__dirname, "..");
const sqlPath = join(projectRoot, "blog_export.sql");
const outDir = join(projectRoot, "content", "blog");

function unescapeCopy(s) {
  if (s == null || s === "\\N") return null;
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\\\/g, "\\");
}

function parsePgArray(s) {
  if (s == null || s === "\\N" || s === "{}") return [];
  const inner = s.slice(1, -1);
  if (!inner) return [];
  return inner.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
}

const sql = readFileSync(sqlPath, "utf8");
const lines = sql.split(/\r?\n/);

let inPostBlock = false;
const posts = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('COPY public."Post"')) {
    inPostBlock = true;
    continue;
  }
  if (inPostBlock && line === "\\.\r") {
    break;
  }
  if (inPostBlock && line === "\\.") {
    break;
  }
  if (!inPostBlock || !line) continue;

  const parts = line.split("\t");
  if (parts.length < 11) continue;

  const [
    id,
    slug,
    title,
    description,
    creator,
    contentHtml,
    previewImageUrl,
    createdAt,
    updatedAt,
    categoriesRaw,
    recommendedArticlesRaw,
  ] = parts;

  const content = unescapeCopy(contentHtml);
  const categories = parsePgArray(unescapeCopy(categoriesRaw) ?? categoriesRaw);
  const recommendedArticles = parsePgArray(
    unescapeCopy(recommendedArticlesRaw) ?? recommendedArticlesRaw
  );

  posts.push({
    id: parseInt(id, 10),
    slug: slug?.trim() ?? "",
    title: (unescapeCopy(title) ?? title)?.trim() ?? "",
    description: (unescapeCopy(description) ?? description)?.trim() ?? "",
    creator: (unescapeCopy(creator) ?? creator)?.trim() ?? "Christian",
    content: content ?? "",
    previewImageUrl: unescapeCopy(previewImageUrl) || null,
    createdAt: unescapeCopy(createdAt) ?? createdAt,
    updatedAt: unescapeCopy(updatedAt) || null,
    categories: Array.isArray(categories) ? categories : [],
    recommendedArticles: Array.isArray(recommendedArticles)
      ? recommendedArticles
      : [],
  });
}

mkdirSync(outDir, { recursive: true });

for (const post of posts) {
  const frontmatter = {
    slug: post.slug,
    title: post.title,
    description: post.description,
    creator: post.creator,
    previewImageUrl: post.previewImageUrl,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    categories: post.categories,
    recommendedArticles: post.recommendedArticles,
  };

  const fmLines = [
    "---",
    ...Object.entries(frontmatter).map(([k, v]) => {
      if (v == null) return `${k}: null`;
      if (Array.isArray(v)) return `${k}: ${JSON.stringify(v)}`;
      if (typeof v === "string" && (v.includes("\n") || v.includes('"')))
        return `${k}: ${JSON.stringify(v)}`;
      return `${k}: ${v}`;
    }),
    "---",
    "",
  ];

  const body = post.content;
  const md = fmLines.join("\n") + body;

  const filePath = join(outDir, `${post.slug}.md`);
  writeFileSync(filePath, md, "utf8");
  console.log("Wrote", filePath);
}

console.log("Done. Extracted", posts.length, "posts to", outDir);
