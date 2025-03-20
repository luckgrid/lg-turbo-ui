import type { InputProps as PrimitiveInputProps } from "@workspace/ui/primitives/input";
import { Input as PrimitiveInput } from "@workspace/ui/primitives/input";

type InputProps = Omit<PrimitiveInputProps<"input">, "variant">;

function Input({ as = "input", ...props }: InputProps) {
  return <PrimitiveInput data-slot="input" as={as} {...props} />;
}

type FileInputProps = Omit<PrimitiveInputProps<"input">, "variant">;

function FileInput({ as = "input", ...props }: FileInputProps) {
  return (
    <PrimitiveInput
      data-slot="input"
      as={as}
      type="file"
      variant="file"
      {...props}
    />
  );
}

export { FileInput, Input };
export type { FileInputProps, InputProps };
