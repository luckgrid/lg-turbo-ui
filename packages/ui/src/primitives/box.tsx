import { cn } from '@workspace/ui/lib/utils';
import { Element } from '@workspace/ui/primitives/element';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import type { ElementProps } from '@workspace/ui/primitives/element';
import type { VariantProps } from 'class-variance-authority';

// Box Base Styles - to set base box styles
const boxBase = 'box-border flex';

// Box Radius Properties - to modify the border radius of a box
const boxRadius = {
  base: 'rounded-fs-md',
  sm: 'rounded-fs-sm',
  md: 'rounded-fs-lg',
  lg: 'rounded-fs-xl',
  full: 'rounded-full',
  none: 'rounded-none',
  unset: '',
};

// Box Shadow Properties - to modify the shadow of a box
const boxShadow = {
  base: 'shadow-md',
  sm: 'shadow-sm',
  md: 'shadow-lg',
  lg: 'shadow-xl',
  full: 'shadow-2xl',
  none: 'shadow-none',
  unset: '',
};

// Box Size Properties - to modify the size of a box
const boxSize = {
  base: '',
  sm: '',
  md: '',
  lg: '',
  full: '',
  none: '',
  unset: '',
};

// Box Variant Properties - to modify the style variants of a box
const boxVariant = {
  base: '',
  content: 'box-content',
};

// Box Variants - style variants for the box primitive
const boxVariants = cva(boxBase, {
  variants: {
    radius: boxRadius,
    shadow: boxShadow,
    size: boxSize,
    variant: boxVariant,
  },
  defaultVariants: {
    size: 'base',
    variant: 'base',
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
  variant,
  ...props
}: BoxProps<T>) {
  return (
    <Element
      data-slot="box-primitive"
      as={as}
      className={cn(
        boxVariants({
          radius,
          shadow,
          size,
          variant,
          className,
        }),
      )}
      {...props}
    />
  );
}

// Box Primitive Exports
export { Box, boxBase, boxRadius, boxShadow, boxSize, boxVariant, boxVariants };
export type { BoxProps };
