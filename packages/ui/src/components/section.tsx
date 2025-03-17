import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { SlotElement } from "@workspace/ui/primitives/element";
import type { SlotElementProps } from "@workspace/ui/primitives/element";
import { cn } from "@workspace/ui/lib/utils";

// TODO:
// - use Wrapper and Container primitives to compose section components

const sectionVariants = cva("flex flex-col", {
  variants: {
    // Style Variants
    color: {
      neutral: "bg-background text-foreground",
      primary: "bg-primary/20 text-foreground",
      secondary: "bg-secondary/20 text-foreground",
    },
    layer: {
      display: "",
      layout: "",
      overlay: "",
    },
    layout: {
      grid: "grid grid-cols-12",
      split: "md:flex-row",
    },
    level: {
      "1": "",
      "2": "",
      "3": "",
    },
    size: {
      auto: "flex-auto",
      full: "flex-1 min-h-svh",
    },
    space: {
      container: "",
      wrapper: "",
    },
    variant: {
      bar: "",
      hero: "flex-1",
    },
    // Style Modifiers
    noSpace: {
      false: "gap-fs-6 py-fs-24",
    },
    withBorder: {
      true: "border-y-(length:--fs-0-375)",
    },
    withContainer: {
      true: "",
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
    // Container Space Variant Modifiers
    {
      space: "container",
      noSpace: false,
      className: "gap-y-fs-3 gap-x-fs-6 px-fs-6",
    },
    // Wrapper Space Variant Modifiers
    {
      space: "wrapper",
      noSpace: false,
      className: "gap-0 py-0",
    },
    // Hero Space Variant Modifiers
    {
      variant: "hero",
      noSpace: false,
      className: "gap-fs-8 py-fs-36",
    },
    {
      space: "container",
      variant: "hero",
      noSpace: false,
      className: "gap-x-fs-16",
    },
  ],
  defaultVariants: {
    noSpace: false,
  },
});

type SectionVariantProps = VariantProps<typeof sectionVariants>;

type SectionClassNames = {
  section?: string;
  container?: string;
};

type SectionProps<T extends React.ElementType = "section"> =
  SlotElementProps<T> &
    SectionVariantProps & {
      classNames?: SectionClassNames;
    };

function Section<T extends React.ElementType = "section">({
  as = "section",
  children,
  className,
  classNames,
  color,
  layer,
  layout,
  level,
  size,
  space,
  variant,
  noSpace,
  withBorder,
  withContainer,
  ...props
}: SectionProps<T>) {
  const Container = withContainer ? "div" : React.Fragment;

  return (
    <SlotElement
      data-slot="section"
      as={as}
      className={cn(
        sectionVariants({
          color,
          layer,
          layout,
          level,
          size,
          space,
          variant,
          noSpace,
          withBorder,
          withContainer,
          className,
        }),
        classNames?.section,
      )}
      {...props}
    >
      <Container
        className={cn("container flex flex-col px-fs-6", classNames?.container)}
      >
        {children}
      </Container>
    </SlotElement>
  );
}

export type { SectionProps };
export { Section };
