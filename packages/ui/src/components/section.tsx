import * as React from "react";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";
import type { LayoutProps } from "@workspace/ui/primitives/layout";
import {
  Layout,
  layoutRadius,
  layoutShadow,
} from "@workspace/ui/primitives/layout";

const sectionRadius = {
  ...layoutRadius,
};

const sectionShadow = {
  ...layoutShadow,
};

const sectionVariants = cva("", {
  variants: {
    radius: sectionRadius,
    shadow: sectionShadow,
  },
});

type SectionVariantProps = VariantProps<typeof sectionVariants>;

type SectionProps<T extends React.ElementType = "section"> = LayoutProps<T> &
  SectionVariantProps;

function Section<T extends React.ElementType = "section">({
  as = "section",
  className,
  radius,
  shadow,
  ...props
}: SectionProps<T>) {
  return (
    <Layout
      as={as}
      data-slot="section"
      className={cn(sectionVariants({ radius, shadow, className }))}
      {...props}
    />
  );
}

export { Section, sectionRadius, sectionShadow, sectionVariants };

export type { SectionProps };
