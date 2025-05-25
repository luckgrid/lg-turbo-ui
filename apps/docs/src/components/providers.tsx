import * as React from "react";

import { ThemeProvider } from "@workspace/next-ui/components/providers";
import { Toaster } from "@workspace/next-ui/components/toaster";
import { ObserverProvider } from "@workspace/ui/components/providers";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ObserverProvider>{children}</ObserverProvider>
      <Toaster />
    </ThemeProvider>
  );
}
