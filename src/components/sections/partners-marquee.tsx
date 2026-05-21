import Image from "next/image";

const partners = [
  "/images/partner-1.png",
  "/images/partner-2.png",
  "/images/partner-3.png",
  "/images/partner-4.png",
  "/images/partner-5.png",
  "/images/partner-6.png",
];

export function PartnersMarquee() {
  const doubled = [...partners, ...partners];
  return (
    <section className="py-24 px-6 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
            [ Parteneri ]
          </span>
          <h2 className="text-3xl md:text-4xl font-display italic text-balance">
            Colaborăm cu branduri de încredere.
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 items-center">
            {doubled.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="shrink-0 h-24 w-32 relative opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <Image
                  src={src}
                  alt={`Partener ${(i % partners.length) + 1}`}
                  fill
                  sizes="128px"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
