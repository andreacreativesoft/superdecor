"use client";

import { useActionState, useEffect } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { siteConfig } from "@/lib/site";

const initialState: ContactState = { status: "idle", message: "" };

export function ConsultationCta() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  useEffect(() => {
    if (state.status !== "mailto" || !state.values) return;
    const { name, phone, message } = state.values;
    const subject = encodeURIComponent("Programare măsurători — " + name);
    const body = encodeURIComponent(`Nume: ${name}\nTelefon: ${phone}\n\nMesaj:\n${message}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  }, [state]);

  return (
    <section className="bg-primary text-background relative overflow-hidden px-6 py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-accent mb-6 block font-mono text-xs tracking-[0.2em] uppercase">
              Showroom Brașov
            </span>
            <h2 className="font-display mb-8 text-5xl leading-tight text-balance italic md:text-5xl">
              Programează o consultanță gratuită cu Super Decor Brașov
            </h2>
            <p className="text-background/80 mb-10 max-w-md text-lg leading-relaxed">
              Te ajutăm să alegi perdelele, draperiile, jaluzelele, șinele sau mobilierul potrivit
              pentru locuința ta. Venim cu mostre la tine acasă, în Brașov sau în împrejurimi.
              Răspuns garantat în maxim 24 de ore.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="bg-background text-foreground hover:bg-accent hover:text-background px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
              >
                Sună acum
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Programare%20Consultanță`}
                className="border-background/30 text-background hover:bg-background hover:text-foreground border px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
              >
                Scrie-ne un email
              </a>
            </div>
          </div>
          <div className="bg-background/5 border-background/15 rounded-sm border p-8 backdrop-blur-sm">
            <span className="text-accent mb-2 block font-mono text-[10px] tracking-[0.2em] uppercase">
              [ Măsurători gratuite ]
            </span>
            <h3 className="font-display text-background mb-6 text-2xl italic">
              Solicită o programare
            </h3>
            <form action={formAction} className="flex flex-col gap-4">
              {/* ACSD - honeypot field, hidden from people */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <input
                required
                name="name"
                defaultValue={state.values?.name}
                aria-label="Nume"
                autoComplete="name"
                maxLength={100}
                placeholder="Nume"
                className="border-background/20 text-background placeholder:text-background/40 focus:border-accent border bg-transparent px-4 py-3 text-sm transition-colors focus:outline-none"
              />
              <input
                required
                name="phone"
                defaultValue={state.values?.phone}
                type="tel"
                aria-label="Telefon"
                autoComplete="tel"
                maxLength={30}
                placeholder="Telefon"
                className="border-background/20 text-background placeholder:text-background/40 focus:border-accent border bg-transparent px-4 py-3 text-sm transition-colors focus:outline-none"
              />
              <textarea
                name="message"
                defaultValue={state.values?.message}
                aria-label="Detalii"
                rows={3}
                maxLength={1000}
                placeholder="Detalii (opțional)"
                className="border-background/20 text-background placeholder:text-background/40 focus:border-accent resize-none border bg-transparent px-4 py-3 text-sm transition-colors focus:outline-none"
              />
              <button
                type="submit"
                disabled={pending}
                className="bg-background text-foreground hover:bg-accent hover:text-background px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors disabled:opacity-60"
              >
                {pending ? "Se trimite…" : "Trimite cererea"}
              </button>
              <p role="status" aria-live="polite" className="text-background text-sm">
                {state.message}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
