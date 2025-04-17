import { cx } from 'class-variance-authority';

import { twMerge } from '@workspace/tailwind-config/lib/merge';

// Merges class names using cx and twMerge extended with custom tailwind merge config
export function cn(...inputs: Parameters<typeof cx>) {
  return twMerge(cx(inputs));
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
