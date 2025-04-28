import * as React from "react";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";
import type { LayoutProps } from "@workspace/ui/primitives/layout";
import {
  Layout,
  layoutRadius,
  layoutShadow,
  layoutSize,
} from "@workspace/ui/primitives/layout";

const sectionRadius = {
  ...layoutRadius,
};

const sectionShadow = {
  ...layoutShadow,
};

const sectionSize = {
  ...layoutSize,
};

const sectionVariants = cva("", {
  variants: {
    radius: sectionRadius,
    shadow: sectionShadow,
    size: sectionSize,
  },
  defaultVariants: {
    size: "base",
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
  size,
  ...props
}: SectionProps<T>) {
  return (
    <Layout
      as={as}
      data-slot="section"
      className={cn(sectionVariants({ radius, size, shadow, className }))}
      {...props}
    />
  );
}

export { Section, sectionRadius, sectionShadow, sectionSize, sectionVariants };

export type { SectionProps };
