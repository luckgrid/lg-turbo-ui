import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import type { SlotElementProps } from "@workspace/ui/primitives/element";
import { SlotElement } from "@workspace/ui/primitives/element";

// TODO:
// - Add box placement variants (i.e. items-center, justify-center, etc...)

// Box Primitive Variants

// Base Box Styles
const boxBase = "relative box-border";

// Box Color API Properties - sets border, background, and text color for a box
const boxColor = {
  base: "bg-background text-foreground",
  neutral: "bg-neutral text-neutral-foreground",
  primary: "bg-primary/70 text-primary-foreground",
  secondary: "bg-secondary/70 text-secondary-foreground",
};

// Box Group API Properties - defines which UI group the box belongs to, modifying default style variants for the box
const boxGroup = {
  action: "",
  display: "",
  form: "",
  layout: "",
  navigation: "",
  overlay: "",
};

// Box Layout API Properties - defines the layout of the box, either as a flexbox col or responsive row, or a 12 grid css grid
const boxLayout = {
  col: "flex flex-col",
  grid: "grid grid-cols-12",
  row: "flex flex-col sm:flex-row sm:flex-wrap",
};

// Box Level API Properties - defines the level of the box to modify the background color, shadow and other variants for the box
const boxLevel = {
  "0": "",
  "1": "",
  "2": "",
  "3": "",
};

// Box Scale API Properties - defines the scale of the box to modify the space and size variants for the box
const boxScale = {
  "0": "",
  "1": "",
  "2": "",
  "3": "",
};

// Box Shape API Properties - defines the shape of the box to modify the border radius and additional shape modifiers for the box
const boxShape = {
  pill: "rounded-full",
  rounded: "rounded-fs-lg",
  sharp: "rounded-none",
  ticket: "shape-ticket",
};

// Box Size API Properties - defines the size of the box to set the box sizing based on layout and other variants for the box
const boxSize = {
  auto: "flex-auto",
  fit: "flex-none",
  full: "flex-1",
};

// Box Space API Properties - defines the space of the box to set the box spacing based on layout and other variants for the box
const boxSpace = {
  unset: "",
  block: "py-fs-6 gap-y-fs-3 gap-x-fs-6",
  frame: "p-fs-6 gap-fs-6",
  inline: "px-fs-6 gap-y-fs-3 gap-x-fs-6",
};

// Box Variant API Properties - defines the variant of the box to modify the style variants for the box based on other variant properties
const boxVariant = {
  container: "",
  media: "",
  prose: "box-content",
  wrapper: "",
};

// Box Primitive Component

const boxVariants = cva(boxBase, {
  variants: {
    color: boxColor,
    group: boxGroup,
    layout: boxLayout,
    level: boxLevel,
    scale: boxScale,
    shape: boxShape,
    size: boxSize,
    space: boxSpace,
    variant: boxVariant,
  },
  compoundVariants: [
    // Base Color Variants
    {
      color: "base",
      level: "1",
      className: "bg-background-1",
    },
    {
      color: "base",
      level: "2",
      className: "bg-background-3",
    },
    {
      color: "base",
      level: "3",
      className: "bg-card",
    },
    // Neutral Color Variants
    {
      color: "neutral",
      level: "1",
      className: "bg-neutral-1",
    },
    {
      color: "neutral",
      level: "2",
      className: "bg-neutral-2",
    },
    {
      color: "neutral",
      level: "3",
      className: "bg-neutral-3",
    },
    // Primary Color Variants
    {
      color: "primary",
      level: "1",
      className: "bg-primary/80",
    },
    {
      color: "primary",
      level: "2",
      className: "bg-primary/90",
    },
    {
      color: "primary",
      level: "3",
      className: "bg-primary",
    },
    // Secondary Color Variants
    {
      color: "secondary",
      level: "1",
      className: "bg-secondary/80",
    },
    {
      color: "secondary",
      level: "2",
      className: "bg-secondary/90",
    },
    {
      color: "secondary",
      level: "3",
      className: "bg-secondary",
    },
    // 0 Space Scale
    {
      scale: "0",
      space: "block",
      className: "py-6 gap-y-3 gap-x-6",
    },
    {
      scale: "0",
      space: "frame",
      className: "p-6 gap-6",
    },
    {
      scale: "0",
      space: "inline",
      className: "px-6 gap-y-3 gap-x-6",
    },
    // 2 Space Scale
    {
      scale: "2",
      space: "block",
      className: "py-fs-12 gap-y-fs-6 gap-x-fs-12",
    },
    {
      scale: "2",
      space: "frame",
      className: "p-fs-12 gap-fs-12",
    },
    {
      scale: "2",
      space: "inline",
      className: "px-fs-12 gap-y-fs-6 gap-x-fs-12",
    },
    // 3 Space Scale
    {
      scale: "3",
      space: "block",
      className: "py-fs-18 gap-y-fs-9 gap-x-fs-18",
    },
    {
      scale: "3",
      space: "frame",
      className: "p-fs-18 gap-fs-18",
    },
    {
      scale: "3",
      space: "inline",
      className: "px-fs-18 gap-y-fs-9 gap-x-fs-18",
    },
  ],
});

type BoxVariantProps = VariantProps<typeof boxVariants>;

type BoxProps<T extends React.ElementType = "div"> = SlotElementProps<T> &
  BoxVariantProps;

function Box<T extends React.ElementType = "div">({
  as = "div",
  className,
  color,
  group,
  layout,
  level,
  scale,
  shape,
  size,
  space,
  variant,
  ...props
}: BoxProps<T>) {
  return (
    <SlotElement
      data-slot="box"
      as={as}
      className={cn(
        boxVariants({
          color,
          group,
          layout,
          level,
          scale,
          shape,
          size,
          space,
          variant,
          className,
        }),
      )}
      {...props}
    />
  );
}

// Box Primitive Exports

export {
  Box,
  boxBase,
  boxColor,
  boxGroup,
  boxLayout,
  boxLevel,
  boxScale,
  boxShape,
  boxSize,
  boxSpace,
  boxVariant,
};

export type { BoxProps, BoxVariantProps };
