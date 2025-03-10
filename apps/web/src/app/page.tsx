import Image from "next/image";

import { Button } from "@workspace/ui/components/button";
import { metadata } from "@/configs/app";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-svh gap-8">
      <header className="container flex flex-col items-center justify-center gap-4 py-8 px-4">
        <Image
          alt="Logo"
          src="/assets/logos/logo.png"
          width={125}
          height={125}
          priority
          className="dark:invert"
        />
        <h1 className="text-4xl text-center text-balance font-bold">
          {metadata.name}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button color="primary">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </header>
    </main>
  );
}
