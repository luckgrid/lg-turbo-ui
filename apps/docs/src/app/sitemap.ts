import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/configs/app';

// Next Sitemap API: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

const date = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];

  return urls;
}
