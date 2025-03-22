import type { SlotProps } from "@radix-ui/react-slot";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

type ElementProps<T extends React.ElementType = "div"> =
  React.ComponentPropsWithRef<T> & {
    as?: T;
  };

function Element<T extends React.ElementType = "div">({
  as: Primitive = "div",
  ...props
}: ElementProps<T>) {
  return <Primitive data-slot="element" {...props} />;
}

type SlotElementProps<T extends React.ElementType = "div"> = SlotProps &
  ElementProps<T> & {
    asChild?: boolean;
  };

function SlotElement<T extends React.ElementType = "div">({
  as: Primitive = "div",
  asChild,
  ...props
}: SlotElementProps<T>) {
  if (asChild) {
    return <Slot data-slot="slot-element" {...props} />;
  }

  return <Primitive data-slot="element" {...props} />;
}

export { Element, SlotElement };
export type { ElementProps, SlotElementProps };
