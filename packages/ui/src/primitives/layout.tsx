import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';

// Layout Base Styles - to set base layout styles
const layoutBase = 'box flex-col';

// Layout Radius Properties - to modify the border radius of a layout primitive
const layoutRadius = {
  sm: 'rounded-layout-xs',
  base: 'rounded-layout-sm',
  md: 'rounded-layout-md',
  lg: 'rounded-layout-lg',
  full: 'rounded-full',
  none: 'rounded-none',
  unset: '',
};

// Layout Shadow Properties - to modify the shadow of a layout primitive
const layoutShadow = {
  sm: 'shadow-sm',
  base: 'shadow-md',
  md: 'shadow-lg',
  lg: 'shadow-xl',
  full: 'shadow-2xl',
  none: 'shadow-none',
  unset: '',
};

// Layout Size Properties - to modify the size of a layout primitive
const layoutSize = {
  sm: '',
  base: '',
  md: '',
  lg: '',
  full: '',
  none: '',
  unset: '',
};

// Layout Variants
const layoutVariants = cva(layoutBase, {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
    size: layoutSize,
  },
});

// Layout Primitives Types
type LayoutVariantProps = VariantProps<typeof layoutVariants>;
type LayoutProps<T extends React.ElementType = 'div'> = ElementProps<T> &
  LayoutVariantProps;

// Layout Primitive Component
function Layout<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  radius,
  shadow,
  size,
  ...props
}: LayoutProps<T>) {
  return (
    <Element
      data-slot='layout'
      as={as}
      className={cn(layoutVariants({ radius, size, shadow, className }))}
      {...props}
    />
  );
}

// Layout Container Space Properties - to modify the spacing styles of a layout container
const layoutContainerSpace = {
  base: 'gap-fs-xl-2 px-layout-sm',
  wrapper: 'gap-fs-xl-2 py-layout-sm',
  frame: 'gap-fs-xl-2 p-layout-sm',
  none: 'gap-0 p-0',
  unset: '',
};

// Layout Container Variant Properties - to modify the variant styles of a layout container
const layoutContainerVariant = {
  base: 'container',
  wrapper: '',
};

// Layout Container Variant
const layoutContainerVariants = cva(layoutBase, {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
    size: layoutSize,
    space: layoutContainerSpace,
    variant: layoutContainerVariant,
  },
  defaultVariants: {
    size: 'base',
    space: 'base',
    variant: 'base',
  },
});

// Layout Container Primitive Types
type LayoutContainerVariantProps = VariantProps<typeof layoutContainerVariants>;
type LayoutContainerProps<T extends React.ElementType = 'div'> =
  LayoutProps<T> & LayoutContainerVariantProps;

// Layout Container Primitive Component
function LayoutContainer<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  radius,
  shadow,
  size,
  space,
  variant,
  ...props
}: LayoutContainerProps<T>) {
  return (
    <Element
      data-slot='layout-container'
      as={as}
      className={cn(
        layoutContainerVariants({
          radius,
          size,
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

// Layout Bar Base Styles - to set base layout bar styles
const layoutBarBase = [layoutBase, '2xs:flex-row 2xs:flex-wrap'];

// Layout Bar Space Properties - to modify the spacing styles of a layout bar primitive
const layoutBarSpace = {
  base: 'gap-fs-4 2xs:gap-fs-3 md:gap-fs-2',
  container: 'gap-x-fs-6 gap-y-fs-3 px-fs-6',
  wrapper: 'py-fs-3',
};

// Layout Bar Variants
const layoutBarVariants = cva(layoutBarBase, {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
    size: layoutSize,
    space: layoutBarSpace,
  },
  defaultVariants: {
    size: 'base',
    space: 'base',
  },
});

// Layout Bar Primitive Types
type LayoutBarVariantProps = VariantProps<typeof layoutBarVariants>;
type LayoutBarProps<T extends React.ElementType = 'div'> = LayoutProps<T> &
  LayoutBarVariantProps;

// Layout Bar Primitive Component
function LayoutBar<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  radius,
  shadow,
  size,
  space,
  ...props
}: LayoutBarProps<T>) {
  return (
    <Element
      data-slot='layout-bar'
      as={as}
      className={cn(
        layoutBarVariants({
          radius,
          shadow,
          size,
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
  layoutSize,
  layoutContainerSpace,
  layoutContainerVariant,
  layoutContainerVariants,
  layoutBarBase,
  layoutBarSpace,
  layoutBarVariants,
  layoutVariants,
};

export type { LayoutBarProps, LayoutContainerProps, LayoutProps };
