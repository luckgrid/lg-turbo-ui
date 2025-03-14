import Image from "next/image";

import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { metadata } from "@/configs/app";

export default function Page() {
  return (
    <main className="flex flex-col min-h-svh">
      <header className="container flex flex-col items-center justify-center gap-4 py-16 px-4">
        <Image
          alt="Logo"
          src="/assets/logos/logo.png"
          width={125}
          height={125}
          priority
          className="dark:invert"
        />
        <h1 className="text-center text-balance font-bold">{metadata.name}</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button color="primary">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </header>
      <section className="flex flex-col flex-1 gap-8 py-8 bg-background-2">
        <div className="container flex flex-col gap-4 px-4">
          <h2 className="max-w-[768px] text-balance font-bold">
            {metadata.title}
          </h2>
          <p className="max-w-[768px] text-balance text-neutral-foreground">
            {metadata.description}
          </p>
        </div>
        <div className="container flex flex-wrap gap-4 px-4">
          <Card space="container">
            <h3>React & Tailwind Components</h3>
          </Card>
          <Card space="container">
            <h3>Next Ready</h3>
          </Card>
          <Card space="container">
            <h3>Open Source</h3>
          </Card>
          <Card space="container">
            <h3>CVA Design System</h3>
          </Card>
        </div>
      </section>
      <footer className="flex flex-col gap-4 py-2 bg-secondary text-secondary-foreground">
        <div className="container flex flex-col gap-4 px-4">
          <p>
            &copy; {new Date().getFullYear()} {metadata.name}
          </p>
        </div>
      </footer>
    </main>
  );
}
