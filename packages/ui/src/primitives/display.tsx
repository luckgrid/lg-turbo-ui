import { cn } from '@workspace/ui/lib/utils';
import {
  boxBase,
  boxRadius,
  boxShadow,
  boxSize,
} from '@workspace/ui/primitives/box';
import { Element } from '@workspace/ui/primitives/element';
import { layoutVariant } from '@workspace/ui/primitives/layout';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import type { ElementProps } from '@workspace/ui/primitives/element';
import type { VariantProps } from 'class-variance-authority';

// Display Base Styles - to set base display styles
const displayBase = [...boxBase, 'flex-col'];

// Display Radius Properties - to modify the border radius of a display primitive
const displayRadius = {
  ...boxRadius,
  base: 'rounded-fs-lg',
  sm: 'rounded-fs-md',
  md: 'rounded-fs-xl',
  lg: 'rounded-fs-2xl',
};

// Display Shadow Properties - to modify the shadow of a display primitive
const displayShadow = {
  ...boxShadow,
};

// Display Size Properties - to modify the size of a display primitive
const displaySize = {
  ...boxSize,
};

// Display Variant Properties - to modify the style variants of a display primitive
const displayVariant = {
  ...layoutVariant,
};

// Display Variants - style variants for the display primitive
const displayVariants = cva(displayBase, {
  variants: {
    radius: displayRadius,
    shadow: displayShadow,
    size: displaySize,
    variant: displayVariant,
  },
  defaultVariants: {
    size: 'base',
    variant: 'base',
  },
});

// Display Primitives Types
type DisplayVariantProps = VariantProps<typeof displayVariants>;
type DisplayProps<T extends React.ElementType = 'div'> = ElementProps<T> &
  DisplayVariantProps;

// Display Primitive Component
function Display<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  radius,
  shadow,
  size,
  variant,
  ...props
}: DisplayProps<T>) {
  return (
    <Element
      data-slot="display"
      as={as}
      className={cn(
        displayVariants({ radius, shadow, size, variant, className }),
      )}
      {...props}
    />
  );
}

// Display Primitive Exports
export {
  Display,
  displayBase,
  displayRadius,
  displayShadow,
  displaySize,
  displayVariant,
  displayVariants,
};

export type { DisplayProps };
