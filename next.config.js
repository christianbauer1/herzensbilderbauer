/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  images: {
    unoptimized: true, // required for static export (output: 'export')
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "utfs.io" },
      { hostname: "listando.s3.eu-central-1.amazonaws.com" },
      { hostname: "firebasestorage.googleapis.com" },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // can be done in git action and not in build process, so build performance is improved
  },
  eslint: {
    ignoreDuringBuilds: true, // can be done in git action and not in build process, so build performance is improved
  },
};

export default config;
