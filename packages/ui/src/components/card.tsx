import { cn } from '@workspace/ui/lib/utils';
import { actionOutline } from '@workspace/ui/primitives/action';
import {
  Display,
  displayBase,
  displayRadius,
  displaySize,
} from '@workspace/ui/primitives/display';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import type { DisplayProps } from '@workspace/ui/primitives/display';
import type { VariantProps } from 'class-variance-authority';

// TODO:
// - setup color variants to modify card colors instead of using noColor modifier
// -- remove noColor modifier and set default color to neutral
// -- add level variant to scale card colors
// -- use layer variant to also modify card colors based on color and level variant
// - compose card component variants with baseCardVariants using cx: https://cva.style/docs/getting-started/composing-components
// -- create cardBaseVariants, cardWrapperVariants, cardContainerVariants, etc...
// -- create card primitives that share variant props with new variants
// - split up card components into separate primitives inside card component module
// -- define a scalable and simple component module architecture using card component
// --- option 1: card/base.tsx, card/header.tsx, card/body.tsx, card/footer.tsx, etc...
// --- option 2: card/variants.tsx, card/components.tsx, card/patterns.tsx
// -- update exports to include new component module architecture
// - set isAction styles using displayAction import from display primitive

// Card Component

const cardBase = [displayBase];

const cardAction = [
  actionOutline,
  'cursor-pointer no-underline',
  'transition-[background-color,border-color,color,box-shadow,opacity]',
  'disabled:pointer-events-none disabled:opacity-75',
];

const cardRadius = {
  ...displayRadius,
};

const cardSize = {
  ...displaySize,
};

const cardVariants = cva(cardBase, {
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

type CardVariantProps = VariantProps<typeof cardVariants>;

type CardProps<T extends React.ElementType = 'div'> = DisplayProps<T> &
  CardVariantProps;

function Card<T extends React.ElementType = 'div'>({
  as = 'div',
  radius,
  size,
  isAction,
  className,
  ...props
}: CardProps<T>) {
  return (
    <Display
      data-slot="card"
      as={as}
      className={cn(
        cardVariants({
          radius,
          size,
          isAction,
          className,
        }),
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
      data-slot="card-header"
      as={as}
      className={cn(
        cardHeaderVariants({
          radius,
          size,
          isAction,
          className,
        }),
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
      data-slot="card-body"
      as={as}
      className={cn(
        cardBodyVariants({
          radius,
          size,
          className,
        }),
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
      data-slot="card-footer"
      className={cn(
        cardFooterVariants({
          radius,
          size,
          className,
        }),
      )}
      {...props}
    />
  );
}

// Card Component Exports

export { Card, CardBody, CardFooter, CardHeader };
export type { CardBodyProps, CardFooterProps, CardHeaderProps, CardProps };
