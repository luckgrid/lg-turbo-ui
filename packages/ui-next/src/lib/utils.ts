// TODO:
// - use valibot to validate environment variables

// Get a next app's base URL based on environment and port settings
export function getBaseUrl(port: string = process.env.PORT || '3000') {
  // Vercel URLs

  if (
    process.env.VERCEL_ENV === 'production' &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // App URLs

  if (process.env.NODE_ENV === 'production' && process.env.APP_PRODUCTION_URL) {
    return process.env.APP_PRODUCTION_URL;
  }

  if (process.env.APP_URL) {
    return process.env.APP_URL;
  }

  return `http://localhost:${port}`;
}

export function getBaseRedirects() {
  const redirects = [];

  // Redirect app's root production domain to www (permanent)
  if (process.env.APP_PRODUCTION_DOMAIN) {
    redirects.push({
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: process.env.APP_PRODUCTION_DOMAIN,
        },
      ],
      destination: `${process.env.APP_PRODUCTION_URL}/:path*`,
      permanent: true,
    });
  }

  // Redirect app from server's wildcard subdomain to www (temporary)
  if (process.env.APP_FQDN && process.env.NODE_ENV === 'production') {
    redirects.push({
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: process.env.APP_FQDN,
        },
      ],
      destination: `${process.env.APP_PRODUCTION_URL}/:path*`,
      permanent: false,
    });
  }

  return redirects;
}
