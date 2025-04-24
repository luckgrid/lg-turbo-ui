import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import type { LinkProps as PrimitiveLinkProps } from '@workspace/ui/primitives/navigation';
import { Link as PrimitiveLink } from '@workspace/ui/primitives/navigation';

const linkBase = 'flex-inline cursor-pointer transition-colors';

const linkColor = {
  accent: 'outline-accent/50 hover:text-accent',
  primary: 'outline-primary/50 hover:text-primary',
  secondary: 'outline-secondary/50 hover:text-secondary',
  danger: 'outline-danger/50 hover:text-danger',
};

const linkUnderline = {
  accent: 'no-underline hover:underline',
  always: 'underline hover:underline',
  never: 'no-underline hover:no-underline',
};

const linkVariants = cva(
  [
    linkBase,
    'items-center gap-line-2xl',
    'text-current hover:text-current/90 underline-offset-1',
    'disabled:pointer-events-none disabled:opacity-50',
    'outline-offset-2 outline-ring/50',
    'focus-visible:outline-1 aria-invalid:focus-visible:outline-0',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      color: linkColor,
      underline: linkUnderline,
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
