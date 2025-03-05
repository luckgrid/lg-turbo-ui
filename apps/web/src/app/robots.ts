import type { MetadataRoute } from "next";

import { baseUrl } from "@/configs/app";

// Robots api ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // NOTE: switch to allow when ready for prod
      //   allow: "/",
      disallow: "/",
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
