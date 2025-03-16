import type { MetadataRoute } from "next";

import { manifest as sharedManifest } from "@workspace/ui-next/lib/manifest";
import { config } from "@/configs/app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    ...sharedManifest,
    name: config.name,
    short_name: config.name,
    description: config.description,
  };
}
