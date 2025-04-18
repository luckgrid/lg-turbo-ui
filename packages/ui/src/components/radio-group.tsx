'use client';

import * as React from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { CircleIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';
import {
  indicatorBase,
  indicatorRadius,
  indicatorShadow,
  indicatorSize,
  indicatorVariant,
} from '@workspace/ui/primitives/indicator';

// Radio Group Component

const radioGroupBase = 'box-border grid';

const radioGroupRadius = {
  ...indicatorRadius,
};

const radioGroupSize = {
  ...indicatorSize,
  base: 'gap-fs-1',
  sm: 'gap-fs-0-5',
  md: 'gap-fs-2',
  lg: 'gap-fs-3',
  full: 'gap-fs-4',
};

const radioGroupShadow = {
  ...indicatorShadow,
};

const radioGroupVariants = cva(radioGroupBase, {
  variants: {
    radius: radioGroupRadius,
    size: radioGroupSize,
    shadow: radioGroupShadow,
  },
  defaultVariants: {
    size: 'base',
  },
});

type RadioGroupVariantProps = VariantProps<typeof radioGroupVariants>;

type RadioGroupProps = RadioGroupVariantProps &
  React.ComponentProps<typeof RadioGroupPrimitive.Root>;

function RadioGroup({
  className,
  radius,
  size,
  shadow,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      className={cn(radioGroupVariants({ radius, size, shadow, className }))}
      {...props}
    />
  );
}

// Radio Group Item Component

const radioGroupItemBase = [indicatorBase, indicatorVariant.radio];

const radioGroupItemRadius = {
  ...indicatorRadius,
};

const radioGroupItemShadow = {
  ...indicatorShadow,
};

const radioGroupItemSize = {
  ...indicatorSize,
  sm: [
    indicatorSize.sm,
    "size-fs-3 [&_svg:not([class*='size-'])]:size-fs-0-5 border-1",
  ],
  base: [
    indicatorSize.base,
    "size-fs-4 [&_svg:not([class*='size-'])]:size-fs-1 border-(length:--fs-0-25)",
  ],
  md: [
    indicatorSize.md,
    "size-fs-5 [&_svg:not([class*='size-'])]:size-fs-2 border-(length:--fs-0-375)",
  ],
  lg: [
    indicatorSize.lg,
    "size-fs-6 [&_svg:not([class*='size-'])]:size-fs-3 border-(length:--fs-0-5)",
  ],
  full: [
    indicatorSize.full,
    "size-fs-7 [&_svg:not([class*='size-'])]:size-fs-4 border-(length:--fs-0-625)",
  ],
};

const radioGroupItemVariants = cva(radioGroupItemBase, {
  variants: {
    radius: radioGroupItemRadius,
    shadow: radioGroupItemShadow,
    size: radioGroupItemSize,
  },
  defaultVariants: {
    radius: 'full',
    size: 'base',
    shadow: 'base',
  },
});

type RadioGroupItemVariantProps = VariantProps<typeof radioGroupItemVariants>;

type RadioGroupItemProps = RadioGroupItemVariantProps &
  React.ComponentProps<typeof RadioGroupPrimitive.Item>;

function RadioGroupItem({
  className,
  radius,
  size,
  shadow,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      className={cn(
        radioGroupItemVariants({ radius, size, shadow, className })
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='relative flex items-center justify-center'
      >
        <CircleIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
