import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { CheckIcon, CircleIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';
import {
  indicatorBase,
  indicatorRadius,
  indicatorShadow,
  indicatorSize,
} from '@workspace/ui/primitives/action';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';

// TODO:
// - rename FormText to FormDisplay so it can be used to display text and other content as needed
// - create separate text primitive so it can be used by any component or primitive with text
// - form primitives can be merged with matching components inside ../components/form/*
// -- some style patterns may be part of the field component only (i.e. label, input, message, hint, etc.)
// - create utilities for some form variant styles (i.e. spacing, status, etc.)

// Primitive Form Component

const formBase = 'box-border grid items-start';

const formRadius = {
  sm: 'rounded-box-sm',
  base: 'rounded-box-md',
  md: 'rounded-box-lg',
  lg: 'rounded-box-xl',
  full: 'rounded-full',
  none: 'rounded-none',
  unset: '',
};

const formShadow = {
  sm: 'shadow-sm',
  base: 'shadow-md',
  md: 'shadow-lg',
  lg: 'shadow-xl',
  full: 'shadow-2xl',
  none: 'shadow-none',
  unset: '',
};

const formSize = {
  sm: 'gap-form-xs',
  base: 'gap-form-sm',
  md: 'gap-form-md',
  lg: 'gap-form-lg',
  full: 'gap-form-xl',
  none: 'gap-0',
  unset: '',
};

const formStatus = {
  base: '',
  disabled: '',
  hidden: '',
  pending: '',
  error: '',
  success: '',
};

const formVariant = {
  base: '',
  group: '',
};

const formVariants = cva(formBase, {
  variants: {
    radius: formRadius,
    shadow: formShadow,
    size: formSize,
    status: formStatus,
    variant: formVariant,
  },
  defaultVariants: {
    size: 'base',
    status: 'base',
    variant: 'base',
  },
});

type FormVariantProps = VariantProps<typeof formVariants>;

type FormProps<T extends React.ElementType = 'form'> = ElementProps<T> &
  FormVariantProps;

function Form<T extends React.ElementType = 'form'>({
  as = 'form',
  className,
  radius,
  shadow,
  size,
  status,
  variant,
  ...props
}: FormProps<T>) {
  return (
    <Element
      data-slot='form'
      as={as}
      className={cn(
        formVariants({ radius, shadow, size, status, variant, className })
      )}
      {...props}
    />
  );
}

// Primitive Form Field Component

const formFieldRadius = {
  ...formRadius,
  sm: 'rounded-box-xs',
  base: 'rounded-box-sm',
  md: 'rounded-box-md',
  lg: 'rounded-box-lg',
  unset: '',
};

const formFieldShadow = {
  ...formShadow,
};

const formFieldSize = {
  ...formSize,
  sm: 'gap-y-fs-xs-1 gap-x-fs-xs-3',
  base: 'gap-y-fs-xs-2 gap-x-fs-xs-4',
  md: 'gap-y-fs-xs-3 gap-x-fs-xs-5',
  lg: 'gap-y-fs-xs-4 gap-x-fs-xs-6',
  full: 'gap-y-fs-xs-5 gap-x-fs-xs-7',
};

const formFieldVariants = cva('box-border grid items-start', {
  variants: {
    radius: formFieldRadius,
    shadow: formFieldShadow,
    size: formFieldSize,
    status: formStatus,
    variant: formVariant,
  },
  defaultVariants: {
    size: 'base',
    status: 'base',
    variant: 'base',
  },
});

type FormFieldVariantProps = VariantProps<typeof formFieldVariants>;

type FormFieldProps = FormFieldVariantProps &
  React.ComponentPropsWithRef<'div'>;

function FormField({
  className,
  radius,
  shadow,
  size,
  status,
  variant,
  ...props
}: FormFieldProps) {
  return (
    <div
      data-slot='form-field'
      className={cn(
        formFieldVariants({
          radius,
          shadow,
          size,
          status,
          variant,
          className,
        })
      )}
      {...props}
    />
  );
}

// Primitive Form Text Component
// - TODO: change FormText namespace to FormDisplay with a variant for text and additional form ui patterns

const formTextSize = {
  sm: 'text-legal',
  base: 'text-caption',
  md: 'text-label',
  lg: 'text-body',
  full: 'text-lead',
  none: '',
  unset: '',
};

const formTextStatus = {
  ...formStatus,
  base: 'text-foreground/60',
  active: 'text-accent/60',
  error: 'text-danger/60',
};

const formTextVariant = {
  base: '',
  label: 'font-medium',
  message: 'italic',
  title: '',
  subtitle: 'font-serif',
};

const formTextVariants = cva('font-sans', {
  variants: {
    size: formTextSize,
    status: formTextStatus,
    variant: formTextVariant,
  },
  compoundVariants: [
    // Title Sizes
    {
      size: 'sm',
      variant: 'title',
      className: 'text-lead',
    },
    {
      size: 'base',
      variant: 'title',
      className: 'text-subheading',
    },
    {
      size: 'md',
      variant: 'title',
      className: 'text-subtitle',
    },
    {
      size: 'lg',
      variant: 'title',
      className: 'text-heading',
    },
    {
      size: 'full',
      variant: 'title',
      className: 'text-title',
    },
    // Subtitle Sizes
    {
      size: 'base',
      variant: 'subtitle',
      className: 'text-label',
    },
    {
      size: 'sm',
      variant: 'subtitle',
      className: 'text-body',
    },
    {
      size: 'md',
      variant: 'subtitle',
      className: 'text-lead',
    },
    {
      size: 'lg',
      variant: 'subtitle',
      className: 'text-subheading',
    },
    {
      size: 'full',
      variant: 'subtitle',
      className: 'text-subtitle',
    },
  ],
  defaultVariants: {
    size: 'base',
    status: 'base',
    variant: 'base',
  },
});

type FormTextVariantProps = VariantProps<typeof formTextVariants>;

type FormTextProps<T extends React.ElementType = 'p'> = ElementProps<T> &
  FormTextVariantProps;

function FormText<T extends React.ElementType = 'p'>({
  as = 'p',
  className,
  size,
  status,
  variant,
  ...props
}: FormTextProps<T>) {
  return (
    <Element
      as={as}
      data-slot='form-text'
      className={cn(formTextVariants({ size, status, variant, className }))}
      {...props}
    />
  );
}

// Primitive Form Input Component

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
  sm: 'rounded-form-sm',
  base: 'rounded-form-md',
  md: 'rounded-form-lg',
  lg: 'rounded-form-xl',
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
  sm: 'gap-fs-2 px-fs-4 py-fs-3 border-(length:--form-line-xs) text-caption',
  base: 'gap-fs-3 px-fs-5 py-fs-4 border-(length:--form-line-sm) text-label',
  md: 'gap-fs-4 px-fs-6 py-fs-5 border-(length:--form-line-md) text-body',
  lg: 'gap-fs-5 px-fs-7 py-fs-6 border-(length:--form-line-lg) text-lead',
  full: 'gap-fs-6 px-fs-8 py-fs-7 border-(length:--form-line-xl) text-subheading',
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
    'items-center justify-between gap-fs-2 fluid-media',
    "hover:bg-input/80 data-[placeholder]:text-muted-foreground/50 [&_svg:not([class*='text-'])]:text-muted-foreground/50",
    '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:opacity-50 [&[data-state=open]>svg]:rotate-180',
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
      data-slot='form-input'
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

// Primitive Input Action Indicator Component

const inputIndicatorBase = [
  indicatorBase,
  'action line-sm action-outline-sm action-outline-ring/75 ring-ring/25 border-border bg-input text-input-foreground',
  'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  'disabled:cursor-not-allowed active:not-disabled:motion-scale-in-90 active:not-disabled:motion-duration-300 active:not-disabled:motion-ease-spring-bouncy',
  'focus-visible:aria-invalid:ring-danger/25',
];

const inputIndicatorRadius = {
  ...indicatorRadius,
};

const inputIndicatorShadow = {
  ...indicatorShadow,
};

const inputIndicatorSize = {
  ...indicatorSize,
  sm: "size-fs-4 [&_svg:not([class*='size-'])]:size-fs-3 border-(length:--form-line-xs)",
  base: "size-fs-6 [&_svg:not([class*='size-'])]:size-fs-4 border-(length:--form-line-sm)",
  md: "size-fs-8 [&_svg:not([class*='size-'])]:size-fs-6 border-(length:--form-line-md)",
  lg: "size-fs-10 [&_svg:not([class*='size-'])]:size-fs-8 border-(length:--form-line-lg)",
  full: "size-fs-12 [&_svg:not([class*='size-'])]:size-fs-10 border-(length:--form-line-xl)",
};

const inputIndicatorVariant = {
  checkbox: 'peer items-center justify-center',
  radio: [
    'items-center justify-center',
    'text-primary aspect-square',
    'data-[state=checked]:bg-primary-foreground',
    '[&_svg]:fill-primary',
  ],
};

const inputIndicatorVariants = cva(inputIndicatorBase, {
  variants: {
    radius: inputIndicatorRadius,
    shadow: inputIndicatorShadow,
    size: inputIndicatorSize,
    variant: inputIndicatorVariant,
  },
  defaultVariants: {
    radius: 'base',
    shadow: 'base',
    size: 'base',
  },
});

type InputIndicatorVariantProps = VariantProps<typeof inputIndicatorVariants>;

type InputIndicatorProps<T extends React.ElementType = 'span'> =
  ElementProps<T> & InputIndicatorVariantProps;

function InputIndicator<T extends React.ElementType = 'span'>({
  as = 'span',
  className,
  radius,
  shadow,
  size,
  variant,
  ...props
}: InputIndicatorProps<T>) {
  return (
    <Element
      data-slot='form-input-indicator'
      as={as}
      className={cn(
        inputIndicatorVariants({ radius, shadow, size, variant, className })
      )}
      {...props}
    >
      {variant === 'checkbox' ? <CheckIcon /> : <CircleIcon />}
    </Element>
  );
}

// Primitive Form Exports
export {
  Form,
  FormField,
  formFieldRadius,
  formFieldShadow,
  formFieldSize,
  formFieldVariants,
  Input,
  inputBase,
  inputRadius,
  inputShadow,
  inputSize,
  inputStatus,
  inputVariant,
  inputVariants,
  InputIndicator,
  inputIndicatorBase,
  inputIndicatorRadius,
  inputIndicatorShadow,
  inputIndicatorSize,
  inputIndicatorVariant,
  inputIndicatorVariants,
  formRadius,
  formShadow,
  formSize,
  formStatus,
  FormText,
  formTextSize,
  formTextStatus,
  formTextVariant,
  formTextVariants,
  formVariant,
  formVariants,
};

export type {
  FormFieldProps,
  FormFieldVariantProps,
  FormProps,
  FormTextProps,
  FormTextVariantProps,
  FormVariantProps,
  InputProps,
  InputIndicatorProps,
  InputIndicatorVariantProps,
  InputVariantProps,
};
