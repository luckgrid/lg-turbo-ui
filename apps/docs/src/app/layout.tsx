import "@workspace/ui/main.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { cn } from "@workspace/ui/lib/utils";
import { Providers } from "@/components/providers";
import { metadata as app } from "@/configs/app";

// - Font api ref: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontVariables = [fontSans.variable, fontMono.variable];

// - Metadata api ref: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: {
    default: `${app.name} | ${app.title}`,
    template: `${app.name} | %s`,
  },
  description: app.description,
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/icons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "96x96",
      type: "image/png",
      url: "/assets/icons/favicon-96x96.png",
    },
    {
      rel: "icon",
      sizes: "any",
      type: "image/svg+xml",
      url: "/assets/icons/favicon.svg",
    },
  ],
  openGraph: {
    title: app.title,
    description: app.description,
    siteName: app.name,
    type: "website",
    locale: app.locale,
    url: app.url,
    images: [
      {
        width: 1200,
        height: 630,
        url: "/assets/images/banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: app.title,
    description: app.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontVariables, "font-sans antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
