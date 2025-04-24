import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';

// TODO:
// - create separate text primitive so it can be used by any component or primitive with text
// - form primitives can be merged with matching components inside ../components/form/*

// Primitive Form Component

const formBase = 'box-border grid items-start';

const formRadius = {
  sm: 'rounded-fs-lg',
  base: 'rounded-fs-xl',
  md: 'rounded-fs-2xl',
  lg: 'rounded-fs-3xl',
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
  sm: 'gap-fs-2',
  base: 'gap-fs-4',
  md: 'gap-fs-6',
  lg: 'gap-fs-8',
  full: 'gap-fs-12',
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
};

const formFieldShadow = {
  ...formShadow,
};

const formFieldSize = {
  ...formSize,
  sm: 'gap-y---spacing-line-sm gap-x-fs-075',
  base: 'gap-y---spacing-line-lg gap-x-fs-1',
  md: 'gap-y-line-2xl gap-x-fs-1',
  lg: 'gap-y-fs-1 gap-x-fs-2',
  full: 'gap-y-fs-2 gap-x-fs-4',
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

const formTextSize = {
  sm: 'text-caption',
  base: 'text-label',
  md: 'text-body',
  lg: 'text-lead',
  full: 'text-subheading',
  none: '',
  unset: '',
};

const formTextStatus = {
  ...formStatus,
  base: 'text-foreground/75',
  active: 'text-accent/75',
  error: 'text-danger/75',
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
      size: 'base',
      variant: 'title',
      className: 'text-subheading',
    },
    {
      size: 'sm',
      variant: 'title',
      className: 'text-body',
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
      className: 'text-caption',
    },
    {
      size: 'md',
      variant: 'subtitle',
      className: 'text-body',
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

// Primitive Form Exports

export {
  Form,
  FormField,
  formFieldRadius,
  formFieldShadow,
  formFieldSize,
  formFieldVariants,
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
};
