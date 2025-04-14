import { Input as PrimitiveInput } from '@workspace/ui/primitives/input';
import type { InputProps } from '@workspace/ui/primitives/input';

// NOTE:
// - the reason variant prop is hardcoded (i.e. null, file, textarea) is to prevent external control of the variant prop
// - not omitting the variant prop because the input primitive's compound variants relies on it to modify some size variants

// Text Input Component

function Input<T extends React.ElementType = 'input'>({
  as = 'input',
  ...props
}: InputProps<T>) {
  return <PrimitiveInput data-slot="input" as={as} {...props} variant={null} />;
}

// File Input Component

function FileInput<T extends React.ElementType = 'input'>({
  as = 'input',
  ...props
}: InputProps<T>) {
  return (
    <PrimitiveInput
      data-slot="file-input"
      as={as}
      type="file"
      {...props}
      variant="file"
    />
  );
}

// Textarea Input Component

type TextareaProps<T extends React.ElementType = 'textarea'> = InputProps<T>;

function Textarea<T extends React.ElementType = 'textarea'>({
  as = 'textarea',
  ...props
}: TextareaProps<T>) {
  return (
    <PrimitiveInput
      data-slot="textarea"
      as={as}
      {...props}
      variant="textarea"
    />
  );
}

// Input Component Exports

export { FileInput, Input, Textarea };
export type { InputProps, TextareaProps };
