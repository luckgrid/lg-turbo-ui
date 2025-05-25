import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

type ElementProps<T extends React.ElementType = "div"> = {
  as?: T;
  asChild?: boolean;
  dataSlot?: string;
} & React.ComponentPropsWithRef<T>;

function Element<T extends React.ElementType = "div">({
  as: Element = "div" as T,
  asChild,
  ...props
}: ElementProps<T>) {
  if (asChild) {
    return (
      <Slot data-slot="element" {...(props as Omit<ElementProps, "as">)} />
    );
  }

  return <Element data-slot="element" {...props} />;
}

export { Element };
export type { ElementProps };
