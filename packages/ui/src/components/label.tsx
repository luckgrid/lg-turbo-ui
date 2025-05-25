"use client";

import * as React from "react";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";
import { formTextSize, formTextStatus } from "@workspace/ui/primitives/form";

const labelBase = "inline-flex select-none transition-[color]";

const labelSize = {
  ...formTextSize,
  sm: "gap-fs-xs-3 font-normal text-caption",
  base: "gap-fs-xs-4 font-medium text-label",
  md: "gap-fs-xs-5 font-medium text-body",
  lg: "gap-fs-xs-6 font-semibold text-lead",
  full: "gap-fs-xs-7 font-semibold text-subheading",
};

const labelStatus = {
  ...formTextStatus,
  base: "text-foreground/80",
  error: "text-danger/80",
};

const labelVariant = {
  base: "",
  indicator: "leading-none peer-disabled:cursor-not-allowed",
};

const labelVariants = cva(
  [
    labelBase,
    "items-center gap-fs-2",
    "data-[error=true]:text-danger",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
    "peer-disabled:opacity-50",
  ],
  {
    variants: {
      // Style Variants
      size: labelSize,
      status: labelStatus,
      variant: labelVariant,
      isRequired: {
        true: "after:content-['*'] after:text-danger",
      },
    },
    compoundVariants: [
      {
        status: "disabled",
        variant: "indicator",
        className: "cursor-not-allowed",
      },
    ],
    defaultVariants: {
      size: "base",
      status: "base",
      variant: "base",
    },
  }
);

type LabelVariantProps = VariantProps<typeof labelVariants>;

type LabelProps = LabelVariantProps &
  React.ComponentProps<typeof LabelPrimitive.Root>;

function Label({
  className,
  size,
  status,
  variant,
  isRequired,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        labelVariants({
          size,
          status,
          variant,
          isRequired,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Label };
export type { LabelProps, LabelVariantProps };
