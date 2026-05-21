import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <header className="relative min-h-[90vh] flex items-end">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Perdele din in fin într-un living luminos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24 pt-48">
        <span className="font-mono text-xs text-accent uppercase tracking-[0.2em] block mb-6">
          Est. — Brașov
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] mb-8 text-balance text-background max-w-4xl">
          Perdele, Draperii și Mobilă la Comandă în Brașov
        </h1>
        <p className="text-lg md:text-xl text-background/80 max-w-2xl mb-10 leading-relaxed text-pretty">
          Atelier propriu cu peste 10 ani de experiență. Confecționăm perdele, draperii, jaluzele,
          rolete și mobilă personalizată pentru locuința ta. Măsurători, consultanță și transport
          gratuit pe raza orașului Brașov și a localităților învecinate.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact#showroom"
            className="bg-background text-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-accent hover:text-background transition-colors"
          >
            Vizitează Showroom
          </Link>
          <Link
            href="/contact"
            className="border border-background/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-background hover:bg-background hover:text-foreground transition-colors"
          >
            Programează consultanță
          </Link>
        </div>
      </div>
    </header>
  );
}
