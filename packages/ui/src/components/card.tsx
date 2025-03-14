"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import {
  SlotElement,
  type SlotElementProps,
} from "@workspace/ui/primitives/element";
import { cn } from "@workspace/ui/lib/utils";

// TODO:
// - compose card component variants with baseCardVariants using cx: https://cva.style/docs/getting-started/composing-components
// -- create cardBaseVariants, cardWrapperVariants, cardContainerVariants, etc...
// -- create card primitives that share variant props with new variants
// - split up card components into separate primitives inside card component module
// -- define a scalable and simple component module architecture using card component
// --- option 1: card/base.tsx, card/header.tsx, card/body.tsx, card/footer.tsx, etc...
// --- option 2: card/variants.tsx, card/components.tsx, card/patterns.tsx
// -- update exports to include new component module architecture

// Card Component

const cardVariants = cva("flex flex-col", {
  variants: {
    // Style Variants
    layer: {
      display: "",
      layout: "",
      overlay: "",
    },
    shape: {
      pill: "rounded-full",
      rounded: "rounded-lg",
      sharp: "rounded-none",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    space: {
      container: "",
      wrapper: "",
    },
    variant: {
      media: "",
      section: "",
    },
    // Style Modifiers
    isAction: {
      true: [
        "no-underline cursor-pointer transition-[color,box-shadow]",
        "disabled:pointer-events-none disabled:opacity-75",
        "outline-offset-1 outline-card/50",
        "focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
      ],
    },
    noBorder: {
      false: "border-2",
    },
    noColor: {
      false: "bg-card text-card-foreground",
    },
    noShadow: {
      false: "shadow-lg",
    },
    noSpace: {
      false: "gap-4 py-6",
    },
  },
  compoundVariants: [
    // Color Layer Variant Modifiers
    {
      layer: "layout",
      noColor: false,
      className: "bg-card-1 border-card-2",
    },
    {
      layer: "display",
      noColor: false,
      className: "bg-card-2 border-card-3",
    },
    {
      layer: "overlay",
      noColor: false,
      className: "bg-card-3 border-card-foreground/25",
    },
    // Shadow Size Variant Modifiers
    {
      size: "xs",
      noShadow: false,
      className: "shadow-sm",
    },
    {
      size: "sm",
      noShadow: false,
      className: "shadow-md",
    },
    {
      size: "md",
      noShadow: false,
      className: "shadow-lg",
    },
    {
      size: "lg",
      noShadow: false,
      className: "shadow-xl",
    },
    {
      size: "xl",
      noShadow: false,
      className: "shadow-2xl",
    },
    // Container Space Variant Modifiers
    {
      space: "container",
      noSpace: false,
      className: "gap-y-3 gap-x-6 p-6",
    },
    {
      space: "container",
      variant: "section",
      className: "container",
    },
    // Wrapper Space Variant Modifiers
    {
      space: "wrapper",
      noSpace: false,
      className: "gap-0 py-0",
    },
    {
      space: "wrapper",
      variant: "section",
      noSpace: false,
      className: "py-6",
    },
  ],
  defaultVariants: {
    noBorder: false,
    noColor: false,
    noShadow: false,
    noSpace: false,
  },
});

type CardVariantProps = VariantProps<typeof cardVariants>;

type CardProps<T extends React.ElementType = "div"> = SlotElementProps<T> &
  CardVariantProps;

function Card({
  layer,
  shape,
  size,
  space,
  variant,
  isAction,
  noBorder,
  noColor,
  noShadow,
  noSpace,
  className,
  ...props
}: CardProps) {
  return (
    <SlotElement
      data-slot="card"
      className={cn(
        cardVariants({
          layer,
          shape,
          size,
          space,
          variant,
          isAction,
          noBorder,
          noColor,
          noShadow,
          noSpace,
          className,
        }),
      )}
      {...props}
    />
  );
}

// Card Header Component

const cardHeaderVariants = cva("flex flex-col", {
  variants: {
    // Style Variants
    shape: {
      pill: "rounded-full",
      rounded: "rounded-lg",
      sharp: "rounded-none",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    space: {
      container: "",
      wrapper: "",
    },
    variant: {
      bar: "items-center justify-between",
    },
    // Style Modifiers
    noSpace: {
      false: "gap-y-3 gap-x-6 px-6",
    },
  },
  compoundVariants: [
    // Wrapper Space Variant Modifiers
    {
      space: "wrapper",
      noSpace: false,
      className: "px-0",
    },
  ],
  defaultVariants: {
    noSpace: false,
  },
});

type CardHeaderVariantProps = VariantProps<typeof cardHeaderVariants>;

type CardHeaderProps = React.ComponentProps<"header"> & CardHeaderVariantProps;

function CardHeader({
  shape,
  size,
  space,
  variant,
  noSpace,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <header
      data-slot="card-header"
      className={cn(
        cardHeaderVariants({
          shape,
          size,
          space,
          variant,
          noSpace,
          className,
        }),
      )}
      {...props}
    />
  );
}

// Card Body Component

const cardBodyVariants = cva("flex flex-col", {
  variants: {
    // Style Variants
    shape: {
      pill: "rounded-full",
      rounded: "rounded-lg",
      sharp: "rounded-none",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    space: {
      container: "",
      wrapper: "",
    },
    // Style Modifiers
    noSpace: {
      false: "gap-y-3 gap-x-6 px-6",
    },
  },
  compoundVariants: [
    // Wrapper Space Variant Modifiers
    {
      space: "wrapper",
      noSpace: false,
      className: "px-0",
    },
  ],
  defaultVariants: {
    noSpace: false,
  },
});

type CardBodyVariantProps = VariantProps<typeof cardBodyVariants>;

type CardBodyProps<T extends React.ElementType = "div"> = SlotElementProps<T> &
  CardBodyVariantProps;

function CardBody({
  shape,
  size,
  space,
  noSpace,
  className,
  ...props
}: CardBodyProps) {
  return (
    <SlotElement
      data-slot="card-body"
      className={cn(
        cardBodyVariants({
          shape,
          size,
          space,
          noSpace,
          className,
        }),
      )}
      {...props}
    />
  );
}

// Card Footer Component

const cardFooterVariants = cva("flex flex-col", {
  variants: {
    // Style Variants
    shape: {
      pill: "rounded-full",
      rounded: "rounded-lg",
      sharp: "rounded-none",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    space: {
      container: "",
      wrapper: "",
    },
    variant: {
      actions: "items-center justify-end",
      bar: "items-center justify-between",
    },
    // Style Modifiers
    noSpace: {
      false: "gap-y-3 gap-x-6 px-6",
    },
  },
  compoundVariants: [
    // Wrapper Space Variant Modifiers
    {
      space: "wrapper",
      noSpace: false,
      className: "px-0",
    },
    // Variant Space Modifiers
    {
      variant: "actions",
      noSpace: false,
      className: "gap-x-3",
    },
  ],
  defaultVariants: {
    noSpace: false,
  },
});

type CardFooterVariantProps = VariantProps<typeof cardFooterVariants>;

type CardFooterProps = React.ComponentProps<"footer"> & CardFooterVariantProps;

function CardFooter({
  shape,
  size,
  space,
  variant,
  noSpace,
  className,
  ...props
}: CardFooterProps) {
  return (
    <footer
      data-slot="card-footer"
      className={cn(
        cardFooterVariants({
          shape,
          size,
          space,
          variant,
          noSpace,
          className,
        }),
      )}
      {...props}
    />
  );
}

// Card Component Exports

export type {
  CardProps,
  CardVariantProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
};

export {
  cardVariants,
  cardHeaderVariants,
  cardBodyVariants,
  cardFooterVariants,
};

export { Card, CardHeader, CardBody, CardFooter };
