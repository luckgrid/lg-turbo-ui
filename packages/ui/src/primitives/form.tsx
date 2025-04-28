import * as React from "react";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { CheckIcon, CircleIcon } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";
import {
  indicatorBase,
  indicatorRadius,
  indicatorShadow,
  indicatorSize,
} from "@workspace/ui/primitives/action";
import type { ElementProps } from "@workspace/ui/primitives/element";
import { Element } from "@workspace/ui/primitives/element";

// TODO:
// - rename FormText to FormDisplay so it can be used to display text and other content as needed
// - create separate text primitive so it can be used by any component or primitive with text
// - form primitives can be merged with matching components inside ../components/form/*
// -- some style patterns may be part of the field component only (i.e. label, input, message, hint, etc.)
// - create utilities for some form variant styles (i.e. spacing, status, etc.)

// Primitive Form Component

const formBase = "box-border grid items-start";

const formRadius = {
  sm: "rounded-fs-7",
  base: "rounded-fs-8",
  md: "rounded-fs-9",
  lg: "rounded-fs-10",
  full: "rounded-full",
  none: "rounded-none",
  unset: "",
};

const formShadow = {
  sm: "shadow-sm",
  base: "shadow-md",
  md: "shadow-lg",
  lg: "shadow-xl",
  full: "shadow-2xl",
  none: "shadow-none",
  unset: "",
};

const formSize = {
  sm: "gap-fs-5",
  base: "gap-fs-6",
  md: "gap-fs-7",
  lg: "gap-fs-8",
  full: "gap-fs-10",
  none: "gap-0",
  unset: "",
};

const formStatus = {
  base: "",
  disabled: "",
  hidden: "",
  pending: "",
  error: "",
  success: "",
};

const formVariant = {
  base: "",
  group: "",
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
    size: "base",
    status: "base",
    variant: "base",
  },
});

type FormVariantProps = VariantProps<typeof formVariants>;

type FormProps<T extends React.ElementType = "form"> = ElementProps<T> &
  FormVariantProps;

function Form<T extends React.ElementType = "form">({
  as = "form",
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
      data-slot="form"
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
  sm: "rounded-fs-5",
  base: "rounded-fs-6",
  md: "rounded-fs-7",
  lg: "rounded-fs-8",
  unset: "",
};

const formFieldShadow = {
  ...formShadow,
};

const formFieldSize = {
  ...formSize,
  sm: "gap-y-fs-1 gap-x-fs-2",
  base: "gap-y-fs-2 gap-x-fs-4",
  md: "gap-y-fs-sm-1 gap-x-fs-sm-2",
  lg: "gap-y-fs-sm-2 gap-x-fs-sm-4",
  full: "gap-y-fs-sm-3 gap-x-fs-sm-6",
};

const formFieldVariants = cva("box-border grid items-start", {
  variants: {
    radius: formFieldRadius,
    shadow: formFieldShadow,
    size: formFieldSize,
    status: formStatus,
    variant: formVariant,
  },
  defaultVariants: {
    size: "base",
    status: "base",
    variant: "base",
  },
});

type FormFieldVariantProps = VariantProps<typeof formFieldVariants>;

type FormFieldProps = FormFieldVariantProps &
  React.ComponentPropsWithRef<"div">;

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
      data-slot="form-field"
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
  sm: "text-legal",
  base: "text-caption",
  md: "text-label",
  lg: "text-body",
  full: "text-lead",
  none: "",
  unset: "",
};

const formTextStatus = {
  ...formStatus,
  base: "text-foreground/60",
  active: "text-accent/60",
  error: "text-danger/60",
};

const formTextVariant = {
  base: "",
  label: "font-medium",
  message: "italic",
  title: "",
  subtitle: "font-serif",
};

const formTextVariants = cva("font-sans", {
  variants: {
    size: formTextSize,
    status: formTextStatus,
    variant: formTextVariant,
  },
  compoundVariants: [
    // Title Sizes
    {
      size: "sm",
      variant: "title",
      className: "text-lead",
    },
    {
      size: "base",
      variant: "title",
      className: "text-subheading",
    },
    {
      size: "md",
      variant: "title",
      className: "text-subtitle",
    },
    {
      size: "lg",
      variant: "title",
      className: "text-heading",
    },
    {
      size: "full",
      variant: "title",
      className: "text-title",
    },
    // Subtitle Sizes
    {
      size: "base",
      variant: "subtitle",
      className: "text-label",
    },
    {
      size: "sm",
      variant: "subtitle",
      className: "text-body",
    },
    {
      size: "md",
      variant: "subtitle",
      className: "text-lead",
    },
    {
      size: "lg",
      variant: "subtitle",
      className: "text-subheading",
    },
    {
      size: "full",
      variant: "subtitle",
      className: "text-subtitle",
    },
  ],
  defaultVariants: {
    size: "base",
    status: "base",
    variant: "base",
  },
});

type FormTextVariantProps = VariantProps<typeof formTextVariants>;

type FormTextProps<T extends React.ElementType = "p"> = ElementProps<T> &
  FormTextVariantProps;

function FormText<T extends React.ElementType = "p">({
  as = "p",
  className,
  size,
  status,
  variant,
  ...props
}: FormTextProps<T>) {
  return (
    <Element
      as={as}
      data-slot="form-text"
      className={cn(formTextVariants({ size, status, variant, className }))}
      {...props}
    />
  );
}

// Primitive Form Input Component

const inputBase = [
  "box w-full transition-action",
  "outline-offset-fs-2 outline-ring/80",
  "border-ring bg-input text-input-foreground text-label text-left text-pretty",
  "placeholder:text-input-foreground/50 hover:placeholder:text-input-foreground/60 focus-visible:placeholder:text-input-foreground/70",
  "selection:bg-accent selection:text-accent-foreground",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "focus-visible:border-accent focus-visible:outline-accent/80",
  "aria-invalid:border-danger aria-invalid:focus-visible:outline-danger/80",
];

const inputRadius = {
  ...formRadius,
  sm: "rounded-fs-2",
  base: "rounded-fs-3",
  md: "rounded-fs-4",
  lg: "rounded-fs-5",
};

const inputShadow = {
  ...formShadow,
  sm: "shadow-2xs",
  base: "shadow-xs",
  md: "shadow-sm",
  lg: "shadow-md",
  full: "shadow-lg",
};

const inputSize = {
  sm: "gap-fs-sm-1 p-fs-sm-1 border-fs-3 outline-offset-fs-1 focus-visible:outline-fs-1 text-caption",
  base: "gap-fs-sm-2 p-fs-sm-2 border-fs-4 outline-offset-fs-2 focus-visible:outline-fs-2 text-label",
  md: "gap-fs-sm-3 p-fs-sm-3 border-fs-5 outline-offset-fs-3 focus-visible:outline-fs-3 text-body",
  lg: "gap-fs-sm-4 p-fs-sm-4 border-fs-6 outline-offset-fs-4 focus-visible:outline-fs-4 text-lead",
  full: "gap-fs-sm-5 p-fs-sm-5 border-fs-7 outline-offset-fs-5 focus-visible:outline-fs-5 text-subheading",
  none: "gap-0 px-0 py-0 border-0 outline-offset-0 focus-visible:outline-0",
  unset: "",
};

const inputStatus = {
  ...formStatus,
};

const inputVariant = {
  action: "",
  base: "",
  file: "file:inline-flex file:text-foreground file:border-0 file:bg-transparent file:font-medium",
  select: [
    "items-center justify-between icon-wrapper",
    "data-[placeholder]:text-input-foreground/50 hover:data-[placeholder]:text-input-foreground/60 focus-within:data-[placeholder]:text-input-foreground/70",
    "[&_svg:not([class*='text-'])]:text-input-foreground/50 hover:[&_svg:not([class*='text-'])]:text-input-foreground/60 focus-within:[&_svg:not([class*='text-'])]:text-input-foreground/70",
    "[&_svg]:opacity-50 [&[data-state=open]>svg]:rotate-180",
  ],
  textarea: "field-sizing-content min-h-25",
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
      size: ["unset", "sm"],
      variant: "textarea",
      className: "min-h-15",
    },
    {
      size: ["base", "md"],
      variant: "textarea",
      className: "min-h-30",
    },
    {
      size: ["lg", "full"],
      variant: "textarea",
      className: "min-h-40",
    },
  ],
  defaultVariants: {
    radius: "base",
    shadow: "base",
    size: "base",
    variant: "base",
  },
});

type InputVariantProps = VariantProps<typeof inputVariants>;

type InputProps<T extends React.ElementType = "input"> = ElementProps<T> &
  InputVariantProps;

function Input<T extends React.ElementType = "input">({
  as = "input",
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
      data-slot="form-input"
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
  "transition-action border-fs-4 outline-ring/80 outline-offset-fs-2 border-ring bg-input text-input-foreground",
  "focus-visible:border-accent focus-visible:outline-accent/80",
  "focus-visible:outline-fs-2 aria-invalid:focus-visible:outline-danger/80",
  "data-[state=checked]:outline-accent/80 data-[state=checked]:border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
  "disabled:cursor-not-allowed active:not-disabled:motion-scale-in-90 active:not-disabled:motion-duration-300 active:not-disabled:motion-ease-spring-bouncy",
];

const inputIndicatorRadius = {
  ...indicatorRadius,
};

const inputIndicatorShadow = {
  ...indicatorShadow,
};

const inputIndicatorSize = {
  ...indicatorSize,
  sm: "size-fs-4 [&_svg:not([class*='size-'])]:size-fs-2 border-fs-3 outline-offset-fs-1 focus-visible:outline-fs-1",
  base: "size-fs-5 [&_svg:not([class*='size-'])]:size-fs-3 border-fs-4 outline-offset-fs-2 focus-visible:outline-fs-2",
  md: "size-fs-6 [&_svg:not([class*='size-'])]:size-fs-4 border-fs-5 outline-offset-fs-3 focus-visible:outline-fs-3",
  lg: "size-fs-7 [&_svg:not([class*='size-'])]:size-fs-5 border-fs-6 outline-offset-fs-4 focus-visible:outline-fs-4",
  full: "size-fs-8 [&_svg:not([class*='size-'])]:size-fs-6 border-fs-7 outline-offset-fs-5 focus-visible:outline-fs-5",
};

const inputIndicatorVariant = {
  checkbox: "peer items-center justify-center",
  radio: [
    "items-center justify-center",
    "text-accent aspect-square",
    "data-[state=checked]:bg-accent-foreground",
    "[&_svg]:fill-accent",
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
    radius: "base",
    shadow: "base",
    size: "base",
  },
});

type InputIndicatorVariantProps = VariantProps<typeof inputIndicatorVariants>;

type InputIndicatorProps<T extends React.ElementType = "span"> =
  ElementProps<T> & InputIndicatorVariantProps;

function InputIndicator<T extends React.ElementType = "span">({
  as = "span",
  className,
  radius,
  shadow,
  size,
  variant,
  ...props
}: InputIndicatorProps<T>) {
  return (
    <Element
      data-slot="form-input-indicator"
      as={as}
      className={cn(
        inputIndicatorVariants({ radius, shadow, size, variant, className })
      )}
      {...props}
    >
      {variant === "checkbox" ? <CheckIcon /> : <CircleIcon />}
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
