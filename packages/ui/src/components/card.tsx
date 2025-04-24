import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { ElementProps } from '@workspace/ui/primitives/element';
import { Element } from '@workspace/ui/primitives/element';

// Card Component

const cardBase = 'box flex-col';

const cardAction = [
  'action action-outline-card',
  'cursor-pointer no-underline',
  'disabled:opacity-75',
];

const cardRadius = {
  sm: 'rounded-fs-sm',
  base: 'rounded-fs-md',
  md: 'rounded-fs-lg',
  lg: 'rounded-fs-xl',
  full: 'rounded-full',
  none: 'rounded-none',
  unset: '',
};

const cardShadow = {
  sm: 'shadow-sm',
  base: 'shadow-md',
  md: 'shadow-lg',
  lg: 'shadow-xl',
  full: 'shadow-2xl',
  none: 'shadow-none',
  unset: '',
};

const cardSize = {
  sm: '',
  base: '',
  md: '',
  lg: '',
  full: '',
  none: '',
  unset: '',
};

const cardSpace = {
  base: 'gap-display-base',
  container: 'gap-display-base px-display-base',
  wrapper: 'gap-display-base py-display-base',
  frame: 'gap-display-base p-display-base',
  none: 'gap-0 p-0',
  unset: '',
};

const cardVariant = {
  base: 'box-b-base border-card-foreground/20 bg-card text-card-foreground',
};

const cardVariants = cva(cardBase, {
  variants: {
    radius: cardRadius,
    shadow: cardShadow,
    size: cardSize,
    space: cardSpace,
    variant: cardVariant,
    isAction: {
      true: cardAction,
    },
  },
  compoundVariants: [
    // Base Variant Sizes
    {
      size: 'sm',
      variant: 'base',
      className: 'box-b-sm',
    },
    {
      size: 'base',
      variant: 'base',
      className: 'box-b-base',
    },
    {
      size: 'md',
      variant: 'base',
      className: 'box-b-md',
    },
    {
      size: 'lg',
      variant: 'base',
      className: 'box-b-lg',
    },
    {
      size: 'full',
      variant: 'base',
      className: 'box-b-xl',
    },
    // Action Modifier Sizes
    {
      size: 'sm',
      isAction: true,
      className: 'action-outline-xs',
    },
    {
      size: 'base',
      isAction: true,
      className: 'action-outline-sm',
    },
    {
      size: 'md',
      isAction: true,
      className: 'action-outline-md',
    },
    {
      size: 'lg',
      isAction: true,
      className: 'action-outline-lg',
    },
    {
      size: 'full',
      isAction: true,
      className: 'action-outline-xl',
    },
    // Action Modifier Base Variant
    {
      variant: 'base',
      isAction: true,
      className: ['hover:border-card/60 bg-card/80'],
    },
  ],
  defaultVariants: {
    radius: 'base',
    shadow: 'base',
    size: 'base',
    space: 'base',
    variant: 'base',
  },
});

type CardVariantProps = VariantProps<typeof cardVariants>;

type CardProps<T extends React.ElementType = 'div'> = ElementProps<T> &
  CardVariantProps;

function Card<T extends React.ElementType = 'div'>({
  as = 'div',
  radius,
  shadow,
  size,
  space,
  variant,
  isAction,
  className,
  ...props
}: CardProps<T>) {
  return (
    <Element
      data-slot='card'
      as={as}
      className={cn(
        cardVariants({
          radius,
          shadow,
          size,
          space,
          variant,
          isAction,
          className,
        })
      )}
      {...props}
    />
  );
}

// Card Header Component

const cardHeaderVariants = cva(cardBase, {
  variants: {
    radius: cardRadius,
    size: cardSize,
    isAction: {
      true: cardAction,
    },
  },
  defaultVariants: {
    radius: 'base',
    size: 'base',
  },
});

type CardHeaderVariantProps = VariantProps<typeof cardHeaderVariants>;

type CardHeaderProps<T extends React.ElementType = 'header'> = ElementProps<T> &
  CardHeaderVariantProps;

function CardHeader<T extends React.ElementType = 'header'>({
  as = 'header',
  radius,
  size,
  isAction,
  className,
  ...props
}: CardHeaderProps<T>) {
  return (
    <Element
      data-slot='card-header'
      as={as}
      className={cn(
        cardHeaderVariants({
          radius,
          size,
          isAction,
          className,
        })
      )}
      {...props}
    />
  );
}

// Card Body Component

const cardBodyVariants = cva(cardBase, {
  variants: {
    radius: cardRadius,
    size: cardSize,
  },
  defaultVariants: {
    radius: 'base',
    size: 'base',
  },
});

type CardBodyVariantProps = VariantProps<typeof cardBodyVariants>;

type CardBodyProps<T extends React.ElementType = 'div'> = ElementProps<T> &
  CardBodyVariantProps;

function CardBody<T extends React.ElementType = 'div'>({
  as = 'div',
  radius,
  size,
  className,
  ...props
}: CardBodyProps<T>) {
  return (
    <Element
      data-slot='card-body'
      as={as}
      className={cn(
        cardBodyVariants({
          radius,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

// Card Footer Component

const cardFooterVariants = cva(cardBase, {
  variants: {
    radius: cardRadius,
    size: cardSize,
  },
  defaultVariants: {
    radius: 'base',
    size: 'base',
  },
});

type CardFooterVariantProps = VariantProps<typeof cardFooterVariants>;

type CardFooterProps<T extends React.ElementType = 'footer'> = ElementProps<T> &
  CardFooterVariantProps;

function CardFooter<T extends React.ElementType = 'footer'>({
  as = 'footer',
  radius,
  size,
  className,
  ...props
}: CardFooterProps<T>) {
  return (
    <Element
      data-slot='card-footer'
      as={as}
      className={cn(
        cardFooterVariants({
          radius,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

// Card Component Exports

export { Card, CardBody, CardFooter, CardHeader };
export type { CardBodyProps, CardFooterProps, CardHeaderProps, CardProps };
