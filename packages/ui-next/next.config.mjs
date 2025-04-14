// Next Config API: https://nextjs.org/docs/app/api-reference/config/next-config-js

// Base Config
export const baseConfig = {
  transpilePackages: ['@workspace/ui', '@workspace/ui-next'],
};

// TODO:
// - handle vercel project domain redirects - https://vercel.com/docs/environment-variables/system-environment-variables
// - use valibot to validate environment variables and jiti to load them into the config

/** @type {import('next').NextConfig} */
const config = {
  ...baseConfig,
};

export default config;
