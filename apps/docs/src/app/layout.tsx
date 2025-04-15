import { cn } from '@workspace/ui/lib/utils';
import { fontVariables } from '@workspace/ui-next/lib/fonts';
import { viewport as viewportConfig } from '@workspace/ui-next/lib/viewport';
import { Providers } from '@/components/providers';
import { metadata as appMetadata, config } from '@/configs/app';
import '@workspace/ui/main.css';

export const metadata = appMetadata;
export const viewport = viewportConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.locale} suppressHydrationWarning>
      <body className={cn(fontVariables, 'antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
