import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';

// TODO:
// - Add indicator wrapper slot element (button or div)
// -- update indicatorVariants to indicatorWrapperVariants
// -- add additional indicatorVariants (i.e. color, space, etc.)
// - Replace size-fs-* with new size-fs-icon-* (need to update variables and stylesheets)

const indicatorBase =
  "box-border inline-flex shrink-0 [&_svg:not([class*='size-'])]:size-[1em]";

const indicatorRadius = {
  sm: 'rounded-action-xs',
  base: 'rounded-action-sm',
  md: 'rounded-action-md',
  lg: 'rounded-action-lg',
  full: 'rounded-full',
  none: 'rounded-none',
  unset: '',
};

const indicatorShadow = {
  sm: 'shadow-2xs',
  base: 'shadow-xs',
  md: 'shadow-sm',
  lg: 'shadow-md',
  full: 'shadow-lg',
  none: 'shadow-none',
  unset: '',
};

const indicatorSize = {
  sm: 'size-fs-4',
  base: 'size-fs-5',
  md: 'size-fs-6',
  lg: 'size-fs-7',
  full: 'size-fs-10',
  none: 'size-auto',
  unset: '',
};

const indicatorVariants = cva(indicatorBase, {
  variants: {
    radius: indicatorRadius,
    shadow: indicatorShadow,
    size: indicatorSize,
  },
  defaultVariants: {
    radius: 'base',
    shadow: 'base',
    size: 'base',
  },
});

type IndicatorVariantProps = VariantProps<typeof indicatorVariants>;
type IndicatorProps<T extends React.ElementType = 'span'> = ElementProps<T> &
  IndicatorVariantProps;

function Indicator<T extends React.ElementType = 'span'>({
  as = 'span',
  className,
  radius,
  shadow,
  size,
  ...props
}: IndicatorProps<T>) {
  return (
    <Element
      data-slot='indicator'
      as={as}
      className={cn(indicatorVariants({ radius, shadow, size, className }))}
      {...props}
    />
  );
}

export {
  Indicator,
  indicatorBase,
  indicatorRadius,
  indicatorShadow,
  indicatorSize,
  indicatorVariants,
};

export type { IndicatorProps };
