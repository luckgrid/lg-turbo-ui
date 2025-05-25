// Next Config API: https://nextjs.org/docs/app/api-reference/config/next-config-js

// Base Config
export const baseConfig = {
  transpilePackages: [
    "@workspace/tailwind-config",
    "@workspace/ui",
    "@workspace/next-ui",
  ],
};

// TODO:
// - handle vercel project domain redirects - https://vercel.com/docs/environment-variables/system-environment-variables
// - use jiti to load parsed env schema into redirects function inside config - https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects

/** @type {import('next').NextConfig} */
const config = {
  ...baseConfig,
};

export default config;
