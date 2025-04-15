'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@workspace/ui/lib/utils';
import {
  indicatorBase,
  indicatorRadius,
  indicatorSize,
  indicatorVariant,
} from '@workspace/ui/primitives/indicator';
import { cva } from 'class-variance-authority';
import { CheckIcon } from 'lucide-react';
import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

const checkboxVariants = cva([indicatorBase, indicatorVariant.checkbox], {
  variants: {
    radius: indicatorRadius,
    size: {
      ...indicatorSize,
      base: [
        indicatorSize.base,
        "[&_svg:not([class*='size-'])]:size-fs-2 border-(length:--fs-0-25)",
      ],
      sm: [
        indicatorSize.sm,
        "[&_svg:not([class*='size-'])]:size-fs-1 border-1",
      ],
      md: [
        indicatorSize.md,
        "[&_svg:not([class*='size-'])]:size-fs-3 border-(length:--fs-0-375)",
      ],
      lg: [
        indicatorSize.lg,
        "[&_svg:not([class*='size-'])]:size-fs-4 border-(length:--fs-0-5)",
      ],
      full: [
        indicatorSize.full,
        "[&_svg:not([class*='size-'])]:size-fs-5 border-(length:--fs-0-625)",
      ],
    },
    // Style Modifiers
    hasShadow: {
      true: 'shadow-sm',
    },
  },
  compoundVariants: [
    // Shadow Size Modifiers
    {
      size: ['unset', 'sm'],
      hasShadow: true,
      className: 'shadow-sm',
    },
    {
      size: ['base', 'md'],
      hasShadow: true,
      className: 'shadow-md',
    },
    {
      size: ['lg', 'full'],
      hasShadow: true,
      className: 'shadow-lg',
    },
  ],
  defaultVariants: {
    radius: 'base',
    size: 'base',
  },
});

type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;

type CheckboxProps = CheckboxVariantProps &
  React.ComponentProps<typeof CheckboxPrimitive.Root>;

function Checkbox({
  className,
  radius,
  size,
  hasShadow,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        checkboxVariants({
          radius,
          size,
          hasShadow,
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
