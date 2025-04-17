import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';

import { twMerge } from '@workspace/ui/lib/tw-merge';

// Merges class names using clsx and tailwind-merge extended with custom tailwind merge config
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formats a number as a currency string
export function formatCurrency(
  value: number,
  options?: Intl.NumberFormatOptions
): string {
  // Convert cents to dollars and format with 2 decimal places
  return (value / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  });
}

// Checks if a URL starts with `http://` or `https://` to flag external links
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
