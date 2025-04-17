import { cn } from '@workspace/ui/lib/utils';
import { boxRadius, boxShadow, boxSize } from '@workspace/ui/primitives/box';
import { Element } from '@workspace/ui/primitives/element';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import type { ElementProps } from '@workspace/ui/primitives/element';
import type { VariantProps } from 'class-variance-authority';

// Action Styles - to set style patterns for actions

const actionDisabled = 'disabled:pointer-events-none disabled:opacity-50';

const actionIcon =
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1em]";

// Action Outline Styles

const actionOutlineColor = {
  base: ['outline-ring/75', 'ring-ring/25'],
  accent: ['outline-accent/75', 'ring-accent/25'],
  neutral: ['outline-neutral/75', 'ring-neutral/25'],
  primary: ['outline-primary/75', 'ring-primary/25'],
  secondary: ['outline-secondary/75', 'ring-secondary/25'],
  danger: ['outline-danger/75', 'ring-danger/25'],
};

const actionOutline = {
  sm: ['outline-offset-1 focus-visible:outline-1', 'focus-visible:ring-3'],
  base: [
    'outline-offset-(--fs-0-25) focus-visible:outline-(length:--fs-0-25)',
    'focus-visible:ring-4',
  ],
  md: [
    'outline-offset-(--fs-0-375) focus-visible:outline-(length:--fs-0-375)',
    'focus-visible:ring-4 md:focus-visible:ring-5 xl:focus-visible:ring-6',
  ],
  lg: [
    'outline-offset-(--fs-0-5) focus-visible:outline-(length:--fs-0-5)',
    'focus-visible:ring-5 md:focus-visible:ring-7 xl:focus-visible:ring-9',
  ],
  full: [
    'outline-offset-(--fs-0-75) focus-visible:outline-(length:--fs-0-75)',
    'focus-visible:ring-6 md:focus-visible:ring-8 xl:focus-visible:ring-10',
  ],
};

const invalidActionOutline = [
  'aria-invalid:focus-visible:outline-0',
  'aria-invalid:focus-visible:ring-0',
];

// Action Transition Styles
const actionTransition =
  'transition-[background-color,border-color,color,box-shadow,opacity,text-decoration-color,fill,stroke]';

// Base Action Styles
const actionBase = [
  'cursor-pointer',
  actionDisabled,
  actionIcon,
  actionTransition,
  ...actionOutline.base,
  ...actionOutlineColor.base,
  ...invalidActionOutline,
];

// Action Size Properties - to modify the size of an action primitive
const actionSize = {
  ...boxSize,
  base: [...actionOutline.base, 'gap-fs-0-75'],
  sm: [...actionOutline.sm, 'gap-fs-0-5'],
  md: [...actionOutline.md, 'gap-fs-1'],
  lg: [...actionOutline.lg, 'gap-fs-2'],
  full: [...actionOutline.full, 'gap-fs-3'],
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
  base: 'inline-flex items-center justify-center',
  content: [
    'tracking-[unset] leading-[inherit]',
    'outline-offset-(--fs-0-5) focus-visible:outline-(length:--fs-0-25) focus-visible:ring-0',
  ],
  group: 'group flex-row flex-wrap',
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
type ActionProps<T extends React.ElementType = 'div'> = ElementProps<T> &
  ActionVariantProps;

// Action Primitive Component
function Action<T extends React.ElementType = 'div'>({
  as = 'div',
  className,
  radius,
  shadow,
  size,
  variant,
  ...props
}: ActionProps<T>) {
  return (
    <Element
      data-slot="action"
      as={as}
      className={cn(
        actionVariants({ radius, shadow, size, variant, className }),
      )}
      {...props}
    />
  );
}

// Action Primitive Exports
export {
  Action,
  actionBase,
  actionDisabled,
  actionIcon,
  actionOutline,
  actionOutlineColor,
  actionRadius,
  actionShadow,
  actionSize,
  actionTransition,
  actionVariant,
  actionVariants,
  invalidActionOutline,
};

export type { ActionProps };
