import { env } from "@workspace/next-ui/lib/env";

// Get a next app's base URL based on environment and port settings
export function getBaseUrl(port: string = env.PORT.toString()) {
  // Vercel URLs

  if (env.VERCEL_ENV === "production" && env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (env.VERCEL_URL) {
    return `https://${env.VERCEL_URL}`;
  }

  // App URLs

  if (
    env.APP_PRODUCTION_DOMAIN &&
    env.APP_PRODUCTION_HOSTNAME &&
    env.NODE_ENV === "production"
  ) {
    return `https://${env.APP_PRODUCTION_HOSTNAME}.${env.APP_PRODUCTION_DOMAIN}`;
  }

  if (env.APP_DOMAIN && env.APP_HOSTNAME) {
    return `https://${env.APP_HOSTNAME}.${env.APP_DOMAIN}`;
  }

  return `http://localhost:${port}`;
}

export function getBaseRedirects() {
  const redirects = [];

  // Redirect app's root production domain to www (permanent)
  if (
    env.APP_PRODUCTION_DOMAIN &&
    env.APP_PRODUCTION_HOSTNAME &&
    env.NODE_ENV === "production"
  ) {
    redirects.push({
      source: "/:path*",
      has: [
        {
          type: "host",
          value: env.APP_PRODUCTION_DOMAIN,
        },
      ],
      destination: `https://${env.APP_PRODUCTION_HOSTNAME}.${env.APP_PRODUCTION_DOMAIN}/:path*`,
      permanent: true,
    });
  }

  // Redirect app from server's wildcard subdomain to www (temporary)
  if (
    env.APP_PRODUCTION_DOMAIN &&
    env.APP_PRODUCTION_HOSTNAME &&
    env.NODE_ENV === "production"
  ) {
    redirects.push({
      source: "/:path*",
      has: [
        {
          type: "host",
          value: `${env.APP_HOSTNAME}.${env.APP_DOMAIN}`,
        },
      ],
      destination: `https://${env.APP_PRODUCTION_HOSTNAME}.${env.APP_PRODUCTION_DOMAIN}/:path*`,
      permanent: false,
    });
  }

  return redirects;
}
