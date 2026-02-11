/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  // Required for GitHub Pages when the site is at username.github.io/repo-name/
  // When you use your custom domain (herzensbilderbauer.de), set BASE_PATH="" in the workflow and redeploy so the site works at the root of your domain.
  basePath: process.env.BASE_PATH ?? "/herzensbilderbauer",
  assetPrefix: process.env.BASE_PATH ? `${process.env.BASE_PATH}/` : "",
  images: {
    unoptimized: true, // required for static export (output: 'export')
    remotePatterns: [],
  },
  typescript: {
    ignoreBuildErrors: true, // can be done in git action and not in build process, so build performance is improved
  },
  eslint: {
    ignoreDuringBuilds: true, // can be done in git action and not in build process, so build performance is improved
  },
};

export default config;
