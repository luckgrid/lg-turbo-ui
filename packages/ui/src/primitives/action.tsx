import { cn } from '@workspace/ui/lib/utils';
import { boxRadius, boxShadow, boxSize } from '@workspace/ui/primitives/box';
import { Element } from '@workspace/ui/primitives/element';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import type { ElementProps } from '@workspace/ui/primitives/element';
import type { VariantProps } from 'class-variance-authority';

// Action Base Styles - to set base action styles
const actionBase = 'inline-flex';

// Action Size Properties - to modify the size of an action primitive
const actionSize = {
  ...boxSize,
  base: 'gap-fs-0-75',
  sm: 'gap-fs-0-5',
  md: 'gap-fs-1',
  lg: 'gap-fs-2',
  full: 'gap-fs-3',
  unset: '',
};

// Action Radius Properties - to modify the border radius of an action primitive
const actionRadius = {
  ...boxRadius,
};

// Action Shadow Properties - to modify the shadow of an action primitive
const actionShadow = {
  ...boxShadow,
};

// Action Variant Properties - to modify the style variants of an action primitive
const actionVariant = {
  base: '',
  content: '',
  group: '',
  wrapper: '',
};

// Action Variants - style variants for the action primitive
const actionVariants = cva(actionBase, {
  variants: {
    radius: actionRadius,
    shadow: actionShadow,
    size: actionSize,
    variant: actionVariant,
  },
  defaultVariants: {
    size: 'base',
    variant: 'base',
  },
});

// Action Primitives Types
type ActionVariantProps = VariantProps<typeof actionVariants>;
type ActionPrimitiveProps<T extends React.ElementType = 'div'> =
  ElementProps<T> & ActionVariantProps;

// Action Primitive Component
function ActionPrimitive<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  radius,
  size,
  variant,
  ...props
}: ActionPrimitiveProps<T>) {
  return (
    <Element
      data-slot="action"
      as={as}
      className={cn(actionVariants({ radius, size, variant, className }))}
      {...props}
    />
  );
}

// Action Primitive Exports
export { ActionPrimitive, actionSize, actionVariants };
