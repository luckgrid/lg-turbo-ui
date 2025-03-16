import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import type { SlotProps } from "@radix-ui/react-slot";
import { ExternalLink } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";

type LinkClassNames = {
  link?: string;
  icon?: string;
};

type LinkProps = React.ComponentProps<"a"> &
  SlotProps & {
    classNames?: LinkClassNames;
    asChild?: boolean;
    isExternal?: boolean;
    noIcon?: boolean;
  };

function Link({
  asChild,
  children,
  className,
  classNames,
  rel,
  target,
  isExternal,
  noIcon,
  ...props
}: LinkProps) {
  const Primitive = asChild ? Slot : "a";

  return (
    <Primitive
      data-slot="link-primitive"
      rel={rel || isExternal ? "noopener noreferrer" : undefined}
      target={target || isExternal ? "_blank" : "_self"}
      className={cn(classNames?.link, className)}
      {...props}
    >
      <Slottable>{children}</Slottable>
      {isExternal && !noIcon && <ExternalLink className={classNames?.icon} />}
    </Primitive>
  );
}

export type { LinkProps };
export { Link };
