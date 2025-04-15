import { cn } from '@workspace/ui/lib/utils';
import { actionSize } from '@workspace/ui/primitives/action';
import { boxRadius, boxShadow } from '@workspace/ui/primitives/box';
import { Element } from '@workspace/ui/primitives/element';
import { Link } from '@workspace/ui/primitives/link';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import type { ElementProps } from '@workspace/ui/primitives/element';
import type { LinkProps } from '@workspace/ui/primitives/navigation';
import type { VariantProps } from 'class-variance-authority';

// TODO:
// - update fluid scale vars for icon size, borders and outline modifiers
// - add button link variant for underline settings
// - update action variant to reuse common style patterns (i.e. animation, outlines, states, etc...)

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'whitespace-nowrap text-label font-medium tracking-wide leading-none',
    'cursor-pointer transition-[background-color,border-color,color,box-shadow,opacity,text-decoration-color,fill,stroke]',
    'outline-offset-1',
    'active:not-disabled:motion-scale-in-[0.95] active:not-disabled:motion-duration-300 active:not-disabled:motion-ease-spring-bouncy',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-fs-[1em]",
  ],
  {
    variants: {
      // Style Variants
      color: {
        base: [
          'text-neutral-foreground',
          'bg-neutral hover:bg-neutral/90',
          'border-neutral outline-neutral/50 ring-neutral/25',
        ],
        accent: [
          'text-accent-foreground',
          'bg-accent hover:bg-accent/90',
          'border-accent outline-accent/50 ring-accent/25',
        ],
        primary: [
          'text-primary-foreground',
          'bg-primary hover:bg-primary/90',
          'border-primary outline-primary/50 ring-primary/25',
        ],
        secondary: [
          'text-secondary-foreground',
          'bg-secondary hover:bg-secondary/90',
          'border-secondary outline-secondary/50 ring-secondary/25',
        ],
        danger: [
          'text-danger-foreground',
          'bg-danger hover:bg-danger/90',
          'border-danger outline-danger/50 ring-danger/25',
        ],
      },
      radius: boxRadius,
      shadow: boxShadow,
      size: {
        ...actionSize,
        base: [
          ...actionSize.base,
          'text-label font-medium tracking-wide leading-[1.375] md:leading-none',
          'px-fs-4 py-fs-2 border-(length:--fs-0-25)',
          'active:not-disabled:motion-scale-in-[0.95]',
        ],
        sm: [
          ...actionSize.sm,
          'text-caption font-normal tracking-wide leading-[1.5] md:leading-none',
          'px-fs-2 py-fs-1 border-1',
          'active:not-disabled:motion-scale-in-[0.94]',
        ],
        md: [
          ...actionSize.md,
          'text-label font-medium tracking-wide leading-[1.125] md:leading-none',
          'px-fs-6 py-fs-3 border-(length:--fs-0-375)',
          'active:not-disabled:motion-scale-in-[0.96]',
        ],
        lg: [
          ...actionSize.lg,
          'text-body font-semibold tracking-wide leading-none',
          'px-fs-8 py-fs-4 border-(length:--fs-0-5)',
          'active:not-disabled:motion-scale-in-[0.97]',
        ],
        full: [
          ...actionSize.full,
          'text-subheading font-semibold tracking-wide leading-none',
          'px-fs-10 py-fs-5 border-(length:--fs-0-75)',
          'active:not-disabled:motion-scale-in-[0.98]',
        ],
      },
      variant: {
        solid: 'hover:border-transparent',
        outline: [
          'bg-transparent hover:bg-neutral/90',
          'text-neutral-3 hover:text-neutral-foreground',
        ],
        text: [
          'size-fit px-1 py-0',
          'border-none underline underline-offset-2',
          'bg-transparent hover:bg-transparent',
          'text-neutral-3 hover:text-neutral-3/80',
          'active:not-disabled:motion-scale-in-[1]',
        ],
      },
      // Style Modifiers
      isIcon: {
        true: "size-fs-10 p-0 [&_svg:not([class*='size-'])]:size-fs-5",
      },
      isGhost: {
        true: [
          'px-fs-2 py-fs-0-75',
          'border-transparent bg-transparent hover:bg-neutral/90',
          'text-current hover:text-neutral-foreground',
        ],
      },
    },
    compoundVariants: [
      // Default Ghost Color Modifiers
      {
        isGhost: true,
        color: 'accent',
        className: 'hover:bg-accent/90 hover:text-accent-foreground',
      },
      {
        isGhost: true,
        color: 'primary',
        className: 'hover:bg-primary/90 hover:text-primary-foreground',
      },
      {
        isGhost: true,
        color: 'secondary',
        className: 'hover:bg-secondary/90 hover:text-secondary-foreground',
      },
      {
        isGhost: true,
        color: 'danger',
        className: 'hover:bg-danger/90 hover:text-danger-foreground',
      },
      // Solid Ghost Color Modifiers
      {
        isGhost: true,
        color: 'accent',
        variant: 'solid',
        className: 'hover:bg-accent/90 hover:text-accent-foreground',
      },
      {
        isGhost: true,
        color: 'primary',
        variant: 'solid',
        className: 'hover:bg-primary/90 hover:text-primary-foreground',
      },
      {
        isGhost: true,
        color: 'secondary',
        variant: 'solid',
        className: 'hover:bg-secondary/90 hover:text-secondary-foreground',
      },
      {
        isGhost: true,
        color: 'danger',
        variant: 'solid',
        className: 'hover:bg-danger/90 hover:text-danger-foreground',
      },
      // Outline Color Variants
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
        isGhost: true,
        variant: 'outline',
        className: 'border-current/40 text-current',
      },
      {
        isGhost: true,
        color: 'accent',
        variant: 'outline',
        className: 'hover:bg-accent/80 hover:text-accent-foreground',
      },
      {
        isGhost: true,
        color: 'primary',
        variant: 'outline',
        className: 'hover:bg-primary/80 hover:text-primary-foreground',
      },
      {
        isGhost: true,
        color: 'secondary',
        variant: 'outline',
        className: 'hover:bg-secondary/80 hover:text-secondary-foreground',
      },
      {
        isGhost: true,
        color: 'danger',
        variant: 'outline',
        className: 'hover:bg-danger/80 hover:text-danger-foreground',
      },
      // Text Color Variants
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
        isGhost: true,
        variant: 'text',
        className: 'text-current hover:bg-transparent hover:text-neutral-3/80',
      },
      {
        isGhost: true,
        color: 'accent',
        variant: 'text',
        className: 'text-current hover:bg-transparent hover:text-accent-1/80',
      },
      {
        isGhost: true,
        color: 'primary',
        variant: 'text',
        className: 'text-current hover:bg-transparent hover:text-primary/80',
      },
      {
        isGhost: true,
        color: 'secondary',
        variant: 'text',
        className: 'text-current hover:bg-transparent hover:text-secondary/80',
      },
      {
        isGhost: true,
        color: 'danger',
        variant: 'text',
        className: 'text-current hover:bg-transparent hover:text-danger-1/80',
      },
      // Ghost Size Modifiers
      {
        size: 'sm',
        isGhost: true,
        className: 'px-fs-1 py-fs-0-5',
      },
      {
        size: 'md',
        isGhost: true,
        className: 'px-fs-3 py-fs-1',
      },
      {
        size: 'lg',
        isGhost: true,
        className: 'px-fs-4 py-fs-2',
      },
      // Icon Size Modifiers
      {
        isIcon: true,
        size: 'sm',
        className: "size-fs-8 [&_svg:not([class*='size-'])]:size-fs-4",
      },
      {
        isIcon: true,
        size: 'md',
        className: "size-fs-12 [&_svg:not([class*='size-'])]:size-fs-6",
      },
      {
        isIcon: true,
        size: 'lg',
        className: "size-fs-14 [&_svg:not([class*='size-'])]:size-fs-7",
      },
      // Text Icon Size Modifiers
      {
        isIcon: true,
        variant: 'text',
        className: 'size-fit p-fs-0-5',
      },
    ],
  },
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
        }),
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
        }),
      )}
      {...props}
    />
  );
}

export { Button, ButtonLink };
export type { ButtonLinkProps, ButtonProps };
