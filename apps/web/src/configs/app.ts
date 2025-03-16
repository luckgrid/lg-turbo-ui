import type { Metadata } from "next";

import { getBaseUrl } from "@workspace/ui-next/lib/utils";
import {
  metadata as sharedMetadata,
  metadataOrganization,
} from "@workspace/ui-next/lib/metadata";

const APP_PORT = process.env.APP_PORT || "3000";
const BASE_URL = getBaseUrl(APP_PORT);

const config = {
  name: "LG Turbo UI",
  title:
    "A fully-loaded monorepo workspace powered by Turbo, NextJS, React, & TailwindCSS, including a modern UI library integrated with Shadcn/UI & CVA Design System",
  description:
    "LG Turbo UI is a comprehensive monorepo workspace template that combines the power of Turborepo, Next.js, React, and TailwindCSS. It features a modern UI library built with Shadcn/UI components and implements the CVA Design System, providing everything you need to build scalable and beautiful web applications.",
  locale: "en-US",
  url: BASE_URL,
  organization: metadataOrganization,
};

const metadata: Metadata = {
  ...sharedMetadata,
  applicationName: config.name,
  title: {
    default: `${config.name} | ${config.title}`,
    template: `${config.name} | %s`,
  },
  description: config.description,
  openGraph: {
    ...sharedMetadata.openGraph,
    siteName: config.name,
    title: config.title,
    description: config.description,
    locale: config.locale,
    url: config.url,
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: config.title,
    description: config.description,
  },
};

export { BASE_URL, config, metadata };
