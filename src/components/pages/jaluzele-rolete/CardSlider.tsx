"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ResponsiveImage, type PictureSource } from "@/components/ResponsiveImage";

// ACSD - swipeable image slider for a product type card (scroll-snap, no library)
export function CardSlider({
  images,
  alt,
  sizes,
}: {
  images: PictureSource[];
  alt: string;
  sizes: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + images.length) % images.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="bg-surface relative aspect-[4/5] overflow-hidden">
      <div
        ref={track}
        onScroll={(e) => {
          const el = e.currentTarget;
          setCurrent(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex h-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto [&::-webkit-scrollbar]:hidden"
      >
        {images.map((picture, i) => (
          <button
            key={`${picture.src}-${i}`}
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Mărește fotografia ${i + 1} din ${images.length}: ${alt}`}
            className="h-full w-full shrink-0 snap-center"
          >
            <ResponsiveImage
              picture={picture}
              alt={`${alt} ${i + 1}`}
              sizes={sizes}
              pictureClassName="block w-full h-full"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Fotografia anterioară"
            className="bg-background/80 hover:bg-background absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-sm transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            aria-label="Fotografia următoare"
            className="bg-background/80 hover:bg-background absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-sm transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Fotografia ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${i === current ? "bg-background w-5" : "bg-background/60 w-1.5"}`}
                />
              </button>
            ))}
          </div>
        </>
      ) : null}

      <ImageLightbox
        images={images}
        currentIndex={current}
        isOpen={open}
        onClose={() => setOpen(false)}
        onPrev={() => goTo(current - 1)}
        onNext={() => goTo(current + 1)}
        alt={alt}
      />
    </div>
  );
}
