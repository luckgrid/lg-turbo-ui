"use client";

import { Toaster as Sonner, toast } from "sonner";
import type { ToasterProps } from "sonner";

// Sonner Toaster Docs: https://sonner.emilkowal.ski/getting-started

// TODO:
// - add toasterVariants with updated styles using ui theme variables - https://sonner.emilkowal.ski/styling
// -- add a reusable toast function with theme style overrides

function Toaster({ theme = "system", ...props }: ToasterProps) {
  return (
    <Sonner
      data-slot="toaster"
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { toast, Toaster };
export type { ToasterProps };
