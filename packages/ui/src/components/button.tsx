import * as React from "react";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";
import type { ElementProps } from "@workspace/ui/primitives/element";
import { Element } from "@workspace/ui/primitives/element";
import type { LinkProps } from "@workspace/ui/primitives/navigation";
import { Link } from "@workspace/ui/primitives/navigation";

// TODO:
// - add button link variant for underline settings
// - extend buttonVariants with actionVariants using cx - https://cva.style/docs/getting-started/composing-components
// - break up button styles by variant and modifier to reduce amount of tailwind utility sources imported with base button component
// -- button component can be broken up into separate files based on variant (most apps won't need a button with every variant and modifier)

// Ghost Button Modifier
const ghostButton = [
  "shadow-none border-transparent",
  "bg-transparent focus-visible:bg-accent",
  "text-current hover:text-current/90 focus-visible:text-current",
];

const buttonVariants = cva(
  [
    "cursor-pointer inline-flex box-center icon-wrapper transition-action",
    "gap-fs-2 px-fs-sm-3 py-fs-sm-1",
    "border-fs-4 outline-offset-fs-2 focus-visible:outline-fs-2",
    "text-accent-foreground bg-accent hover:bg-accent/90 border-accent hover:border-transparent outline-accent/50",
    "text-label font-medium tracking-wide leading-none whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-fs-2 aria-invalid:focus-visible:outline-0",
  ],
  {
    variants: {
      // Style Variants
      color: {
        base: "text-neutral-foreground bg-neutral hover:bg-neutral/90 border-neutral outline-neutral/50 focus-visible:outline-neutral",
        accent:
          "text-accent-foreground bg-accent hover:bg-accent/90 border-accent outline-accent/50 focus-visible:outline-accent",
        primary:
          "text-primary-foreground bg-primary hover:bg-primary/90 border-primary outline-primary/50 focus-visible:outline-primary",
        secondary:
          "text-secondary-foreground bg-secondary hover:bg-secondary/90 border-secondary outline-secondary/50 focus-visible:outline-secondary",
        danger:
          "text-danger-foreground bg-danger hover:bg-danger/90 border-danger outline-danger/50 focus-visible:outline-danger",
      },
      radius: {
        sm: "rounded-fs-2",
        base: "rounded-fs-3",
        md: "rounded-fs-4",
        lg: "rounded-fs-5",
        full: "rounded-full",
        none: "rounded-none",
        unset: "",
      },
      shadow: {
        sm: "shadow-sm",
        base: "shadow-md",
        md: "shadow-lg",
        lg: "shadow-xl",
        full: "shadow-2xl",
        none: "shadow-none",
        unset: "",
      },
      size: {
        sm: "gap-fs-1 px-fs-sm-2 py-fs-1 border-fs-3 outline-offset-fs-1 focus-visible:outline-fs-1 text-caption font-medium tracking-wide leading-none",
        base: "gap-fs-2 px-fs-sm-4 py-fs-sm-1 border-fs-4 outline-offset-fs-2 focus-visible:outline-fs-2 text-label font-medium tracking-wide leading-none",
        md: "gap-fs-sm-1 px-fs-sm-6 py-fs-sm-2 border-fs-5 outline-offset-fs-3 focus-visible:outline-fs-3 text-body font-semibold tracking-wide leading-none",
        lg: "gap-fs-sm-2 px-fs-sm-8 py-fs-sm-3 border-fs-6 outline-offset-fs-4 focus-visible:outline-fs-4 text-subheading font-semibold tracking-wide leading-none",
        full: "gap-fs-sm-3 px-fs-sm-12 py-fs-sm-5 border-fs-8 outline-offset-fs-6 focus-visible:outline-fs-6 text-subtitle font-bold tracking-wide leading-none",
        none: "gap-0 p-0 border-0 outline-offset-0 focus-visible:outline-0",
        unset: "",
      },
      variant: {
        base: "",
        outline: [
          "shadow-none border-fs-5 outline-offset-fs-3 focus-visible:outline-fs-3",
          "border-accent hover:border-transparent focus-visible:border-transparent",
          "bg-transparent hover:bg-accent/90 focus-visible:bg-accent",
          "text-accent hover:text-accent-foreground focus-visible:text-accent-foreground",
        ],
        text: [
          "box-content size-fit p-0 border-none shadow-none",
          "bg-transparent hover:bg-transparent focus-visible:bg-transparent",
          "text-accent hover:text-accent/90 focus-visible:text-accent",
          "underline decoration-from-font underline-offset-(--fs-xs-4)",
        ],
      },
      // Style Modifiers
      isIcon: {
        true: "size-fs-8 p-0 [&_svg:not([class*='size-'])]:size-[1.25em]",
      },
      isGhost: {
        true: ghostButton,
      },
      notAnimated: {
        false:
          "active:not-disabled:motion-scale-in-[0.95] active:not-disabled:motion-duration-300 active:not-disabled:motion-ease-spring-bouncy",
      },
    },
    compoundVariants: [
      // Ghost Colors
      {
        color: "base",
        isGhost: true,
        className: [
          ...ghostButton,
          "hover:bg-neutral/90 focus-visible:bg-neutral/90",
          "hover:text-neutral-foreground focus-visible:text-neutral-foreground",
        ],
      },
      {
        color: "accent",
        isGhost: true,
        className: [
          ...ghostButton,
          "hover:bg-accent/90 focus-visible:bg-accent/90",
          "hover:text-accent-foreground focus-visible:text-accent-foreground",
        ],
      },
      {
        color: "primary",
        isGhost: true,
        className: [
          ...ghostButton,
          "hover:bg-primary/90 focus-visible:bg-primary/90",
          "hover:text-primary-foreground focus-visible:text-primary-foreground",
        ],
      },
      {
        color: "secondary",
        isGhost: true,
        className: [
          ...ghostButton,
          "hover:bg-secondary/90 focus-visible:bg-secondary/90",
          "hover:text-secondary-foreground focus-visible:text-secondary-foreground",
        ],
      },
      {
        color: "danger",
        isGhost: true,
        className: [
          ...ghostButton,
          "hover:bg-danger/90 focus-visible:bg-danger/90",
          "hover:text-danger-foreground focus-visible:text-danger-foreground",
        ],
      },
      // Outline Color Variants
      {
        color: "base",
        variant: "outline",
        className: [
          "border-neutral",
          "hover:bg-neutral/90 focus-visible:bg-neutral/90",
          "text-neutral hover:text-neutral-foreground focus-visible:text-neutral-foreground",
        ],
      },
      {
        color: "accent",
        variant: "outline",
        className: [
          "border-accent",
          "hover:bg-accent/90 focus-visible:bg-accent/90",
          "text-accent hover:text-accent-foreground focus-visible:text-accent-foreground",
        ],
      },
      {
        color: "primary",
        variant: "outline",
        className: [
          "border-primary",
          "hover:bg-primary/90 focus-visible:bg-primary/90",
          "text-primary hover:text-primary-foreground focus-visible:text-primary-foreground",
        ],
      },
      {
        color: "secondary",
        variant: "outline",
        className: [
          "border-secondary",
          "hover:bg-secondary/90 focus-visible:bg-secondary/90",
          "text-secondary hover:text-secondary-foreground focus-visible:text-secondary-foreground",
        ],
      },
      {
        color: "danger",
        variant: "outline",
        className: [
          "border-danger",
          "hover:bg-danger/90 focus-visible:bg-danger/90",
          "text-danger hover:text-danger-foreground focus-visible:text-danger-foreground",
        ],
      },
      // Outline Ghost Color Modifiers
      {
        variant: "outline",
        isGhost: true,
        className: [
          "border-current/10 hover:border-transparent",
          "bg-transparent hover:bg-accent/90",
          "text-current hover:text-accent-foreground",
        ],
      },
      {
        color: "base",
        variant: "outline",
        isGhost: true,
        className: "hover:bg-neutral/80 hover:text-neutral-foreground",
      },
      {
        color: "accent",
        variant: "outline",
        isGhost: true,
        className: "hover:bg-accent/80 hover:text-accent-foreground",
      },
      {
        color: "primary",
        variant: "outline",
        isGhost: true,
        className: "hover:bg-primary/80 hover:text-primary-foreground",
      },
      {
        color: "secondary",
        variant: "outline",
        isGhost: true,
        className: "hover:bg-secondary/80 hover:text-secondary-foreground",
      },
      {
        color: "danger",
        variant: "outline",
        isGhost: true,
        className: "hover:bg-danger/80 hover:text-danger-foreground",
      },
      // Text Color Variants
      {
        color: "base",
        variant: "text",
        className:
          "text-neutral hover:text-neutral/80 focus-visible:text-neutral",
      },
      {
        color: "accent",
        variant: "text",
        className: "text-accent hover:text-accent/80 focus-visible:text-accent",
      },
      {
        color: "primary",
        variant: "text",
        className:
          "text-primary hover:text-primary/80 focus-visible:text-primary",
      },
      {
        color: "secondary",
        variant: "text",
        className:
          "text-secondary hover:text-secondary/80 focus-visible:text-secondary",
      },
      {
        color: "danger",
        variant: "text",
        className: "text-danger hover:text-danger/80 focus-visible:text-danger",
      },
      // Text Ghost Color Modifiers
      {
        color: "base",
        variant: "text",
        isGhost: true,
        className: [
          "hover:bg-transparent focus-visible:bg-transparent",
          "text-current hover:text-neutral/80 focus-visible:text-neutral/80",
        ],
      },
      {
        color: "accent",
        variant: "text",
        isGhost: true,
        className: [
          "hover:bg-transparent focus-visible:bg-transparent",
          "text-current",
        ],
      },
      {
        color: "primary",
        variant: "text",
        isGhost: true,
        className: [
          "hover:bg-transparent focus-visible:bg-transparent",
          "text-current",
        ],
      },
      {
        color: "secondary",
        variant: "text",
        isGhost: true,
        className: [
          "hover:bg-transparent focus-visible:bg-transparent",
          "text-current",
        ],
      },
      {
        color: "danger",
        variant: "text",
        isGhost: true,
        className: [
          "hover:bg-transparent focus-visible:bg-transparent",
          "text-current",
        ],
      },
      // Outline Sizes
      {
        size: "sm",
        variant: "outline",
        className: "border-fs-4 outline-offset-fs-2 focus-visible:outline-fs-2",
      },
      {
        size: "base",
        variant: "outline",
        className: "border-fs-5 outline-offset-fs-3 focus-visible:outline-fs-3",
      },
      {
        size: "md",
        variant: "outline",
        className: "border-fs-6 outline-offset-fs-4 focus-visible:outline-fs-4",
      },
      {
        size: "lg",
        variant: "outline",
        className: "border-fs-7 outline-offset-fs-5 focus-visible:outline-fs-5",
      },
      {
        size: "full",
        variant: "outline",
        className: "border-fs-9 outline-offset-fs-7 focus-visible:outline-fs-7",
      },
      // Ghost Size Modifiers
      {
        size: "sm",
        isGhost: true,
        className: "gap-fs-1 p-fs-1",
      },
      {
        size: "base",
        isGhost: true,
        className: "gap-fs-1 p-fs-2",
      },
      {
        size: "md",
        isGhost: true,
        className: "gap-fs-2 p-fs-sm-1",
      },
      {
        size: "lg",
        isGhost: true,
        className: "gap-fs-2 p-fs-sm-2",
      },
      {
        size: "full",
        isGhost: true,
        className: "gap-fs-sm-1 p-fs-sm-4",
      },
      // Icon Size Modifiers
      {
        size: ["sm", "base", "md", "lg", "full"],
        isIcon: true,
        className: "p-0",
      },
      {
        size: "sm",
        isIcon: true,
        className: "size-fs-6 [&_svg:not([class*='size-'])]:size-[1.125em]",
      },
      {
        size: "base",
        isIcon: true,
        className: "size-fs-8 [&_svg:not([class*='size-'])]:size-[1.25em]",
      },
      {
        size: "md",
        isIcon: true,
        className: "size-fs-10 [&_svg:not([class*='size-'])]:size-[1.375em]",
      },
      {
        size: "lg",
        isIcon: true,
        className: "size-fs-12 [&_svg:not([class*='size-'])]:size-[1.5em]",
      },
      {
        size: "full",
        isIcon: true,
        className: "size-fs-16 [&_svg:not([class*='size-'])]:size-[1.625em]",
      },
      // Text Size Modifiers
      {
        size: "sm",
        variant: "text",
        className: "underline-offset-(--line-fs-2)",
      },
      {
        size: "base",
        variant: "text",
        className: "underline-offset-(--line-fs-4)",
      },
      {
        size: "md",
        variant: "text",
        className: "underline-offset-(--line-fs-6)",
      },
      {
        size: "lg",
        variant: "text",
        className: "underline-offset-(--line-fs-8)",
      },
      {
        size: "full",
        variant: "text",
        className: "underline-offset-(--line-fs-12)",
      },
      // Text Ghost Size Modifiers
      {
        variant: "text",
        isGhost: true,
        className: "size-fit p-0",
      },
      // Text Icon Size Modifiers
      {
        variant: "text",
        isIcon: true,
        className: "size-fit p-0",
      },
      // Animated Size Modifiers
      {
        size: "sm",
        notAnimated: false,
        className: "active:not-disabled:motion-scale-in-[0.94]",
      },
      {
        size: "base",
        notAnimated: false,
        className: "active:not-disabled:motion-scale-in-[0.95]",
      },
      {
        size: "md",
        notAnimated: false,
        className: "active:not-disabled:motion-scale-in-[0.96]",
      },
      {
        size: "lg",
        notAnimated: false,
        className: "active:not-disabled:motion-scale-in-[0.97]",
      },
      {
        size: "full",
        notAnimated: false,
        className: "active:not-disabled:motion-scale-in-[0.98]",
      },
      // Animated Text Modifiers
      {
        variant: "text",
        notAnimated: false,
        className: "active:not-disabled:motion-scale-in-[1]",
      },
    ],
    defaultVariants: {
      color: "base",
      radius: "base",
      shadow: "base",
      size: "base",
      variant: "base",
      notAnimated: false,
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps<T extends React.ElementType = "button"> = ElementProps<T> &
  ButtonVariantProps;

function Button<T extends React.ElementType = "button">({
  as = "button",
  type = "button",
  className,
  color,
  radius,
  shadow,
  size,
  variant,
  isIcon,
  isGhost,
  ...props
}: ButtonProps<T>) {
  return (
    <Element
      data-slot="button"
      as={as}
      type={type}
      className={cn(
        buttonVariants({
          color,
          radius,
          shadow,
          size,
          variant,
          isIcon,
          isGhost,
          className,
        })
      )}
      {...props}
    />
  );
}

type ButtonLinkProps = Omit<ButtonProps<"a">, "as" | "asChild"> & LinkProps;

function ButtonLink({
  className,
  color,
  radius,
  shadow,
  size,
  variant,
  isIcon,
  isGhost,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      data-slot="button-link"
      className={cn(
        buttonVariants({
          color,
          radius,
          shadow,
          size,
          variant,
          isIcon,
          isGhost,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, ButtonLink, buttonVariants };
export type { ButtonLinkProps, ButtonProps };
