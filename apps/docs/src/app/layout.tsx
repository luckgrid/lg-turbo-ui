import "@workspace/ui/main.css";

import { cn } from "@workspace/ui/lib/utils";
import { fontVariables } from "@workspace/ui-next/lib/fonts";

import { Providers } from "@/components/providers";
import { config, metadata as appMetadata } from "@/configs/app";

export const metadata = appMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.locale} suppressHydrationWarning>
      <body className={cn(fontVariables, "font-sans antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
