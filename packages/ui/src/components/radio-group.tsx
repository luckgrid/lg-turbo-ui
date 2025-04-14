'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@workspace/ui/lib/utils';
import { boxBase } from '@workspace/ui/primitives/box';
import {
  indicatorBase,
  indicatorShape,
  indicatorSize,
  indicatorVariant,
} from '@workspace/ui/primitives/indicator';
import { cva } from 'class-variance-authority';
import { CircleIcon } from 'lucide-react';
import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

// Radio Group Component

const radioGroupVariants = cva([boxBase, 'grid gap-fs-1'], {
  variants: {
    size: {
      sm: 'gap-fs-0-5',
      md: 'gap-fs-2',
      lg: 'gap-fs-3',
    },
  },
});

type RadioGroupVariantProps = VariantProps<typeof radioGroupVariants>;

type RadioGroupProps = RadioGroupVariantProps &
  React.ComponentProps<typeof RadioGroupPrimitive.Root>;

function RadioGroup({ className, size, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(radioGroupVariants({ size, className }))}
      {...props}
    />
  );
}

// Radio Group Item Component

const radioGroupItemVariants = cva([indicatorBase, indicatorVariant.radio], {
  variants: {
    // Style Variants
    shape: {
      circle: indicatorShape.circle,
      square: indicatorShape.square,
    },
    size: {
      sm: [
        indicatorSize.sm,
        "size-fs-3 [&_svg:not([class*='size-'])]:size-fs-0-5 border-1",
      ],
      md: [
        indicatorSize.md,
        "size-fs-5 [&_svg:not([class*='size-'])]:size-fs-2 border-(length:--fs-0-25)",
      ],
      lg: [
        indicatorSize.lg,
        "size-fs-6 [&_svg:not([class*='size-'])]:size-fs-3 border-(length:--fs-0-375)",
      ],
    },
    // Style Modifiers
    noShadow: {
      false: 'shadow-sm',
    },
  },
  defaultVariants: {
    shape: 'circle',
    noShadow: false,
  },
});

type RadioGroupItemVariantProps = VariantProps<typeof radioGroupItemVariants>;

type RadioGroupItemProps = RadioGroupItemVariantProps &
  React.ComponentProps<typeof RadioGroupPrimitive.Item>;

function RadioGroupItem({
  className,
  shape,
  size,
  noShadow,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        radioGroupItemVariants({ shape, size, noShadow, className }),
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
