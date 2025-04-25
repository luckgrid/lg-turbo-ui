import { Star } from 'lucide-react';

import { Layout } from '@workspace/ui/primitives/layout';

export function PrimitivesKitchenSink() {
  return (
    <>
      <Layout className='gap-fs-6'>
        <Layout as='header' className='gap-fs-1 text-balance'>
          <h3 className='text-subheading'>Primitive Boxes</h3>
          <p className='text-muted-foreground'>
            Create consistent box patterns using the box primitive css utility.
          </p>
        </Layout>

        <Layout className='flex-row flex-wrap items-center gap-fs-6'>
          <div className='box-content box-4 box-color-base line-2 rounded-md'>
            Unscaled Box Primitive
          </div>
          <div className='box-fs-8 box-color-base-1 line-lg rounded-fs-3'>
            Bordered Box Primitive
          </div>
          <div className='box-xl box-color-base-2 line-xl line-neutral/80 rounded-fs-4'>
            Neutral Border Box Primitive
          </div>
        </Layout>
      </Layout>

      <Layout className='gap-fs-6'>
        <Layout as='header' className='gap-fs-1 text-balance'>
          <h3 className='text-subheading'>Primitive Actions</h3>
          <p className='text-muted-foreground'>
            Create buttons with a consisten style using the action primitive css
            utility.
          </p>
        </Layout>

        <Layout className='flex-row flex-wrap items-center gap-fs-6'>
          <button
            type='button'
            className='cursor inline-flex items-center rounded-fs-2 action action-fs-3 action-neutral leading-none'
          >
            Neutral Action
            <Star />
          </button>
          <button
            type='button'
            className='cursor inline-flex items-center rounded-fs-3 action action-fs-5 action-primary leading-none'
          >
            Primary Action
            <Star />
          </button>
          <button
            type='button'
            className='cursor-not-allowed inline-flex items-center rounded-fs-4 action action-fs-7 action-secondary leading-none'
            disabled
          >
            Disabled Secondary Action
            <Star />
          </button>
        </Layout>

        <Layout className='flex-row flex-wrap items-center gap-fs-6'>
          <button
            type='button'
            className='cursor centered-box inline-flex rounded-action-sm action action-sm action-base text-label leading-none'
          >
            Base Small Action
          </button>
          <button
            type='button'
            className='cursor centered-box inline-flex rounded-action-md action action-md action-display text-label leading-none'
          >
            Display Medium Action
          </button>
          <button
            type='button'
            className='cursor centered-box inline-flex rounded-action-lg line-xl action action-lg action-panel text-panel-foreground bg-transparent hover:bg-panel leading-none'
          >
            Outline Panel Large Action
          </button>
        </Layout>
      </Layout>
    </>
  );
}
