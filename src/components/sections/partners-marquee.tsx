import Image from "next/image";

const partners = [
  { name: "Casa Rossa", src: "/images/partners/casa-rossa.webp" },
  { name: "SN Deco", src: "/images/partners/sn-deco.webp" },
  { name: "Szintetika", src: "/images/partners/szintetika.webp" },
  { name: "Global Design", src: "/images/partners/global-design.webp" },
  { name: "Bradul Măneciu", src: "/images/partners/bradul-maneciu.webp" },
  { name: "Sabaev", src: "/images/partners/sabaev.webp" },
];

export function PartnersMarquee() {
  return (
    <section className="bg-surface border-border border-y px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
            [ Parteneri ]
          </span>
          <h2 className="font-display text-2xl text-balance italic md:text-4xl">
            Colaborăm cu branduri de încredere.
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {/* ACSD - second copy only keeps the loop seamless, hidden from screen readers */}
            {[false, true].map((copy) =>
              partners.map((p) => (
                <div
                  key={`${p.name}-${copy}`}
                  aria-hidden={copy || undefined}
                  className="mr-16 flex h-20 shrink-0 items-center opacity-80 transition-opacity hover:opacity-100 md:h-24"
                >
                  <Image
                    src={p.src}
                    alt={copy ? "" : p.name}
                    width={400}
                    height={100}
                    loading="lazy"
                    sizes="(max-width: 768px) 320px, 384px"
                    className="h-full w-auto object-contain"
                  />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
