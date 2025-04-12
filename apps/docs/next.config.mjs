import { baseConfig, baseRedirects } from "@workspace/ui-next/next.config";

/** @type {import('next').NextConfig} */
const config = {
  ...baseConfig,
  async redirects() {
    const redirects = baseRedirects();

    // Redirect /docs path to /
    redirects.push({
      source: "/docs",
      destination: "/",
      permanent: false,
    });

    return redirects;
  },
};

export default config;
