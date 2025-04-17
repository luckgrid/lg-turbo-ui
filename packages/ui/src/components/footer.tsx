import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { LayoutProps } from '@workspace/ui/primitives/layout';
import {
  Layout,
  layoutRadius,
  layoutShadow,
  layoutSize,
} from '@workspace/ui/primitives/layout';

const footerVariants = cva('', {
  variants: {
    radius: layoutRadius,
    shadow: layoutShadow,
    size: layoutSize,
  },
  defaultVariants: {
    size: 'base',
  },
});

type FooterVariantProps = VariantProps<typeof footerVariants>;

type FooterProps<T extends React.ElementType = 'footer'> = LayoutProps<T> &
  FooterVariantProps;

function Footer({
  as = 'footer',
  className,
  radius,
  shadow,
  size,
  ...props
}: FooterProps) {
  return (
    <Layout
      as={as}
      data-slot='footer'
      className={cn(footerVariants({ radius, size, shadow, className }))}
      {...props}
    />
  );
}

export { Footer, footerVariants };
export type { FooterProps };
