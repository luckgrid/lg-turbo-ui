import { Button } from '@workspace/ui/components/button';
import { Star } from 'lucide-react';

export function ButtonKitchenSink() {
  return (
    <>
      <div className="container flex flex-wrap gap-fs-10 py-fs-10 px-fs-6 justify-center">
        <div className="flex flex-col gap-fs-6">
          <h3 className="text-subheading text-center text-balance">
            Solid Variant Button Colors
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-fs-6">
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button variant="solid">Neutral</Button>
              <Button color="accent" variant="solid">
                Accent
              </Button>
              <Button color="primary" variant="solid">
                Primary
              </Button>
              <Button color="secondary" variant="solid">
                Secondary
              </Button>
              <Button color="danger" variant="solid">
                Danger
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button variant="solid" isIcon aria-label="Solid Neutral Icon">
                <Star />
              </Button>
              <Button
                color="accent"
                variant="solid"
                isIcon
                aria-label="Solid Accent Icon"
              >
                <Star />
              </Button>
              <Button
                color="primary"
                variant="solid"
                isIcon
                aria-label="Solid Primary Icon"
              >
                <Star />
              </Button>
              <Button
                color="secondary"
                variant="solid"
                isIcon
                aria-label="Solid Secondary Icon"
              >
                <Star />
              </Button>
              <Button
                color="danger"
                variant="solid"
                isIcon
                aria-label="Solid Danger Icon"
              >
                <Star />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button isGhost variant="solid">
                Neutral Ghost
              </Button>
              <Button color="accent" isGhost variant="solid">
                Accent Ghost
              </Button>
              <Button color="primary" isGhost variant="solid">
                Primary Ghost
              </Button>
              <Button color="secondary" isGhost variant="solid">
                Secondary Ghost
              </Button>
              <Button color="danger" isGhost variant="solid">
                Danger Ghost
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button
                variant="solid"
                isGhost
                isIcon
                aria-label="Solid Neutral Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="accent"
                variant="solid"
                isGhost
                isIcon
                aria-label="Solid Accent Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="primary"
                variant="solid"
                isGhost
                isIcon
                aria-label="Solid Primary Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="secondary"
                variant="solid"
                isGhost
                isIcon
                aria-label="Solid Secondary Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="danger"
                variant="solid"
                isGhost
                isIcon
                aria-label="Solid Danger Ghost Icon"
              >
                <Star />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-subheading text-center text-balance">
            Outline Variant Button Colors
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-fs-6">
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button variant="outline">Neutral</Button>
              <Button color="accent" variant="outline">
                Accent
              </Button>
              <Button color="primary" variant="outline">
                Primary
              </Button>
              <Button color="secondary" variant="outline">
                Secondary
              </Button>
              <Button color="danger" variant="outline">
                Danger
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button
                variant="outline"
                isIcon
                aria-label="Outline Neutral Icon"
              >
                <Star />
              </Button>
              <Button
                color="accent"
                variant="outline"
                isIcon
                aria-label="Outline Accent Icon"
              >
                <Star />
              </Button>
              <Button
                color="primary"
                variant="outline"
                isIcon
                aria-label="Outline Primary Icon"
              >
                <Star />
              </Button>
              <Button
                color="secondary"
                variant="outline"
                isIcon
                aria-label="Outline Secondary Icon"
              >
                <Star />
              </Button>
              <Button
                color="danger"
                variant="outline"
                isIcon
                aria-label="Outline Danger Icon"
              >
                <Star />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button isGhost variant="outline">
                Neutral Ghost
              </Button>
              <Button color="accent" isGhost variant="outline">
                Accent Ghost
              </Button>
              <Button color="primary" isGhost variant="outline">
                Primary Ghost
              </Button>
              <Button color="secondary" isGhost variant="outline">
                Secondary Ghost
              </Button>
              <Button color="danger" isGhost variant="outline">
                Danger Ghost
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button
                variant="outline"
                isGhost
                isIcon
                aria-label="Outline Neutral Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="accent"
                variant="outline"
                isGhost
                isIcon
                aria-label="Outline Accent Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="primary"
                variant="outline"
                isGhost
                isIcon
                aria-label="Outline Primary Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="secondary"
                variant="outline"
                isGhost
                isIcon
                aria-label="Outline Secondary Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="danger"
                variant="outline"
                isGhost
                isIcon
                aria-label="Outline Danger Ghost Icon"
              >
                <Star />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-subheading text-center text-balance">
            Text Variant Button Colors
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-fs-6">
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button
                size="sm"
                color="accent"
                variant="text"
                isIcon
                aria-label="Small Text Icon"
              >
                <Star />
              </Button>
              <Button variant="text" isIcon aria-label="Default Text Icon">
                <Star />
              </Button>
              <Button
                size="md"
                color="primary"
                variant="text"
                isIcon
                aria-label="Medium Text Icon"
              >
                <Star />
              </Button>
              <Button
                size="lg"
                color="secondary"
                variant="text"
                isIcon
                aria-label="Large Text Icon"
              >
                <Star />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button variant="text">Neutral</Button>
              <Button color="accent" variant="text">
                Accent
              </Button>
              <Button color="primary" variant="text">
                Primary
              </Button>
              <Button color="secondary" variant="text">
                Secondary
              </Button>
              <Button color="danger" variant="text">
                Danger
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button variant="text" isIcon aria-label="Text Neutral Icon">
                <Star />
              </Button>
              <Button
                color="accent"
                variant="text"
                isIcon
                aria-label="Text Accent Icon"
              >
                <Star />
              </Button>
              <Button
                color="primary"
                variant="text"
                isIcon
                aria-label="Text Primary Icon"
              >
                <Star />
              </Button>
              <Button
                color="secondary"
                variant="text"
                isIcon
                aria-label="Text Secondary Icon"
              >
                <Star />
              </Button>
              <Button
                color="danger"
                variant="text"
                isIcon
                aria-label="Text Danger Icon"
              >
                <Star />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button isGhost variant="text">
                Neutral Ghost
              </Button>
              <Button color="accent" isGhost variant="text">
                Accent Ghost
              </Button>
              <Button color="primary" isGhost variant="text">
                Primary Ghost
              </Button>
              <Button color="secondary" isGhost variant="text">
                Secondary Ghost
              </Button>
              <Button color="danger" isGhost variant="text">
                Danger Ghost
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-fs-2">
              <Button
                variant="text"
                isGhost
                isIcon
                aria-label="Text Neutral Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="accent"
                variant="text"
                isGhost
                isIcon
                aria-label="Text Accent Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="primary"
                variant="text"
                isGhost
                isIcon
                aria-label="Text Primary Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="secondary"
                variant="text"
                isGhost
                isIcon
                aria-label="Text Secondary Ghost Icon"
              >
                <Star />
              </Button>
              <Button
                color="danger"
                variant="text"
                isGhost
                isIcon
                aria-label="Text Danger Ghost Icon"
              >
                <Star />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col py-fs-10 px-fs-6">
        <div className="flex flex-wrap gap-fs-6 justify-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-subheading text-center text-balance">
              Pill Shape Button Sizes
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-fs-6">
              <div className="flex flex-col items-center justify-center gap-fs-2">
                <Button shape="pill" size="sm">
                  Small
                </Button>
                <Button shape="pill">Default</Button>
                <Button shape="pill" size="md">
                  Medium
                </Button>
                <Button shape="pill" size="lg">
                  Large
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center gap-fs-2">
                <Button
                  shape="pill"
                  size="sm"
                  isIcon
                  aria-label="Pill Accent Icon"
                >
                  <Star />
                </Button>
                <Button shape="pill" isIcon aria-label="Pill Neutral Icon">
                  <Star />
                </Button>
                <Button
                  shape="pill"
                  size="md"
                  isIcon
                  aria-label="Pill Primary Icon"
                >
                  <Star />
                </Button>
                <Button
                  shape="pill"
                  size="lg"
                  isIcon
                  aria-label="Pill Secondary Icon"
                >
                  <Star />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-fs-6">
            <h3 className="text-subheading text-center text-balance">
              Rounded Button Sizes
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-fs-6">
              <div className="flex flex-col items-center justify-center gap-fs-2">
                <Button
                  shape="rounded"
                  size="sm"
                  variant="outline"
                  color="primary"
                >
                  Small
                </Button>
                <Button shape="rounded" variant="outline" color="primary">
                  Default
                </Button>
                <Button
                  shape="rounded"
                  size="md"
                  variant="outline"
                  color="primary"
                >
                  Medium
                </Button>
                <Button
                  shape="rounded"
                  size="lg"
                  variant="outline"
                  color="primary"
                >
                  Large
                </Button>
              </div>
              <div className="flex flex-col gap-fs-2">
                <Button
                  shape="rounded"
                  size="sm"
                  variant="outline"
                  color="primary"
                  isIcon
                  aria-label="Rounded Accent Icon"
                >
                  <Star />
                </Button>
                <Button
                  shape="rounded"
                  variant="outline"
                  color="primary"
                  isIcon
                  aria-label="Rounded Neutral Icon"
                >
                  <Star />
                </Button>
                <Button
                  shape="rounded"
                  size="md"
                  variant="outline"
                  color="primary"
                  isIcon
                  aria-label="Rounded Primary Icon"
                >
                  <Star />
                </Button>
                <Button
                  shape="rounded"
                  size="lg"
                  variant="outline"
                  color="primary"
                  isIcon
                  aria-label="Rounded Secondary Icon"
                >
                  <Star />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-fs-6">
            <h3 className="text-subheading text-center text-balance">
              Sharp Shape Button Sizes
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-fs-6">
              <div className="flex flex-col items-center justify-center gap-fs-2">
                <Button
                  shape="sharp"
                  size="sm"
                  color="secondary"
                  variant="outline"
                  isGhost
                >
                  <Star />
                  Small
                </Button>
                <Button
                  shape="sharp"
                  color="secondary"
                  variant="outline"
                  isGhost
                >
                  <Star />
                  Default
                </Button>
                <Button
                  shape="sharp"
                  size="md"
                  color="secondary"
                  variant="outline"
                  isGhost
                >
                  <Star />
                  Medium
                </Button>
                <Button
                  shape="sharp"
                  size="lg"
                  color="secondary"
                  variant="outline"
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
