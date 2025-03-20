"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

const labelVariants = cva(
  [
    "inline-flex gap-fs-0-25",
    "text-label font-medium select-none",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  ],
  {
    variants: {
      // Style Variants
      size: {
        xs: "text-caption",
        sm: "text-label",
        md: "text-label",
        lg: "text-body",
        xl: "text-subheading",
      },
      variant: {
        wrapper: "flex items-center gap-fs-0-5",
      },
      // Style Modifiers
      isRequired: {
        true: "after:content-['*'] after:text-danger-1",
      },
    },
    compoundVariants: [
      // Size Variants
      {
        size: ["xs", "sm"],
        className: "font-normal",
      },
      {
        size: ["lg", "xl"],
        className: "gap-fs-0-5",
      },
      {
        size: ["xs", "sm"],
        variant: "wrapper",
        className: "gap-fs-0-25",
      },
      {
        size: ["lg", "xl"],
        variant: "wrapper",
        className: "gap-fs-0-75",
      },
    ],
  },
);

type LabelVariantProps = VariantProps<typeof labelVariants>;

type LabelProps = LabelVariantProps &
  React.ComponentProps<typeof LabelPrimitive.Root>;

function Label({ className, size, variant, isRequired, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        labelVariants({
          size,
          variant,
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
