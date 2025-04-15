import { cn } from '@workspace/ui/lib/utils';
import {
  Layout,
  layoutRadius,
  layoutShadow,
  layoutSize,
  layoutVariant,
} from '@workspace/ui/primitives/layout';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import type { LayoutProps } from '@workspace/ui/primitives/layout';
import type { VariantProps } from 'class-variance-authority';

const sectionRadius = {
  ...layoutRadius,
};

const sectionShadow = {
  ...layoutShadow,
};

const sectionSize = {
  ...layoutSize,
};

const sectionVariant = {
  ...layoutVariant,
};

const sectionVariants = cva('', {
  variants: {
    radius: sectionRadius,
    shadow: sectionShadow,
    size: sectionSize,
    variant: sectionVariant,
  },
  defaultVariants: {
    size: 'base',
    variant: 'base',
  },
});

type SectionVariantProps = VariantProps<typeof sectionVariants>;

type SectionProps<T extends React.ElementType = 'section'> = LayoutProps<T> &
  SectionVariantProps;

function Section<T extends React.ElementType = 'section'>({
  as = 'section',
  className,
  radius,
  shadow,
  size,
  variant,
  ...props
}: SectionProps<T>) {
  return (
    <Layout
      as={as}
      className={cn(
        sectionVariants({ radius, size, shadow, variant, className }),
      )}
      {...props}
    />
  );
}

export {
  Section,
  sectionRadius,
  sectionShadow,
  sectionSize,
  sectionVariant,
  sectionVariants,
};

export type { SectionProps };
