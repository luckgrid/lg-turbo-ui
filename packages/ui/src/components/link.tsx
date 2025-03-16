import { cva, type VariantProps } from "class-variance-authority";

import { Link as PrimitiveLink } from "@workspace/ui/primitives/link";
import type { LinkProps as PrimitiveLinkProps } from "@workspace/ui/primitives/link";
import { cn } from "@workspace/ui/lib/utils";

const linkVariants = cva(
  [
    "flex-inline items-center gap-fs-0-75",
    "cursor-pointer transition-colors",
    "text-current hover:text-current/90 underline-offset-1",
    "disabled:pointer-events-none disabled:opacity-50",
    "outline-offset-2 outline-ring/50",
    "focus-visible:outline-1 aria-invalid:focus-visible:outline-0",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      // Style Variants
      color: {
        primary: "outline-primary/50 hover:text-primary",
        secondary: "outline-secondary/50 hover:text-secondary",
        accent: "outline-accent/50 hover:text-accent-1",
        danger: "outline-danger/50 hover:text-danger-1",
      },
      underline: {
        accent: "no-underline hover:underline",
        always: "underline hover:underline",
        never: "no-underline hover:no-underline",
      },
    },
    defaultVariants: {
      underline: "always",
    },
  },
);

type LinkVariantProps = VariantProps<typeof linkVariants>;

type LinkProps = PrimitiveLinkProps & LinkVariantProps;

function Link({ className, color, underline, ...props }: LinkProps) {
  return (
    <PrimitiveLink
      data-slot="link"
      className={cn(linkVariants({ color, underline, className }))}
      {...props}
    />
  );
}

export type { LinkProps };
export { Link };
