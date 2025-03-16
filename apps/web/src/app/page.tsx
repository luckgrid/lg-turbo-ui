import Image from "next/image";

import { ButtonLink } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Link } from "@workspace/ui/components/link";
import { config } from "@/configs/app";

export default function Page() {
  return (
    <main className="flex flex-col min-h-svh">
      <header className="flex flex-col flex-1 items-center justify-center gap-fs-6 py-fs-24 px-fs-4">
        <Image
          alt="Logo"
          src="/assets/logos/logo.png"
          width={200}
          height={200}
          priority
          className="motion-blur-in-sm dark:invert"
        />
        <div className="motion-opacity-in-0 motion-translate-y-in-50 container max-w-4xl flex flex-col gap-fs-3 text-center">
          <h1 className="text-balance">{config.name}</h1>
          <p className="text-balance text-neutral-foreground">{config.title}</p>
        </div>
        <div className="motion-preset-fade-lg motion-delay-400 flex flex-col gap-fs-3 items-center justify-center">
          <ButtonLink
            href="https://github.com/luckgrid/lg-turbo-ui"
            color="primary"
            size="xl"
            isExternal
            noIcon
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
      </header>
      <section className="flex flex-col flex-1 gap-fs-6 py-fs-12 bg-background-2">
        <header className="container flex flex-col gap-fs-3 px-fs-6">
          <h2 className="text-heading text-balance">
            Organize your brands, products and services
          </h2>
          <p className="max-w-6xl text-pretty text-neutral-foreground">
            {config.description}
          </p>
        </header>
        <div className="container flex flex-wrap gap-fs-3 px-fs-6">
          <Card space="container">
            <h3 className="text-body">React + Tailwind CSS</h3>
          </Card>
          <Card space="container">
            <h3 className="text-body">NextJS Ready</h3>
          </Card>
          <Card space="container">
            <h3 className="text-body">Open Source</h3>
          </Card>
          <Card space="container">
            <h3 className="text-body">CVA Design System</h3>
          </Card>
        </div>
      </section>
      <footer className="flex flex-col py-fs-1 bg-background-3 text-neutral-foreground/75">
        <div className="container flex flex-col gap-fs-4 px-fs-6">
          <p className="text-caption">
            &copy; {new Date().getFullYear()},{" "}
            <Link
              href={config.organization.url}
              color="accent"
              isExternal
              noIcon
            >
              {config.organization.name} Inc
            </Link>
            . This code is open source under the{" "}
            <Link
              href="https://opensource.org/licenses/MIT"
              color="accent"
              isExternal
              noIcon
            >
              MIT License
            </Link>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}
