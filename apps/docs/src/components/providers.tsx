import * as React from "react";

import { ObserverProvider } from "@workspace/ui/providers/observer";
import { ThemeProvider } from "@workspace/ui-next/providers/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ObserverProvider>{children}</ObserverProvider>
    </ThemeProvider>
  );
}
