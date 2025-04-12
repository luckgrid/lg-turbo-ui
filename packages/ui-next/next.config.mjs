// Next Config API: https://nextjs.org/docs/app/api-reference/config/next-config-js

// Base Config
export const baseConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/ui-next"],
};

// TODO:
// - handle vercel project domain redirects - https://vercel.com/docs/environment-variables/system-environment-variables

// Base Domain Redirects
export function baseRedirects() {
  const redirects = [];

  // Redirect app's root production domain to www (permanent)
  if (process.env.APP_PRODUCTION_DOMAIN) {
    redirects.push({
      source: "/:path*",
      has: [
        {
          type: "host",
          value: process.env.APP_PRODUCTION_DOMAIN,
        },
      ],
      destination: `${process.env.APP_PRODUCTION_URL}/:path*`,
      permanent: true,
    });
  }

  // Redirect app from server's wildcard subdomain to www (temporary)
  if (process.env.APP_FQDN && process.env.NODE_ENV === "production") {
    redirects.push({
      source: "/:path*",
      has: [
        {
          type: "host",
          value: process.env.APP_FQDN,
        },
      ],
      destination: `${process.env.APP_PRODUCTION_URL}/:path*`,
      permanent: false,
    });
  }

  return redirects;
}

/** @type {import('next').NextConfig} */
export const config = {
  ...baseConfig,
  async redirects() {
    return baseRedirects();
  },
};
