import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import { boxBase, boxShape } from "@workspace/ui/primitives/box";
import type { ElementProps } from "@workspace/ui/primitives/element";
import { Element } from "@workspace/ui/primitives/element";

const inputBase = [
  boxBase,
  "flex transition-[color,box-shadow]",
  "gap-fs-0-75 px-fs-3 py-fs-1 border-(length:--fs-0-25)",
  "border-border outline-offset-1 outline-ring/75 bg-input text-body",
  "placeholder:text-neutral-foreground/50 placeholder:text-neutral-foreground/75",
  "selection:bg-primary selection:text-primary-foreground",
  "focus-visible:border-ring focus-visible:outline-1",
  "aria-invalid:border-danger focus-visible:aria-invalid:border-danger-1 aria-invalid:outline-danger/75",
];

const inputVariants = cva(inputBase, {
  variants: {
    // Style Variants
    shape: {
      pill: boxShape.pill,
      rounded: boxShape.rounded,
      sharp: boxShape.sharp,
    },
    size: {
      sm: "gap-fs-0-5 px-fs-2 py-fs-1 border-1 text-label",
      md: "gap-fs-0-75 px-fs-4 py-fs-2 border-(length:--fs-0-25) text-body",
      lg: "gap-fs-1 px-fs-5 py-fs-3 border-(length:--fs-0-375) focus-visible:outline-(length:--fs-0-025) text-subheading",
    },
    variant: {
      file: "file:inline-flex file:text-foreground file:border-0 file:bg-transparent file:font-medium",
      textarea: "field-sizing-content min-h-25",
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
    // Textarea Variant Size Modifiers
    {
      variant: "textarea",
      size: "sm",
      className: "min-h-15",
    },
    {
      variant: "textarea",
      size: "md",
      className: "min-h-30",
    },
    {
      variant: "textarea",
      size: "lg",
      className: "min-h-40",
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
});

type InputVariantProps = VariantProps<typeof inputVariants>;

type InputProps<T extends React.ElementType = "input"> = ElementProps<T> &
  InputVariantProps;

function Input<T extends React.ElementType = "input">({
  as = "input",
  className,
  shape,
  size,
  variant,
  isReadonly,
  withShadow,
  ...props
}: InputProps<T>) {
  return (
    <Element
      data-slot="input-primitive"
      as={as}
      className={cn(
        inputVariants({
          shape,
          size,
          variant,
          isReadonly,
          withShadow,
          className,
        }),
      )}
      {...props}
    />
  );
}

export { Input, inputBase };
export type { InputProps };
