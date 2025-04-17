import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import {
  actionOutline,
  actionOutlineColor,
  invalidActionOutline,
} from '@workspace/ui/primitives/action';
import { boxBorder } from '@workspace/ui/primitives/box';
import type { DisplayProps } from '@workspace/ui/primitives/display';
import {
  Display,
  displayBase,
  displayRadius,
  displayShadow,
  displaySize,
  displaySpace,
} from '@workspace/ui/primitives/display';

// Card Component

const cardBase = [displayBase];

const cardAction = [
  ...actionOutline.base,
  ...actionOutlineColor.base,
  ...invalidActionOutline,
  'cursor-pointer no-underline',
  'transition-[background-color,border-color,color,box-shadow,opacity]',
  'disabled:pointer-events-none disabled:opacity-75',
];

const cardRadius = {
  ...displayRadius,
};

const cardShadow = {
  ...displayShadow,
};

const cardSize = {
  ...displaySize,
};

const cardSpace = {
  ...displaySpace,
};

const cardVariant = {
  base: [boxBorder.base, 'border-card/40 bg-card text-card-foreground'],
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
      className: [boxBorder.sm],
    },
    {
      size: 'base',
      variant: 'base',
      className: [boxBorder.base],
    },
    {
      size: 'md',
      variant: 'base',
      className: [boxBorder.md],
    },
    {
      size: 'lg',
      variant: 'base',
      className: [boxBorder.lg],
    },
    {
      size: 'full',
      variant: 'base',
      className: [boxBorder.full],
    },
    // Action Modifier Sizes
    {
      size: 'sm',
      isAction: true,
      className: [...actionOutline.sm],
    },
    {
      size: 'base',
      isAction: true,
      className: [...actionOutline.base],
    },
    {
      size: 'md',
      isAction: true,
      className: [...actionOutline.md],
    },
    {
      size: 'lg',
      isAction: true,
      className: [...actionOutline.lg],
    },
    {
      size: 'full',
      isAction: true,
      className: [...actionOutline.full],
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

type CardProps<T extends React.ElementType = 'div'> = DisplayProps<T> &
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
    <Display
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

type CardHeaderProps<T extends React.ElementType = 'header'> = DisplayProps<T> &
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
    <Display
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

type CardBodyProps<T extends React.ElementType = 'div'> = DisplayProps<T> &
  CardBodyVariantProps;

function CardBody<T extends React.ElementType = 'div'>({
  as = 'div',
  radius,
  size,
  className,
  ...props
}: CardBodyProps<T>) {
  return (
    <Display
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

type CardFooterProps = React.ComponentProps<'footer'> & CardFooterVariantProps;

function CardFooter({ radius, size, className, ...props }: CardFooterProps) {
  return (
    <footer
      data-slot='card-footer'
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
