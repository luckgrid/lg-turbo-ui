'use client';

import * as React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';
import type { InputIndicatorVariantProps } from '@workspace/ui/primitives/form';
import { inputIndicatorVariants } from '@workspace/ui/primitives/form';

type CheckboxProps = Omit<InputIndicatorVariantProps, 'variant'> &
  React.ComponentProps<typeof CheckboxPrimitive.Root>;

function Checkbox({
  className,
  radius,
  shadow,
  size,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        inputIndicatorVariants({
          radius,
          shadow,
          size,
          variant: 'checkbox',
          className,
        })
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='box-center'
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
