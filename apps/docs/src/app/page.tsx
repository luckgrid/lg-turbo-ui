import Image from "next/image";

import { metadata } from "@/configs/app";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-svh">
      <header className="container flex flex-col items-center justify-center gap-4">
        <Image
          alt="Logo"
          src="/assets/logos/logo.png"
          width={125}
          height={125}
          priority
          className="dark:invert"
        />
        <h1 className="text-4xl text-center text-balance font-bold">
          {metadata.name} Docs
        </h1>
        <p className="max-w-[480px] mx-auto text-center text-balance text-foreground/80">
          {metadata.description}
        </p>
      </header>
    </main>
  );
}
