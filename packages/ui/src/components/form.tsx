"use client";

import * as React from "react";

import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Controller, useFormContext, useFormState } from "react-hook-form";

import { Slot } from "@radix-ui/react-slot";

import type { LabelProps } from "@workspace/ui/components/label";
import { Label } from "@workspace/ui/components/label";
import type {
  FormFieldProps,
  FormTextProps,
} from "@workspace/ui/primitives/form";
import {
  Form,
  FormText,
  FormField as PrimitiveFormField,
} from "@workspace/ui/primitives/form";

// TODO:
// - Add FormProvider wrapper around Form primitive with proper typing using UseFormReturn
// - Update FormControl to handle passing controller render props to it's children
// - Remove react-hook-form dependency in favor of useActionState and next-safe-action library
// - Handle client side validation using useOptimisticActionState and valibot/zod schemas

// Form Controller Component

type FormFieldControllerContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldControllerContext =
  React.createContext<FormFieldControllerContextValue>(
    {} as FormFieldControllerContextValue
  );

const FormFieldController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldControllerContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldControllerContext.Provider>
  );
};

// Form Field Component

const useFormField = () => {
  const controllerContext = React.useContext(FormFieldControllerContext);
  const fieldContext = React.useContext(FormFieldContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: controllerContext.name });
  const fieldState = getFieldState(controllerContext.name, formState);

  if (!controllerContext) {
    throw new Error("useFormField should be used within <FormFieldController>");
  }

  const { id } = fieldContext;

  return {
    id,
    name: controllerContext.name,
    fieldId: `${id}-form-field`,
    descriptionErrorId: `${id}-form-description-error`,
    descriptionHintId: `${id}-form-description-hint`,
    ...fieldState,
  };
};

type FormFieldContextValue = {
  id: string;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

function FormField({ ...props }: FormFieldProps) {
  const id = React.useId();

  return (
    <FormFieldContext.Provider value={{ id }}>
      <PrimitiveFormField {...props} />
    </FormFieldContext.Provider>
  );
}

// Form Label Component

function FormLabel({ children, ...props }: LabelProps) {
  const { error, invalid, fieldId } = useFormField();

  if (!children) {
    return null;
  }

  return (
    <Label
      data-slot="form-label"
      data-error={!!error || invalid}
      htmlFor={fieldId}
      {...props}
    >
      {children}
    </Label>
  );
}

// Form Control Component

type FormControlProps = React.ComponentProps<typeof Slot>;

function FormControl({ ...props }: FormControlProps) {
  const { error, invalid, fieldId, descriptionErrorId, descriptionHintId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={fieldId}
      aria-describedby={
        !!error || invalid
          ? `${descriptionHintId} ${descriptionErrorId}`
          : `${descriptionHintId}`
      }
      aria-invalid={!!error || invalid}
      {...props}
    />
  );
}

// Form Description Component

function FormDescription({ children, ...props }: FormTextProps) {
  const { error, invalid, descriptionErrorId, descriptionHintId } =
    useFormField();
  const errorMessage = error?.message ? String(error.message) : null;

  if (errorMessage) {
    return (
      <FormText
        data-slot="form-error"
        id={descriptionErrorId}
        {...props}
        status="error"
        variant="message"
      >
        {errorMessage}
      </FormText>
    );
  }

  if (children) {
    return (
      <FormText
        data-slot="form-description"
        id={descriptionHintId}
        {...props}
        status={error || invalid ? "error" : "base"}
        variant="message"
      >
        {children}
      </FormText>
    );
  }

  return null;
}

// Form Component Exports

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFieldController,
  FormLabel,
  useFormField,
};

export type { FormControlProps };
