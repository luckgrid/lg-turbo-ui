import * as React from "react";

import type { InputProps } from "@workspace/ui/primitives/input";
import { Input as PrimitiveInput } from "@workspace/ui/primitives/input";

function Input<T extends React.ElementType = "input">({
  as = "input",
  ...props
}: InputProps<T>) {
  return <PrimitiveInput data-slot="input" as={as} {...props} />;
}

export { Input };
export type { InputProps };
