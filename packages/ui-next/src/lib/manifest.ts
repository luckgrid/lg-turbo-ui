import type { MetadataRoute } from 'next';

import { color } from './viewport';

// Next Metadata Manifest API: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest

const manifestIcons: MetadataRoute.Manifest['icons'] = [
  {
    src: '/assets/icons/web-app-manifest-192x192.png',
    sizes: '192x192',
    type: 'image/png',
    purpose: 'maskable',
  },
  {
    src: '/assets/icons/web-app-manifest-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'maskable',
  },
  {
    src: '/assets/icons/favicon-96x96.png',
    sizes: '96x96',
    type: 'image/png',
  },
  {
    src: '/assets/icons/favicon.svg',
    type: 'image/svg+xml',
  },
];

const manifest: MetadataRoute.Manifest = {
  start_url: '/',
  display: 'standalone',
  background_color: color.background,
  theme_color: color.theme,
  icons: manifestIcons,
};

export { manifest, manifestIcons };
