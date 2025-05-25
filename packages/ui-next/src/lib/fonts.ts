import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";

import { cn } from "@workspace/ui/lib/utils";

// - Next Font API: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
// - Google Fonts: https://fonts.google.com/

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  fallback: [
    "ui-serif",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "Times",
    "serif",
  ],
});

const fontClassNames = cn(
  roboto.className,
  robotoMono.className,
  robotoSerif.className
);

const fontVariables = cn(
  roboto.variable,
  robotoMono.variable,
  robotoSerif.variable
);

export { fontClassNames, fontVariables };
