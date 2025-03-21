import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";

import { Button, ButtonLink } from "@workspace/ui/components/button";
import { Link } from "@workspace/ui/components/link";
import { Section } from "@workspace/ui/components/section";

import { ButtonKitchenSink } from "@/components/kitchen-sink/button";
import { FormKitchenSink } from "@/components/kitchen-sink/form";
import { config } from "@/configs/app";

export default function Page() {
  return (
    <main className="flex flex-col min-h-svh">
      <header className="flex flex-col flex-1 py-fs-12 bg-background-2">
        <div className="container flex flex-row flex-wrap justify-center md:justify-start items-center gap-fs-3 px-fs-6">
          <Image
            alt="Logo"
            src="/assets/logos/logo.png"
            width={75}
            height={75}
            priority
            className="dark:invert"
          />
          <h1 className="text-title text-balance">{config.name}</h1>
        </div>
      </header>
      <section className="flex flex-col flex-1 gap-fs-8">
        <header className="flex flex-col flex-1 py-fs-10 bg-background-1">
          <div className="container flex flex-col gap-fs-3 px-fs-6">
            <h2 className="text-heading">Button Component</h2>
            <p className="text-balance text-neutral-foreground">
              The Button component is a versatile and customizable component
              that can be used to create a variety of buttons.
            </p>
            <Button className="self-start">Default (Neutral) Button</Button>
          </div>
        </header>
        <ButtonKitchenSink />
      </section>
      <Section className="gap-fs-12">
        <header className="flex flex-col flex-1 py-fs-10 bg-background-1">
          <div className="container flex flex-col gap-fs-3 px-fs-6">
            <h2 className="text-heading">Form Component</h2>
            <p className="text-balance text-neutral-foreground">
              The form component uses react-hook-form, zod and various ui
              components for composing flexible forms with built-in state and
              validation handlers.
            </p>
          </div>
        </header>
        <FormKitchenSink />
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
            shape="pill"
            size="sm"
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
