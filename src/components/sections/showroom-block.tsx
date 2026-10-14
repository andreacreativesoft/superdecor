import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function ShowroomBlock() {
  return (
    <section id="showroom" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 order-2 lg:order-1 w-full">
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
            <Image
              src="/images/showroom.jpg"
              alt={`Showroom ${siteConfig.name} în ${siteConfig.city}`}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em] block mb-6">
            Showroom Perdele și Mobilă în Brașov
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight text-balance">
            Alege cu încredere.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            În showroom-ul nostru găsești sute de mostre de țesături, lenjerii și sisteme de
            umbrire, expuse sub lumină naturală. Specialiștii noștri te ghidează de la prima
            schiță până la montajul final.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Fiecare proiect — de la o singură fereastră la un apartament întreg — primește
            aceeași atenție pentru detaliu și calitatea cusăturii.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border pt-10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2 text-muted-foreground">
                Adresă
              </span>
              <p className="text-sm leading-relaxed">
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.addressLocality} {siteConfig.address.postalCode}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2 text-muted-foreground">
                Program
              </span>
              <p className="text-sm leading-relaxed">
                Luni–Vineri 09:00–18:00
                <br />
                Sâmbătă 10:00–14:00
                <br />
                Duminică Închis
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2 text-muted-foreground">
                Telefon / WhatsApp
              </span>
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="text-sm leading-relaxed hover:text-accent transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2 text-muted-foreground">
                Email
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm leading-relaxed hover:text-accent transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
