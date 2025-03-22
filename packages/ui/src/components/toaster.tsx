"use client";

import type { ToasterProps as SonnerProps } from "sonner";
import { Toaster as Sonner, toast } from "sonner";

// Sonner Toaster Docs: https://sonner.emilkowal.ski/getting-started

// TODO:
// - add toasterVariants with updated styles using ui theme variables - https://sonner.emilkowal.ski/styling
// -- add a reusable toast function with theme style overrides

type ToasterProps = SonnerProps;

function Toaster({ theme = "system", ...props }: ToasterProps) {
  return (
    <Sonner
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
