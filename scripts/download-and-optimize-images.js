#!/usr/bin/env node
/**
 * One-time script:
 * 1. Collect remote image URLs from src/lib/constants.ts (imgUrl) and content/blog/*.md (previewImageUrl)
 * 2. Download each, optimize with sharp (1600px long edge, 80% quality), save to public/images/optimized/
 * 3. Optimize existing images in public/ the same way
 * 4. Replace remote URLs in constants.ts and blog markdown with local paths
 *
 * Run: node scripts/download-and-optimize-images.js
 */

import fs from "fs";
import path from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const MAX_LONG_EDGE = 1600;
const JPEG_QUALITY = 80;

const OPTIMIZED_DIR = path.join(ROOT, "public", "images", "optimized");

function isImageUrl(url) {
  if (!url || typeof url !== "string") return false;
  const u = url.split("?")[0].toLowerCase();
  return /\.(jpg|jpeg|png|webp|gif)$/i.test(u) || /firebasestorage\.googleapis\.com.*\.jpg|utfs\.io.*\.jpg/i.test(url);
}

function getExtension(url) {
  const match = url.match(/\.(jpe?g|png|webp|gif)/i);
  return match ? (match[1].toLowerCase() === "jpeg" ? "jpg" : match[1].toLowerCase()) : "jpg";
}

function urlToFilename(url) {
  const ext = getExtension(url);
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 12);
  return `${hash}.${ext}`;
}

async function download(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function optimizeBuffer(buffer, ext) {
  let pipeline = sharp(buffer);
  const meta = await pipeline.metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (w > MAX_LONG_EDGE || h > MAX_LONG_EDGE) {
    pipeline = pipeline.resize(MAX_LONG_EDGE, MAX_LONG_EDGE, { fit: "inside", withoutEnlargement: true });
  }
  if (ext === "png") {
    return pipeline.png({ compressionLevel: 9 }).toBuffer();
  }
  if (ext === "webp") {
    return pipeline.webp({ quality: JPEG_QUALITY }).toBuffer();
  }
  return pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
}

async function downloadAndOptimize(url) {
  const ext = getExtension(url);
  const outExt = ext === "png" || ext === "webp" ? ext : "jpg";
  const filename = urlToFilename(url);
  const base = path.basename(filename, path.extname(filename));
  const outFilename = `${base}.${outExt}`;
  const outPath = path.join(OPTIMIZED_DIR, outFilename);
  const publicPath = `/images/optimized/${outFilename}`;
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
  if (fs.existsSync(outPath)) return publicPath;
  const buffer = await download(url);
  const optimized = await optimizeBuffer(buffer, outExt);
  fs.writeFileSync(outPath, optimized);
  return publicPath;
}

function extractUrlsFromConstants(content) {
  const urls = [];
  // Multi-line imgUrl: \n      "https://..."
  const re = /imgUrl:\s*\n\s*["']?(https:\/\/[^"']+)["']?/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    if (isImageUrl(m[1])) urls.push(m[1]);
  }
  return urls;
}

function extractPreviewUrlsFromBlog(dir) {
  const urls = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) continue;
    if (!f.name.endsWith(".md")) continue;
    const content = fs.readFileSync(full, "utf8");
    const match = content.match(/previewImageUrl:\s*(.+)/);
    if (match) {
      const val = match[1].trim();
      const url = val.startsWith("http") ? val.replace(/["'\s].*$/, "").replace(/^["']|["']$/g, "") : null;
      if (url && isImageUrl(url)) urls.push({ file: full, url });
    }
  }
  return urls;
}

async function optimizeExistingImage(filePath) {
  const ext = path.extname(filePath).toLowerCase().slice(1);
  if (!["jpg", "jpeg", "png", "webp"].includes(ext)) return;
  const buffer = fs.readFileSync(filePath);
  const outExt = ext === "jpeg" ? "jpg" : ext;
  const optimized = await optimizeBuffer(buffer, outExt);
  fs.writeFileSync(filePath, optimized);
}

async function walkAndOptimize(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (path.basename(full) === "optimized") continue;
      await walkAndOptimize(full);
      continue;
    }
    const ext = path.extname(e.name).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
      try {
        await optimizeExistingImage(full);
        console.log("  Optimized:", path.relative(ROOT, full));
      } catch (err) {
        console.warn("  Skip:", full, err.message);
      }
    }
  }
}

async function main() {
  console.log("1) Collecting remote image URLs...");
  const constantsPath = path.join(ROOT, "src", "lib", "constants.ts");
  const constantsContent = fs.readFileSync(constantsPath, "utf8");
  const reviewUrls = [...new Set(extractUrlsFromConstants(constantsContent))];
  console.log("   Review images (constants):", reviewUrls.length);

  const blogDir = path.join(ROOT, "content", "blog");
  const blogEntries = extractPreviewUrlsFromBlog(blogDir);
  const blogUrls = [...new Set(blogEntries.map((e) => e.url))];
  console.log("   Blog preview images:", blogUrls.length);

  const allRemote = [...new Set([...reviewUrls, ...blogUrls])];
  console.log("   Unique remote URLs:", allRemote.length);

  console.log("\n2) Downloading and optimizing remote images...");
  const urlToLocal = {};
  for (const url of allRemote) {
    try {
      const local = await downloadAndOptimize(url);
      urlToLocal[url] = local;
      console.log("   ", url.slice(0, 60) + "... ->", local);
    } catch (err) {
      console.error("   Failed:", url, err.message);
    }
  }

  console.log("\n3) Optimizing existing images in public/...");
  await walkAndOptimize(path.join(ROOT, "public"));

  console.log("\n4) Replacing URLs in constants.ts...");
  let newConstants = constantsContent;
  for (const [url, local] of Object.entries(urlToLocal)) {
    const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    newConstants = newConstants.replace(new RegExp(escaped, "g"), local);
  }
  fs.writeFileSync(constantsPath, newConstants);

  console.log("5) Replacing previewImageUrl in blog markdown...");
  for (const { file, url } of blogEntries) {
    const local = urlToLocal[url];
    if (!local) continue;
    let content = fs.readFileSync(file, "utf8");
    const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    content = content.replace(new RegExp(escaped, "g"), local);
    fs.writeFileSync(file, content);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
