import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";

import type { ImageProps as UiImageProps } from "@workspace/ui/components/media";
import { Image as UiImage } from "@workspace/ui/components/media";

type ImageProps = Omit<UiImageProps, "asChild" | "src"> & NextImageProps;

function Image({
  alt,
  src,
  width,
  height,
  fill,
  quality,
  priority,
  loading,
  placeholder,
  blurDataURL,
  unoptimized,
  overrideSrc,
  loader,
  onLoad,
  ...props
}: ImageProps) {
  return (
    <UiImage data-slot="next-image" asChild {...props}>
      <NextImage
        alt={alt}
        src={src}
        width={width}
        height={height}
        fill={fill}
        quality={quality}
        priority={priority}
        loading={loading}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        unoptimized={unoptimized}
        overrideSrc={overrideSrc}
        loader={loader}
        onLoad={onLoad}
      />
    </UiImage>
  );
}

export { Image };
export type { ImageProps };
