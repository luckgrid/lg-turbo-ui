import { Star } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { Layout } from '@workspace/ui/primitives/layout';

export function ButtonKitchenSink() {
  return (
    <>
      <Layout className='gap-fs-6'>
        <Layout as='header' className='gap-fs-1 text-balance'>
          <h3 className='text-subheading'>Base Variant Button Colors</h3>
          <p className='text-muted-foreground'>
            Showcase of base variant button with all available color variants,
            along with ghost and icon modifiers.
          </p>
        </Layout>

        <Layout className='gap-fs-3'>
          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button>Base (Neutral)</Button>
            <Button color='accent'>Accent</Button>
            <Button color='primary'>Primary</Button>
            <Button color='secondary'>Secondary</Button>
            <Button color='danger'>Danger</Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button isGhost>Neutral Ghost</Button>
            <Button color='accent' isGhost>
              Accent Ghost
            </Button>
            <Button color='primary' isGhost>
              Primary Ghost
            </Button>
            <Button color='secondary' isGhost>
              Secondary Ghost
            </Button>
            <Button color='danger' isGhost>
              Danger Ghost
            </Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button isIcon aria-label='Base Neutral Icon'>
              <Star />
            </Button>
            <Button color='accent' isIcon aria-label='Base Accent Icon'>
              <Star />
            </Button>
            <Button color='primary' isIcon aria-label='Base Primary Icon'>
              <Star />
            </Button>
            <Button color='secondary' isIcon aria-label='Base Secondary Icon'>
              <Star />
            </Button>
            <Button color='danger' isIcon aria-label='Base Danger Icon'>
              <Star />
            </Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button isGhost isIcon aria-label='Base Neutral Ghost Icon'>
              <Star />
            </Button>
            <Button
              color='accent'
              isGhost
              isIcon
              aria-label='Base Accent Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='primary'
              isGhost
              isIcon
              aria-label='Base Primary Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='secondary'
              isGhost
              isIcon
              aria-label='Base Secondary Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='danger'
              isGhost
              isIcon
              aria-label='Base Danger Ghost Icon'
            >
              <Star />
            </Button>
          </Layout>
        </Layout>
      </Layout>

      <Layout className='gap-fs-6'>
        <Layout as='header' className='gap-fs-1 text-balance'>
          <h3 className='text-subheading'>Outline Variant Button Colors</h3>
          <p className='text-muted-foreground'>
            Showcase of outline variant button with all available color
            variants, along with ghost and icon modifiers.
          </p>
        </Layout>

        <Layout className='gap-fs-6'>
          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button variant='outline'>Base (Neutral) Outline</Button>
            <Button color='accent' variant='outline'>
              Accent Outline
            </Button>
            <Button color='primary' variant='outline'>
              Primary Outline
            </Button>
            <Button color='secondary' variant='outline'>
              Secondary Outline
            </Button>
            <Button color='danger' variant='outline'>
              Danger Outline
            </Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button isGhost variant='outline'>
              Neutral Ghost
            </Button>
            <Button color='accent' isGhost variant='outline'>
              Accent Ghost
            </Button>
            <Button color='primary' isGhost variant='outline'>
              Primary Ghost
            </Button>
            <Button color='secondary' isGhost variant='outline'>
              Secondary Ghost
            </Button>
            <Button color='danger' isGhost variant='outline'>
              Danger Ghost
            </Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button variant='outline' isIcon aria-label='Outline Neutral Icon'>
              <Star />
            </Button>
            <Button
              color='accent'
              variant='outline'
              isIcon
              aria-label='Outline Accent Icon'
            >
              <Star />
            </Button>
            <Button
              color='primary'
              variant='outline'
              isIcon
              aria-label='Outline Primary Icon'
            >
              <Star />
            </Button>
            <Button
              color='secondary'
              variant='outline'
              isIcon
              aria-label='Outline Secondary Icon'
            >
              <Star />
            </Button>
            <Button
              color='danger'
              variant='outline'
              isIcon
              aria-label='Outline Danger Icon'
            >
              <Star />
            </Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button
              variant='outline'
              isGhost
              isIcon
              aria-label='Outline Neutral Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='accent'
              variant='outline'
              isGhost
              isIcon
              aria-label='Outline Accent Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='primary'
              variant='outline'
              isGhost
              isIcon
              aria-label='Outline Primary Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='secondary'
              variant='outline'
              isGhost
              isIcon
              aria-label='Outline Secondary Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='danger'
              variant='outline'
              isGhost
              isIcon
              aria-label='Outline Danger Ghost Icon'
            >
              <Star />
            </Button>
          </Layout>
        </Layout>
      </Layout>

      <Layout className='gap-fs-6'>
        <Layout as='header' className='gap-fs-1 text-balance'>
          <h3 className='text-subheading'>Text Variant Button Colors</h3>
          <p className='text-muted-foreground'>
            Showcase of text variant button with all available color variants,
            along with ghost and icon modifiers.
          </p>
        </Layout>

        <Layout className='gap-fs-6'>
          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button variant='text'>Neutral</Button>
            <Button color='accent' variant='text'>
              Accent
            </Button>
            <Button color='primary' variant='text'>
              Primary
            </Button>
            <Button color='secondary' variant='text'>
              Secondary
            </Button>
            <Button color='danger' variant='text'>
              Danger
            </Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button isGhost variant='text'>
              Neutral Ghost
            </Button>
            <Button color='accent' isGhost variant='text'>
              Accent Ghost
            </Button>
            <Button color='primary' isGhost variant='text'>
              Primary Ghost
            </Button>
            <Button color='secondary' isGhost variant='text'>
              Secondary Ghost
            </Button>
            <Button color='danger' isGhost variant='text'>
              Danger Ghost
            </Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button variant='text' isIcon aria-label='Text Neutral Icon'>
              <Star />
            </Button>
            <Button
              color='accent'
              variant='text'
              isIcon
              aria-label='Text Accent Icon'
            >
              <Star />
            </Button>
            <Button
              color='primary'
              variant='text'
              isIcon
              aria-label='Text Primary Icon'
            >
              <Star />
            </Button>
            <Button
              color='secondary'
              variant='text'
              isIcon
              aria-label='Text Secondary Icon'
            >
              <Star />
            </Button>
            <Button
              color='danger'
              variant='text'
              isIcon
              aria-label='Text Danger Icon'
            >
              <Star />
            </Button>
          </Layout>

          <Layout className='flex-row flex-wrap items-center gap-fs-3'>
            <Button
              variant='text'
              isGhost
              isIcon
              aria-label='Text Neutral Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='accent'
              variant='text'
              isGhost
              isIcon
              aria-label='Text Accent Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='primary'
              variant='text'
              isGhost
              isIcon
              aria-label='Text Primary Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='secondary'
              variant='text'
              isGhost
              isIcon
              aria-label='Text Secondary Ghost Icon'
            >
              <Star />
            </Button>
            <Button
              color='danger'
              variant='text'
              isGhost
              isIcon
              aria-label='Text Danger Ghost Icon'
            >
              <Star />
            </Button>
          </Layout>
        </Layout>
      </Layout>

      <Layout className='gap-fs-12'>
        <Layout className='gap-fs-6'>
          <Layout as='header' className='gap-fs-1 text-balance'>
            <h3 className='text-subheading'>Pill Shaped Button Sizes</h3>
            <p className='text-muted-foreground'>
              Showcase of buttons with a full border radius using all available
              size variants, along with icon modifier.
            </p>
          </Layout>

          <Layout className='gap-fs-3'>
            <Layout className='flex-row flex-wrap items-center gap-fs-3'>
              <Button radius='full' size='sm'>
                Small
              </Button>
              <Button radius='full'>Base</Button>
              <Button radius='full' size='md'>
                Medium
              </Button>
              <Button radius='full' size='lg'>
                Large
              </Button>
              <Button radius='full' size='full'>
                Full
              </Button>
            </Layout>

            <Layout className='flex-row flex-wrap items-center gap-fs-3'>
              <Button
                radius='full'
                size='sm'
                isIcon
                aria-label='Small Pill Icon'
              >
                <Star />
              </Button>
              <Button radius='full' isIcon aria-label='Base Pill Icon'>
                <Star />
              </Button>
              <Button
                radius='full'
                size='md'
                isIcon
                aria-label='Medium Pill Icon'
              >
                <Star />
              </Button>
              <Button
                radius='full'
                size='lg'
                isIcon
                aria-label='Large Pill Icon'
              >
                <Star />
              </Button>
              <Button
                radius='full'
                size='full'
                isIcon
                aria-label='Full Pill Icon'
              >
                <Star />
              </Button>
            </Layout>
          </Layout>
        </Layout>

        <Layout className='gap-fs-6'>
          <Layout as='header' className='gap-fs-1 text-balance'>
            <h3 className='text-subheading'>Rounded Shape Button Sizes</h3>
            <p className='text-muted-foreground'>
              Showcase of buttons with rounded border radius using all available
              size variants, along with icon modifier.
            </p>
          </Layout>

          <Layout className='gap-fs-6'>
            <Layout className='flex-row flex-wrap items-center gap-fs-3'>
              <Button radius='sm' size='sm' variant='outline' color='primary'>
                Small
              </Button>
              <Button radius='base' variant='outline' color='primary'>
                Base
              </Button>
              <Button radius='md' size='md' variant='outline' color='primary'>
                Medium
              </Button>
              <Button radius='lg' size='lg' variant='outline' color='primary'>
                Large
              </Button>
              <Button radius='lg' size='full' variant='outline' color='primary'>
                Full
              </Button>
            </Layout>

            <Layout className='flex-row flex-wrap items-center gap-fs-3'>
              <Button
                radius='sm'
                size='sm'
                variant='outline'
                color='primary'
                isIcon
                aria-label='Small Radius Primary Icon'
              >
                <Star />
              </Button>
              <Button
                radius='base'
                variant='outline'
                color='primary'
                isIcon
                aria-label='Base Radius Primary Icon'
              >
                <Star />
              </Button>
              <Button
                radius='md'
                size='md'
                variant='outline'
                color='primary'
                isIcon
                aria-label='Medium Radius Primary Icon'
              >
                <Star />
              </Button>
              <Button
                radius='lg'
                size='lg'
                variant='outline'
                color='primary'
                isIcon
                aria-label='Large Radius Primary Icon'
              >
                <Star />
              </Button>
              <Button
                radius='lg'
                size='full'
                variant='outline'
                color='primary'
                isIcon
                aria-label='Large Radius Full Size Primary Icon'
              >
                <Star />
              </Button>
            </Layout>
          </Layout>
        </Layout>

        <Layout className='gap-fs-6'>
          <Layout as='header' className='gap-fs-1 text-balance'>
            <h3 className='text-subheading'>Square Shaped Button Sizes</h3>
            <p className='text-muted-foreground'>
              Showcase of buttons without a border radius using all available
              size variants, along with ghost modifier and icons in the label.
            </p>
          </Layout>

          <Layout className='gap-fs-6'>
            <Layout className='flex-row flex-wrap items-center gap-fs-3'>
              <Button
                radius='none'
                size='sm'
                color='secondary'
                variant='outline'
                isGhost
              >
                <Star />
                Small
              </Button>
              <Button radius='none' color='secondary' variant='outline' isGhost>
                <Star />
                Default
              </Button>
              <Button
                radius='none'
                size='md'
                color='secondary'
                variant='outline'
                isGhost
              >
                <Star />
                Medium
              </Button>
              <Button
                radius='none'
                size='lg'
                color='secondary'
                variant='outline'
                isGhost
              >
                <Star />
                Large
              </Button>
              <Button
                radius='none'
                size='full'
                color='secondary'
                variant='outline'
                isGhost
              >
                <Star />
                Full
              </Button>
            </Layout>

            <Layout className='flex-row flex-wrap items-center gap-fs-3'>
              <Button
                size='sm'
                color='secondary'
                variant='text'
                isIcon
                aria-label='Small Text Icon'
              >
                <Star />
              </Button>
              <Button
                color='secondary'
                variant='text'
                isIcon
                aria-label='Default Text Icon'
              >
                <Star />
              </Button>
              <Button
                size='md'
                color='secondary'
                variant='text'
                isIcon
                aria-label='Medium Text Icon'
              >
                <Star />
              </Button>
              <Button
                size='lg'
                color='secondary'
                variant='text'
                isIcon
                aria-label='Large Text Icon'
              >
                <Star />
              </Button>
              <Button
                size='full'
                color='secondary'
                variant='text'
                isIcon
                aria-label='Full Text Icon'
              >
                <Star />
              </Button>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
