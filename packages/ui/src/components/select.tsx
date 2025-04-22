'use client';

import * as React from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';
import { boxSize } from '@workspace/ui/primitives/box';
import {
  inputBase,
  inputRadius,
  inputShadow,
  inputSize,
  inputVariant,
} from '@workspace/ui/primitives/input';

// Select Component

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot='select' {...props} />;
}

// Select Group Component

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot='select-group' {...props} />;
}

// Select Value Component

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot='select-value' {...props} />;
}

// Select Trigger Component

const selectTriggerVariants = cva(
  [
    inputBase,
    inputVariant.select,
    '*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-fs-2',
  ],
  {
    variants: {
      radius: inputRadius,
      shadow: inputShadow,
      size: inputSize,
    },
    defaultVariants: {
      radius: 'base',
      shadow: 'base',
      size: 'base',
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
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot='select-trigger'
      data-size={size}
      className={cn(selectTriggerVariants({ radius, size, shadow, className }))}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className='transition-transform duration-150' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

// Select Content Component

const selectContentVariants = cva(
  [
    'box z-50 overflow-x-hidden overflow-y-auto',
    'max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin)',
    'border bg-popover text-popover-foreground',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      // Style Variants
      position: {
        'item-aligned': '',
        popper:
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
      },
      radius: inputRadius,
      shadow: inputShadow,
      size: boxSize,
    },
    defaultVariants: {
      position: 'popper',
      radius: 'base',
      shadow: 'base',
      size: 'base',
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
        data-slot='select-content'
        className={cn(
          selectContentVariants({ position, radius, size, shadow, className })
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-fs-0-5',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-fs-1'
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

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot='select-label'
      className={cn('text-foreground px-fs-2 py-fs-1 text-label', className)}
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
    'w-full cursor-default outline-hidden select-none',
    'box items-center gap-fs-2 py-fs-1 pr-fs-8 pl-fs-2 text-label',
    'focus:bg-primary focus:text-primary-foreground',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    '*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-fs-2',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-fs-4",
    "[&_svg:not([class*='text-'])]:text-muted-foreground focus:[&_svg:not([class*='text-'])]:text-primary-foreground",
  ],
  {
    variants: {
      // Style Variants
      radius: inputRadius,
      shadow: inputShadow,
      size: boxSize,
    },
    defaultVariants: {
      radius: 'base',
      size: 'base',
    },
  }
);

type SelectItemVariantProps = VariantProps<typeof selectItemVariants>;

type SelectItemProps = SelectItemVariantProps &
  React.ComponentProps<typeof SelectPrimitive.Item>;

function SelectItem({
  children,
  className,
  radius,
  shadow,
  size,
  ...props
}: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot='select-item'
      className={cn(selectItemVariants({ radius, size, shadow, className }))}
      {...props}
    >
      <span className='absolute right-fs-2 size-fs-3 flex items-center justify-center'>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className='size-fs-4' />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

// Select Separator Component

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot='select-separator'
      className={cn(
        'bg-border pointer-events-none -mx-fs-1 my-fs-1 h-fs-0-25',
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

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot='select-scroll-up-button'
      className={cn(
        'flex cursor-default items-center justify-center py-fs-1',
        className
      )}
      {...props}
    >
      <ChevronUpIcon className='size-fs-4' />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot='select-scroll-down-button'
      className={cn(
        'flex cursor-default items-center justify-center py-fs-1',
        className
      )}
      {...props}
    >
      <ChevronDownIcon className='size-fs-4' />
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
