import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';
import {
  formStatus,
  formRadius,
  formShadow,
} from '@workspace/ui/primitives/form';

const inputBase = [
  'box w-full transition-[background-color,border-color,color,box-shadow,opacity,fill,stroke]',
  'outline-offset-1 outline-ring/80 border-border bg-input text-input-foreground',
  'text-left text-pretty',
  'placeholder:text-input-foreground/50 hover:placeholder:text-input-foreground/60 focus-within:placeholder:text-input-foreground/70',
  'selection:bg-primary selection:text-primary-foreground',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'focus-visible:border-ring focus-visible:outline-1',
  'aria-invalid:border-danger focus-visible:aria-invalid:outline-danger/80',
];

const inputRadius = {
  ...formRadius,
  sm: 'rounded-fs-xs',
  base: 'rounded-fs-sm',
  md: 'rounded-fs-md',
  lg: 'rounded-fs-lg',
};

const inputShadow = {
  ...formShadow,
  sm: 'shadow-2xs',
  base: 'shadow-xs',
  md: 'shadow-sm',
  lg: 'shadow-md',
  full: 'shadow-lg',
};

const inputSize = {
  sm: 'gap-line-lg px-fs-2 py-fs-1 border-1 text-label',
  base: 'gap-line-2xl px-fs-3 py-fs-1 border-(length:--line-sm) text-body',
  md: 'gap-line-2xl px-fs-4 py-fs-2 border-(length:--line-sm) text-body',
  lg: 'gap-fs-1 px-fs-5 py-fs-3 border-(length:--line-md) focus-visible:outline-(length:--line-sm) text-subheading',
  full: 'gap-fs-2 px-fs-6 py-fs-4 border-(length:--line-lg) text-subheading',
  none: 'gap-0 px-0 py-0 border-0',
  unset: '',
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
    "hover:bg-input/80 data-[placeholder]:text-muted-foreground/50 [&_svg:not([class*='text-'])]:text-muted-foreground/50",
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
