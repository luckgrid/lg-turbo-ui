import type { InputProps } from "@workspace/ui/primitives/input";
import { Input as PrimitiveInput } from "@workspace/ui/primitives/input";

type TextareaProps = Omit<InputProps<"textarea">, "variant">;

function Textarea({ as = "textarea", className, ...props }: TextareaProps) {
  return (
    <PrimitiveInput
      data-slot="textarea"
      as={as}
      variant="textarea"
      className={className}
      {...props}
    />
  );
}

export { Textarea };
export type { TextareaProps };
