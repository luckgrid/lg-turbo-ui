import "@workspace/tailwind-config/styles/main.css";

import { fontVariables } from "@workspace/next-ui/lib/fonts";
import { viewport as viewportConfig } from "@workspace/next-ui/lib/viewport";
import { ReactScan } from "@workspace/ui/lib/scan";
import { cn } from "@workspace/ui/lib/utils";

import { LayoutFooter } from "@/components/footer";
import { Providers } from "@/components/providers";
import { metadata as appMetadata, config } from "@/configs/app";

export const metadata = appMetadata;
export const viewport = viewportConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.locale} suppressHydrationWarning>
      <ReactScan />
      <body className={cn(fontVariables, "antialiased")}>
        <Providers>
          {children}
          <LayoutFooter />
        </Providers>
      </body>
    </html>
  );
}
