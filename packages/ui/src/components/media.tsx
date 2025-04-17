import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { DisplayProps } from '@workspace/ui/primitives/display';
import {
  Display,
  displayRadius,
  displayShadow,
  displaySize,
} from '@workspace/ui/primitives/display';

const imageVariants = cva('', {
  variants: {
    radius: displayRadius,
    shadow: displayShadow,
    size: displaySize,
    variant: {
      base: '',
      icon: "[&:not([class*='size-'])]:size-[1em]",
    },
  },
  defaultVariants: {
    radius: 'base',
    size: 'base',
    variant: 'base',
  },
});

type ImageVariantProps = VariantProps<typeof imageVariants>;

type ImageProps<T extends React.ElementType = 'div'> = DisplayProps<T> &
  ImageVariantProps;

function Image<T extends React.ElementType = 'img'>({
  as = 'img',
  radius,
  shadow,
  size,
  variant,
  className,
  ...props
}: ImageProps<T>) {
  return (
    <Display
      data-slot='image'
      as={as}
      className={cn(
        imageVariants({ radius, shadow, size, variant, className })
      )}
      {...props}
    />
  );
}

export { Image };
export type { ImageProps };
