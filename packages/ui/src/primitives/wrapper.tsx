import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { SlotElement } from "@workspace/ui/primitives/element";
import type { SlotElementProps } from "@workspace/ui/primitives/element";
import { cn } from "@workspace/ui/lib/utils";

const wrapperVariants = cva("flex flex-col", {
  variants: {
    // Style Variants
    color: {
      neutral: "",
      primary: "",
      secondary: "",
    },
    layer: {},
    level: {
      "1": "",
      "2": "",
      "3": "",
    },
    size: {},
    space: {},
    // Style Modifiers
    noSpace: {
      false: "",
    },
  },
});

type WrapperVariantProps = VariantProps<typeof wrapperVariants>;

type WrapperProps<T extends React.ElementType = "div"> = SlotElementProps<T> &
  WrapperVariantProps;

function Wrapper<T extends React.ElementType = "div">({
  as = "div",
  className,
  ...props
}: WrapperProps<T>) {
  return (
    <SlotElement
      data-slot="wrapper"
      as={as}
      className={cn(wrapperVariants({}), className)}
      {...props}
    />
  );
}

export type { WrapperProps };
export { Wrapper };
