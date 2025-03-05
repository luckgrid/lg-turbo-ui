"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "h-10 gap-2 px-5 py-3 has-[>svg]:px-3",
    "bg-accent text-accent-foreground hover:bg-accent/90",
    "whitespace-nowrap text-base font-medium",
    "transition-[color,box-shadow]",
    "disabled:pointer-events-none disabled:opacity-50",
    "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50",
    "focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      // Style Variants
      color: {
        neutral: "bg-neutral text-neutral-foreground hover:bg-neutral/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      shape: {
        circle: "rounded-full",
        rounded: "rounded-md",
        square: "rounded-none",
      },
      size: {
        xs: "h-6 gap-1 px-3 py-1 has-[>svg]:px-1.5",
        sm: "h-8 gap-2 px-4 py-2 has-[>svg]:px-2.5",
        md: "h-10 gap-2 px-5 py-3 has-[>svg]:px-3",
        lg: "h-12 gap-3 px-6 py-4 has-[>svg]:px-4",
        xl: "h-14 gap-4 px-7 py-5 has-[>svg]:px-6",
      },
      variant: {
        solid: "",
        outline:
          "border-2 border-accent bg-transparent text-accent-foreground/80 hover:border-transparent hover:bg-accent/90 hover:text-accent-foreground",
        text: "size-auto p-0 border-none bg-transparent text-current hover:bg-transparent hover:text-current/80",
      },
      // Style Modifiers
      isIcon: {
        true: "p-0",
      },
      isGhost: {
        true: "border-transparent bg-transparent text-current hover:bg-transparent hover:bg-accent/60 hover:text-accent-foreground/60",
      },
      isPill: {
        true: "rounded-full",
      },
      withShadow: {
        true: "shadow-md",
      },
    },
    compoundVariants: [
      // Color Outline Variants
      {
        color: "neutral",
        variant: "outline",
        className:
          "border-neutral text-neutral hover:border-transparent hover:bg-neutral/90 hover:text-neutral-foreground",
      },
      {
        color: "primary",
        variant: "outline",
        className:
          "border-primary text-primary hover:border-transparent hover:bg-primary/90 hover:text-primary-foreground",
      },
      {
        color: "secondary",
        variant: "outline",
        className:
          "border-secondary text-secondary hover:border-transparent hover:bg-secondary/90 hover:text-secondary-foreground",
      },
      {
        color: "destructive",
        variant: "outline",
        className:
          "border-destructive text-destructive hover:border-transparent hover:bg-destructive/90 hover:text-destructive-foreground",
      },
      // Color Text Variants
      {
        color: "neutral",
        variant: "text",
        className: "text-current hover:text-neutral/80",
      },
      {
        color: "primary",
        variant: "text",
        className: "text-current hover:text-primary/80",
      },
      {
        color: "secondary",
        variant: "text",
        className: "text-current hover:text-secondary/80",
      },
      {
        color: "destructive",
        variant: "text",
        className: "text-current hover:text-destructive/80",
      },
      // Ghost Color Solid Variant Modifiers
      {
        isGhost: true,
        color: "neutral",
        variant: "solid",
        className:
          "bg-transparent text-neutral hover:bg-neutral/80 hover:text-neutral-foreground",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "solid",
        className:
          "bg-primary text-primary hover:bg-primary/80 hover:text-primary-foreground",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "solid",
        className:
          "bg-secondary text-secondary hover:bg-secondary/80 hover:text-secondary-foreground",
      },
      {
        isGhost: true,
        color: "destructive",
        variant: "solid",
        className:
          "bg-destructive text-destructive hover:bg-destructive/80 hover:text-destructive-foreground",
      },
      // Ghost Color Outline Variant Modifiers
      {
        isGhost: true,
        color: "neutral",
        variant: "outline",
        className:
          "border-neutral/20 text-neutral/80 hover:border-transparent hover:bg-neutral/80 hover:text-neutral-foreground",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "outline",
        className:
          "border-primary/20 text-primary/80 hover:border-transparent hover:bg-primary/80 hover:text-primary-foreground",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "outline",
        className:
          "border-secondary/20 text-secondary/80 hover:border-transparent hover:bg-secondary/80 hover:text-secondary-foreground",
      },
      {
        isGhost: true,
        color: "destructive",
        variant: "outline",
        className:
          "border-destructive/20 text-destructive/80 hover:border-transparent hover:bg-destructive/80 hover:text-destructive-foreground",
      },
      // Ghost Color Text Variant Modifiers
      {
        isGhost: true,
        color: "neutral",
        variant: "text",
        className: "text-current/80 hover:bg-transparent hover:text-neutral/60",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "text",
        className: "text-current/80 hover:bg-transparent hover:text-primary/60",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "text",
        className:
          "text-current/80 hover:bg-transparent hover:text-secondary/60",
      },
      {
        isGhost: true,
        color: "destructive",
        variant: "text",
        className:
          "text-current/80 hover:bg-transparent hover:text-destructive/60",
      },
      // Rounded Shape Size Variants
      {
        shape: "rounded",
        size: "xs",
        className: "rounded-xs",
      },
      {
        shape: "rounded",
        size: "sm",
        className: "rounded-sm",
      },
      {
        shape: "rounded",
        size: "md",
        className: "rounded-md",
      },
      {
        shape: "rounded",
        size: "lg",
        className: "rounded-lg",
      },
      {
        shape: "rounded",
        size: "xl",
        className: "rounded-xl",
      },
      // Pill Size Modifiers
      {
        isPill: true,
        size: "xs",
        className: "px-6",
      },
      {
        isPill: true,
        size: "sm",
        className: "px-9",
      },
      {
        isPill: true,
        size: "md",
        className: "px-12",
      },
      {
        isPill: true,
        size: "lg",
        className: "px-16",
      },
      {
        isPill: true,
        size: "xl",
        className: "px-20",
      },
      // Icon Size Modifiers
      {
        isIcon: true,
        size: "xs",
        className: "size-6",
      },
      {
        isIcon: true,
        size: "sm",
        className: "size-8",
      },
      {
        isIcon: true,
        size: "md",
        className: "size-10",
      },
      {
        isIcon: true,
        size: "lg",
        className: "size-12",
      },
      {
        isIcon: true,
        size: "xl",
        className: "size-14",
      },
      // Shadow Size Modifiers
      {
        withShadow: true,
        size: "xs",
        className: "shadow-xs",
      },
      {
        withShadow: true,
        size: "sm",
        className: "shadow-sm",
      },
      {
        withShadow: true,
        size: "md",
        className: "shadow-md",
      },
      {
        withShadow: true,
        size: "lg",
        className: "shadow-lg",
      },
      {
        withShadow: true,
        size: "xl",
        className: "shadow-xl",
      },
    ],
    defaultVariants: {
      variant: "solid",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariantProps & {
    asChild?: boolean;
  };

function Button({
  asChild,
  className,
  color,
  shape,
  size,
  variant,
  isIcon,
  isGhost,
  isPill,
  withShadow,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      data-slot="button"
      className={cn(
        buttonVariants({
          color,
          shape,
          size,
          variant,
          isPill,
          isIcon,
          isGhost,
          withShadow,
          className,
        }),
      )}
      {...props}
    />
  );
}

export type { ButtonProps, ButtonVariantProps };
export { Button, buttonVariants };
