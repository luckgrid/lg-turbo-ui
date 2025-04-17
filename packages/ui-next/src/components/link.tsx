import { Link as UiLink } from '@workspace/ui/components/link';
import { isExternalUrl } from '@workspace/ui/lib/utils';
import NextLink from 'next/link';
import type { LinkProps as UiLinkProps } from '@workspace/ui/components/link';
import type { LinkProps as NextLinkProps } from 'next/link';

// - Next Link API: https://nextjs.org/docs/app/api-reference/components/link

type LinkProps = Omit<UiLinkProps, 'asChild'> & NextLinkProps;

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
  isExternal,
  ...props
}: LinkProps) {
  const isLinkExternal = isExternal ?? isExternalUrl(href);

  return (
    <UiLink
      data-slot="next-link"
      asChild
      isExternal={isLinkExternal}
      {...props}
    >
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
