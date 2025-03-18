import * as React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { SlotElement } from "@workspace/ui/primitives/element";
import type { SlotElementProps } from "@workspace/ui/primitives/element";
import { cn } from "@workspace/ui/lib/utils";

const containerVariants = cva("relative", {
  variants: {
    // Style Variants
    color: {
      neutral: "bg-background-1 text-foreground",
      primary: "bg-primary/30 text-foreground",
      secondary: "bg-secondary/30 text-foreground",
    },
    group: {
      display: "",
      form: "",
      layout: "container",
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
      block: "py-fs-6 gap-y-fs-3 gap-x-fs-6",
      frame: "p-fs-6 gap-fs-6",
      inline: "px-fs-6 gap-y-fs-3 gap-x-fs-6",
    },
  },
  compoundVariants: [
    // Neutral Color Variant Modifiers
    {
      color: "neutral",
      level: "1",
      className: "bg-background-2",
    },
    {
      color: "neutral",
      level: "2",
      className: "bg-background-3",
    },
    {
      color: "neutral",
      level: "3",
      className: "bg-card",
    },
    // Primary Color Variant Modifiers
    {
      color: "primary",
      level: "1",
      className: "bg-primary/40",
    },
    {
      color: "primary",
      level: "2",
      className: "bg-primary/50",
    },
    {
      color: "primary",
      level: "3",
      className: "bg-primary/60",
    },
    // Secondary Color Variant Modifiers
    {
      color: "secondary",
      level: "1",
      className: "bg-secondary/40",
    },
    {
      color: "secondary",
      level: "2",
      className: "bg-secondary/50",
    },
    {
      color: "secondary",
      level: "3",
      className: "bg-secondary/60",
    },
  ],
  defaultVariants: {
    layout: "col",
  },
});

type ContainerVariantProps = VariantProps<typeof containerVariants>;

type ContainerProps<T extends React.ElementType = "div"> = SlotElementProps<T> &
  ContainerVariantProps;

function Container<T extends React.ElementType = "div">({
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
}: ContainerProps<T>) {
  return (
    <SlotElement
      data-slot="container"
      as={as}
      className={cn(
        containerVariants({
          color,
          group,
          layout,
          level,
          scale,
          size,
          space,
          className,
        }),
      )}
      {...props}
    />
  );
}

export type { ContainerProps, ContainerVariantProps };
export { Container };
