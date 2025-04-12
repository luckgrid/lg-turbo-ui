// Get a next app's base URL based on environment and port settings
export function getBaseUrl(port: string = process.env.PORT || "3000") {
  // Next Public URLs

  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  // Vercel URLs

  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // App URLs

  if (process.env.NODE_ENV === "production" && process.env.APP_PRODUCTION_URL) {
    return process.env.APP_PRODUCTION_URL;
  }

  if (process.env.APP_URL) {
    return process.env.APP_URL;
  }

  return `http://localhost:${port}`;
}
