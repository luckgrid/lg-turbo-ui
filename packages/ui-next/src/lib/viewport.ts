import type { Viewport } from "next";

// Next Viewport API: https://nextjs.org/docs/app/api-reference/functions/generate-viewport

const COLOR_LIGHT = "#ffffff";
const COLOR_DARK = "#000000";

const color = {
  background: COLOR_LIGHT,
  theme: COLOR_LIGHT,
  dark: COLOR_DARK,
  light: COLOR_LIGHT,
};

const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: color.light },
    { media: "(prefers-color-scheme: dark)", color: color.dark },
  ],
};

export { color, viewport };
