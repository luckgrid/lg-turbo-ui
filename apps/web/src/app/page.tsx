import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";

import { ButtonLink } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Link } from "@workspace/ui/components/link";
import { Section, SectionContainer } from "@workspace/ui/components/section";

import { config } from "@/configs/app";

export default function Page() {
  return (
    <main className="flex flex-col min-h-svh">
      <Section as="header" variant="hero" isCentered withContainer>
        <Image
          alt="Logo"
          src="/assets/logos/logo.png"
          width={200}
          height={200}
          priority
          className="motion-preset-spin motion-loop-once motion-opacity-in-0 motion-scale-in-25 motion-duration-200 pointer-events-none dark:invert"
        />
        <div className="motion-opacity-in-0 motion-translate-y-in-50 max-w-4xl mx-auto flex flex-col gap-fs-3 text-center">
          <h1 className="text-balance">{config.name}</h1>
          <p className="text-balance text-neutral-foreground">{config.title}</p>
        </div>
        <div className="motion-preset-fade-lg motion-delay-400 flex flex-col gap-fs-3 items-center justify-center">
          <ButtonLink
            href="https://github.com/luckgrid/lg-turbo-ui"
            color="primary"
            size="lg"
            isExternal
            noExternalIcon
          >
            Get Started
          </ButtonLink>
          <ButtonLink
            href="https://github.com/luckgrid/lg-turbo-ui/discussions"
            variant="text"
            isExternal
          >
            Join the Discussion
          </ButtonLink>
        </div>
      </Section>
      <Section color="base" level="1" scale="2">
        <SectionContainer as="header">
          <h2 className="text-heading text-balance">
            Organize your brands, products and services
          </h2>
          <p className="max-w-6xl text-pretty text-neutral-foreground">
            {config.description}
          </p>
        </SectionContainer>
        <SectionContainer layout="row">
          <Card
            space="container"
            className="intersect-once intersect:motion-preset-focus"
          >
            <h3 className="text-body">React + Tailwind CSS</h3>
          </Card>
          <Card
            space="container"
            className="intersect-once intersect:motion-preset-focus motion-delay-100"
          >
            <h3 className="text-body">NextJS Ready</h3>
          </Card>
          <Card
            space="container"
            className="intersect-once intersect:motion-preset-focus motion-delay-200"
          >
            <h3 className="text-body">Open Source</h3>
          </Card>
          <Card
            space="container"
            className="intersect-once intersect:motion-preset-focus motion-delay-300"
          >
            <h3 className="text-body">CVA Design System</h3>
          </Card>
        </SectionContainer>
      </Section>
      <footer className="flex flex-col py-1 bg-background-3 text-neutral-foreground/75">
        <div className="container flex flex-row items-center justify-between gap-fs-4 px-fs-6">
          <p className="text-caption">
            &copy; {new Date().getFullYear()},{" "}
            <Link
              href={config.organization.url}
              color="accent"
              isExternal
              noExternalIcon
            >
              {config.organization.name} Inc
            </Link>
            . This code is open source under the{" "}
            <Link
              href="https://opensource.org/licenses/MIT"
              color="accent"
              isExternal
              noExternalIcon
            >
              MIT License
            </Link>
            .
          </p>
          <ButtonLink
            href="https://github.com/luckgrid/lg-turbo-ui"
            size="sm"
            variant="text"
            isGhost
            isIcon
            isExternal
            noExternalIcon
          >
            <SiGithub />
          </ButtonLink>
        </div>
      </footer>
    </main>
  );
}
