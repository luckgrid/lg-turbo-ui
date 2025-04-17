import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import {
  boxBase,
  boxRadius,
  boxShadow,
  boxSize,
} from '@workspace/ui/primitives/box';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';
import { formStatus } from '@workspace/ui/primitives/form';

const inputBase = [
  boxBase,
  'w-full transition-[background-color,border-color,color,box-shadow,opacity,fill,stroke]',
  'outline-offset-1 outline-ring/75 border-border bg-input',
  'text-left text-pretty',
  'placeholder:text-neutral-foreground/50 placeholder:text-neutral-foreground/75',
  'selection:bg-primary selection:text-primary-foreground',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'focus-visible:border-ring focus-visible:outline-1',
  'aria-invalid:border-danger-1 focus-visible:aria-invalid:outline-danger-1/75',
];

const inputRadius = {
  ...boxRadius,
};

const inputShadow = {
  ...boxShadow,
};

const inputSize = {
  ...boxSize,
  base: 'gap-fs-0-75 px-fs-3 py-fs-1 border-(length:--fs-0-25) text-body',
  sm: 'gap-fs-0-5 px-fs-2 py-fs-1 border-1 text-label',
  md: 'gap-fs-0-75 px-fs-4 py-fs-2 border-(length:--fs-0-25) text-body',
  lg: 'gap-fs-1 px-fs-5 py-fs-3 border-(length:--fs-0-375) focus-visible:outline-(length:--fs-0-025) text-subheading',
  full: 'gap-fs-2 px-fs-6 py-fs-4 border-(length:--fs-0-5) text-subheading',
};

const inputStatus = {
  ...formStatus,
};

const inputVariant = {
  action: '',
  base: '',
  file: 'file:inline-flex file:text-foreground file:border-0 file:bg-transparent file:font-medium',
  select: [
    'items-center justify-between gap-fs-2',
    "hover:bg-input/80 data-[placeholder]:text-neutral-foreground/50 [&_svg:not([class*='text-'])]:text-neutral-foreground/50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:opacity-50 [&_svg:not([class*='size-'])]:size-fs-4 [&[data-state=open]>svg]:rotate-180",
  ],
  textarea: 'field-sizing-content min-h-25',
};

const inputVariants = cva(inputBase, {
  variants: {
    radius: inputRadius,
    shadow: inputShadow,
    size: inputSize,
    status: inputStatus,
    variant: inputVariant,
  },
  compoundVariants: [
    // Textarea Variant Size Modifiers
    {
      size: ['unset', 'sm'],
      variant: 'textarea',
      className: 'min-h-15',
    },
    {
      size: ['base', 'md'],
      variant: 'textarea',
      className: 'min-h-30',
    },
    {
      size: ['lg', 'full'],
      variant: 'textarea',
      className: 'min-h-40',
    },
  ],
  defaultVariants: {
    radius: 'base',
    shadow: 'base',
    size: 'base',
    variant: 'base',
  },
});

type InputVariantProps = VariantProps<typeof inputVariants>;

type InputProps<T extends React.ElementType = 'input'> = ElementProps<T> &
  InputVariantProps;

function Input<T extends React.ElementType = 'input'>({
  as = 'input',
  className,
  radius,
  size,
  shadow,
  status,
  variant,
  ...props
}: InputProps<T>) {
  return (
    <Element
      data-slot='input-primitive'
      as={as}
      className={cn(
        inputVariants({
          radius,
          size,
          shadow,
          status,
          variant,
          className,
        })
      )}
      {...props}
    />
  );
}

export {
  Input,
  inputBase,
  inputRadius,
  inputShadow,
  inputSize,
  inputStatus,
  inputVariant,
};

export type { InputProps, InputVariantProps };
