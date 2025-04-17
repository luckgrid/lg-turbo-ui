import type { Metadata } from 'next';

// - Next Metadata API: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// - PWA Checklist: https://web.dev/articles/pwa-checklist?utm_source=lighthouse&utm_medium=devtools
// - Icon Generator: https://realfavicongenerator.net/
// - Maskable Icons: https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit/?utm_source=lighthouse&utm_medium=devtools#how_to_add_maskable_icon_support_to_your_pwa
// - Maskable Icon Gen: https://maskable.app/editor

// TODO:
// - Generate icons and images using Next's OG Image Response API: https://nextjs.org/docs/app/api-reference/functions/image-response
// - Get organization metadata from environment variables

type MetadataOpenGraph = NonNullable<Metadata['openGraph']>;
type MetadataOpenGraphImages = NonNullable<MetadataOpenGraph['images']>;

type MetadataTwitter = NonNullable<Metadata['twitter']>;
type MetadataTwitterImages = NonNullable<MetadataTwitter['images']>;

type MetadataAuthors = NonNullable<Metadata['authors']>;
type MetadataIcons = NonNullable<Metadata['icons']>;
type MetadataImages = MetadataOpenGraphImages | MetadataTwitterImages;

type MetadataOrganization = {
  name: string;
  email: string;
  url: string;
};

const metadataAuthors: MetadataAuthors = {
  name: 'Luckgrid',
  url: 'https://www.luckgrid.net',
};

const metadataOrganization: MetadataOrganization = {
  email: 'admin@luckgrid.net',
  name: 'Luckgrid Inc',
  url: 'https://www.luckgrid.net',
};

const metadataImages: MetadataImages = [
  {
    width: 1200,
    height: 675,
    type: 'image/png',
    url: '/assets/images/banner.png',
  },
];

const metadataIcons: MetadataIcons = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    url: '/assets/icons/apple-touch-icon.png',
  },
  {
    sizes: '96x96',
    type: 'image/png',
    url: '/assets/icons/favicon-96x96.png',
  },
  {
    sizes: 'any',
    type: 'image/svg+xml',
    url: '/assets/icons/favicon.svg',
  },
];

const metadataOpenGraph: MetadataOpenGraph = {
  type: 'website',
  images: metadataImages as MetadataOpenGraphImages,
};

const metadataTwitter: MetadataTwitter = {
  card: 'summary_large_image',
  images: metadataImages as MetadataTwitterImages,
};

const metadata: Metadata = {
  authors: metadataAuthors,
  icons: metadataIcons,
  openGraph: metadataOpenGraph,
  twitter: metadataTwitter,
};

export {
  metadata,
  metadataAuthors,
  metadataIcons,
  metadataImages,
  metadataOpenGraph,
  metadataOrganization,
  metadataTwitter,
};

export type {
  MetadataAuthors,
  MetadataIcons,
  MetadataImages,
  MetadataOpenGraph,
  MetadataOpenGraphImages,
  MetadataOrganization,
  MetadataTwitter,
  MetadataTwitterImages,
};
