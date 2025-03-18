import * as React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { SlotElement } from "@workspace/ui/primitives/element";
import type { SlotElementProps } from "@workspace/ui/primitives/element";
import { cn } from "@workspace/ui/lib/utils";

const wrapperVariants = cva("relative", {
  variants: {
    // Style Variants
    color: {
      neutral: "bg-background text-foreground",
      primary: "bg-primary/20 text-foreground",
      secondary: "bg-secondary/20 text-foreground",
    },
    group: {
      display: "",
      form: "",
      layout: "",
      navigation: "",
      overlay: "",
    },
    layout: {
      col: "flex flex-col",
      grid: "grid grid-cols-12",
      row: "md:flex-row",
    },
    level: {
      "0": "",
      "1": "",
      "2": "",
      "3": "",
    },
    scale: {
      "0": "",
      "1": "",
      "2": "",
      "3": "",
    },
    size: {
      auto: "flex-auto",
      fit: "flex-none",
      full: "flex-1",
    },
    space: {
      block: "py-fs-12",
      frame: "p-fs-8 gap-fs-6",
      inline: "px-fs-6 gap-y-fs-3 gap-x-fs-6",
    },
  },
  compoundVariants: [
    // Neutral Color Variant Modifiers
    {
      color: "neutral",
      level: "1",
      className: "bg-background-1",
    },
    {
      color: "neutral",
      level: "2",
      className: "bg-background-2",
    },
    {
      color: "neutral",
      level: "3",
      className: "bg-background-3",
    },
    // Primary Color Variant Modifiers
    {
      color: "primary",
      level: "1",
      className: "bg-primary/30",
    },
    {
      color: "primary",
      level: "2",
      className: "bg-primary/40",
    },
    {
      color: "primary",
      level: "3",
      className: "bg-primary/50",
    },
    // Secondary Color Variant Modifiers
    {
      color: "secondary",
      level: "1",
      className: "bg-secondary/30",
    },
    {
      color: "secondary",
      level: "2",
      className: "bg-secondary/40",
    },
    {
      color: "secondary",
      level: "3",
      className: "bg-secondary/50",
    },
    // 0 Space Scale
    {
      scale: "0",
      space: "block",
      className: "py-12",
    },
    {
      scale: "0",
      space: "frame",
      className: "p-8 gap-6",
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
      className: "py-fs-24",
    },
    {
      scale: "2",
      space: "frame",
      className: "p-fs-16 gap-fs-12",
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
      className: "py-fs-36",
    },
    {
      scale: "3",
      space: "frame",
      className: "p-fs-24 gap-fs-18",
    },
    {
      scale: "3",
      space: "inline",
      className: "px-fs-24 gap-y-fs-12 gap-x-fs-24",
    },
  ],
  defaultVariants: {
    layout: "col",
  },
});

type WrapperVariantProps = VariantProps<typeof wrapperVariants>;

type WrapperProps<T extends React.ElementType = "div"> = SlotElementProps<T> &
  WrapperVariantProps;

function Wrapper<T extends React.ElementType = "div">({
  as = "div",
  className,
  color,
  group,
  layout,
  level,
  scale,
  size,
  space,
  ...props
}: WrapperProps<T>) {
  return (
    <SlotElement
      data-slot="wrapper"
      as={as}
      className={cn(
        wrapperVariants({
          color,
          group,
          layout,
          level,
          scale,
          size,
          space,
          className,
        })
      )}
      {...props}
    />
  );
}

export type { WrapperProps, WrapperVariantProps };
export { Wrapper, wrapperVariants };
