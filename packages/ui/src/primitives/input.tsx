import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import { boxBase, boxShape } from "@workspace/ui/primitives/box";
import type { ElementProps } from "@workspace/ui/primitives/element";
import { Element } from "@workspace/ui/primitives/element";

const inputBase = [
  boxBase,
  "flex w-full transition-[background-color,border-color,color,box-shadow,opacity,fill,stroke]",
  "gap-fs-0-75 px-fs-3 py-fs-1 border-(length:--fs-0-25)",
  "outline-offset-1 outline-ring/75 border-border bg-input",
  "text-body text-left text-pretty",
  "placeholder:text-neutral-foreground/50 placeholder:text-neutral-foreground/75",
  "selection:bg-primary selection:text-primary-foreground",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "focus-visible:border-ring focus-visible:outline-1",
  "aria-invalid:border-danger-1 focus-visible:aria-invalid:outline-danger-1/75",
];

const inputShape = {
  pill: boxShape.pill,
  rounded: boxShape.rounded,
  sharp: boxShape.sharp,
};

const inputSize = {
  sm: "gap-fs-0-5 px-fs-2 py-fs-1 border-1 text-label",
  md: "gap-fs-0-75 px-fs-4 py-fs-2 border-(length:--fs-0-25) text-body",
  lg: "gap-fs-1 px-fs-5 py-fs-3 border-(length:--fs-0-375) focus-visible:outline-(length:--fs-0-025) text-subheading",
};

const inputVariant = {
  file: "file:inline-flex file:text-foreground file:border-0 file:bg-transparent file:font-medium",
  select: [
    "items-center justify-between gap-fs-2",
    "hover:bg-input/80 data-[placeholder]:text-neutral-foreground/50 [&_svg:not([class*='text-'])]:text-neutral-foreground/50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:opacity-50 [&_svg:not([class*='size-'])]:size-fs-4 [&[data-state=open]>svg]:rotate-180",
  ],
  textarea: "field-sizing-content min-h-25",
};

const inputVariants = cva(inputBase, {
  variants: {
    // Style Variants
    shape: inputShape,
    size: inputSize,
    variant: inputVariant,
    // Style Modifiers
    noShadow: {
      false: "shadow-sm",
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
      noShadow: false,
      size: "sm",
      className: "shadow-xs",
    },
    {
      noShadow: false,
      size: "md",
      className: "shadow-sm",
    },
    {
      noShadow: false,
      size: "lg",
      className: "shadow-md",
    },
  ],
  defaultVariants: {
    noShadow: false,
  },
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
  noShadow,
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
          noShadow,
          className,
        }),
      )}
      {...props}
    />
  );
}

export { Input, inputBase, inputShape, inputSize, inputVariant };
export type { InputProps, InputVariantProps };
