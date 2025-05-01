"use client";

import * as React from "react";

import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

import type { CheckedState } from "@radix-ui/react-checkbox";

import { Checkbox } from "@workspace/ui/components/checkbox";
import type { FormControlProps } from "@workspace/ui/components/form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormFieldController,
  FormLabel,
} from "@workspace/ui/components/form";
import { Input, Textarea } from "@workspace/ui/components/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group";
import type { SelectItemProps } from "@workspace/ui/components/select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { cn } from "@workspace/ui/lib/utils";
import type {
  FormFieldVariantProps,
  FormFieldProps,
  InputProps,
} from "@workspace/ui/primitives/form";

// TODO:
// - Fix issue where size prop loses type reference when passed into Input component
// -- may need to add a generic input type to FieldProps to map to the Input component's element type

// Field Component

type FieldClassNames = {
  field?: string;
  label?: string;
  control?: string;
  description?: string;
};

type FieldRenderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerRenderProps<TFieldValues, TName>;

type FieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<FormControlProps, "children"> & {
  children?: (field: FieldRenderProps<TFieldValues, TName>) => React.ReactNode;
  className?: string;
  classNames?: FieldClassNames;
  control: UseFormReturn<TFieldValues>["control"];
  description?: React.ReactNode;
  label: React.ReactNode;
  name: TName;
  placeholder?: string;
  radius?: FormFieldVariantProps["radius"];
  shadow?: FormFieldVariantProps["shadow"];
  size?: FormFieldVariantProps["size"];
  status?: FormFieldVariantProps["status"];
  type?: React.HTMLInputTypeAttribute;
  isRequired?: boolean;
};

function Field<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  className,
  classNames,
  control,
  description,
  label,
  name,
  placeholder,
  ref,
  radius,
  shadow,
  size,
  status,
  type,
  isRequired,
  ...props
}: FieldProps<TFieldValues, TName>) {
  return (
    <FormFieldController
      control={control}
      name={name}
      render={({ field }) => (
        <FormField
          className={cn(classNames?.field, className)}
          radius={radius}
          size={size}
          status={status}
        >
          <FormLabel
            className={classNames?.label}
            status={status}
            isRequired={isRequired}
          >
            {label}
          </FormLabel>
          {children ? (
            <FormControl ref={ref} className={classNames?.control} {...props}>
              {children(field)}
            </FormControl>
          ) : (
            <FormControl>
              <Input
                disabled={status === "disabled"}
                radius={radius}
                shadow={shadow}
                size={size as InputProps["size"]}
                status={status}
                placeholder={placeholder}
                type={type}
                {...field}
              />
            </FormControl>
          )}
          <FormDescription
            className={classNames?.description}
            size={size}
            status={status}
          >
            {description}
          </FormDescription>
        </FormField>
      )}
    />
  );
}

// Checkbox Field Component

type CheckboxFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<
  FieldProps<TFieldValues, TName>,
  "children" | "placeholder" | "type"
> & {
  onChange?: (checked: CheckedState) => void;
};

function CheckboxField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  className,
  classNames,
  control,
  description,
  label,
  name,
  ref,
  radius,
  shadow,
  size,
  status,
  onChange,
  isRequired,
  ...props
}: CheckboxFieldProps<TFieldValues, TName>) {
  return (
    <FormFieldController
      control={control}
      name={name}
      render={({ field }) => (
        <FormField
          className={cn(classNames?.field, className)}
          radius={radius}
          size={size}
          status={status}
        >
          <FormControl ref={ref} className={classNames?.control} {...props}>
            <Checkbox
              radius={radius}
              shadow={shadow}
              size={size}
              onCheckedChange={(checked) => {
                field.onChange(checked);
                onChange?.(checked);
              }}
              checked={field.value}
              disabled={status === "disabled"}
              required={isRequired}
            />
          </FormControl>
          <div className="flex flex-col gap-fs-sm-1">
            <FormLabel
              className={classNames?.label}
              size={size}
              status={status}
              variant="indicator"
              isRequired={isRequired}
            >
              {label}
            </FormLabel>
            <FormDescription
              className={classNames?.description}
              size={size}
              status={status}
            >
              {description}
            </FormDescription>
          </div>
        </FormField>
      )}
    />
  );
}

// Radio Group Item Field Component

// TODO:
// - Add description prop with variant style modifiers to change radio group items to cards with optional description text and error state
// - Add style modifiers to label component to update label styles for input indicators

type RadioGroupItemFieldProps = FormFieldProps &
  Pick<FieldProps, "classNames" | "label"> & {
    value: string;
  };

function RadioGroupItemField({
  className,
  classNames,
  label,
  ref,
  radius,
  shadow,
  size,
  status,
  value,
  ...props
}: RadioGroupItemFieldProps) {
  return (
    <FormField
      className={cn(classNames?.field, className)}
      radius={radius}
      size={size}
      status={status}
    >
      <FormControl ref={ref} className={classNames?.control} {...props}>
        <RadioGroupItem
          radius={radius}
          shadow={shadow}
          size={size}
          value={value}
        />
      </FormControl>
      <FormLabel
        className={cn(classNames?.label, "font-normal")}
        variant="indicator"
      >
        {label}
      </FormLabel>
    </FormField>
  );
}

// Radio Group Field Component

type RadioGroupFieldClassNames = FieldClassNames & {
  item?: string;
};

type RadioGroupFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<
  FieldProps<TFieldValues, TName>,
  "children" | "classNames" | "type"
> & {
  children?: React.ReactNode;
  classNames?: RadioGroupFieldClassNames;
  items?: RadioGroupItemFieldProps[];
  onChange?: (value?: string) => void;
};

function RadioGroupField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  className,
  classNames,
  control,
  description,
  items,
  label,
  name,
  ref,
  radius,
  shadow,
  size,
  status,
  onChange,
  isRequired,
  ...props
}: RadioGroupFieldProps<TFieldValues, TName>) {
  return (
    <FormFieldController
      control={control}
      name={name}
      render={({ field }) => (
        <FormField
          className={cn(classNames?.field, className)}
          radius={radius}
          size={size}
          status={status}
        >
          <FormLabel
            className={classNames?.label}
            status={status}
            isRequired={isRequired}
          >
            {label}
          </FormLabel>
          <FormControl ref={ref} className={classNames?.control} {...props}>
            <RadioGroup
              key={field.value}
              defaultValue={field.value}
              radius={radius}
              size={size}
              onValueChange={(value) => {
                field.onChange(value);
                onChange?.(value);
              }}
            >
              {items?.map((item) => (
                <RadioGroupItemField
                  key={item.value}
                  className={cn(classNames?.item, item.className)}
                  radius={radius}
                  shadow={shadow}
                  size={size}
                  status={status}
                  {...item}
                />
              ))}
              {children}
            </RadioGroup>
          </FormControl>
          <FormDescription
            className={classNames?.description}
            size={size}
            status={status}
          >
            {description}
          </FormDescription>
        </FormField>
      )}
    />
  );
}

// Select Field Component

type SelectFieldClassNames = FieldClassNames & {
  content?: string;
  item?: string;
};

type SelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<
  FieldProps<TFieldValues, TName>,
  "children" | "classNames" | "type"
> & {
  children?: React.ReactNode;
  classNames?: SelectFieldClassNames;
  items?: SelectItemProps[];
  onChange?: (value?: string) => void;
};

function SelectField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  className,
  classNames,
  control,
  description,
  items,
  label,
  name,
  placeholder = "Select",
  ref,
  radius,
  shadow,
  size,
  status,
  onChange,
  isRequired,
  ...props
}: SelectFieldProps<TFieldValues, TName>) {
  return (
    <FormFieldController
      control={control}
      name={name}
      render={({ field }) => (
        <FormField
          className={cn(classNames?.field, className)}
          radius={radius}
          size={size}
          status={status}
        >
          <FormLabel
            className={classNames?.label}
            status={status}
            isRequired={isRequired}
          >
            {label}
          </FormLabel>
          <Select
            key={field.value}
            defaultValue={field.value}
            onValueChange={(value) => {
              field.onChange(value);
              onChange?.(value);
            }}
            disabled={status === "disabled"}
            required={isRequired}
          >
            <FormControl ref={ref} className={classNames?.control} {...props}>
              <SelectTrigger
                radius={radius}
                shadow={shadow}
                size={size}
                status={status}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent
              className={classNames?.content}
              radius={radius}
              shadow={shadow}
              size={size}
            >
              {items?.map((item) => (
                <SelectItem
                  key={item.value}
                  className={cn(classNames?.item, item.className)}
                  radius={radius}
                  size={size}
                  {...item}
                />
              ))}
              {children}
            </SelectContent>
          </Select>
          <FormDescription
            className={classNames?.description}
            size={size}
            status={status}
          >
            {description}
          </FormDescription>
        </FormField>
      )}
    />
  );
}

// Textarea Field Component

function TextareaField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ placeholder, ...props }: FieldProps<TFieldValues, TName>) {
  return (
    <Field {...props}>
      {(field) => <Textarea placeholder={placeholder} {...field} />}
    </Field>
  );
}

// Field Component Exports

export {
  Field,
  SelectField,
  TextareaField,
  CheckboxField,
  RadioGroupItemField,
  RadioGroupField,
};
export type {
  FieldProps,
  SelectFieldProps,
  CheckboxFieldProps,
  RadioGroupItemFieldProps,
  RadioGroupFieldProps,
};
