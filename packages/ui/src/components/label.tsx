"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

// TODO:
// - extend label (and other similar text based components) from common text primitive

const labelVariants = cva(
  [
    "select-none inline-flex items-center gap-fs-0-25",
    "font-medium text-label",
    "data-[error=true]:text-danger-1",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  ],
  {
    variants: {
      // Style Variants
      size: {
        sm: "font-normal text-caption",
        md: "text-body gap-fs-0-375",
        lg: "text-subheading gap-fs-0-5",
      },
      // Style Modifiers
      isRequired: {
        true: "after:content-['*'] after:text-danger-1",
      },
    },
  },
);

type LabelVariantProps = VariantProps<typeof labelVariants>;

type LabelProps = LabelVariantProps &
  React.ComponentProps<typeof LabelPrimitive.Root>;

function Label({ className, size, isRequired, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        labelVariants({
          size,
          isRequired,
          className,
        }),
      )}
      {...props}
    />
  );
}

export { Label };
export type { LabelProps, LabelVariantProps };
