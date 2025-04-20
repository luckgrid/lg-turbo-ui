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
  base: 'gap-fs-0-25 font-medium text-label',
  sm: 'gap-fs-0-25 font-normal text-caption',
  md: 'gap-fs-0-375 font-medium text-body',
  lg: 'gap-fs-0-5 font-semibold text-subheading',
  full: 'gap-fs-0-75 font-semibold text-subtitle',
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
    'items-center gap-fs-0-25',
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
