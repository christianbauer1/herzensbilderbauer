#!/usr/bin/env node
/**
 * Download remote videos (Firebase) to public/videos/ and replace URLs in code.
 * Run: node scripts/download-videos.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const VIDEOS_DIR = path.join(ROOT, "public", "videos");

const VIDEO_URLS = [
  "https://firebasestorage.googleapis.com/v0/b/herzensbilderbauer-b0e58.appspot.com/o/mona.mp4?alt=media&token=8dabdb34-b273-4458-9556-b91b4d850e9f",
  "https://firebasestorage.googleapis.com/v0/b/herzensbilderbauer-b0e58.appspot.com/o/berkan.mp4?alt=media&token=c9e25d28-af9f-4a50-8aa1-7f99164e1ad2",
  "https://firebasestorage.googleapis.com/v0/b/herzensbilderbauer-b0e58.appspot.com/o/waldemar.mp4?alt=media&token=80bcd623-5d66-437e-9555-2f83d2213016",
  "https://firebasestorage.googleapis.com/v0/b/herzensbilderbauer-b0e58.appspot.com/o/tobias.mp4?alt=media&token=c0fe3c2d-1a4b-4f97-9c1e-fb837d71afc4",
  "https://firebasestorage.googleapis.com/v0/b/herzensbilderbauer-b0e58.appspot.com/o/annika.mp4?alt=media&token=7735ca3d-7c06-471c-bfb8-fa20adb9a6bb",
  "https://firebasestorage.googleapis.com/v0/b/herzensbilderbauer-b0e58.appspot.com/o/markus.mp4?alt=media&token=6c5520bb-b9d2-4918-93d6-9e5915468782",
  "https://firebasestorage.googleapis.com/v0/b/herzensbilderbauer-b0e58.appspot.com/o/kevshort.mp4?alt=media&token=7b4ac37f-52ea-4f37-add1-4a9454bfd715",
];

function filenameFromUrl(url) {
  const match = url.match(/\/o\/([^?]+)/);
  return match ? match[1] : null;
}

async function download(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  fs.mkdirSync(VIDEOS_DIR, { recursive: true });
  const urlToPath = {};

  for (const url of VIDEO_URLS) {
    const name = filenameFromUrl(url);
    if (!name) continue;
    const outPath = path.join(VIDEOS_DIR, name);
    const publicPath = `/videos/${name}`;
    if (fs.existsSync(outPath)) {
      console.log("Skip (exists):", name);
      urlToPath[url] = publicPath;
      continue;
    }
    console.log("Downloading:", name);
    const buffer = await download(url);
    fs.writeFileSync(outPath, buffer);
    urlToPath[url] = publicPath;
  }

  const constantsPath = path.join(ROOT, "src", "lib", "constants.ts");
  const pagePath = path.join(ROOT, "src", "app", "(landing)", "page.tsx");
  const reportagePath = path.join(ROOT, "src", "app", "(landing)", "angebote", "hochzeitsreportage", "page.tsx");

  for (const [url, publicPath] of Object.entries(urlToPath)) {
    const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(escaped, "g");
    for (const filePath of [constantsPath, pagePath, reportagePath]) {
      if (!fs.existsSync(filePath)) continue;
      let content = fs.readFileSync(filePath, "utf8");
      if (content.includes(url)) {
        content = content.replace(re, publicPath);
        fs.writeFileSync(filePath, content);
        console.log("Replaced in", path.relative(ROOT, filePath));
      }
    }
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
