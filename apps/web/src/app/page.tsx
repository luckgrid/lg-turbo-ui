import Image from 'next/image';

import { ButtonLink } from '@workspace/ui/components/button';
import { Card } from '@workspace/ui/components/card';
import { Section } from '@workspace/ui/components/section';
import { Layout, LayoutContainer } from '@workspace/ui/primitives/layout';

import { config } from '@/configs/app';

export default function Page() {
  return (
    <Layout as='main' className='min-h-svh'>
      <Section
        as='header'
        className='container min-h-svh items-center justify-center gap-fs-12 py-fs-38 px-fs-6'
      >
        <Image
          alt='Logo'
          src='/assets/logos/logo.png'
          width={200}
          height={200}
          priority
          className='motion-preset-spin motion-loop-once motion-opacity-in-0 motion-scale-in-25 motion-duration-200 pointer-events-none dark:invert'
        />
        <div className='motion-opacity-in-0 motion-translate-y-in-50 max-w-4xl mx-auto flex flex-col gap-fs-1 text-center'>
          <h1 className='text-balance'>{config.name}</h1>
          <p className='text-balance text-neutral-foreground'>{config.title}</p>
        </div>
        <div className='motion-preset-fade-lg motion-delay-400 flex flex-col gap-fs-2 items-center justify-center'>
          <ButtonLink
            href='https://github.com/new?template_name=lg-turbo-ui&template_owner=luckgrid'
            color='primary'
            size='lg'
            isExternal
          >
            Get Started
          </ButtonLink>
          <ButtonLink
            href='https://github.com/luckgrid/lg-turbo-ui/discussions'
            variant='text'
            isExternal
            showExternalIcon
          >
            Join the Discussion
          </ButtonLink>
        </div>
      </Section>
      <Section
        as='footer'
        className='gap-fs-12 py-fs-24 bg-neutral text-neutral-foreground'
      >
        <LayoutContainer as='header' className='gap-fs-3 px-fs-6'>
          <h2 className='text-heading text-balance'>
            Organize your brands, products and services
          </h2>
          <p className='max-w-6xl text-pretty text-neutral-foreground/75'>
            {config.description}
          </p>
        </LayoutContainer>
        <LayoutContainer className='flex-row gap-fs-3 px-fs-6'>
          <Card className='intersect-once intersect:motion-preset-focus'>
            <h3 className='text-body'>React + Tailwind CSS</h3>
          </Card>
          <Card className='intersect-once intersect:motion-preset-focus motion-delay-100'>
            <h3 className='text-body'>NextJS Ready</h3>
          </Card>
          <Card className='intersect-once intersect:motion-preset-focus motion-delay-200'>
            <h3 className='text-body'>Open Source</h3>
          </Card>
          <Card className='intersect-once intersect:motion-preset-focus motion-delay-300'>
            <h3 className='text-body'>CVA Design System</h3>
          </Card>
        </LayoutContainer>
      </Section>
    </Layout>
  );
}
