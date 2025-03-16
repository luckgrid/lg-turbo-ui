import Link from "next/link";
import type { LinkProps } from "next/link";

import { ButtonLink as UIButtonLink } from "@workspace/ui/components/button";
import type { ButtonLinkProps as UIButtonLinkProps } from "@workspace/ui/components/button";

// - Next Link API: https://nextjs.org/docs/app/api-reference/components/link

type ButtonLinkProps = Omit<UIButtonLinkProps, "asChild"> & LinkProps;

function ButtonLink({
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
}: ButtonLinkProps) {
  return (
    <UIButtonLink asChild {...props}>
      <Link
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
      </Link>
    </UIButtonLink>
  );
}

export type { ButtonLinkProps };
export { ButtonLink };
