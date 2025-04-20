import Image from 'next/image';

import { ButtonLink } from '@workspace/ui/components/button';
import { Card } from '@workspace/ui/components/card';
import { Section } from '@workspace/ui/components/section';
import { cn } from '@workspace/ui/lib/utils';
import { Layout, LayoutContainer } from '@workspace/ui/primitives/layout';

import { config } from '@/configs/app';

const footerCards = [
  {
    title: 'React + Tailwind CSS',
    description:
      'A React component library that uses Tailwind CSS for styling.',
  },
  {
    title: 'NextJS Ready',
    description:
      'Build NextJS Apps using UI component wrappers and config presets.',
    className: 'motion-delay-100',
  },
  {
    title: 'CVA Design System',
    description:
      'Modify UI component styles quickly using CVA and Tailwind CSS.',
    className: 'motion-delay-200',
  },
  {
    title: 'Open Source',
    description: 'Fully open source and developer driven features and updates.',
    className: 'motion-delay-300',
  },
];

export default function Page() {
  return (
    <Layout as='main' className='min-h-svh'>
      <Section
        as='header'
        className='min-h-svh items-center justify-center py-fs-38 bg-base text-base-foreground'
      >
        <LayoutContainer className='items-center justify-center gap-fs-12 px-fs-6'>
          <Image
            alt='Logo'
            src='/assets/logos/logo.png'
            width={200}
            height={200}
            priority
            className='size-fs-46 motion-preset-spin motion-loop-once motion-opacity-in-0 motion-scale-in-25 motion-duration-200 pointer-events-none dark:invert'
          />
          <div className='motion-opacity-in-0 motion-translate-y-in-50 max-w-4xl mx-auto flex flex-col gap-fs-1 text-center'>
            <h1 className='text-balance'>{config.name}</h1>
            <p className='text-balance text-muted-foreground'>{config.title}</p>
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
        </LayoutContainer>
      </Section>
      <Section
        as='footer'
        className='gap-fs-12 py-fs-24 bg-shell text-shell-foreground'
      >
        <LayoutContainer as='header'>
          <h2 className='text-heading text-balance'>
            Organize your brands, products and services
          </h2>
          <p className='max-w-6xl text-pretty text-shell-foreground/75'>
            {config.description}
          </p>
        </LayoutContainer>
        <LayoutContainer className='flex-row flex-wrap'>
          {footerCards.map((card) => (
            <Card
              key={card.title}
              className={cn(
                'px-fs-3 py-fs-1 transition-[background-color,filter,opacity]',
                'border-shell-3 bg-shell-1 text-shell-foreground hover:bg-shell-2',
                'intersect-once intersect:motion-preset-focus',
                card.className
              )}
            >
              <h3 className='text-body'>{card.title}</h3>
            </Card>
          ))}
        </LayoutContainer>
      </Section>
    </Layout>
  );
}
