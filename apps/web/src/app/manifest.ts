import type { MetadataRoute } from "next";

import { metadata, colors } from "@/configs/app";

// - PWA Checklist: https://web.dev/articles/pwa-checklist?utm_source=lighthouse&utm_medium=devtools
// - Icon Generator: https://realfavicongenerator.net/
// - Maskable Icons: https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit/?utm_source=lighthouse&utm_medium=devtools#how_to_add_maskable_icon_support_to_your_pwa
// - Maskable Icon Gen: https://maskable.app/editor

// Manifest api ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: metadata.name,
    short_name: metadata.name,
    description: metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: colors.background,
    theme_color: colors.primary,
    icons: [
      {
        src: "/assets/icons/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/icons/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/icons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/assets/icons/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  };
}
