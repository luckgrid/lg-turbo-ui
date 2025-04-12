import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";

import type { LinkProps as UiLinkProps } from "@workspace/ui/components/link";
import { Link as UiLink } from "@workspace/ui/components/link";

// - Next Link API: https://nextjs.org/docs/app/api-reference/components/link

type LinkProps = Omit<UiLinkProps, "asChild"> & NextLinkProps;

function Link({
  children,
  href,
  as,
  replace,
  scroll,
  prefetch,
  locale,
  shallow,
  onMouseEnter,
  onTouchStart,
  onClick,
  ...props
}: LinkProps) {
  return (
    <UiLink asChild data-slot="next-link" {...props}>
      <NextLink
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        prefetch={prefetch}
        locale={locale}
        shallow={shallow}
        onMouseEnter={onMouseEnter}
        onTouchStart={onTouchStart}
        onClick={onClick}
      >
        {children}
      </NextLink>
    </UiLink>
  );
}

export { Link };
export type { LinkProps };
