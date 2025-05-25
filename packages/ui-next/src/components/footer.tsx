import * as React from "react";

import { SiGithub } from "@icons-pack/react-simple-icons";

import { Link } from "@workspace/next-ui/components/link";
import { Image } from "@workspace/next-ui/components/media";
import {
  metadataAuthors,
  metadataOrganization,
  metadataOrganizationLinks,
} from "@workspace/next-ui/lib/metadata";
import type { CopyrightFooterProps as UiCopyrightFooterProps } from "@workspace/ui/components/footer";
import { CopyrightFooter as UiCopyrightFooter } from "@workspace/ui/components/footer";
import { cn } from "@workspace/ui/lib/utils";

// TODO:
// - Update logo to svg icon with dynamic color inhereted from parent
// - Adjust LG logo positioning to match other icons

function CopyrightFooterMessage() {
  return (
    <>
      <Link href={`mailto:${metadataOrganization.email}`}>
        {metadataOrganization.name}
      </Link>
      . This code is open source under the{" "}
      <Link href="https://opensource.org/license/MIT">MIT License</Link>.
    </>
  );
}

function CopyrightFooterLinks({ links }: { links?: React.ReactNode }) {
  const author = Array.isArray(metadataAuthors)
    ? metadataAuthors[0]
    : metadataAuthors;

  return (
    <>
      {links}
      {metadataOrganizationLinks.github ? (
        <Link href={metadataOrganizationLinks.github}>
          <SiGithub />
        </Link>
      ) : null}
      {author?.name && author?.url ? (
        <Link href={String(author.url)} className="transition-[opacity]">
          <Image
            className="transition-[opacity] opacity-60 invert"
            variant="icon"
            alt={author.name}
            src="/assets/logos/logo.png"
            width={24}
            height={24}
          />
        </Link>
      ) : null}
    </>
  );
}

type CopyrightFooterProps = UiCopyrightFooterProps & {
  mergeLinks?: boolean;
};

function CopyrightFooter({
  classNames,
  copyrightMessage,
  links,
  mergeLinks,
  ...props
}: CopyrightFooterProps) {
  return (
    <UiCopyrightFooter
      classNames={{
        ...classNames,
        wrapper: cn("bg-shell text-shell-foreground/75", classNames?.wrapper),
        copyright: cn("text-caption text-balance", classNames?.copyright),
        links: cn(
          "[&_a]:hover:text-shell-foreground [&_a]:hover:[&_img]:opacity-75",
          classNames?.links
        ),
      }}
      copyrightMessage={copyrightMessage ?? <CopyrightFooterMessage />}
      links={
        mergeLinks ? (
          <CopyrightFooterLinks links={links} />
        ) : (
          (links ?? <CopyrightFooterLinks />)
        )
      }
      {...props}
    />
  );
}

export { CopyrightFooter };
export type { CopyrightFooterProps };
