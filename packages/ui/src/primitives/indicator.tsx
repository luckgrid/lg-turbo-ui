import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { CheckIcon, CircleIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';
import {
  inputRadius,
  inputShadow,
  inputSize,
} from '@workspace/ui/primitives/input';

// TODO:
// - Move this code to components/action/indicator
// - Add indicator wrapper slot element (button or div)
// -- update indicatorVariants to indicatorWrapperVariants
// -- create new indicatorVariants to set indicator styles based on variant
// - Replace size-fs-* with new size-fs-icon-* (need to update variables and main stylesheets)

const indicatorBase = 'box-border inline-flex shrink-0';

const indicatorInput = [
  'transition-[background-color,border-color,color,box-shadow,opacity,fill,stroke]',
  'border-(length:--spacing-line-sm) border-border outline-offset-1 outline-ring/50 ring-ring/25 bg-input',
  'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  'active:not-disabled:motion-scale-in-90 active:not-disabled:motion-duration-300 active:not-disabled:motion-ease-spring-bouncy',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'focus-visible:outline-1 focus-visible:ring-3',
  'aria-invalid:border-danger focus-visible:aria-invalid:outline-danger/50 focus-visible:aria-invalid:ring-danger/25',
];

const indicatorRadius = {
  ...inputRadius,
};

const indicatorShadow = {
  ...inputShadow,
};

const indicatorSize = {
  ...inputSize,
  base: 'size-fs-3',
  sm: 'size-fs-2',
  md: 'size-fs-4',
  lg: 'size-fs-5',
  full: 'size-fs-6',
};

const indicatorVariant = {
  base: "[&_svg:not([class*='size-'])]:size-[1em]",
  checkbox: [
    indicatorInput,
    "peer items-center justify-center [&_svg:not([class*='size-'])]:size-fs-2",
  ],
  radio: [
    indicatorInput,
    'items-center justify-center',
    'text-primary aspect-square',
    'data-[state=checked]:bg-primary-foreground',
    "size-fs-4 [&_svg:not([class*='size-'])]:size-fs-2 [&_svg]:fill-primary",
  ],
};

const indicatorVariants = cva(indicatorBase, {
  variants: {
    radius: indicatorRadius,
    shadow: indicatorShadow,
    size: indicatorSize,
    variant: indicatorVariant,
  },
  defaultVariants: {
    radius: 'base',
    shadow: 'base',
    size: 'base',
    variant: 'base',
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
  variant,
  ...props
}: IndicatorProps<T>) {
  return (
    <Element
      data-slot='indicator'
      as={as}
      className={cn(
        indicatorVariants({ radius, shadow, size, variant, className })
      )}
      {...props}
    >
      {variant === 'radio' ? <CircleIcon /> : <CheckIcon />}
    </Element>
  );
}

export {
  Indicator,
  indicatorBase,
  indicatorInput,
  indicatorRadius,
  indicatorShadow,
  indicatorSize,
  indicatorVariant,
  indicatorVariants,
};

export type { IndicatorProps };
