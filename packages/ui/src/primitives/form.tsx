import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";
import { boxBase } from "@workspace/ui/primitives/box";

// Primitive Form Component

const formVariants = cva([boxBase, "grid gap-fs-4"], {
  variants: {
    // Style Variants
    size: {
      sm: "gap-fs-2",
      md: "gap-fs-6",
      lg: "gap-fs-8",
    },
  },
});

type FormVariantProps = VariantProps<typeof formVariants>;

type FormProps = FormVariantProps & React.ComponentPropsWithRef<"form">;

function Form({ className, size, ...props }: FormProps) {
  return (
    <form
      data-slot="form"
      className={cn(formVariants({ size, className }))}
      {...props}
    />
  );
}

// Primitive Form Field Component

const formFieldVariants = cva([boxBase, "gap-y-fs-0-5 gap-x-fs-1 w-full"], {
  variants: {
    // Style Variants
    layout: {
      grid: "grid",
      row: "flex flex-row items-start",
    },
    size: {
      sm: "gap-y-fs-0-25 gap-x-fs-075",
      md: "gap-y-fs-0-075",
      lg: "gap-y-fs-1 gap-x-fs-3",
    },
  },
  defaultVariants: {
    layout: "grid",
  },
});

type FormFieldVariantProps = VariantProps<typeof formFieldVariants>;

type FormFieldProps = FormFieldVariantProps &
  React.ComponentPropsWithRef<"div">;

function FormField({ className, layout, size, ...props }: FormFieldProps) {
  return (
    <div
      data-slot="form-field"
      className={cn(formFieldVariants({ layout, size, className }))}
      {...props}
    />
  );
}

// Primitive Form Description Component

const formDescriptionVariants = cva(
  "font-sans text-label italic transition-[color]",
  {
    variants: {
      // Style Variants
      size: {
        sm: "text-caption",
        md: "text-body",
        lg: "text-subheading",
      },
      variant: {
        error: "text-danger-1/75",
        hint: "text-neutral-foreground/50",
      },
      // Style Modifiers
      isDisabled: {
        true: "opacity-50",
      },
    },
  },
);

type FormDescriptionVariantProps = VariantProps<typeof formDescriptionVariants>;

type FormDescriptionProps = FormDescriptionVariantProps &
  React.ComponentProps<"p">;

function FormDescription({
  className,
  size,
  variant,
  isDisabled,
  ...props
}: FormDescriptionProps) {
  return (
    <p
      data-slot="form-description"
      className={cn(
        formDescriptionVariants({ size, variant, isDisabled, className }),
      )}
      {...props}
    />
  );
}

// Primitive Form Exports

export { Form, FormDescription, FormField };
export type {
  FormDescriptionProps,
  FormDescriptionVariantProps,
  FormFieldProps,
  FormFieldVariantProps,
  FormProps,
  FormVariantProps,
};
