import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/configs/app';

// Next Robots API: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // NOTE: switch to allow when ready for prod
      //   allow: "/",
      disallow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
