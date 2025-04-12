import * as React from "react";

import { Toaster } from "@workspace/ui-next/components/toaster";
import { ThemeProvider } from "@workspace/ui-next/providers/theme";
import { ObserverProvider } from "@workspace/ui/providers/observer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ObserverProvider>{children}</ObserverProvider>
      <Toaster />
    </ThemeProvider>
  );
}
