'use client';

import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import { formTextSize, formTextStatus } from '@workspace/ui/primitives/form';

const labelBase = 'inline-flex select-none transition-[color]';

const labelSize = {
  ...formTextSize,
  base: 'gap-line-sm font-medium text-label',
  sm: 'gap-line-sm font-normal text-caption',
  md: 'gap-line-md font-medium text-body',
  lg: 'gap-line-lg font-semibold text-subheading',
  full: 'gap-line-2xl font-semibold text-subtitle',
};

const labelStatus = {
  ...formTextStatus,
  base: 'text-border',
  error: 'text-danger',
};

const labelVariant = {
  base: '',
  indicator: 'peer-disabled:cursor-not-allowed',
};

const labelVariants = cva(
  [
    labelBase,
    'items-center gap-line-sm',
    'data-[error=true]:text-danger',
    'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
    'peer-disabled:opacity-50',
  ],
  {
    variants: {
      // Style Variants
      size: labelSize,
      status: labelStatus,
      variant: labelVariant,
      isRequired: {
        true: "after:content-['*'] after:text-danger",
      },
    },
    compoundVariants: [
      {
        status: 'disabled',
        variant: 'indicator',
        className: 'cursor-not-allowed',
      },
    ],
  }
);

type LabelVariantProps = VariantProps<typeof labelVariants>;

type LabelProps = LabelVariantProps &
  React.ComponentProps<typeof LabelPrimitive.Root>;

function Label({
  className,
  size,
  status,
  variant,
  isRequired,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn(
        labelVariants({
          size,
          status,
          variant,
          isRequired,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Label };
export type { LabelProps, LabelVariantProps };
