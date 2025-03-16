"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Next Themes API: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#api

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemesProvider>
  );
}
