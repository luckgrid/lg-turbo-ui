"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import {
  inputBase,
  inputRadius,
  inputIndicatorRadius,
  inputIndicatorShadow,
  inputShadow,
  inputSize,
  inputVariant,
  inputStatus,
} from "@workspace/ui/primitives/form";

// Select Component

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>;

function Select({ ...props }: SelectProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

// Select Group Component

type SelectGroupProps = React.ComponentProps<typeof SelectPrimitive.Group>;

function SelectGroup({ ...props }: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

// Select Value Component

type SelectValueProps = React.ComponentProps<typeof SelectPrimitive.Value>;

function SelectValue({ ...props }: SelectValueProps) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

// Select Trigger Component

const selectTriggerVariants = cva(
  [
    inputBase,
    inputVariant.select,
    "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-fs-4",
  ],
  {
    variants: {
      radius: inputRadius,
      shadow: inputShadow,
      size: inputSize,
      status: inputStatus,
    },
    defaultVariants: {
      radius: "base",
      shadow: "base",
      size: "base",
      status: "base",
    },
  }
);

type SelectTriggerVariantProps = VariantProps<typeof selectTriggerVariants>;

type SelectTriggerProps = SelectTriggerVariantProps &
  React.ComponentProps<typeof SelectPrimitive.Trigger>;

function SelectTrigger({
  children,
  className,
  radius,
  shadow,
  size,
  status,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        selectTriggerVariants({ radius, size, shadow, status, className })
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="transition-transform duration-150" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

// Select Content Component

const selectContentVariants = cva(
  [
    "box gap-fs-2 z-50 overflow-x-hidden overflow-y-auto",
    "max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin)",
    "border bg-popover text-popover-foreground",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ],
  {
    variants: {
      position: {
        "item-aligned": "",
        popper:
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      },
      radius: inputRadius,
      shadow: inputShadow,
      size: {
        sm: "gap-fs-1",
        base: "gap-fs-2",
        md: "gap-fs-sm-1",
        lg: "gap-fs-sm-2",
        full: "gap-fs-sm-4",
        none: "gap-0",
        unset: "",
      },
    },
    defaultVariants: {
      position: "popper",
      radius: "base",
      shadow: "base",
      size: "base",
    },
  }
);

type SelectContentVariantProps = VariantProps<typeof selectContentVariants>;

type SelectContentProps = SelectContentVariantProps &
  React.ComponentProps<typeof SelectPrimitive.Content>;

function SelectContent({
  className,
  children,
  position,
  radius,
  shadow,
  size,
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          selectContentVariants({ position, radius, size, shadow, className })
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-fs-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-fs-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

// Select Label Component

// TODO:
// - Create selectLabelVariants to add size modifiers
// - Reuse existing label styles from label component (need to add a label/text primitive to form primitive file first)

type SelectLabelProps = React.ComponentProps<typeof SelectPrimitive.Label>;

function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-foreground px-fs-2 py-fs-1 text-label", className)}
      {...props}
    />
  );
}

// Select Item Component

// TODO:
// - Reuse styles from indicator primitive (i.e. indicatorBase, indicatorVariant.item, etc...)
// -- Need to update indicator primitive first to use indicatorWrapperVariants and indicatorVariants (to apply styles to item and indicator)

const selectItemVariants = cva(
  [
    "relative w-full cursor-default outline-hidden select-none",
    "box items-center gap-fs-4 py-fs-2 pr-fs-6 pl-fs-2 text-label",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-fs-2",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1em]",
    "[&_svg:not([class*='text-'])]:text-muted-foreground focus:[&_svg:not([class*='text-'])]:text-accent-foreground",
  ],
  {
    variants: {
      // Style Variants
      radius: inputIndicatorRadius,
      shadow: inputIndicatorShadow,
      size: {
        sm: "",
        base: "",
        md: "",
        lg: "",
        full: "",
        none: "",
        unset: "",
      },
      status: inputStatus,
    },
    defaultVariants: {
      radius: "base",
      size: "base",
      status: "base",
    },
  }
);

type SelectItemVariantProps = VariantProps<typeof selectItemVariants>;

type SelectItemProps = SelectItemVariantProps &
  React.ComponentProps<typeof SelectPrimitive.Item>;

function SelectItem({
  children,
  className,
  disabled,
  radius,
  shadow,
  size,
  status,
  textValue,
  ...props
}: SelectItemProps) {
  const itemStatus = disabled || status === "disabled" ? "disabled" : status;

  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        selectItemVariants({
          radius,
          size,
          shadow,
          status: itemStatus,
          className,
        })
      )}
      disabled={disabled || status === "disabled"}
      {...props}
    >
      <span className="absolute right-fs-2 size-fs-4 box-center icon-wrapper">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>
        {children || textValue}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

// Select Separator Component

type SelectSeparatorProps = React.ComponentProps<
  typeof SelectPrimitive.Separator
>;

function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "bg-border pointer-events-none -mx-fs-2 my-fs-2 h-fs-xs-4",
        className
      )}
      {...props}
    />
  );
}

// Select Scroll Button Component

// TODO:
// - Create a single SelectScrollButton component that can be used for both the up and down buttons
// - Reuse existing action styles (need to create action primitive first)

type SelectScrollUpButtonProps = React.ComponentProps<
  typeof SelectPrimitive.ScrollUpButton
>;

function SelectScrollUpButton({
  className,
  ...props
}: SelectScrollUpButtonProps) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "cursor-default box-center icon-wrapper py-fs-2",
        className
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
}

type SelectScrollDownButtonProps = React.ComponentProps<
  typeof SelectPrimitive.ScrollDownButton
>;

function SelectScrollDownButton({
  className,
  ...props
}: SelectScrollDownButtonProps) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "cursor-default box-center icon-wrapper py-fs-2",
        className
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};

export type {
  SelectContentProps,
  SelectGroupProps,
  SelectItemProps,
  SelectLabelProps,
  SelectProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
};
