#!/usr/bin/env node
/**
 * Find all image paths referenced in the project and delete from public/images
 * any file that is never referenced. Keeps favicon, videos, and non-image assets.
 * Run: node scripts/remove-unused-images.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const IMAGES_DIR = path.join(PUBLIC, "images");

function* walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walkDir(full);
    } else {
      yield path.relative(PUBLIC, full);
    }
  }
}

function extractImagePaths(content) {
  const paths = new Set();
  const quoted = /["'`](\/images\/[^"'`\s]+)["'`]/g;
  let m;
  while ((m = quoted.exec(content)) !== null) paths.add(m[1].replace(/^\//, ""));
  const unquoted = /(?:^|[\s:])(\/images\/[a-zA-Z0-9/_.-]+\.(?:jpg|jpeg|png|webp|gif|svg))/gm;
  while ((m = unquoted.exec(content)) !== null) paths.add(m[1].replace(/^\//, ""));
  return paths;
}

function main() {
  const used = new Set();

  const dirs = [
    path.join(ROOT, "src"),
    path.join(ROOT, "content"),
  ];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const walk = (d) => {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const e of entries) {
        const full = path.join(d, e.name);
        if (e.isDirectory() && e.name !== "node_modules") walk(full);
        else if (/\.(tsx?|jsx?|md|mdx|css)$/.test(e.name)) {
          const content = fs.readFileSync(full, "utf8");
          for (const p of extractImagePaths(content)) used.add(p);
        }
      }
    };
    walk(dir);
  }

  const dynamicPaths = [
    "images/main-portfolio/1.jpg",
    "images/main-portfolio/7.jpg",
    "images/main-portfolio/6.jpg",
    "images/main-portfolio/4.jpg",
    "images/offers/hochzeitsreportage.jpeg",
    "images/offers/boho-fotostudio.jpeg",
    "images/offers/babyfotografie.jpeg",
    "images/offers/babybauchfotos.jpeg",
    "images/offers/taufe-und-kommunion.jpeg",
    "images/offers/familien-und-paare.jpeg",
    "images/offers/paarshooting.jpeg",
  ];
  dynamicPaths.forEach((p) => used.add(p));

  const allImageFiles = [...walkDir(IMAGES_DIR)].filter(
    (rel) => !rel.includes("optimized") || rel.startsWith("images/optimized/")
  );

  const toDelete = [];
  for (const rel of allImageFiles) {
    const normalized = rel.replace(/\\/g, "/");
    if (used.has(normalized)) continue;
    if (normalized.startsWith("images/optimized/")) continue;
    toDelete.push(path.join(PUBLIC, rel));
  }

  for (const file of toDelete) {
    console.log("Delete:", path.relative(ROOT, file));
    fs.unlinkSync(file);
  }

  const emptyDirs = [];
  const checkEmpty = (dir) => {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir);
    if (entries.length === 0) {
      emptyDirs.push(dir);
      return;
    }
    for (const e of entries) {
      const full = path.join(dir, e);
      if (fs.statSync(full).isDirectory()) checkEmpty(full);
    }
  };
  checkEmpty(IMAGES_DIR);
  for (const dir of emptyDirs.reverse()) {
    try {
      fs.rmdirSync(dir);
      console.log("Rmdir:", path.relative(ROOT, dir));
    } catch (_) {}
  }

  console.log("Removed", toDelete.length, "unused image(s).");
}

main();
