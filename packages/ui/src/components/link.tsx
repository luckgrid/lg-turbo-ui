import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { LinkProps as PrimitiveLinkProps } from '@workspace/ui/primitives/navigation';
import { Link as PrimitiveLink } from '@workspace/ui/primitives/navigation';

const linkVariants = cva(
  [
    'flex-inline cursor-pointer transition-colors',
    'action action-outline-2 items-center gap-fs-xs-3',
    'text-current hover:text-current/90 underline-offset-(length:--outline-width-4)',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      color: {
        accent: 'outline-accent/50 hover:text-accent',
        primary: 'outline-primary/50 hover:text-primary',
        secondary: 'outline-secondary/50 hover:text-secondary',
        danger: 'outline-danger/50 hover:text-danger',
      },
      underline: {
        accent: 'no-underline hover:underline',
        always: 'underline hover:underline',
        never: 'no-underline hover:no-underline',
      },
    },
    defaultVariants: {
      underline: 'always',
    },
  }
);

type LinkVariantProps = VariantProps<typeof linkVariants>;

type LinkProps = PrimitiveLinkProps & LinkVariantProps;

function Link({ className, color, underline, ...props }: LinkProps) {
  return (
    <PrimitiveLink
      data-slot='link'
      className={cn(linkVariants({ color, underline, className }))}
      {...props}
    />
  );
}

export { Link };
export type { LinkProps };
