"use client";

import * as React from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { CircleIcon } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";
import type { InputIndicatorVariantProps } from "@workspace/ui/primitives/form";
import {
  inputRadius,
  inputShadow,
  inputIndicatorVariants,
} from "@workspace/ui/primitives/form";

// Radio Group Component

const radioGroupVariants = cva("box-border grid", {
  variants: {
    radius: inputRadius,
    shadow: inputShadow,
    size: {
      sm: "gap-fs-1",
      base: "gap-fs-2",
      md: "gap-fs-3",
      lg: "gap-fs-4",
      full: "gap-fs-5",
      none: "gap-0",
      unset: "",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

type RadioGroupVariantProps = VariantProps<typeof radioGroupVariants>;

type RadioGroupProps = RadioGroupVariantProps &
  React.ComponentProps<typeof RadioGroupPrimitive.Root>;

function RadioGroup({
  className,
  radius,
  shadow,
  size,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(radioGroupVariants({ radius, shadow, size, className }))}
      {...props}
    />
  );
}

// Radio Group Item Component

type RadioGroupItemProps = Omit<InputIndicatorVariantProps, "variant"> &
  React.ComponentProps<typeof RadioGroupPrimitive.Item>;

function RadioGroupItem({
  className,
  radius = "full",
  shadow,
  size,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        inputIndicatorVariants({
          radius,
          shadow,
          size,
          variant: "radio",
          className,
        })
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative size-full box-center"
      >
        <CircleIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
