import type { LinkProps } from "next/link";
import Link from "next/link";

import type { ButtonLinkProps as UIButtonLinkProps } from "@workspace/ui/components/button";
import { ButtonLink as UIButtonLink } from "@workspace/ui/components/button";

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
    <UIButtonLink asChild data-slot="next-button-link" {...props}>
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

export { ButtonLink };
export type { ButtonLinkProps };
