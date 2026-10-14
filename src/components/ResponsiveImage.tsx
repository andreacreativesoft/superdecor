import Image, { type StaticImageData } from "next/image";
import type { ImgHTMLAttributes } from "react";

// ACSD - same API as the Lovable component, rendered through next/image
export type PictureSource = StaticImageData;

type Props = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "width" | "height" | "placeholder"
> & {
  picture: PictureSource | string;
  width?: number;
  height?: number;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  pictureClassName?: string;
};

export function ResponsiveImage({
  picture,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  pictureClassName,
  width,
  height,
  loading: _loading,
  ...rest
}: Props) {
  const isPlain = typeof picture === "string";
  return (
    <picture className={pictureClassName}>
      {isPlain && !(width && height) ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={picture}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={className}
          {...rest}
        />
      ) : (
        <Image
          src={picture}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className={className}
          {...(isPlain ? { width, height } : {})}
          {...rest}
        />
      )}
    </picture>
  );
}

export default ResponsiveImage;
