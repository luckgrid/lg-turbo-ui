import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import {
  boxBase,
  boxRadius,
  boxShadow,
  boxSize,
} from '@workspace/ui/primitives/box';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';

// TODO:
// - create containerVariants to modify container spacing styles using variant props
// - create additional layout primitives extending from layoutVariants (i.e. bar, content, etc...)

// Layout Base Styles - to set base layout styles
const layoutBase = [boxBase, 'flex-col'];

// Layout Radius Properties - to modify the border radius of a layout primitive
const layoutRadius = {
  ...boxRadius,
  base: 'rounded-fs-2xl',
  sm: 'rounded-fs-xl',
  md: 'rounded-fs-3xl',
  lg: 'rounded-fs-4xl',
};

// Layout Shadow Properties - to modify the shadow of a layout primitive
const layoutShadow = {
  ...boxShadow,
};

// Layout Size Properties - to modify the size of a layout primitive
const layoutSize = {
  ...boxSize,
};

// Layout Variants - style variants for the layout primitive
const layoutVariants = cva(layoutBase, {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
    size: layoutSize,
  },
  defaultVariants: {
    size: 'base',
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

// Layout Container

function LayoutContainer<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  ...props
}: LayoutProps<T>) {
  return <Layout as={as} className={cn('container', className)} {...props} />;
}

// Layout Bar

function LayoutBar<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  ...props
}: LayoutProps<T>) {
  return (
    <Layout
      as={as}
      className={cn(
        'items-center gap-fs-4 2xs:flex-row 2xs:flex-wrap 2xs:gap-fs-3 md:gap-fs-2',
        className
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
  layoutVariants,
};

export type { LayoutProps };
