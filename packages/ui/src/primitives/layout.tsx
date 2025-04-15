import { cn } from '@workspace/ui/lib/utils';
import {
  boxBase,
  boxRadius,
  boxShadow,
  boxSize,
} from '@workspace/ui/primitives/box';
import { Element } from '@workspace/ui/primitives/element';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import type { ElementProps } from '@workspace/ui/primitives/element';
import type { VariantProps } from 'class-variance-authority';

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

// Layout Variant Properties - to modify the style variants of a layout primitive
const layoutVariant = {
  base: '',
  content: '',
  container: '',
  wrapper: '',
};

// Layout Variants - style variants for the layout primitive
const layoutVariants = cva(layoutBase, {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
    size: layoutSize,
    variant: layoutVariant,
  },
  defaultVariants: {
    size: 'base',
    variant: 'base',
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
  variant,
  ...props
}: LayoutProps<T>) {
  return (
    <Element
      data-slot="layout"
      as={as}
      className={cn(
        layoutVariants({ radius, size, shadow, variant, className }),
      )}
      {...props}
    />
  );
}

// Layout Primitive Exports
export {
  Layout,
  layoutRadius,
  layoutShadow,
  layoutSize,
  layoutVariant,
  layoutVariants,
};
export type { LayoutProps };
