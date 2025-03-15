import Image from "next/image";

import { Card } from "@workspace/ui/components/card";
import { metadata } from "@/configs/app";

export default function Page() {
  return (
    <main className="flex flex-col min-h-svh">
      <header className="flex flex-col flex-1 items-center justify-center gap-fs-4 py-fs-8 px-fs-4">
        <Image
          alt="Logo"
          src="/assets/logos/logo.png"
          width={200}
          height={200}
          priority
          className="dark:invert"
        />
        <div className="container max-w-4xl flex flex-col gap-fs-2 text-center">
          <h1 className="text-balance">{metadata.name}</h1>
          <p className="text-balance text-neutral-foreground">
            {metadata.title}
          </p>
        </div>
      </header>
      <section className="flex flex-col flex-1 gap-fs-6 py-fs-6 bg-background-2">
        <header className="container flex flex-col gap-fs-2 px-fs-4">
          <h2 className="text-heading text-balance">
            Organize your brands, products and services
          </h2>
          <p className="max-w-6xl text-pretty text-neutral-foreground">
            {metadata.description}
          </p>
        </header>
        <div className="container flex flex-wrap gap-fs-4 px-fs-4">
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
      <footer className="flex flex-col gap-fs-4 py-fs-2 bg-background-3 text-neutral-foreground/75">
        <div className="container flex flex-col gap-fs-4 px-fs-4">
          <p className="text-caption">
            &copy; {new Date().getFullYear()},{" "}
            <a
              className="underline underline-offset-1"
              href={metadata.organization.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {metadata.organization.name} Inc
            </a>
            . This code is open source under the{" "}
            <a
              className="underline underline-offset-1"
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}
