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
          <div className='box-flex box-content box-4 box-c-base box-b-2 rounded-md'>
            Unscaled Box Primitive
          </div>
          <div className='box-flex box-fs-4 box-c-base-1 box-b-lg rounded-fs-lg'>
            Bordered Box Primitive
          </div>
          <div className='box-flex box-xl box-c-base-2 box-b-xl border-neutral/80 rounded-fs-xl'>
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
            className='cursor inline-flex items-center rounded-fs-md action action-fs-1 action-neutral'
          >
            Neutral Action
            <Star />
          </button>
          <button
            type='button'
            className='cursor inline-flex items-center rounded-fs-lg action action-fs-2 action-primary'
          >
            Primary Action
            <Star />
          </button>
          <button
            type='button'
            className='cursor-not-allowed inline-flex items-center rounded-fs-lg action action-fs-3 action-secondary'
            disabled
          >
            Disabled Secondary Action
            <Star />
          </button>
        </Layout>

        <Layout className='flex-row flex-wrap items-center gap-fs-6'>
          <button
            type='button'
            className='cursor box-centered inline-flex rounded-fs-sm action action-sm action-base'
          >
            Base Small Action
          </button>
          <button
            type='button'
            className='cursor box-centered inline-flex rounded-fs-md action action-md action-primary'
          >
            Accent Medium Action
          </button>
          <button
            type='button'
            className='cursor box-centered inline-flex rounded-fs-lg action action-lg action-b-lg action-danger bg-transparent'
          >
            Outline Danger Large Action
          </button>
        </Layout>
      </Layout>
    </>
  );
}
