"use client";

import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormFieldController,
  FormLabel,
} from "@workspace/ui/components/form";
import type { InputProps } from "@workspace/ui/components/input";
import { Input } from "@workspace/ui/components/input";
import type {
  FormFieldVariantProps,
  FormTextVariantProps,
} from "@workspace/ui/primitives/form";
import type { InputVariantProps } from "@workspace/ui/primitives/form";

// TODO:
// - Update render method to handle additional field compositions (i.e. checkbox, radio-group, etc...)
// -- or create a new FormField composition that can be used for checkbox and radio-group fields
// - Fix issue where size prop loses type reference when passed into Input component
// -- may need to add a generic input type to FieldProps to map to the Input component's element type

type FieldRenderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerRenderProps<TFieldValues, TName>;

type FieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  children?:
    | React.ReactNode
    | ((field: FieldRenderProps<TFieldValues, TName>) => React.ReactNode);
  control: UseFormReturn<TFieldValues>["control"];
  hint?: string;
  label: string;
  name: TName;
  placeholder?: string;
  radius?: InputVariantProps["radius"];
  size?:
    | FormFieldVariantProps["size"]
    | InputProps<"input">["size"]
    | FormTextVariantProps["size"];
  status?: FormFieldVariantProps["status"];
  isRequired?: boolean;
};

function Field<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  control,
  hint,
  label,
  name,
  placeholder,
  radius,
  size,
  status,
  isRequired,
}: FieldProps<TFieldValues, TName>) {
  return (
    <FormFieldController
      control={control}
      name={name}
      render={({ field }) => (
        <FormField size={size} status={status}>
          <FormLabel status={status} isRequired={isRequired}>
            {label}
          </FormLabel>
          {children ? (
            typeof children === "function" ? (
              <FormControl>{children(field)}</FormControl>
            ) : (
              children
            )
          ) : (
            <FormControl>
              <Input
                disabled={status === "disabled"}
                radius={radius}
                size={size as InputProps<"input">["size"]}
                status={status}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          )}
          <FormDescription size={size} status={status}>
            {hint}
          </FormDescription>
        </FormField>
      )}
    />
  );
}

export { Field };
export type { FieldProps };
