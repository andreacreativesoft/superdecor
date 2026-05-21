"use client";

import { siteConfig } from "@/lib/site";

export function ConsultationCta() {
  return (
    <section className="py-32 px-6 bg-primary text-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-6">
              Showroom Brașov
            </span>
            <h2 className="text-5xl font-display italic leading-tight mb-8 text-balance md:text-5xl">
              Programează o consultanță gratuită cu Super Decor Brașov
            </h2>
            <p className="text-lg text-background/80 leading-relaxed max-w-md mb-10">
              Te ajutăm să alegi perdelele, draperiile, jaluzelele, șinele sau mobilierul potrivit
              pentru locuința ta. Venim cu mostre la tine acasă, în Brașov sau în împrejurimi.
              Răspuns garantat în maxim 24 de ore.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="bg-background text-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-accent hover:text-background transition-colors"
              >
                Sună acum
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Programare%20Consultanță`}
                className="border border-background/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-background hover:bg-background hover:text-foreground transition-colors"
              >
                Scrie-ne un email
              </a>
            </div>
          </div>
          <div className="bg-background/5 border border-background/15 p-8 rounded-sm backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-2">
              [ Măsurători gratuite ]
            </span>
            <h3 className="text-2xl font-display italic mb-6 text-background">
              Solicită o programare
            </h3>
            {/* TODO upgrade to a server action + Resend/Formspree before launch — keeping mailto for v1 */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = String(data.get("name") || "").trim();
                const phone = String(data.get("phone") || "").trim();
                const message = String(data.get("message") || "").trim();
                const subject = encodeURIComponent("Programare măsurători — " + name);
                const body = encodeURIComponent(
                  `Nume: ${name}\nTelefon: ${phone}\n\nMesaj:\n${message}`,
                );
                window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
              }}
              className="flex flex-col gap-4"
            >
              <input
                required
                name="name"
                maxLength={100}
                placeholder="Nume"
                className="bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                required
                name="phone"
                type="tel"
                maxLength={30}
                placeholder="Telefon"
                className="bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-accent transition-colors"
              />
              <textarea
                name="message"
                rows={3}
                maxLength={1000}
                placeholder="Detalii (opțional)"
                className="bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-background text-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-accent hover:text-background transition-colors"
              >
                Trimite cererea
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
