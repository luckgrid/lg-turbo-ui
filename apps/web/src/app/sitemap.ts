import type { MetadataRoute } from "next";

import { baseUrl } from "@/configs/app";

const date = new Date().toISOString();

// Sitemap api ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];

  return urls;
}
