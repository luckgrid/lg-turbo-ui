import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';

// Box Base Styles - to set base box styles
const boxBase = 'box-border flex';

// Box Border Styles - to modify the border of a box
const boxBorder = {
  sm: 'border-1',
  base: 'border-(length:--fs-0-25)',
  md: 'border-(length:--fs-0-375)',
  lg: 'border-(length:--fs-0-5)',
  full: 'border-(length:--fs-0-75)',
  unset: '',
};

// Box Radius Properties - to modify the border radius of a box
const boxRadius = {
  sm: 'rounded-fs-sm',
  base: 'rounded-fs-md',
  md: 'rounded-fs-lg',
  lg: 'rounded-fs-xl',
  full: 'rounded-full',
  none: 'rounded-none',
  unset: '',
};

// Box Shadow Properties - to modify the shadow of a box
const boxShadow = {
  sm: 'shadow-sm',
  base: 'shadow-md',
  md: 'shadow-lg',
  lg: 'shadow-xl',
  full: 'shadow-2xl',
  none: 'shadow-none',
  unset: '',
};

// Box Size Properties - to modify the size of a box
const boxSize = {
  sm: '',
  base: '',
  md: '',
  lg: '',
  full: '',
  none: '',
  unset: '',
};

// Box Variants - style variants for the box primitive
const boxVariants = cva(boxBase, {
  variants: {
    radius: boxRadius,
    shadow: boxShadow,
    size: boxSize,
  },
  defaultVariants: {
    size: 'base',
  },
});

// Box Primitives Types
type BoxVariantProps = VariantProps<typeof boxVariants>;
type BoxProps<T extends React.ElementType = 'div'> = ElementProps<T> &
  BoxVariantProps;

// Box Primitive Component
function Box<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  radius,
  shadow,
  size,
  ...props
}: BoxProps<T>) {
  return (
    <Element
      data-slot='box-primitive'
      as={as}
      className={cn(
        boxVariants({
          radius,
          shadow,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

// Box Primitive Exports
export { Box, boxBase, boxBorder, boxRadius, boxShadow, boxSize, boxVariants };
export type { BoxProps };
