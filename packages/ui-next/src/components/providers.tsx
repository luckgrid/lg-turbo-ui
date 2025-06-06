"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

// Next Themes API: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#api

function ThemeProvider({
  children,
  enableSystem = true,
  disableTransitionOnChange = true,
  enableColorScheme = true,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      enableColorScheme={enableColorScheme}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider };
export type { ThemeProviderProps };
