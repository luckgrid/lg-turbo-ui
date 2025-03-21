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
import type { LabelVariantProps } from "@workspace/ui/components/label";
import type {
  FormDescriptionVariantProps,
  FormFieldVariantProps,
} from "@workspace/ui/primitives/form";
import type { InputVariantProps } from "@workspace/ui/primitives/input";

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
  layout?: FormFieldVariantProps["layout"];
  name: TName;
  placeholder?: string;
  shape?: InputVariantProps["shape"];
  size?:
    | FormFieldVariantProps["size"]
    | InputProps<"input">["size"]
    | FormDescriptionVariantProps["size"];
  isRequired?: LabelVariantProps["isRequired"];
};

function Field<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  control,
  hint,
  label,
  layout,
  name,
  placeholder,
  shape,
  size,
  isRequired,
}: FieldProps<TFieldValues, TName>) {
  return (
    <FormFieldController
      control={control}
      name={name}
      render={({ field }) => (
        <FormField size={size} layout={layout}>
          <FormLabel isRequired={isRequired}>{label}</FormLabel>
          {children ? (
            typeof children === "function" ? (
              <FormControl>{children(field)}</FormControl>
            ) : (
              children
            )
          ) : (
            <FormControl>
              <Input
                shape={shape}
                size={size as InputProps<"input">["size"]}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          )}
          <FormDescription size={size}>{hint}</FormDescription>
        </FormField>
      )}
    />
  );
}

export { Field };
export type { FieldProps };
