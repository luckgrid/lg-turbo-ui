import type { Metadata } from "next";

// - Next Metadata API: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// - PWA Checklist: https://web.dev/articles/pwa-checklist?utm_source=lighthouse&utm_medium=devtools
// - Icon Generator: https://realfavicongenerator.net/
// - Maskable Icons: https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit/?utm_source=lighthouse&utm_medium=devtools#how_to_add_maskable_icon_support_to_your_pwa
// - Maskable Icon Gen: https://maskable.app/editor

// TODO: Generate icons and images using Next's OG Image Response API: https://nextjs.org/docs/app/api-reference/functions/image-response

type Icons = NonNullable<Metadata["icons"]>;
type OpenGraph = NonNullable<Metadata["openGraph"]>;
type OpenGraphImages = NonNullable<OpenGraph["images"]>;
type Twitter = NonNullable<Metadata["twitter"]>;
type TwitterImages = NonNullable<Twitter["images"]>;
type MetadataImages = OpenGraphImages | TwitterImages;

const metadataOrganization = {
  email: "admin@luckgrid.net",
  name: "Luckgrid",
  url: "https://luckgrid.net",
};

const metadataImages: MetadataImages = [
  {
    width: 1200,
    height: 630,
    url: "/assets/images/banner.png",
  },
];

const metadataIcons: Icons = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    url: "/assets/icons/apple-touch-icon.png",
  },
  {
    sizes: "96x96",
    type: "image/png",
    url: "/assets/icons/favicon-96x96.png",
  },
  {
    sizes: "any",
    type: "image/svg+xml",
    url: "/assets/icons/favicon.svg",
  },
];

const metadataOpenGraph: OpenGraph = {
  type: "website",
  images: metadataImages as OpenGraphImages,
};

const metadataTwitter: Twitter = {
  card: "summary_large_image",
  images: metadataImages as TwitterImages,
};

const metadata: Metadata = {
  icons: metadataIcons,
  openGraph: metadataOpenGraph,
  twitter: metadataTwitter,
};

export {
  metadataOrganization,
  metadataIcons,
  metadataImages,
  metadataOpenGraph,
  metadataTwitter,
  metadata,
};
