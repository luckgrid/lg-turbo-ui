import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { SlotElement } from "@workspace/ui/primitives/element";
import type { SlotElementProps } from "@workspace/ui/primitives/element";
import { Link } from "@workspace/ui/primitives/link";
import type { LinkProps } from "@workspace/ui/primitives/link";
import { cn } from "@workspace/ui/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "relative gap-fs-0-75 px-fs-5 py-fs-1 border-(length:--fs-0-25)",
    "border-neutral bg-neutral text-neutral-foreground hover:border-transparent hover:bg-neutral/90",
    "whitespace-nowrap text-body font-medium",
    "cursor-pointer transition-[color,box-shadow]",
    "active:motion-scale-in-[0.95] active:motion-duration-200 active:motion-ease-spring-bouncy",
    "disabled:pointer-events-none disabled:opacity-50",
    "outline-offset-1 outline-neutral/50 ring-neutral/25",
    "focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-fs-3 [&_svg]:shrink-0",
  ],
  {
    variants: {
      // Style Variants
      color: {
        accent:
          "border-accent bg-accent text-accent-foreground outline-accent/50 ring-accent/25 hover:bg-accent/90",
        primary:
          "border-primary bg-primary text-primary-foreground outline-primary/50 ring-primary/25 hover:bg-primary/90",
        secondary:
          "border-secondary bg-secondary text-secondary-foreground outline-secondary/50 ring-secondary/25 hover:bg-secondary/90",
        danger:
          "border-danger bg-danger text-danger-foreground outline-danger/50 ring-danger/25 hover:bg-danger/90",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-fs-md",
        sharp: "rounded-none",
        ticket: [
          "py-fs-0-25 shape-ticket",
          "before:border-b-neutral after:border-t-neutral",
          "hover:before:border-b-neutral/90 hover:after:border-t-neutral/90",
          "focus-visible:ring-0 focus-visible:outline-none",
        ],
      },
      size: {
        xs: "active:motion-scale-in-[0.93] gap-fs-0-5 px-fs-1 py-fs-0-25 text-caption border-1 font-normal [&_svg:not([class*='size-'])]:size-fs-1",
        sm: "active:motion-scale-in-[0.94] gap-fs-0-625 px-fs-3 py-fs-0-5 text-label border-(length:--fs-0-25) font-medium [&_svg:not([class*='size-'])]:size-fs-2",
        md: "active:motion-scale-in-[0.95] gap-fs-0-75 px-fs-5 py-fs-0-75 border-(length:--fs-0-25) text-body font-medium [&_svg:not([class*='size-'])]:size-fs-3",
        lg: "active:motion-scale-in-[0.96] gap-fs-1 px-fs-7 py-fs-1 border-(length:--fs-0-375) text-subheading font-semibold [&_svg:not([class*='size-'])]:size-fs-4",
        xl: "active:motion-scale-in-[0.97] gap-fs-2 px-fs-9 py-fs-2 border-(length:--fs-0-5) text-subtitle font-semibold [&_svg:not([class*='size-'])]:size-fs-6",
      },
      variant: {
        solid: "",
        outline:
          "bg-transparent text-neutral-3 hover:bg-neutral/90 hover:text-neutral-foreground",
        text: "active:motion-scale-in-[1] size-fit px-1 py-0 border-none underline underline-offset-2 bg-transparent text-neutral-3 hover:bg-transparent hover:text-neutral-3/80",
      },
      // Style Modifiers
      isIcon: {
        true: "size-fs-10 p-0",
      },
      isGhost: {
        true: "border-transparent bg-transparent text-current hover:bg-neutral/90 hover:text-neutral-foreground",
      },
      withShadow: {
        true: "shadow-md",
      },
    },
    compoundVariants: [
      // Solid Ghost Color Modifiers
      {
        isGhost: true,
        color: "accent",
        variant: "solid",
        className: "hover:bg-accent/90 hover:text-accent-foreground",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "solid",
        className: "hover:bg-primary/90 hover:text-primary-foreground",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "solid",
        className: "hover:bg-secondary/90 hover:text-secondary-foreground",
      },
      {
        isGhost: true,
        color: "danger",
        variant: "solid",
        className: "hover:bg-danger/90 hover:text-danger-foreground",
      },
      // Outline Color Variants
      {
        color: "accent",
        variant: "outline",
        className:
          "border-accent text-accent-1 hover:bg-accent/90 hover:text-accent-foreground",
      },
      {
        color: "primary",
        variant: "outline",
        className:
          "border-primary text-primary hover:bg-primary/90 hover:text-primary-foreground",
      },
      {
        color: "secondary",
        variant: "outline",
        className:
          "border-secondary text-secondary hover:bg-secondary/90 hover:text-secondary-foreground",
      },
      {
        color: "danger",
        variant: "outline",
        className:
          "border-danger text-danger-1 hover:bg-danger/90 hover:text-danger-foreground",
      },
      // Outline Ghost Color Modifiers
      {
        isGhost: true,
        variant: "outline",
        className: "border-current/40 text-current",
      },
      {
        isGhost: true,
        color: "accent",
        variant: "outline",
        className: "hover:bg-accent/80 hover:text-accent-foreground",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "outline",
        className: "hover:bg-primary/80 hover:text-primary-foreground",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "outline",
        className: "hover:bg-secondary/80 hover:text-secondary-foreground",
      },
      {
        isGhost: true,
        color: "danger",
        variant: "outline",
        className: "hover:bg-danger/80 hover:text-danger-foreground",
      },
      // Text Color Variants
      {
        color: "accent",
        variant: "text",
        className: "text-accent-1 hover:text-accent-1/80",
      },
      {
        color: "primary",
        variant: "text",
        className: "text-primary hover:text-primary-1/80",
      },
      {
        color: "secondary",
        variant: "text",
        className: "text-secondary hover:text-secondary/80",
      },
      {
        color: "danger",
        variant: "text",
        className: "text-danger-1 hover:text-danger-1/80",
      },
      // Text Ghost Color Modifiers
      {
        isGhost: true,
        variant: "text",
        className: "text-current hover:bg-transparent hover:text-neutral-3/80",
      },
      {
        isGhost: true,
        color: "accent",
        variant: "text",
        className: "text-current hover:bg-transparent hover:text-accent-1/80",
      },
      {
        isGhost: true,
        color: "primary",
        variant: "text",
        className: "text-current hover:bg-transparent hover:text-primary/80",
      },
      {
        isGhost: true,
        color: "secondary",
        variant: "text",
        className: "text-current hover:bg-transparent hover:text-secondary/80",
      },
      {
        isGhost: true,
        color: "danger",
        variant: "text",
        className: "text-current hover:bg-transparent hover:text-danger-1/80",
      },
      // Rounded Shape Size Variants
      {
        shape: "rounded",
        size: "xs",
        className: "rounded-fs-xs",
      },
      {
        shape: "rounded",
        size: "sm",
        className: "rounded-fs-sm",
      },
      {
        shape: "rounded",
        size: "md",
        className: "rounded-fs-md",
      },
      {
        shape: "rounded",
        size: "lg",
        className: "rounded-fs-lg",
      },
      {
        shape: "rounded",
        size: "xl",
        className: "rounded-fs-xl",
      },
      // Icon Size Modifiers
      {
        isIcon: true,
        size: "xs",
        className: "size-fs-4",
      },
      {
        isIcon: true,
        size: "sm",
        className: "size-fs-6",
      },
      {
        isIcon: true,
        size: "md",
        className: "size-fs-10",
      },
      {
        isIcon: true,
        size: "lg",
        className: "size-fs-16",
      },
      {
        isIcon: true,
        size: "xl",
        className: "size-fs-20",
      },
      // Text Icon Size Modifiers
      {
        isIcon: true,
        variant: "text",
        className: "size-fit p-fs-0-5",
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
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps<T extends React.ElementType = "button"> = SlotElementProps<T> &
  ButtonVariantProps;

type ButtonLinkProps = Omit<ButtonProps<"a">, "as" | "asChild"> & LinkProps;

function Button<T extends React.ElementType = "button">({
  as = "button",
  className,
  color,
  shape,
  size,
  variant,
  isIcon,
  isGhost,
  withShadow,
  ...props
}: ButtonProps<T>) {
  return (
    <SlotElement
      data-slot="button"
      as={as}
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
        }),
      )}
      {...props}
    />
  );
}

function ButtonLink({
  className,
  color,
  shape,
  size,
  variant,
  isIcon,
  isGhost,
  withShadow,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      data-slot="button-link"
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
        }),
      )}
      {...props}
    />
  );
}

export type { ButtonProps, ButtonLinkProps };
export { Button, ButtonLink };
