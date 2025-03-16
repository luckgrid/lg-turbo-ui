import type { Viewport } from "next";

// Next Viewport API: https://nextjs.org/docs/app/api-reference/functions/generate-viewport

const color = {
  dark: "#000000",
  light: "#ffffff",
};

const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: color.light },
    { media: "(prefers-color-scheme: dark)", color: color.dark },
  ],
};

export { color, viewport };
