import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';

const imageVariants = cva('', {
  variants: {
    radius: {
      sm: 'rounded-fs-3',
      base: 'rounded-fs-4',
      md: 'rounded-fs-5',
      lg: 'rounded-fs-6',
      full: 'rounded-full',
      none: 'rounded-none',
      unset: '',
    },
    shadow: {
      sm: 'shadow-sm',
      base: 'shadow-md',
      md: 'shadow-lg',
      lg: 'shadow-xl',
      full: 'shadow-2xl',
      none: 'shadow-none',
      unset: '',
    },
    size: {
      sm: '',
      base: '',
      md: '',
      lg: '',
      full: '',
      none: '',
      unset: '',
    },
    variant: {
      base: '',
      icon: 'fluid-media',
    },
  },
  defaultVariants: {
    radius: 'base',
    size: 'base',
    variant: 'base',
  },
});

type ImageVariantProps = VariantProps<typeof imageVariants>;

type ImageProps<T extends React.ElementType = 'div'> = ElementProps<T> &
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
    <Element
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
