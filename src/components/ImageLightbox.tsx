"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import type { PictureSource } from "@/components/ResponsiveImage";

/** Either a static image import or a plain URL string. */
export type LightboxImage = PictureSource | string;

/**
 * The lightbox renders inside `max-w-5xl` (1024 CSS px) with `object-contain`,
 * so the browser should pick a variant for a viewport-width slot up to 1024px.
 */
const LIGHTBOX_SIZES = "(max-width: 1024px) 100vw, 1024px";

interface ImageLightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  alt?: string;
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  alt = "Imagine",
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || currentIndex < 0 || currentIndex >= images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vizualizare imagine"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/80 transition-colors hover:text-white"
        aria-label="Închide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full p-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Imaginea anterioară"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full p-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Imaginea următoare"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <div
        className="relative flex max-h-[85vh] w-full max-w-5xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {typeof currentImage === "string" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentImage}
            alt={`${alt} ${currentIndex + 1} / ${images.length}`}
            className="max-h-[85vh] max-w-full object-contain"
          />
        ) : (
          <Image
            src={currentImage}
            sizes={LIGHTBOX_SIZES}
            alt={`${alt} ${currentIndex + 1} / ${images.length}`}
            className="h-auto max-h-[85vh] w-auto max-w-full object-contain"
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs tracking-wider text-white/70">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
