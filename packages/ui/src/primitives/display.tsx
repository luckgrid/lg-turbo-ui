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

// Display Base Styles - to set base display styles
const displayBase = [boxBase, 'flex-col'];

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

// Display Variants - style variants for the display primitive
const displayVariants = cva(displayBase, {
  variants: {
    radius: displayRadius,
    shadow: displayShadow,
    size: displaySize,
  },
  defaultVariants: {
    size: 'base',
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
  ...props
}: DisplayProps<T>) {
  return (
    <Element
      data-slot='display'
      as={as}
      className={cn(displayVariants({ radius, shadow, size, className }))}
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
  displayVariants,
};

export type { DisplayProps };
