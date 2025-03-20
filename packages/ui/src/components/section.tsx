import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import type { BoxProps } from "@workspace/ui/primitives/box";
import {
  Box,
  boxColor,
  boxGroup,
  boxLayout,
  boxLevel,
  boxScale,
  boxSize,
  boxSpace,
} from "@workspace/ui/primitives/box";

// TODO:
// - replace isCentered modifier with placement variant from box primitive
// - replace sectionScale scale modifier in component with compound variants that adjusts space scale for hero variant
// - split up section and section container into separate component files inside a section component module

const sectionVariants = cva("", {
  variants: {
    // Style Variants
    color: {
      base: boxColor.base,
      neutral: "bg-neutral/30 text-neutral-foreground",
      primary: "bg-primary/20 text-foreground",
      secondary: "bg-secondary/20 text-foreground",
    },
    group: boxGroup,
    layout: boxLayout,
    level: boxLevel,
    scale: boxScale,
    size: boxSize,
    space: {
      unset: "",
      block: "py-fs-12 gap-y-fs-6 gap-x-fs-12",
      frame: "p-fs-8 gap-fs-4",
      inline: "px-fs-6 gap-y-fs-3 gap-x-fs-6",
    },
    variant: {
      bar: "flex-none",
      cta: "",
      featured: "",
      hero: "",
    },
    // Style Modifiers
    isCentered: {
      true: "items-center justify-center",
    },
    withBorder: {
      true: "border-y-(length:--fs-0-375)",
    },
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
    // Neutral Color Variant Modifiers
    {
      color: "neutral",
      level: "1",
      className: "bg-neutral-1/30",
    },
    {
      color: "neutral",
      level: "2",
      className: "bg-neutral-2/30",
    },
    {
      color: "neutral",
      level: "3",
      className: "bg-neutral-3/30",
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
      className: "py-12 gap-y-6 gap-x-12",
    },
    {
      scale: "0",
      space: "frame",
      className: "p-8 gap-4",
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
      className: "py-fs-24 gap-y-fs-12 gap-x-fs-24",
    },
    {
      scale: "2",
      space: "frame",
      className: "p-fs-16 gap-fs-8",
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
      className: "py-fs-36 gap-y-fs-18 gap-x-fs-36",
    },
    {
      scale: "3",
      space: "frame",
      className: "p-fs-24 gap-fs-12",
    },
    {
      scale: "3",
      space: "inline",
      className: "px-fs-24 gap-y-fs-12 gap-x-fs-24",
    },
  ],
  defaultVariants: {
    group: "layout",
    size: "auto",
    space: "block",
  },
});

const sectionContainerVariants = cva("", {
  variants: {
    // Style Variants
    color: {
      base: "bg-background-1 text-foreground",
      neutral: "bg-neutral/40 text-neutral-foreground",
      primary: "bg-primary/30 text-foreground",
      secondary: "bg-secondary/30 text-foreground",
    },
    group: {
      ...boxGroup,
      layout: "container",
    },
    layout: boxLayout,
    level: boxLevel,
    scale: boxScale,
    size: boxSize,
    space: boxSpace,
    variant: {
      bar: "",
      cta: "",
      featured: "",
      hero: "",
    },
    // Style Modifiers
    isCentered: {
      true: "items-center justify-center",
    },
  },
  compoundVariants: [
    // Base Color Variant Modifiers
    {
      color: "base",
      level: "1",
      className: "bg-background-2",
    },
    {
      color: "base",
      level: "2",
      className: "bg-background-3",
    },
    {
      color: "base",
      level: "3",
      className: "bg-card text-card-foreground",
    },
    // Neutral Color Variant Modifiers
    {
      color: "neutral",
      level: "1",
      className: "bg-neutral-1/40 text-neutral-foreground",
    },
    {
      color: "neutral",
      level: "2",
      className: "bg-neutral-2/40 text-neutral-foreground",
    },
    {
      color: "neutral",
      level: "3",
      className: "bg-neutral-3/40 text-neutral-foreground-1",
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
    group: "layout",
    space: "inline",
  },
});

type SectionVariantProps = VariantProps<typeof sectionVariants>;

type SectionContainerVariantProps = VariantProps<
  typeof sectionContainerVariants
>;

type SectionContainerProps<T extends React.ElementType = "div"> = BoxProps<T> &
  SectionContainerVariantProps;

function SectionContainer<T extends React.ElementType = "div">({
  as = "div",
  className,
  color,
  group,
  layout,
  level,
  scale,
  size,
  space,
  variant,
  isCentered,
  ...props
}: SectionContainerProps<T>) {
  return (
    <Box
      data-slot="section-container"
      as={as}
      className={sectionContainerVariants({
        color,
        group,
        layout,
        level,
        scale,
        size,
        space,
        variant,
        isCentered,
        className,
      })}
      {...props}
    />
  );
}

type SectionClassNames = {
  section?: string;
  container?: string;
};

type SectionProps<T extends React.ElementType = "section"> = BoxProps<T> &
  SectionVariantProps & {
    classNames?: SectionClassNames;
    container?: Omit<SectionContainerProps, "className">;
    withContainer?: boolean;
  };

function Section<T extends React.ElementType = "section">({
  as = "section",
  children,
  className,
  classNames,
  container,
  color,
  group,
  layout,
  level,
  scale,
  size,
  space,
  variant,
  isCentered,
  withBorder,
  withContainer,
  ...props
}: SectionProps<T>) {
  const Container = withContainer ? SectionContainer : React.Fragment;
  const sectionScale = variant === "hero" ? "3" : scale;

  // Modify container space variant based on section space variant
  function getContainerSpace() {
    if (container?.space) return container.space;
    if (space === "block") return "inline";
    if (space === "frame") return undefined;
    if (space === "inline") return "block";
    return "inline";
  }

  // Modify container props based on section variants
  const containerProps = {
    color: container?.color || color,
    group: container?.group || group,
    layout: container?.layout || layout,
    level: container?.level || level,
    scale: container?.scale || scale,
    size: container?.size,
    space: getContainerSpace(),
    variant: container?.variant || variant,
    isCentered: isCentered && withContainer ? true : false,
  };

  return (
    <Box
      data-slot="section"
      as={as}
      className={cn(
        sectionVariants({
          color,
          group,
          layout,
          level,
          scale: sectionScale,
          size,
          space,
          variant,
          isCentered: isCentered && withContainer ? false : isCentered,
          withBorder,
        }),
        classNames?.section,
        className,
      )}
      {...props}
    >
      <Container className={classNames?.container} {...containerProps}>
        {children}
      </Container>
    </Box>
  );
}

export { Section, SectionContainer };
export type { SectionContainerProps, SectionProps };
