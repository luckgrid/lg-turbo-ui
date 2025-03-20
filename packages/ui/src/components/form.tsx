"use client";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
} from "react-hook-form";

import type { LabelProps } from "@workspace/ui/components/label";
import { Label } from "@workspace/ui/components/label";
import { cn } from "@workspace/ui/lib/utils";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    fieldId: `${id}-form-field`,
    descriptionErrorId: `${id}-form-description-error`,
    descriptionHintId: `${id}-form-description-hint`,
    // Deprecated
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-fs-0-5", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, ...props }: LabelProps) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-danger-1", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

const formDescriptionVariants = cva("font-sans text-label", {
  variants: {
    // Style Variants
    size: {
      sm: "text-caption",
      md: "text-body",
      lg: "text-subheading",
    },
    variant: {
      error: "text-danger-1/75",
      hint: "text-neutral-foreground/75",
    },
  },
});

type FormDescriptionVariantProps = VariantProps<typeof formDescriptionVariants>;

type FormDescriptionProps = FormDescriptionVariantProps &
  React.ComponentProps<"p">;

function FormDescription({
  children,
  className,
  size,
  variant,
  ...props
}: FormDescriptionProps) {
  const { error, descriptionErrorId, descriptionHintId } = useFormField();
  const errorMessage = error?.message ? String(error.message) : null;

  // Show error message if there is an error and message
  if (errorMessage) {
    return (
      <p
        data-slot="form-description"
        id={descriptionErrorId}
        className={cn(
          formDescriptionVariants({
            size,
            variant: "error",
            className,
          }),
        )}
        {...props}
      >
        {errorMessage}
      </p>
    );
  }

  // Show children with error variant if there is an error
  if (children) {
    return (
      <p
        data-slot="form-description"
        id={descriptionHintId}
        className={cn(
          formDescriptionVariants({
            size,
            variant: error ? "error" : "hint",
            className,
          }),
        )}
        {...props}
      >
        {children}
      </p>
    );
  }

  // Return null if no description to display
  return null;
}

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  useFormField,
};
