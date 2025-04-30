import * as React from "react";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";
import type { ElementProps } from "@workspace/ui/primitives/element";
import { Element } from "@workspace/ui/primitives/element";

// Layout Radius Properties - to modify the border radius of a layout primitive
const layoutRadius = {
  sm: "rounded-fs-13",
  base: "rounded-fs-14",
  md: "rounded-fs-15",
  lg: "rounded-fs-16",
  full: "rounded-full",
  none: "rounded-none",
  unset: "",
};

// Layout Shadow Properties - to modify the shadow of a layout primitive
const layoutShadow = {
  sm: "shadow-sm",
  base: "shadow-md",
  md: "shadow-lg",
  lg: "shadow-xl",
  full: "shadow-2xl",
  none: "shadow-none",
  unset: "",
};

// Layout Variants
const layoutVariants = cva("box-col", {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
  },
});

// Layout Primitives Types
type LayoutVariantProps = VariantProps<typeof layoutVariants>;
type LayoutProps<T extends React.ElementType = "div"> = ElementProps<T> &
  LayoutVariantProps;

// Layout Primitive Component
function Layout<T extends React.ElementType = "div">({
  as = "div",
  className,
  radius,
  shadow,
  ...props
}: LayoutProps<T>) {
  return (
    <Element
      data-slot="layout"
      as={as}
      className={cn(layoutVariants({ radius, shadow, className }))}
      {...props}
    />
  );
}

// Layout Container Space Properties - to modify the spacing styles of a layout container
const layoutContainerSpace = {
  base: "gap-fs-xl-2 px-fs-xl-4",
  wrapper: "gap-fs-xl-2 py-fs-xl-4",
  frame: "gap-fs-xl-2 p-fs-xl-4",
  none: "gap-0 p-0",
  unset: "",
};

// Layout Container Variant Properties - to modify the variant styles of a layout container
const layoutContainerVariant = {
  base: "container",
  wrapper: "",
};

// Layout Container Variant
const layoutContainerVariants = cva("box-col", {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
    space: layoutContainerSpace,
    variant: layoutContainerVariant,
  },
  defaultVariants: {
    space: "base",
    variant: "base",
  },
});

// Layout Container Primitive Types
type LayoutContainerVariantProps = VariantProps<typeof layoutContainerVariants>;
type LayoutContainerProps<T extends React.ElementType = "div"> =
  LayoutProps<T> & LayoutContainerVariantProps;

// Layout Container Primitive Component
function LayoutContainer<T extends React.ElementType = "div">({
  as = "div",
  className,
  radius,
  shadow,
  space,
  variant,
  ...props
}: LayoutContainerProps<T>) {
  return (
    <Element
      data-slot="layout-container"
      as={as}
      className={cn(
        layoutContainerVariants({
          radius,
          shadow,
          space,
          variant,
          className,
        })
      )}
      {...props}
    />
  );
}

// Layout Bar Space Properties - to modify the spacing styles of a layout bar primitive
const layoutBarSpace = {
  base: "gap-fs-4 2xs:gap-fs-3 md:gap-fs-2",
  container: "gap-x-fs-6 gap-y-fs-3 px-fs-6",
  wrapper: "py-fs-3",
};

// Layout Bar Variants
const layoutBarVariants = cva("box-col 2xs:flex-row 2xs:flex-wrap", {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
    space: layoutBarSpace,
  },
  defaultVariants: {
    space: "base",
  },
});

// Layout Bar Primitive Types
type LayoutBarVariantProps = VariantProps<typeof layoutBarVariants>;
type LayoutBarProps<T extends React.ElementType = "div"> = LayoutProps<T> &
  LayoutBarVariantProps;

// Layout Bar Primitive Component
function LayoutBar<T extends React.ElementType = "div">({
  as = "div",
  className,
  radius,
  shadow,
  space,
  ...props
}: LayoutBarProps<T>) {
  return (
    <Element
      data-slot="layout-bar"
      as={as}
      className={cn(
        layoutBarVariants({
          radius,
          shadow,
          space,
          className,
        })
      )}
      {...props}
    />
  );
}

// Layout Primitive Exports
export {
  Layout,
  LayoutBar,
  LayoutContainer,
  layoutRadius,
  layoutShadow,
  layoutContainerSpace,
  layoutContainerVariant,
  layoutContainerVariants,
  layoutBarSpace,
  layoutBarVariants,
  layoutVariants,
};

export type { LayoutBarProps, LayoutContainerProps, LayoutProps };
