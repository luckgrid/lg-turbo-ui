import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { CheckIcon, CircleIcon } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";
import { boxShape } from "@workspace/ui/primitives/box";
import type { SlotElementProps } from "@workspace/ui/primitives/element";
import { SlotElement } from "@workspace/ui/primitives/element";

// TODO:
// - Add indicator wrapper slot element (button or div)
// -- update indicatorVariants to indicatorWrapperVariants
// -- create new indicatorVariants to set indicator styles based on variant
// - Replace size-fs-* with new size-fs-icon-* (need to update variables and main stylesheets)

const indicatorBase = "shrink-0 size-fs-3";

const indicatorInput = [
  "transition-[background-color,border-color,color,box-shadow,opacity,fill,stroke]",
  "border-(length:--fs-0-25) border-border outline-offset-1 outline-ring/50 ring-ring/25 bg-input",
  "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  "active:not-disabled:motion-scale-in-90 active:not-disabled:motion-duration-300 active:not-disabled:motion-ease-spring-bouncy",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "focus-visible:outline-1 focus-visible:ring-3",
  "aria-invalid:border-danger aria-invalid:outline-danger/50 aria-invalid:ring-danger/25",
  "focus-visible:aria-invalid:border-danger-1 focus-visible:aria-invalid:outline-danger-1/50 focus-visible:aria-invalid:ring-danger-1/25",
];

const indicatorShape = {
  circle: boxShape.pill,
  rounded: boxShape.rounded,
  square: boxShape.sharp,
};

const indicatorSize = {
  sm: "size-fs-2",
  md: "size-fs-4",
  lg: "size-fs-5",
};

const indicatorVariant = {
  checkbox: [indicatorInput, "peer [&_svg:not([class*='size-'])]:size-fs-2"],
  item: "",
  radio: [
    indicatorInput,
    "text-primary aspect-square",
    "data-[state=checked]:bg-primary-foreground",
    "size-fs-4 [&_svg:not([class*='size-'])]:size-fs-1 [&_svg]:fill-primary",
  ],
};

const indicatorVariants = cva(indicatorBase, {
  variants: {
    // Style Variants
    shape: indicatorShape,
    size: indicatorSize,
    variant: indicatorVariant,
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
    // Shadow Size Modifiers
    {
      size: "sm",
      noShadow: false,
      className: "shadow-xs",
    },
    {
      size: "md",
      noShadow: false,
      className: "shadow-md",
    },
    {
      size: "lg",
      noShadow: false,
      className: "shadow-lg",
    },
    // Shadow Variant Modifiers
    {
      variant: "item",
      noShadow: false,
      className: "shadow-none",
    },
  ],
});

type IndicatorVariantProps = VariantProps<typeof indicatorVariants>;

type IndicatorProps<T extends React.ElementType = "span"> =
  SlotElementProps<T> & IndicatorVariantProps;

function Indicator<T extends React.ElementType = "span">({
  as = "span",
  className,
  shape,
  size,
  variant,
  noShadow,
  ...props
}: IndicatorProps<T>) {
  return (
    <SlotElement
      data-slot="indicator"
      as={as}
      className={cn(
        indicatorVariants({ shape, size, variant, noShadow, className }),
      )}
      {...props}
    >
      {variant === "radio" ? <CircleIcon /> : <CheckIcon />}
    </SlotElement>
  );
}

export {
  Indicator,
  indicatorBase,
  indicatorInput,
  indicatorShape,
  indicatorSize,
  indicatorVariant,
  indicatorVariants,
};

export type { IndicatorProps, IndicatorVariantProps };
