import * as React from "react";
import { cva, cx } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { Wrapper, wrapperVariants } from "@workspace/ui/primitives/wrapper";
import type {
  WrapperProps,
  WrapperVariantProps,
} from "@workspace/ui/primitives/wrapper";
import { Container as PrimitiveContainer } from "@workspace/ui/primitives/container";
import type { ContainerProps } from "@workspace/ui/primitives/container";
import { cn } from "@workspace/ui/lib/utils";

const sectionWrapperVariants = cva("", {
  variants: {
    // Style Variants
    variant: {
      bar: "",
      cta: "",
      hero: "",
    },
    // Style Modifiers
    withBorder: {
      true: "border-y-(length:--fs-0-375)",
    },
  },
});

type SectionWrapperVariantProps = VariantProps<typeof sectionWrapperVariants> &
  WrapperVariantProps;

const sectionVariants = ({
  color,
  group,
  layout,
  level,
  scale,
  size,
  space,
  variant,
  withBorder,
}: SectionWrapperVariantProps) =>
  cx(
    wrapperVariants({ color, group, layout, level, scale, size, space }),
    sectionWrapperVariants({ variant, withBorder })
  );

type SectionVariantProps = VariantProps<typeof sectionVariants>;

type SectionClassNames = {
  section?: string;
  container?: string;
};

type SectionProps<T extends React.ElementType = "section"> = WrapperProps<T> &
  SectionVariantProps & {
    classNames?: SectionClassNames;
    container?: Omit<ContainerProps, "className">;
    withContainer?: boolean;
  };

function Section<T extends React.ElementType = "section">({
  as = "section",
  children,
  className,
  classNames,
  container,
  color,
  group = "layout",
  layout,
  level,
  scale,
  size = "auto",
  space = "block",
  variant,
  withBorder,
  withContainer,
  ...props
}: SectionProps<T>) {
  const Container = withContainer ? PrimitiveContainer : React.Fragment;
  const wrapperScale = scale || variant === "hero" ? "3" : "2";

  const containerProps = {
    color: container?.color || color,
    group: container?.group || group,
    layout: container?.layout || layout,
    level: container?.level || level,
    scale: container?.scale || scale,
    size: container?.size || size,
    space: container?.space || "inline",
  };

  return (
    <Wrapper
      data-slot="section"
      as={as}
      className={cn(
        sectionVariants({
          color,
          group,
          layout,
          level,
          scale: wrapperScale,
          size,
          space,
          variant,
          withBorder,
        }),
        classNames?.section,
        className
      )}
      {...props}
    >
      <Container
        data-slot="section-container"
        className={classNames?.container}
        {...containerProps}
      >
        {children}
      </Container>
    </Wrapper>
  );
}

export type { SectionProps };
export { Section };
