"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "h-10 gap-1.5 px-5 py-3",
    "bg-neutral text-neutral-foreground hover:bg-neutral/90",
    "whitespace-nowrap text-base font-medium",
    "cursor-pointer transition-[color,box-shadow]",
    "disabled:pointer-events-none disabled:opacity-50",
    "outline-offset-1 outline-neutral/50 ring-neutral/25",
    "focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:shrink-0",
  ],
  {
    variants: {
      // Style Variants
      color: {
        accent:
          "bg-accent text-accent-foreground outline-accent/50 ring-accent/25 hover:bg-accent/90",
        primary:
          "bg-primary text-primary-foreground outline-primary/50 ring-primary/25 hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground outline-secondary/50 ring-secondary/25 hover:bg-secondary/80",
        danger:
          "bg-danger text-danger-foreground outline-danger/50 ring-danger/25 hover:bg-danger/90",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-md",
        sharp: "rounded-none",
      },
      size: {
        xs: "h-6 gap-1 px-3 py-1 text-xs font-normal [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-4 py-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-3.5",
        md: "h-10 gap-1.5 px-5 py-3 text-base font-medium [&_svg:not([class*='size-'])]:size-4",
        lg: "h-12 gap-1.5 px-6 py-4 text-lg font-semibold [&_svg:not([class*='size-'])]:size-4.5",
        xl: "h-14 gap-2 px-7 py-5 text-xl font-semibold [&_svg:not([class*='size-'])]:size-5",
      },
      variant: {
        solid: "",
        outline:
          "border-2 border-neutral bg-transparent text-neutral hover:border-transparent hover:bg-neutral/90 hover:text-neutral-foreground",
        text: "size-auto px-1 py-0 border-none underline underline-offset-2 bg-transparent text-neutral hover:bg-transparent hover:text-neutral/90",
      },
      // Style Modifiers
      isIcon: {
        true: "size-10 p-3",
      },
      isGhost: {
        true: "border-transparent bg-transparent text-neutral/90 hover:bg-neutral/90 hover:text-neutral-foreground",
      },
      withShadow: {
        true: "shadow-md",
      },
    },
    compoundVariants: [
      // Solid Color Variants
      {
        color: "accent",
        variant: "solid",
        className: "border-accent",
      },
      {
        color: "primary",
        variant: "solid",
        className: "border-primary",
      },
      {
        color: "secondary",
        variant: "solid",
        className: "border-secondary",
      },
      {
        color: "danger",
        variant: "solid",
        className: "border-danger",
      },
      // Solid Ghost Color Modifiers
      {
        isGhost: true,
        color: "accent",
        variant: "solid",
        className:
          "border-transparent bg-transparent text-accent/90 hover:bg-accent/90 hover:text-accent-foreground",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "solid",
        className:
          "border-transparent bg-transparent text-primary/90 hover:bg-primary/90 hover:text-primary-foreground",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "solid",
        className:
          "border-transparent bg-transparent text-secondary/90 hover:bg-secondary/90 hover:text-secondary-foreground",
      },
      {
        isGhost: true,
        color: "danger",
        variant: "solid",
        className:
          "border-transparentbg-transparent text-danger/90 hover:bg-danger/90 hover:text-danger-foreground",
      },
      // Outline Color Variants
      {
        color: "accent",
        variant: "outline",
        className:
          "border-accent text-accent hover:border-transparent hover:bg-accent/90 hover:text-accent-foreground",
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
        color: "danger",
        variant: "outline",
        className:
          "border-danger text-danger hover:border-transparent hover:bg-danger/90 hover:text-danger-foreground",
      },
      // Outline Ghost Color Modifiers
      {
        isGhost: true,
        variant: "outline",
        className: "border-neutral/20",
      },
      {
        isGhost: true,
        color: "accent",
        variant: "outline",
        className:
          "border-accent/20 text-accent/90 hover:border-transparent hover:bg-accent/80 hover:text-accent-foreground",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "outline",
        className:
          "border-primary/20 text-primary/90 hover:border-transparent hover:bg-primary/80 hover:text-primary-foreground",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "outline",
        className:
          "border-secondary/20 text-secondary/90 hover:border-transparent hover:bg-secondary/80 hover:text-secondary-foreground",
      },
      {
        isGhost: true,
        color: "danger",
        variant: "outline",
        className:
          "border-danger/20 text-danger/90 hover:border-transparent hover:bg-danger/80 hover:text-danger-foreground",
      },
      // Text Color Variants
      {
        color: "accent",
        variant: "text",
        className: "text-accent hover:bg-transparent hover:text-accent/90",
      },
      {
        color: "primary",
        variant: "text",
        className: "text-primary hover:bg-transparent hover:text-primary/90",
      },
      {
        color: "secondary",
        variant: "text",
        className:
          "text-secondary hover:bg-transparent hover:text-secondary/90",
      },
      {
        color: "danger",
        variant: "text",
        className: "text-danger hover:bg-transparent hover:text-danger/90",
      },
      // Text Ghost Color Modifiers
      {
        isGhost: true,
        variant: "text",
        className: "text-current/90 hover:bg-transparent hover:text-neutral/90",
      },
      {
        isGhost: true,
        color: "accent",
        variant: "text",
        className: "text-current/90 hover:bg-transparent hover:text-accent/90",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "text",
        className: "text-current/90 hover:bg-transparent hover:text-primary/90",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "text",
        className:
          "text-current/90 hover:bg-transparent hover:text-secondary/90",
      },
      {
        isGhost: true,
        color: "danger",
        variant: "text",
        className: "text-current/90 hover:bg-transparent hover:text-danger/90",
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
      // Icon Size Modifiers
      {
        isIcon: true,
        size: "xs",
        className: "size-6 p-0",
      },
      {
        isIcon: true,
        size: "sm",
        className: "size-8 p-0.5",
      },
      {
        isIcon: true,
        size: "md",
        className: "size-10 p-1",
      },
      {
        isIcon: true,
        size: "lg",
        className: "size-12 p-1.5",
      },
      {
        isIcon: true,
        size: "xl",
        className: "size-14 p-2",
      },
      // Text Icon Size Modifiers
      {
        isIcon: true,
        variant: "text",
        className: "size-auto p-0",
      },
      {
        isIcon: true,
        variant: "text",
        size: ["xs", "sm", "md", "lg", "xl"],
        className: "size-auto p-0",
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
  }
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
          isIcon,
          isGhost,
          withShadow,
          className,
        })
      )}
      {...props}
    />
  );
}

export type { ButtonProps, ButtonVariantProps };
export { Button, buttonVariants };
