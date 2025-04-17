import { Button } from '@workspace/ui/components/button';
import { Section } from '@workspace/ui/components/section';
import { Layout } from '@workspace/ui/primitives/layout';
import Image from 'next/image';
import { ButtonKitchenSink } from '@/components/kitchen-sink/button';
import { FormKitchenSink } from '@/components/kitchen-sink/form';

export default function Page() {
  return (
    <Layout as="main" className="min-h-svh">
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
          <h1 className="text-title text-balance text-center md:text-left">
            LG Turbo UI Kitchen Sink
          </h1>
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
            <Button className="self-start">Default Button</Button>
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
    </Layout>
  );
}
