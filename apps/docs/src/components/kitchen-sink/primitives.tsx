import { Star } from "lucide-react";

import { Layout } from "@workspace/ui/primitives/layout";

export function PrimitivesKitchenSink() {
  return (
    <>
      <Layout className="gap-fs-12">
        <Layout as="header" className="gap-fs-3 text-balance">
          <h3 className="text-subheading">Primitive Boxes</h3>
          <p className="text-muted-foreground">
            Create consistent box patterns using the box primitive css utility.
          </p>
        </Layout>

        <Layout className="flex-row flex-wrap items-center gap-fs-6">
          <div className="box box-content box-color-base p-4 border-2 rounded-md">
            Unscaled Box Primitive
          </div>
          <div className="box-fs-8 box-color-base-1 p-fs-4 border-fs-2 rounded-fs-2">
            Bordered Box Primitive
          </div>
          <div className="box-xl box-color-base-2 p-fs-6 border-fs-4 border-neutral rounded-fs-4">
            Neutral Border Box Primitive
          </div>
        </Layout>
      </Layout>

      <Layout className="gap-fs-12">
        <Layout as="header" className="gap-fs-3 text-balance">
          <h3 className="text-subheading">Primitive Actions</h3>
          <p className="text-muted-foreground">
            Create buttons with a consisten style using the action primitive css
            utility.
          </p>
        </Layout>

        <Layout className="flex-row flex-wrap items-center gap-fs-6">
          <button
            type="button"
            className="cursor box-center icon-wrapper inline-flex p-fs-4 gap-fs-1 rounded-fs-2 action-color-neutral leading-none transition-action"
          >
            Neutral Action
            <Star />
          </button>
          <button
            type="button"
            className="cursor box-center icon-wrapper inline-flex p-fs-6 gap-fs-2 rounded-fs-3 action-color-primary leading-none transition-action"
          >
            Primary Action
            <Star />
          </button>
          <button
            type="button"
            className="cursor-not-allowed box-center icon-wrapper inline-flex p-fs-8 gap-fs-3 rounded-fs-4 text-lead font-medium action-color-secondary leading-none transition-action"
            disabled
          >
            Disabled Secondary Action
            <Star />
          </button>
        </Layout>

        <Layout className="flex-row flex-wrap items-center gap-fs-6">
          <button
            type="button"
            className="cursor box-center icon-wrapper inline-flex px-fs-4 py-fs-2 gap-fs-1 rounded-fs-2 transition-action action-color-base text-label leading-none"
          >
            Base Small Action
          </button>
          <button
            type="button"
            className="cursor box-center icon-wrapper inline-flex px-fs-6 py-fs-3 gap-fs-2 rounded-fs-4 transition-action action-color-display text-label leading-none"
          >
            Display Medium Action
          </button>
          <button
            type="button"
            className="cursor box-center icon-wrapper inline-flex px-fs-8 py-fs-4 gap-fs-3 rounded-fs-6 border-fs-6 transition-action action-color-panel text-panel-foreground bg-transparent hover:bg-panel leading-none"
          >
            Outline Panel Large Action
          </button>
        </Layout>
      </Layout>
    </>
  );
}
