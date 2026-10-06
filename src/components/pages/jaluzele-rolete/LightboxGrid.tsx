"use client";

import { useState } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ResponsiveImage, type PictureSource } from "@/components/ResponsiveImage";

interface LightboxGridProps {
  images: PictureSource[];
  altPrefix: string;
  sizes: string;
  gridClassName: string;
  buttonClassName: string;
}

export function LightboxGrid({
  images,
  altPrefix,
  sizes,
  gridClassName,
  buttonClassName,
}: LightboxGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () => setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <>
      <div className={gridClassName}>
        {images.map((picture, i) => (
          <button
            key={`${picture.src}-${i}`}
            type="button"
            onClick={() => openLightbox(i)}
            className={buttonClassName}
          >
            <ResponsiveImage
              picture={picture}
              alt={`${altPrefix} ${i + 1}`}
              sizes={sizes}
              pictureClassName="block w-full h-full"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <ImageLightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
        alt="Imagine SuperDecor"
      />
    </>
  );
}
