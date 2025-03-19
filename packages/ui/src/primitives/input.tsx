import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import { boxBase, boxShape } from "@workspace/ui/primitives/box";
import type { ElementProps } from "@workspace/ui/primitives/element";
import { Element } from "@workspace/ui/primitives/element";

const inputVariants = cva(
  [
    boxBase,
    "bg-input transition-[color,box-shadow]",
    "flex gap-fs-0-75 px-fs-3 py-fs-1 border-(length:--fs-0-25) text-body",
    "file:inline-flex file:text-foreground file:border-0 file:bg-transparent file:font-medium",
    "placeholder:text-neutral-foreground aria-invalid:placeholder:text-danger-1",
    "selection:bg-primary selection:text-primary-foreground",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "border-border outline-offset-1 outline-ring/50 ring-ring/25",
    "focus-visible:border-ring focus-visible:ring-4 focus-visible:outline-1",
    "aria-invalid:border-danger aria-invalid:outline-danger/50 aria-invalid:ring-danger/25",
  ],
  {
    variants: {
      // Style Variants
      shape: boxShape,
      size: {
        sm: "gap-fs-0-5 px-fs-2 py-fs-0-5 border-1 text-label",
        md: "gap-fs-0-75 px-fs-4 py-fs-2 border-(length:--fs-0-25) text-body",
        lg: "gap-fs-1 px-fs-6 py-fs-3 border-(length:--fs-0-375) text-body",
      },
      // Style Modifiers
      isReadonly: {
        true: "cursor-default p-0",
      },
      withShadow: {
        true: "shadow-sm",
      },
    },
    compoundVariants: [
      // Rounded Shape Size Variants
      {
        shape: "rounded",
        size: "sm",
        className: "rounded-fs-sm",
      },
      {
        shape: "rounded",
        size: "md",
        className: "rounded-fs-md",
      },
      {
        shape: "rounded",
        size: "lg",
        className: "rounded-fs-lg",
      },
      // Shadow Size Modifiers
      {
        withShadow: true,
        size: "sm",
        className: "shadow-xs",
      },
      {
        withShadow: true,
        size: "md",
        className: "shadow-sm",
      },
      {
        withShadow: true,
        size: "lg",
        className: "shadow-md",
      },
    ],
  },
);

type InputVariantProps = VariantProps<typeof inputVariants>;

type InputProps<T extends React.ElementType = "input"> = ElementProps<T> &
  InputVariantProps;

function Input<T extends React.ElementType = "input">({
  as = "input",
  className,
  shape,
  size,
  isReadonly,
  withShadow,
  ...props
}: InputProps<T>) {
  return (
    <Element
      data-slot="input-primitive"
      as={as}
      className={cn(
        inputVariants({ shape, size, isReadonly, withShadow, className }),
      )}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };
