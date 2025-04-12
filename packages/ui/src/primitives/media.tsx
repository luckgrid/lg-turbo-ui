import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import { boxShape } from "@workspace/ui/primitives/box";
import type { SlotElementProps } from "@workspace/ui/primitives/element";
import { SlotElement } from "@workspace/ui/primitives/element";

type MediaElement = {
  src: string | URL;
  alt?: string;
  width?: number;
  height?: number;
};

const mediaVariants = cva("", {
  variants: {
    shape: {
      pill: boxShape.pill,
      rounded: boxShape.rounded,
      sharp: boxShape.sharp,
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
});

type MediaVariantProps = VariantProps<typeof mediaVariants>;

type MediaProps<T extends React.ElementType = "img"> = SlotElementProps<T> &
  MediaVariantProps &
  Pick<Partial<MediaElement>, "src">;

function Media<T extends React.ElementType = "img">({
  as = "img",
  className,
  shape,
  size,
  src,
  ...props
}: MediaProps<T>) {
  const mediaSrc = src ? (src instanceof URL ? String(src) : src) : undefined;

  return (
    <SlotElement
      data-slot="media-primitive"
      as={as}
      className={cn(mediaVariants({ shape, size, className }))}
      src={mediaSrc}
      {...props}
    />
  );
}

export { Media };
export type { MediaElement, MediaProps, MediaVariantProps };
