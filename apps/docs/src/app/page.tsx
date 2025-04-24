import { Link } from '@workspace/next-ui/components/link';
import { Image } from '@workspace/next-ui/components/media';
import { Section } from '@workspace/ui/components/section';
import { Layout, LayoutContainer } from '@workspace/ui/primitives/layout';

import { ButtonKitchenSink } from '@/components/kitchen-sink/button';
import { FormKitchenSink } from '@/components/kitchen-sink/form';
import { PrimitivesKitchenSink } from '@/components/kitchen-sink/primitives';

export default function Page() {
  return (
    <Layout as='main' className='min-h-svh'>
      <Section as='header' className='py-fs-24 bg-base text-base-foreground'>
        <LayoutContainer className='flex-row flex-wrap justify-center md:justify-start items-center gap-fs-6'>
          <h1 className='fluid-media display-text text-title text-balance text-left'>
            <Link href='/'>
              <Image
                alt='Logo'
                src='/assets/logos/logo.png'
                width={75}
                height={75}
                priority
                className='dark:invert'
              />
            </Link>
            LG Turbo UI Kitchen Sink
          </h1>
        </LayoutContainer>
      </Section>
      <Section>
        <Layout as='header' className='py-fs-24 bg-base-1 text-base-foreground'>
          <LayoutContainer>
            <h2 className='text-heading'>Primitive Utilities</h2>
            <p className='text-balance text-muted-foreground'>
              Custom Tailwind CSS Utility classes used for quickly composing
              components that use similar style patterns.
            </p>
          </LayoutContainer>
        </Layout>
        <LayoutContainer className='gap-fs-12 py-fs-24'>
          <PrimitivesKitchenSink />
        </LayoutContainer>
      </Section>
      <Section>
        <Layout as='header' className='py-fs-24 bg-base-1 text-base-foreground'>
          <LayoutContainer>
            <h2 className='text-heading'>Button Component</h2>
            <p className='text-balance text-muted-foreground'>
              The Button component is a versatile and customizable component
              that can be used to create a variety of buttons.
            </p>
          </LayoutContainer>
        </Layout>
        <LayoutContainer className='gap-fs-12 py-fs-24'>
          <ButtonKitchenSink />
        </LayoutContainer>
      </Section>
      <Section>
        <Layout as='header' className='py-fs-24 bg-base-1 text-base-foreground'>
          <LayoutContainer>
            <h2 className='text-heading'>Form Component</h2>
            <p className='text-balance text-muted-foreground'>
              The form component uses react-hook-form, zod and various ui
              components for composing flexible forms with built-in state and
              validation handlers.
            </p>
          </LayoutContainer>
        </Layout>
        <Layout className='py-fs-24 bg-shell text-shell-foreground'>
          <LayoutContainer>
            <FormKitchenSink />
          </LayoutContainer>
        </Layout>
      </Section>
    </Layout>
  );
}
