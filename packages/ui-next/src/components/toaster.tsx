'use client';

import { useTheme } from 'next-themes';

import type { ToasterProps } from '@workspace/ui/components/toaster';
import { Toaster as Sonner, toast } from '@workspace/ui/components/toaster';

function Toaster({ ...props }: ToasterProps) {
  const { theme } = useTheme();

  return (
    <Sonner
      data-slot='next-toaster'
      theme={theme as ToasterProps['theme']}
      {...props}
    />
  );
}

export { toast, Toaster };
export type { ToasterProps };
