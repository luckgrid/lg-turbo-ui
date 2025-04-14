'use client';

import { Slot } from '@radix-ui/react-slot';
import { Label } from '@workspace/ui/components/label';
import {
  Form,
  FormDescription as PrimitiveFormDescription,
  FormField as PrimitiveFormField,
} from '@workspace/ui/primitives/form';
import * as React from 'react';
import { Controller, useFormContext, useFormState } from 'react-hook-form';

import type { LabelProps } from '@workspace/ui/components/label';
import type {
  FormDescriptionProps,
  FormFieldProps,
} from '@workspace/ui/primitives/form';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

// TODO:
// - Add FormProvider wrapper around Form primitive with proper typing using UseFormReturn
// - Update FormControl to handle passing controller render props to it's children

// Form Controller Component

type FormFieldControllerContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldControllerContext =
  React.createContext<FormFieldControllerContextValue>(
    {} as FormFieldControllerContextValue,
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
    throw new Error('useFormField should be used within <FormFieldController>');
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
  {} as FormFieldContextValue,
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

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
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

function FormDescription({ children, ...props }: FormDescriptionProps) {
  const { error, invalid, descriptionErrorId, descriptionHintId } =
    useFormField();
  const errorMessage = error?.message ? String(error.message) : null;

  if (errorMessage) {
    return (
      <PrimitiveFormDescription
        data-slot="form-error"
        id={descriptionErrorId}
        variant="error"
        {...props}
      >
        {errorMessage}
      </PrimitiveFormDescription>
    );
  }

  if (children) {
    return (
      <PrimitiveFormDescription
        data-slot="form-hint"
        id={descriptionHintId}
        variant={error || invalid ? 'error' : 'hint'}
        {...props}
      >
        {children}
      </PrimitiveFormDescription>
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
