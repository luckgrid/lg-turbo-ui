"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import {
  SlotElement,
  type SlotElementProps,
} from "@workspace/ui/primitives/element";
import { cn } from "@workspace/ui/lib/utils";

const cardVariants = cva("flex flex-col", {
  variants: {
    // Style Variants
    shape: {
      circle: "rounded-full",
      rounded: "rounded-xl",
      square: "rounded-none",
    },
    space: {
      wrapper: "gap-6 py-6",
      container: "gap-3 px-6",
    },
    // Style Modifiers
    noBorder: {
      false: "border-2",
    },
    noColor: {
      false: "bg-card text-card-foreground",
    },
    noShadow: {
      false: "shadow-md",
    },
  },
  defaultVariants: {
    shape: "rounded",
    space: "wrapper",
    noBorder: false,
    noColor: false,
    noShadow: false,
  },
});

type CardVariantProps = VariantProps<typeof cardVariants>;

type CardProps<T extends React.ElementType = "div"> = SlotElementProps<T> &
  CardVariantProps;

function Card({
  shape,
  space,
  noBorder,
  noColor,
  noShadow,
  className,
  ...props
}: CardProps) {
  return (
    <SlotElement
      data-slot="card"
      className={cardVariants({
        shape,
        space,
        noBorder,
        noColor,
        noShadow,
        className,
      })}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      {...props}
    />
  );
}

type CardTitleProps<T extends React.ElementType = "h4"> = SlotElementProps<T>;

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <SlotElement
      data-slot="card-title"
      as="h4"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

type CardDescriptionProps<T extends React.ElementType = "p"> =
  SlotElementProps<T>;

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <SlotElement
      data-slot="card-description"
      as="p"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  );
}

export type {
  CardProps,
  CardVariantProps,
  CardTitleProps,
  CardDescriptionProps,
};
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
