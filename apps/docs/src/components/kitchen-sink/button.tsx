import { Star } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';

export function ButtonKitchenSink() {
  return (
    <>
      <div className='container flex flex-wrap gap-fs-10 py-fs-10 px-fs-6 justify-center'>
        <div className='flex flex-col gap-fs-6'>
          <h3 className='text-subheading text-center text-balance'>
            Base Variant Button Colors
          </h3>
          <div className='flex flex-wrap items-center justify-center gap-fs-6'>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
              <Button>Neutral</Button>
              <Button color='accent'>Accent</Button>
              <Button color='primary'>Primary</Button>
              <Button color='secondary'>Secondary</Button>
              <Button color='danger'>Danger</Button>
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-subheading text-center text-balance'>
            Outline Variant Button Colors
          </h3>
          <div className='flex flex-wrap items-center justify-center gap-fs-6'>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
              <Button variant='outline'>Neutral</Button>
              <Button color='accent' variant='outline'>
                Accent
              </Button>
              <Button color='primary' variant='outline'>
                Primary
              </Button>
              <Button color='secondary' variant='outline'>
                Secondary
              </Button>
              <Button color='danger' variant='outline'>
                Danger
              </Button>
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
              <Button
                variant='outline'
                isIcon
                aria-label='Outline Neutral Icon'
              >
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
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-subheading text-center text-balance'>
            Text Variant Button Colors
          </h3>
          <div className='flex flex-wrap items-center justify-center gap-fs-6'>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
              <Button
                size='sm'
                color='accent'
                variant='text'
                isIcon
                aria-label='Small Text Icon'
              >
                <Star />
              </Button>
              <Button variant='text' isIcon aria-label='Default Text Icon'>
                <Star />
              </Button>
              <Button
                size='md'
                color='primary'
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
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
            <div className='flex flex-col items-center justify-center gap-fs-2'>
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
            </div>
          </div>
        </div>
      </div>
      <div className='container flex flex-col py-fs-10 px-fs-6'>
        <div className='flex flex-wrap gap-fs-6 justify-center'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-subheading text-center text-balance'>
              Pill Shape Button Sizes
            </h3>
            <div className='flex flex-wrap items-center justify-center gap-fs-6'>
              <div className='flex flex-col items-center justify-center gap-fs-2'>
                <Button radius='full' size='sm'>
                  Small
                </Button>
                <Button radius='full'>Default</Button>
                <Button radius='full' size='md'>
                  Medium
                </Button>
                <Button radius='full' size='lg'>
                  Large
                </Button>
              </div>
              <div className='flex flex-col items-center justify-center gap-fs-2'>
                <Button
                  radius='full'
                  size='sm'
                  isIcon
                  aria-label='Pill Accent Icon'
                >
                  <Star />
                </Button>
                <Button radius='full' isIcon aria-label='Pill Neutral Icon'>
                  <Star />
                </Button>
                <Button
                  radius='full'
                  size='md'
                  isIcon
                  aria-label='Pill Primary Icon'
                >
                  <Star />
                </Button>
                <Button
                  radius='full'
                  size='lg'
                  isIcon
                  aria-label='Pill Secondary Icon'
                >
                  <Star />
                </Button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-fs-6'>
            <h3 className='text-subheading text-center text-balance'>
              Rounded Button Sizes
            </h3>
            <div className='flex flex-wrap items-center justify-center gap-fs-6'>
              <div className='flex flex-col items-center justify-center gap-fs-2'>
                <Button radius='sm' size='sm' variant='outline' color='primary'>
                  Small
                </Button>
                <Button radius='base' variant='outline' color='primary'>
                  Default
                </Button>
                <Button radius='md' size='md' variant='outline' color='primary'>
                  Medium
                </Button>
                <Button radius='lg' size='lg' variant='outline' color='primary'>
                  Large
                </Button>
              </div>
              <div className='flex flex-col gap-fs-2'>
                <Button
                  radius='sm'
                  size='sm'
                  variant='outline'
                  color='primary'
                  isIcon
                  aria-label='Rounded Accent Icon'
                >
                  <Star />
                </Button>
                <Button
                  radius='base'
                  variant='outline'
                  color='primary'
                  isIcon
                  aria-label='Rounded Neutral Icon'
                >
                  <Star />
                </Button>
                <Button
                  radius='md'
                  size='md'
                  variant='outline'
                  color='primary'
                  isIcon
                  aria-label='Rounded Primary Icon'
                >
                  <Star />
                </Button>
                <Button
                  radius='lg'
                  size='lg'
                  variant='outline'
                  color='primary'
                  isIcon
                  aria-label='Rounded Secondary Icon'
                >
                  <Star />
                </Button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-fs-6'>
            <h3 className='text-subheading text-center text-balance'>
              Sharp Shape Button Sizes
            </h3>
            <div className='flex flex-wrap items-center justify-center gap-fs-6'>
              <div className='flex flex-col items-center justify-center gap-fs-2'>
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
                <Button
                  radius='none'
                  color='secondary'
                  variant='outline'
                  isGhost
                >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
