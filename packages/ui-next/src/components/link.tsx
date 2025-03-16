import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";

import { Link as UILink } from "@workspace/ui/components/link";
import type { LinkProps as UILinkProps } from "@workspace/ui/components/link";

// - Next Link API: https://nextjs.org/docs/app/api-reference/components/link

type LinkProps = Omit<UILinkProps, "asChild"> & NextLinkProps;

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
    <UILink asChild {...props}>
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
    </UILink>
  );
}

export type { LinkProps };
export { Link };
