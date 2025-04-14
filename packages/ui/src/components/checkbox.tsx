'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@workspace/ui/lib/utils';
import {
  indicatorBase,
  indicatorShape,
  indicatorSize,
  indicatorVariant,
} from '@workspace/ui/primitives/indicator';
import { cva } from 'class-variance-authority';
import { CheckIcon } from 'lucide-react';
import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

const checkboxVariants = cva([indicatorBase, indicatorVariant.checkbox], {
  variants: {
    // Style Variants
    shape: indicatorShape,
    size: {
      sm: [
        indicatorSize.sm,
        "[&_svg:not([class*='size-'])]:size-fs-1 border-1",
      ],
      md: [
        indicatorSize.md,
        "[&_svg:not([class*='size-'])]:size-fs-3 border-(length:--fs-0-25)",
      ],
      lg: [
        indicatorSize.lg,
        "[&_svg:not([class*='size-'])]:size-fs-4 border-(length:--fs-0-375)",
      ],
    },
    // Style Modifiers
    noShadow: {
      false: 'shadow-sm',
    },
  },
  compoundVariants: [
    // Rounded Shape Size Variants
    {
      shape: 'rounded',
      size: 'sm',
      className: 'rounded-fs-sm',
    },
    {
      shape: 'rounded',
      size: 'md',
      className: 'rounded-fs-md',
    },
    {
      shape: 'rounded',
      size: 'lg',
      className: 'rounded-fs-lg',
    },
    // Shadow Size Modifiers
    {
      noShadow: false,
      size: 'sm',
      className: 'shadow-xs',
    },
    {
      noShadow: false,
      size: 'md',
      className: 'shadow-md',
    },
    {
      noShadow: false,
      size: 'lg',
      className: 'shadow-lg',
    },
  ],
  defaultVariants: {
    noShadow: false,
  },
});

type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;

type CheckboxProps = CheckboxVariantProps &
  React.ComponentProps<typeof CheckboxPrimitive.Root>;

function Checkbox({
  className,
  shape,
  size,
  noShadow,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        checkboxVariants({
          shape,
          size,
          noShadow,
          className,
        }),
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
