"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { CheckIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import { boxShape } from "@workspace/ui/primitives/box";

const checkboxVariants = cva(
  [
    "peer size-fs-4 shrink-0 transition-[color,box-shadow]",
    "border-(length:--fs-0-25) outline-offset-1 outline-ring/50 ring-ring/25 bg-input",
    "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:outline-1 focus-visible:ring-3",
    "aria-invalid:border-danger aria-invalid:outline-danger/50 aria-invalid:ring-danger/25",
    "focus-visible:aria-invalid:border-danger-1 focus-visible:aria-invalid:outline-danger-1/50 focus-visible:aria-invalid:ring-danger-1/25",
  ],
  {
    variants: {
      // Style Variants
      shape: {
        pill: boxShape.pill,
        rounded: boxShape.rounded,
        sharp: boxShape.sharp,
      },
      size: {
        sm: "size-fs-3 border-1",
        md: "size-fs-5 border-(length:--fs-0-25)",
        lg: "size-fs-6 border-(length:--fs-0-375)",
      },
    },
  }
);

type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;

type CheckboxProps = CheckboxVariantProps &
  React.ComponentProps<typeof CheckboxPrimitive.Root>;

function Checkbox({ className, shape, size, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        checkboxVariants({
          shape,
          size,
          className,
        })
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
