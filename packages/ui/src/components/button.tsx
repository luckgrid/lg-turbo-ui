import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import {
  actionBase,
  actionOutlineColor,
  actionRadius,
  actionShadow,
  actionSize,
  actionVariant,
} from '@workspace/ui/primitives/action';
import { boxBorder } from '@workspace/ui/primitives/box';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';
import type { LinkProps } from '@workspace/ui/primitives/navigation';
import { Link } from '@workspace/ui/primitives/navigation';

// TODO:
// - update fluid scale vars for icon size, borders and outline modifiers
// - add button link variant for underline settings
// - extend buttonVariants with actionVariants using cx - https://cva.style/docs/getting-started/composing-components
// - break up button styles by variant and modifier to reduce amount of tailwind utility sources imported with base button component
// -- button component can be broken up into separate files based on variant (most apps won't need a button with every variant and modifier)

const buttonTypography =
  'whitespace-nowrap text-label font-medium tracking-wide leading-none';

// Base Button Styles
const buttonBase = [actionBase, actionVariant.base, buttonTypography];

// Button Color Variant
const buttonColor = {
  base: [
    actionOutlineColor.neutral,
    'border-neutral hover:border-transparent',
    'bg-neutral hover:bg-neutral/90',
    'text-neutral-foreground hover:text-neutral-foreground',
  ],
  accent: [
    actionOutlineColor.accent,
    'border-accent hover:border-transparent',
    'bg-accent hover:bg-accent/90',
    'text-accent-foreground hover:text-accent-foreground',
  ],
  primary: [
    actionOutlineColor.primary,
    'border-primary hover:border-transparent',
    'bg-primary hover:bg-primary/90',
    'text-primary-foreground hover:text-primary-foreground',
  ],
  secondary: [
    actionOutlineColor.secondary,
    'border-secondary hover:border-transparent',
    'bg-secondary hover:bg-secondary/90',
    'text-secondary-foreground hover:text-secondary-foreground',
  ],
  danger: [
    actionOutlineColor.danger,
    'border-danger hover:border-transparent',
    'bg-danger hover:bg-danger/90',
    'text-danger-foreground hover:text-danger-foreground',
  ],
};

// Button Size Variant
const buttonSize = {
  ...actionSize,
  sm: [
    actionSize.sm,
    boxBorder.sm,
    'px-fs-3 py-fs-0-75',
    'text-caption font-medium tracking-wide leading-[1.5] md:leading-none',
  ],
  base: [
    actionSize.base,
    boxBorder.base,
    'px-fs-4 py-fs-1',
    'text-label font-medium tracking-wide leading-[1.375] md:leading-none',
  ],
  md: [
    actionSize.md,
    boxBorder.md,
    'px-fs-5 py-fs-2',
    'text-label font-semibold tracking-wide leading-[1.125] md:leading-none',
  ],
  lg: [
    actionSize.lg,
    boxBorder.lg,
    'px-fs-6 py-fs-3',
    'text-body font-semibold tracking-wide leading-none',
  ],
  full: [
    actionSize.full,
    boxBorder.full,
    'px-fs-7 py-fs-4',
    'text-subheading font-bold tracking-wide leading-none',
  ],
};

// Button Variant
const buttonVariant = {
  base: [
    'border-border hover:border-transparent',
    'bg-border hover:bg-border/90',
    'text-foreground hover:text-foreground',
  ],
  outline: [
    'shadow-none',
    'border-border hover:border-transparent',
    'bg-transparent hover:bg-border/90',
    'text-foreground hover:text-foreground',
  ],
  text: [
    actionVariant.content,
    'size-fit p-0',
    'underline underline-offset-(--fs-0-5) decoration-(--fs-0-25)',
    'shadow-none border-none',
    'bg-transparent hover:bg-transparent',
    'text-foreground hover:text-foreground/80',
  ],
};

// Icon Button Modifier
const iconButton = ['size-fs-8 p-0', "[&_svg:not([class*='size-'])]:size-fs-4"];

// Ghost Button Modifier
const ghostButton = [
  'shadow-none border-transparent bg-transparent',
  'text-current hover:text-current/90',
];

// Animated Button Modifier
const animatedButton =
  'active:not-disabled:motion-scale-in-[0.95] active:not-disabled:motion-duration-300 active:not-disabled:motion-ease-spring-bouncy';

const animatedTextButton = 'active:not-disabled:motion-scale-in-[1]';

const animatedButtonSize = {
  sm: 'active:not-disabled:motion-scale-in-[0.94]',
  base: 'active:not-disabled:motion-scale-in-[0.95]',
  md: 'active:not-disabled:motion-scale-in-[0.96]',
  lg: 'active:not-disabled:motion-scale-in-[0.97]',
  full: 'active:not-disabled:motion-scale-in-[0.98]',
};

const buttonVariants = cva(buttonBase, {
  variants: {
    // Style Variants
    color: buttonColor,
    radius: actionRadius,
    shadow: actionShadow,
    size: buttonSize,
    variant: buttonVariant,
    // Style Modifiers
    isIcon: {
      true: iconButton,
    },
    isGhost: {
      true: ghostButton,
    },
    notAnimated: {
      false: animatedButton,
    },
  },
  compoundVariants: [
    // Base Colors
    {
      color: 'base',
      variant: 'base',
      className: buttonColor.base,
    },
    {
      color: 'accent',
      variant: 'base',
      className: buttonColor.accent,
    },
    {
      color: 'primary',
      variant: 'base',
      className: buttonColor.primary,
    },
    {
      color: 'secondary',
      variant: 'base',
      className: buttonColor.secondary,
    },
    {
      color: 'danger',
      variant: 'base',
      className: buttonColor.danger,
    },
    // Ghost Colors
    {
      color: 'base',
      isGhost: true,
      className: [
        ghostButton,
        'hover:bg-neutral/90 hover:text-neutral-foreground',
      ],
    },
    {
      color: 'accent',
      isGhost: true,
      className: [
        ghostButton,
        'hover:bg-accent/90 hover:text-accent-foreground',
      ],
    },
    {
      color: 'primary',
      isGhost: true,
      className: [
        ghostButton,
        'hover:bg-primary/90 hover:text-primary-foreground',
      ],
    },
    {
      color: 'secondary',
      isGhost: true,
      className: [
        ghostButton,
        'hover:bg-secondary/90 hover:text-secondary-foreground',
      ],
    },
    {
      color: 'danger',
      isGhost: true,
      className: [
        ghostButton,
        'hover:bg-danger/90 hover:text-danger-foreground',
      ],
    },
    // Outline Color Variants
    {
      color: 'base',
      variant: 'outline',
      className:
        'border-neutral text-neutral-1 hover:bg-neutral/90 hover:text-neutral-foreground',
    },
    {
      color: 'accent',
      variant: 'outline',
      className:
        'border-accent text-accent-1 hover:bg-accent/90 hover:text-accent-foreground',
    },
    {
      color: 'primary',
      variant: 'outline',
      className:
        'border-primary text-primary hover:bg-primary/90 hover:text-primary-foreground',
    },
    {
      color: 'secondary',
      variant: 'outline',
      className:
        'border-secondary text-secondary hover:bg-secondary/90 hover:text-secondary-foreground',
    },
    {
      color: 'danger',
      variant: 'outline',
      className:
        'border-danger text-danger-1 hover:bg-danger/90 hover:text-danger-foreground',
    },
    // Outline Ghost Color Modifiers
    {
      variant: 'outline',
      isGhost: true,
      className: [
        'border-current/10 hover:border-transparent',
        'bg-transparent hover:bg-border/90',
        'text-current hover:text-foreground',
      ],
    },
    {
      color: 'base',
      variant: 'outline',
      isGhost: true,
      className: 'hover:bg-neutral/80 hover:text-neutral-foreground',
    },
    {
      color: 'accent',
      variant: 'outline',
      isGhost: true,
      className: 'hover:bg-accent/80 hover:text-accent-foreground',
    },
    {
      color: 'primary',
      variant: 'outline',
      isGhost: true,
      className: 'hover:bg-primary/80 hover:text-primary-foreground',
    },
    {
      color: 'secondary',
      variant: 'outline',
      isGhost: true,
      className: 'hover:bg-secondary/80 hover:text-secondary-foreground',
    },
    {
      color: 'danger',
      variant: 'outline',
      isGhost: true,
      className: 'hover:bg-danger/80 hover:text-danger-foreground',
    },
    // Text Color Variants
    {
      color: 'base',
      variant: 'text',
      className: 'text-neutral-1 hover:text-neutral-1/80',
    },
    {
      color: 'accent',
      variant: 'text',
      className: 'text-accent-1 hover:text-accent-1/80',
    },
    {
      color: 'primary',
      variant: 'text',
      className: 'text-primary hover:text-primary-1/80',
    },
    {
      color: 'secondary',
      variant: 'text',
      className: 'text-secondary hover:text-secondary/80',
    },
    {
      color: 'danger',
      variant: 'text',
      className: 'text-danger-1 hover:text-danger-1/80',
    },
    // Text Ghost Color Modifiers
    {
      color: 'base',
      variant: 'text',
      isGhost: true,
      className: 'text-current hover:bg-transparent hover:text-neutral-3/80',
    },
    {
      color: 'accent',
      variant: 'text',
      isGhost: true,
      className: 'text-current hover:bg-transparent hover:text-accent-1/80',
    },
    {
      color: 'primary',
      variant: 'text',
      isGhost: true,
      className: 'text-current hover:bg-transparent hover:text-primary/80',
    },
    {
      color: 'secondary',
      variant: 'text',
      isGhost: true,
      className: 'text-current hover:bg-transparent hover:text-secondary/80',
    },
    {
      color: 'danger',
      variant: 'text',
      isGhost: true,
      className: 'text-current hover:bg-transparent hover:text-danger-1/80',
    },
    // Ghost Size Modifiers
    {
      size: 'sm',
      isGhost: true,
      className: 'px-fs-0-75 py-fs-0-5',
    },
    {
      size: 'base',
      isGhost: true,
      className: 'px-fs-1 py-fs-0-75',
    },
    {
      size: 'md',
      isGhost: true,
      className: 'px-fs-2 py-fs-1',
    },
    {
      size: 'lg',
      isGhost: true,
      className: 'px-fs-3 py-fs-2',
    },
    {
      size: 'full',
      isGhost: true,
      className: 'px-fs-4 py-fs-3',
    },
    // Icon Size Modifiers
    {
      size: 'sm',
      isIcon: true,
      className: "size-fs-6 [&_svg:not([class*='size-'])]:size-fs-3",
    },
    {
      size: 'base',
      isIcon: true,
      className: "size-fs-8 [&_svg:not([class*='size-'])]:size-fs-4",
    },
    {
      size: 'md',
      isIcon: true,
      className: "size-fs-10 [&_svg:not([class*='size-'])]:size-fs-5",
    },
    {
      size: 'lg',
      isIcon: true,
      className: "size-fs-12 [&_svg:not([class*='size-'])]:size-fs-6",
    },
    {
      size: 'full',
      isIcon: true,
      className: "size-fs-14 [&_svg:not([class*='size-'])]:size-fs-7",
    },
    // Text Size Modifiers
    {
      size: 'sm',
      variant: 'text',
      className: [
        'underline underline-offset-(--fs-0-25) decoration-1',
        'outline-offset-(--fs-0-375) focus-visible:outline-1',
      ],
    },
    {
      size: 'base',
      variant: 'text',
      className: [
        'underline underline-offset-(--fs-0-375) decoration-(--fs-0-25)',
        'outline-offset-(--fs-0-5) focus-visible:outline-(length:--fs-0-25)',
      ],
    },
    {
      size: 'md',
      variant: 'text',
      className: [
        'underline underline-offset-(--fs-0-5) decoration-(--fs-0-375)',
        'outline-offset-(--fs-0-625) focus-visible:outline-(length:--fs-0-375)',
      ],
    },
    {
      size: 'lg',
      variant: 'text',
      className: [
        'underline underline-offset-(--fs-0-625) decoration-(--fs-0-5)',
        'outline-offset-(--fs-0-75) focus-visible:outline-(length:--fs-0-5)',
      ],
    },
    {
      size: 'full',
      variant: 'text',
      className: [
        'underline underline-offset-(--fs-0-625) decoration-(--fs-0-5)',
        'outline-offset-(--fs-0-75) focus-visible:outline-(length:--fs-0-5)',
      ],
    },
    // Text Ghost Size Modifiers
    {
      variant: 'text',
      isGhost: true,
      className: 'size-fit p-0',
    },
    // Text Icon Size Modifiers
    {
      variant: 'text',
      isIcon: true,
      className: 'size-fit p-0',
    },
    // Animated Size Modifiers
    {
      size: 'base',
      notAnimated: false,
      className: animatedButtonSize.base,
    },
    {
      size: 'sm',
      notAnimated: false,
      className: animatedButtonSize.sm,
    },
    {
      size: 'md',
      notAnimated: false,
      className: animatedButtonSize.md,
    },
    {
      size: 'lg',
      notAnimated: false,
      className: animatedButtonSize.lg,
    },
    {
      size: 'full',
      notAnimated: false,
      className: animatedButtonSize.full,
    },
    // Animated Text Modifiers
    {
      variant: 'text',
      notAnimated: false,
      className: animatedTextButton,
    },
  ],
  defaultVariants: {
    color: 'base',
    radius: 'base',
    shadow: 'base',
    size: 'base',
    variant: 'base',
    notAnimated: false,
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps<T extends React.ElementType = 'button'> = ElementProps<T> &
  ButtonVariantProps;

function Button<T extends React.ElementType = 'button'>({
  as = 'button',
  type = 'button',
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
      data-slot='button'
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

type ButtonLinkProps = Omit<ButtonProps<'a'>, 'as' | 'asChild'> & LinkProps;

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
      data-slot='button-link'
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

export { Button, buttonBase, ButtonLink, buttonTypography, buttonVariants };
export type { ButtonLinkProps, ButtonProps };
