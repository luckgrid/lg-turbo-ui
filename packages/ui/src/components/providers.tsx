"use client";

import * as React from "react";

import { Observer } from "@workspace/tailwind-config/lib/intersect";

// Scroll Animations with Tailwind CSS Motion and Intersect Plugins
// - Docs: https://docs.rombo.co/tailwind/scroll-animations

function ObserverProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    Observer.start();
  }, []);

  return <>{children}</>;
}

export { ObserverProvider };
