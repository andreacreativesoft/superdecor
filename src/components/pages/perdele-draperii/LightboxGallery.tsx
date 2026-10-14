"use client";

import { useState } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ResponsiveImage, type PictureSource } from "@/components/ResponsiveImage";

interface LightboxGalleryProps {
  images: PictureSource[];
  altPrefix: string;
  sizes: string;
  buttonClassName: string;
}

export function LightboxGallery({
  images,
  altPrefix,
  sizes,
  buttonClassName,
}: LightboxGalleryProps) {
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
