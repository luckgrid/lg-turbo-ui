import type { SlotProps } from "@radix-ui/react-slot";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ExternalLink } from "lucide-react";
import * as React from "react";

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
    noExternalIcon?: boolean;
  };

function Link({
  asChild,
  children,
  className,
  classNames,
  rel,
  target,
  isExternal,
  noExternalIcon,
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
      {isExternal && !noExternalIcon && (
        <ExternalLink className={classNames?.icon} />
      )}
    </Primitive>
  );
}

export { Link };
export type { LinkProps };
