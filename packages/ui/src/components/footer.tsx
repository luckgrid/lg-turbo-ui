import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
import type { LayoutProps } from "@workspace/ui/primitives/layout";
import {
  Layout,
  LayoutBar,
  LayoutContainer,
} from "@workspace/ui/primitives/layout";

type FooterClassNames = {
  wrapper?: string;
  container?: string;
};

type FooterProps<T extends React.ElementType = "footer"> = Omit<
  LayoutProps<T>,
  "as"
> & {
  classNames?: FooterClassNames;
  notContained?: boolean;
};

function Footer<T extends React.ElementType = "footer">({
  children,
  className,
  classNames,
  notContained,
  ...props
}: FooterProps<T>) {
  return (
    <Layout
      as="footer"
      data-slot="footer"
      className={cn(
        "py-fs-6 bg-shell text-shell-foreground/75",
        classNames?.wrapper,
        className
      )}
      {...props}
    >
      {notContained ? (
        children
      ) : (
        <LayoutContainer
          className={cn(
            "flex-row items-end justify-between",
            classNames?.container
          )}
        >
          {children}
        </LayoutContainer>
      )}
    </Layout>
  );
}

type CopyrightFooterClassNames = FooterClassNames & {
  copyright?: string;
  links?: string;
};

type CopyrightFooterProps = Omit<FooterProps, "classNames"> & {
  classNames?: CopyrightFooterClassNames;
  copyrightMessage?: React.ReactNode;
  copyrightYear?: number;
  links?: React.ReactNode;
  customCopyright?: boolean;
};

// TODO:
// - Update render conditions for children when links and copyright are also rendered (i.e. wrap copyright and links inside a LayoutBar below children)
// - Create separate CopyrightFooterMessage component that can be easily modified and reused as needed (i.e. add a copyrightAuthor prop to render author/organization name (as link or text) with options to hide or override it).

function CopyrightFooter({
  children,
  classNames,
  copyrightMessage,
  copyrightYear,
  links,
  customCopyright,
  ...props
}: CopyrightFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <Footer
      data-slot="copyright-footer"
      classNames={{
        wrapper: cn("py-fs-6", classNames?.wrapper),
        container: cn(
          "flex-row items-end justify-between",
          classNames?.container
        ),
      }}
      {...props}
    >
      {children}
      {!customCopyright && (
        <p className={cn("text-caption text-balance", classNames?.copyright)}>
          <small>&copy;</small>
          {copyrightYear ?? currentYear}
          {copyrightMessage && `, `}
          {copyrightMessage}
        </p>
      )}
      {links && (
        <LayoutBar
          className={cn("items-center justify-end", classNames?.links)}
        >
          {links}
        </LayoutBar>
      )}
    </Footer>
  );
}

export { Footer, CopyrightFooter };
export type { FooterProps, CopyrightFooterProps };
