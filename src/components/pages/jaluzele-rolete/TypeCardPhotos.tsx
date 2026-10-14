"use client";

import { useState } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ResponsiveImage, type PictureSource } from "@/components/ResponsiveImage";

// ACSD - real project photos inside a product type card
export function TypeCardPhotos({ images, alt }: { images: PictureSource[]; alt: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const shown = images.slice(0, 4);
  const extra = images.length - shown.length;

  return (
    <div className="border-border mt-5 border-t pt-5">
      <span className="text-muted-foreground mb-3 block font-mono text-[10px] tracking-[0.2em] uppercase">
        Lucrări montate · {images.length} {images.length === 1 ? "foto" : "foto"}
      </span>
      <div className="grid grid-cols-4 gap-2">
        {shown.map((picture, i) => (
          <button
            key={`${picture.src}-${i}`}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            aria-label={`Deschide fotografia ${i + 1} din ${images.length}: ${alt}`}
            className="group/photo bg-surface border-border relative block aspect-square overflow-hidden border"
          >
            <ResponsiveImage
              picture={picture}
              alt=""
              sizes="96px"
              pictureClassName="block w-full h-full"
              className="h-full w-full object-cover transition-transform duration-500 group-hover/photo:scale-110"
            />
            {i === shown.length - 1 && extra > 0 ? (
              <span className="bg-foreground/60 text-background absolute inset-0 flex items-center justify-center font-mono text-xs">
                +{extra}
              </span>
            ) : null}
          </button>
        ))}
      </div>
      <ImageLightbox
        images={images}
        currentIndex={index}
        isOpen={open}
        onClose={() => setOpen(false)}
        onPrev={() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))}
        onNext={() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))}
        alt={alt}
      />
    </div>
  );
}
