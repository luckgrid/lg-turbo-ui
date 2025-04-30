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
          <div className="box box-content box-color-yellow-500/black p-4 border-2 rounded-md text-base">
            Unscaled Box Primitive
          </div>
          <div className="fp-24/48 box-color-card border-fs-4 rounded-fs-4 ts-16/20">
            Bordered Box Primitive
          </div>
          <div className="fp-32/68 box-color-canvas border-fs-6 border-neutral rounded-fs-6 ts-30/60">
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
            className="cursor box-center icon-wrapper inline-flex p-fs-4 gap-fs-1 rounded-fs-2 text-label action-color-neutral leading-none transition-action"
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
            className="cursor box-center icon-wrapper inline-flex px-fs-4 py-fs-2 gap-fs-1 rounded-fs-2 transition-action action-color-canvas text-label leading-none"
          >
            Small Canvas Action
          </button>
          <button
            type="button"
            className="cursor box-center icon-wrapper inline-flex px-fs-6 py-fs-3 gap-fs-2 rounded-fs-4 transition-action action-color-display text-label leading-none"
          >
            Medium Display Action
          </button>
          <button
            type="button"
            className="cursor box-center icon-wrapper inline-flex px-fs-8 py-fs-4 gap-fs-3 rounded-fs-6 border-fs-6 transition-action action-color-panel text-panel-foreground bg-transparent hover:bg-panel leading-none"
          >
            Large Outline Panel Action
          </button>
        </Layout>
      </Layout>
    </>
  );
}
