import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
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

// Ghost Button Modifier
const ghostButton = [
  'shadow-none border-transparent',
  'bg-transparent focus-visible:bg-border',
  'text-current hover:text-current/90 focus-visible:text-current',
];

const buttonVariants = cva(
  [
    'box-centered inline-flex',
    'action cursor-pointer',
    'text-label font-medium tracking-wide leading-none whitespace-nowrap',
    'focus-visible:ring-4 aria-invalid:focus-visible:ring-0',
  ],
  {
    variants: {
      // Style Variants
      color: {
        base: 'action-neutral',
        accent: 'action-accent',
        primary: 'action-primary',
        secondary: 'action-secondary',
        danger: 'action-danger',
      },
      radius: {
        sm: 'rounded-fs-xs',
        base: 'rounded-fs-sm',
        md: 'rounded-fs-md',
        lg: 'rounded-fs-lg',
        xl: 'rounded-fs-xl',
        full: 'rounded-full',
        none: 'rounded-none',
        unset: '',
      },
      shadow: {
        sm: 'shadow-sm',
        base: 'shadow-md',
        md: 'shadow-lg',
        lg: 'shadow-xl',
        full: 'shadow-2xl',
        none: 'shadow-none',
        unset: '',
      },
      size: {
        sm: 'action-sm text-caption font-medium tracking-wide leading-none',
        base: 'action-base text-label font-medium tracking-wide leading-none',
        md: 'action-md text-body font-semibold tracking-wide leading-none',
        lg: 'action-lg text-subheading font-semibold tracking-wide leading-none',
        full: 'action-full text-subtitle font-bold tracking-wide leading-none',
        none: 'gap-0 p-0 border-0 text-[initial] leading-[initial]',
        unset: '',
      },
      variant: {
        base: 'action-display',
        outline: [
          'shadow-none',
          'border-border hover:border-transparent',
          'bg-transparent hover:bg-border/90 focus-visible:bg-border',
          'text-foreground hover:text-foreground',
        ],
        text: [
          'box-content size-fit p-0',
          'underline underline-offset-(--line-lg) decoration-(--line-sm)',
          'shadow-none border-none',
          'bg-transparent hover:bg-transparent focus-visible:bg-transparent',
          'text-foreground hover:text-foreground/80 focus-visible:text-foreground',
        ],
      },
      // Style Modifiers
      isIcon: {
        true: ['size-fs-8 p-0', "[&_svg:not([class*='size-'])]:size-fs-4"],
      },
      isGhost: {
        true: ghostButton,
      },
      notAnimated: {
        false:
          'active:not-disabled:motion-scale-in-[0.95] active:not-disabled:motion-duration-300 active:not-disabled:motion-ease-spring-bouncy',
      },
    },
    compoundVariants: [
      // Base Colors
      {
        color: 'base',
        variant: 'base',
        className: 'action-neutral',
      },
      {
        color: 'accent',
        variant: 'base',
        className: 'action-accent',
      },
      {
        color: 'primary',
        variant: 'base',
        className: 'action-primary',
      },
      {
        color: 'secondary',
        variant: 'base',
        className: 'action-secondary',
      },
      {
        color: 'danger',
        variant: 'base',
        className: 'action-danger',
      },
      // Ghost Colors
      {
        color: 'base',
        isGhost: true,
        className: [
          ghostButton,
          'hover:bg-neutral/90 focus-visible:bg-neutral/90',
          'hover:text-neutral-foreground focus-visible:text-neutral-foreground',
        ],
      },
      {
        color: 'accent',
        isGhost: true,
        className: [
          ghostButton,
          'hover:bg-accent/90 focus-visible:bg-accent/90',
          'hover:text-accent-foreground focus-visible:text-accent-foreground',
        ],
      },
      {
        color: 'primary',
        isGhost: true,
        className: [
          ghostButton,
          'hover:bg-primary/90 focus-visible:bg-primary/90',
          'hover:text-primary-foreground focus-visible:text-primary-foreground',
        ],
      },
      {
        color: 'secondary',
        isGhost: true,
        className: [
          ghostButton,
          'hover:bg-secondary/90 focus-visible:bg-secondary/90',
          'hover:text-secondary-foreground focus-visible:text-secondary-foreground',
        ],
      },
      {
        color: 'danger',
        isGhost: true,
        className: [
          ghostButton,
          'hover:bg-danger/90 focus-visible:bg-danger/90',
          'hover:text-danger-foreground focus-visible:text-danger-foreground',
        ],
      },
      // Outline Color Variants
      {
        color: 'base',
        variant: 'outline',
        className: [
          'border-neutral',
          'hover:bg-neutral/90 focus-visible:bg-neutral/90',
          'text-neutral hover:text-neutral-foreground focus-visible:text-neutral-foreground',
        ],
      },
      {
        color: 'accent',
        variant: 'outline',
        className: [
          'border-accent',
          'hover:bg-accent/90 focus-visible:bg-accent/90',
          'text-accent hover:text-accent-foreground focus-visible:text-accent-foreground',
        ],
      },
      {
        color: 'primary',
        variant: 'outline',
        className: [
          'border-primary',
          'hover:bg-primary/90 focus-visible:bg-primary/90',
          'text-primary hover:text-primary-foreground focus-visible:text-primary-foreground',
        ],
      },
      {
        color: 'secondary',
        variant: 'outline',
        className: [
          'border-secondary',
          'hover:bg-secondary/90 focus-visible:bg-secondary/90',
          'text-secondary hover:text-secondary-foreground focus-visible:text-secondary-foreground',
        ],
      },
      {
        color: 'danger',
        variant: 'outline',
        className: [
          'border-danger',
          'hover:bg-danger/90 focus-visible:bg-danger/90',
          'text-danger hover:text-danger-foreground focus-visible:text-danger-foreground',
        ],
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
        className: 'text-neutral hover:text-neutral/80 focus-visible:text-neut',
      },
      {
        color: 'accent',
        variant: 'text',
        className: 'text-accent hover:text-accent/80 focus-visible:text-accent',
      },
      {
        color: 'primary',
        variant: 'text',
        className:
          'text-primary hover:text-primary/80 focus-visible:text-primary',
      },
      {
        color: 'secondary',
        variant: 'text',
        className:
          'text-secondary hover:text-secondary/80 focus-visible:text-secondary',
      },
      {
        color: 'danger',
        variant: 'text',
        className: 'text-danger hover:text-danger/80 focus-visible:text-danger',
      },
      // Text Ghost Color Modifiers
      {
        color: 'base',
        variant: 'text',
        isGhost: true,
        className: [
          'hover:bg-transparent focus-visible:bg-transparent',
          'text-current hover:text-neutral/80 focus-visible:text-neutral/80',
        ],
      },
      {
        color: 'accent',
        variant: 'text',
        isGhost: true,
        className: [
          'hover:bg-transparent focus-visible:bg-transparent',
          'text-current',
        ],
      },
      {
        color: 'primary',
        variant: 'text',
        isGhost: true,
        className: [
          'hover:bg-transparent focus-visible:bg-transparent',
          'text-current',
        ],
      },
      {
        color: 'secondary',
        variant: 'text',
        isGhost: true,
        className: [
          'hover:bg-transparent focus-visible:bg-transparent',
          'text-current',
        ],
      },
      {
        color: 'danger',
        variant: 'text',
        isGhost: true,
        className: [
          'hover:bg-transparent focus-visible:bg-transparent',
          'text-current',
        ],
      },
      // Ghost Size Modifiers
      {
        size: 'sm',
        isGhost: true,
        className: 'action-xs',
      },
      {
        size: 'base',
        isGhost: true,
        className: 'action-sm',
      },
      {
        size: 'md',
        isGhost: true,
        className: 'action-base',
      },
      {
        size: 'lg',
        isGhost: true,
        className: 'action-md',
      },
      {
        size: 'full',
        isGhost: true,
        className: 'action-lg',
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
          'underline underline-offset-(--line-sm) decoration-1',
          'outline-offset-(--line-md) focus-visible:outline-1',
        ],
      },
      {
        size: 'base',
        variant: 'text',
        className: [
          'underline underline-offset-(--line-md) decoration-(--line-sm)',
          'outline-offset-(--line-lg) focus-visible:outline-(length:--line-sm)',
        ],
      },
      {
        size: 'md',
        variant: 'text',
        className: [
          'underline underline-offset-(--line-lg) decoration-(--line-md)',
          'outline-offset-(--line-xl) focus-visible:outline-(length:--line-md)',
        ],
      },
      {
        size: 'lg',
        variant: 'text',
        className: [
          'underline underline-offset-(--line-xl) decoration-(--line-lg)',
          'outline-offset-(--line-2xl) focus-visible:outline-(length:--line-lg)',
        ],
      },
      {
        size: 'full',
        variant: 'text',
        className: [
          'underline underline-offset-(--line-xl) decoration-(--line-lg)',
          'outline-offset-(--line-2xl) focus-visible:outline-(length:--line-lg)',
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
        size: 'sm',
        notAnimated: false,
        className: 'active:not-disabled:motion-scale-in-[0.94]',
      },
      {
        size: 'base',
        notAnimated: false,
        className: 'active:not-disabled:motion-scale-in-[0.95]',
      },
      {
        size: 'md',
        notAnimated: false,
        className: 'active:not-disabled:motion-scale-in-[0.96]',
      },
      {
        size: 'lg',
        notAnimated: false,
        className: 'active:not-disabled:motion-scale-in-[0.97]',
      },
      {
        size: 'full',
        notAnimated: false,
        className: 'active:not-disabled:motion-scale-in-[0.98]',
      },
      // Animated Text Modifiers
      {
        variant: 'text',
        notAnimated: false,
        className: 'active:not-disabled:motion-scale-in-[1]',
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
  }
);

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

export { Button, ButtonLink, buttonVariants };
export type { ButtonLinkProps, ButtonProps };
