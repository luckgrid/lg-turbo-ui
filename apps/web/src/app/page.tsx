import Image from "next/image";

import { Card } from "@workspace/ui/components/card";
import { metadata } from "@/configs/app";

export default function Page() {
  return (
    <main className="flex flex-col min-h-svh">
      <header className="container flex flex-col flex-1 items-center justify-center gap-4 py-16 px-4">
        <Image
          alt="Logo"
          src="/assets/logos/logo.png"
          width={200}
          height={200}
          priority
          className="dark:invert"
        />
        <div className="flex flex-col gap-2 max-w-3xl mx-auto text-center">
          <h1 className="text-balance">{metadata.name}</h1>
          <p className="text-subheading text-balance text-neutral-foreground">
            {metadata.description}
          </p>
        </div>
      </header>
      <section className="flex flex-col flex-1 gap-8 py-8 bg-background-2">
        <div className="container flex flex-col gap-4 px-4">
          <h2 className="text-heading text-balance">{metadata.title}</h2>
        </div>
        <div className="container flex flex-wrap gap-4 px-4">
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
      <footer className="flex flex-col gap-4 py-2 bg-secondary text-secondary-foreground">
        <div className="container flex flex-col gap-4 px-4">
          <small>
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
          </small>
        </div>
      </footer>
    </main>
  );
}
