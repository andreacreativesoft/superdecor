import type { PictureSource } from "@/components/ResponsiveImage";
import { LightboxGrid } from "./LightboxGrid";

// ACSD - one gallery section per blind type; the grid adapts to the photo count
const layouts: Record<number, { grid: string; aspect: string; sizes: string }> = {
  1: {
    grid: "grid grid-cols-1 max-w-4xl",
    aspect: "aspect-[16/10]",
    sizes: "(max-width: 1023px) 100vw, 896px",
  },
  2: {
    grid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
    aspect: "aspect-[4/5]",
    sizes: "(max-width: 639px) 100vw, (max-width: 1328px) 50vw, 624px",
  },
  3: {
    grid: "grid grid-cols-1 sm:grid-cols-3 gap-4",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 639px) 100vw, (max-width: 1328px) 33vw, 416px",
  },
};
const many = {
  grid: "grid grid-cols-2 lg:grid-cols-4 gap-4",
  aspect: "aspect-[3/4]",
  sizes: "(max-width: 1023px) 50vw, (max-width: 1328px) 25vw, 308px",
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  images: PictureSource[];
  alt: string;
  surface?: boolean;
};

export function TypeGallerySection({ id, eyebrow, title, text, images, alt, surface }: Props) {
  const single = images.length === 1 ? images[0] : null;
  // ACSD - a single portrait photo gets a narrow portrait frame instead of a wide crop
  const layout =
    single && single.height > single.width
      ? {
          grid: "grid grid-cols-1 max-w-md",
          aspect: "aspect-[3/4]",
          sizes: "(max-width: 639px) 100vw, 448px",
        }
      : (layouts[images.length] ?? many);
  return (
    <section
      id={id}
      className={`border-border scroll-mt-28 border-b px-[19px] py-24 sm:px-6 ${surface ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
              [ {eyebrow} ]
            </span>
            <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">{text}</p>
        </div>
        <LightboxGrid
          images={images}
          altPrefix={alt}
          sizes={layout.sizes}
          gridClassName={layout.grid}
          buttonClassName={`group relative overflow-hidden bg-surface border border-border ${layout.aspect} block text-left`}
        />
      </div>
    </section>
  );
}
