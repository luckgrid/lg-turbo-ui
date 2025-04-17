import * as React from 'react';

import { ObserverProvider } from '@workspace/ui/components/providers';
import { ThemeProvider } from '@workspace/ui-next/components/providers';
import { Toaster } from '@workspace/ui-next/components/toaster';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ObserverProvider>{children}</ObserverProvider>
      <Toaster />
    </ThemeProvider>
  );
}
