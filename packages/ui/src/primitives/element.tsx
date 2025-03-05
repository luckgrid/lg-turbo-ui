"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { SlotProps } from "@radix-ui/react-slot";

type ElementProps<T extends React.ElementType = "div"> =
  React.ComponentPropsWithRef<T> & {
    as?: T;
  };

function Element<T extends React.ElementType = "div">({
  as: Primitive = "div",
  ...props
}: ElementProps<T>) {
  return <Primitive {...props} />;
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
    return <Slot {...props} />;
  }

  return <Primitive {...props} />;
}

export type { ElementProps, SlotElementProps };
export { Element, SlotElement };
