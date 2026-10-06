import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { SiteMarquee } from "@/components/SiteMarquee";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { AppointmentForm } from "@/components/pages/home/AppointmentForm";
import hero from "@/assets/hero.jpg";
import catPerdele from "@/assets/cat-perdele.jpg";
import catSine from "@/assets/cat-sine.jpg";
import catJaluzele from "@/assets/cat-jaluzele.jpg";
import catLenjerii from "@/assets/cat-lenjerii.jpg";
import catServicii from "@/assets/cat-servicii.jpg";
import showroom from "@/assets/showroom.jpg";
import p1 from "@/assets/partners/logo-9.webp";
import p2 from "@/assets/partners/logo-10.webp";
import p3 from "@/assets/partners/logo-11.webp";
import p4 from "@/assets/partners/logo-12.webp";
import p5 from "@/assets/partners/logo-13.webp";
import p6 from "@/assets/partners/logo-14.webp";

export const metadata: Metadata = {
  title: { absolute: "SuperDecor Brașov — Perdele, Draperii, Jaluzele & Rolete" },
  description:
    "Showroom de textile pentru casă în Brașov. Perdele, draperii, jaluzele, rolete și lenjerii de pat — măsurători și montaj profesional.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SuperDecor Brașov — Textile pentru casa ta",
    description: "Perdele, draperii, jaluzele și rolete în Brașov.",
    url: "/",
    images: [hero.src],
  },
};

const categories = [
  {
    n: "01",
    title: "Perdele & Draperii",
    desc: "Materiale fine, croitorie la comandă.",
    img: catPerdele,
    to: "/perdele-draperii",
  },
  {
    n: "02",
    title: "Șine & Galerii",
    desc: "Sisteme de prindere tehnice și decorative.",
    img: catSine,
    to: "/sine-galerii",
  },
  {
    n: "03",
    title: "Jaluzele & Rolete",
    desc: "Control precis al luminii naturale.",
    img: catJaluzele,
    to: "/jaluzele-rolete",
  },
  {
    n: "04",
    title: "Lenjerii de Pat",
    desc: "Bumbac satinat și in pentru dormitor.",
    img: catLenjerii,
    to: "/lenjerii-de-pat",
  },
  {
    n: "05",
    title: "Servicii",
    desc: "Măsurători, croitorie și instalare.",
    img: catServicii,
    to: "/servicii",
  },
];

const partners = [
  { img: p1, name: "Casa Rossa" },
  { img: p2, name: "SN Deco" },
  { img: p3, name: "Szintetika" },
  { img: p4, name: "Global Design" },
  { img: p5, name: "Bradul Măneciu" },
  { img: p6, name: "Sabaev" },
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground selection:bg-accent/15">
      {/* Hero */}
      <header className="relative flex items-end max-md:min-h-[calc(90vh-200px)] md:min-h-[calc(90vh-80px)]">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            picture={hero}
            alt="Perdele din in fin într-un living luminos"
            sizes="100vw"
            priority
            pictureClassName="block w-full h-full"
            className="h-full w-full object-cover"
          />

          <div className="bg-foreground/50 absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[19px] pt-36 pb-24 sm:px-6">
          <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-[#07BCC6] uppercase">
            Magazinul tau de
          </span>
          <h1 className="font-display text-background mb-8 max-w-4xl text-[36px] leading-[0.98] text-balance md:text-[46px] lg:text-[58px]">
            Perdele, Draperii și Jaluzele în Brașov
          </h1>
          <p className="text-background/80 mb-10 max-w-2xl text-[17px] leading-normal text-pretty md:text-xl">
            Atelier cu peste 10 ani de experiență. Confecționăm perdele, draperii, jaluzele și
            rolete pentru locuința ta. Măsurători, consultanță și transport gratuit pe raza orașului
            Brașov și a localităților învecinate.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href="#showroom"
              className="bg-background text-foreground hover:text-background w-full px-8 py-4 text-center text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#07BCC6] md:w-auto"
            >
              Vizitează Showroom
            </a>
            <a
              href="#contact"
              className="border-background/40 text-background hover:bg-background hover:text-foreground w-full border px-8 py-4 text-center text-xs font-semibold tracking-[0.18em] uppercase transition-colors md:w-auto"
            >
              Programează consultanță
            </a>
          </div>
        </div>
      </header>

      <SiteMarquee />

      {/* USP — De ce SuperDecor Brașov */}
      <section className="px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-16 text-center">
            <span className="text-accent mb-4 block font-mono text-xs tracking-[0.2em] uppercase">
              De ce noi
            </span>
            <h2 className="font-display text-[24px] text-balance italic md:text-5xl">
              De ce să alegi Super Decor Brașov
            </h2>
          </div>
          <div className="bg-border grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Atelier propriu în Brașov",
                desc: "Confecționăm direct la noi pe Brândușelor 19 — nu intermediem, nu trimitem produse din afară. Termen 2-4 săptămâni.",
              },
              {
                title: "Măsurători gratuite la domiciliu",
                desc: "Venim la tine cu mostre de materiale. Fără deplasare la magazin, fără costuri. Și pentru localitățile din jurul Brașovului.",
              },
              {
                title: "Garanție și montaj inclus",
                desc: "Montajul este inclus pentru comenzile peste 1500 lei pe raza Brașovului. Garanție 2 ani pentru toate produsele confecționate.",
              },
              {
                title: "Soluții complete pentru locuință",
                desc: "De la perdele și jaluzele până la lenjerii și sisteme de prindere — o singură echipă, un singur preț.",
              },
            ].map((u, i) => (
              <div
                key={u.title}
                className="bg-background hover:bg-surface group p-8 transition-colors"
              >
                <div className="mb-6 flex items-baseline justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#07BCC6] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mb-4 text-[20px] transition-colors group-hover:text-[#00657E] md:text-[28px]">
                  {u.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorii" className="bg-surface px-[19px] py-32 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
            <h2 className="font-display w-full text-[24px] leading-tight italic md:text-5xl">
              Descopera eleganța decorului cu SuperDecor
            </h2>
            <span className="text-muted-foreground shrink-0 self-end font-mono text-xs sm:self-auto">
              [ 05 Secțiuni ]
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((c, i) => (
              <Link key={c.n} href={c.to} className="group block cursor-pointer">
                <div className="bg-muted mb-6 aspect-[3/4] overflow-hidden">
                  <ResponsiveImage
                    picture={c.img}
                    alt={c.title}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 240px"
                    pictureClassName="block w-full h-full"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display mb-1 text-[20px] md:text-[28px]">{c.title}</h3>
                    <p className="text-muted-foreground text-sm">{c.desc}</p>
                  </div>
                  <span className="text-accent mt-1 font-mono text-[10px]">{c.n}</span>
                </div>
                <div className="bg-border mt-4 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="sr-only">Vezi {c.title}</span>
                <span aria-hidden className="sr-only">
                  {i}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom story */}
      <section id="showroom" className="px-[19px] py-32 sm:px-6">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-16 lg:flex-row">
          <div className="order-2 flex-1 lg:order-1">
            <ResponsiveImage
              picture={showroom}
              alt="Showroom SuperDecor în Brașov"
              sizes="(max-width: 1024px) 100vw, 600px"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </div>
          <div className="order-1 flex-1 lg:order-2">
            <span className="text-accent mb-6 block font-mono text-xs tracking-[0.2em] uppercase">
              Showroom Perdele și Textile în Brașov
            </span>
            <h2 className="font-display mb-8 text-[24px] leading-tight text-balance md:text-5xl">
              Alege cu încredere.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              În showroom-ul nostru găsești sute de mostre de țesături, lenjerii și sisteme de
              umbrire, expuse sub lumină naturală. Specialiștii noștri te ghidează de la prima
              schiță până la montajul final.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Fiecare proiect — de la o singură fereastră la un apartament întreg — primește aceeași
              atenție pentru detaliu și calitatea cusăturii.
            </p>
            <div className="border-border grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-2">
              <div>
                <span className="text-muted-foreground mb-2 block font-mono text-[10px] tracking-[0.2em] uppercase">
                  Adresă
                </span>
                <p className="text-sm leading-relaxed">
                  Str. Brândușelor 19
                  <br />
                  Brașov 500001
                </p>
              </div>
              <div>
                <span className="text-muted-foreground mb-2 block font-mono text-[10px] tracking-[0.2em] uppercase">
                  Program
                </span>
                <p className="text-sm leading-relaxed">
                  Luni–Vineri 09:00–18:00
                  <br />
                  Sâmbătă — doar pe bază de programare
                  <br />
                  Duminică Închis
                </p>
              </div>
              <div>
                <span className="text-muted-foreground mb-2 block font-mono text-[10px] tracking-[0.2em] uppercase">
                  Telefon / WhatsApp
                </span>
                <a
                  href="tel:0728893118"
                  className="hover:text-accent text-sm leading-relaxed transition-colors"
                >
                  0728 893 118
                </a>
              </div>
              <div>
                <span className="text-muted-foreground mb-2 block font-mono text-[10px] tracking-[0.2em] uppercase">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-accent text-sm leading-relaxed transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="bg-surface border-border border-y px-[19px] py-32 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
            <h2 className="font-display w-full max-w-xl text-[24px] leading-tight italic">
              <span className="block text-[24px] md:text-5xl">Procesul Super Decor</span>
              <span className="mt-1 block text-[28px] md:text-4xl">de la idee la montaj</span>
            </h2>
            <span className="text-muted-foreground shrink-0 self-end font-mono text-xs sm:self-auto">
              [ Procesul nostru ]
            </span>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {[
              [
                "01",
                "Consultanță",
                "Discutăm proiectul, stilul și bugetul în showroom sau la tine.",
              ],
              [
                "02",
                "Măsurători",
                "Echipa vine la fața locului pentru măsurători exacte și gratuite.",
              ],
              ["03", "Croitorie", "Croim și coasem fiecare piesă în atelierul propriu."],
              [
                "04",
                "Montaj",
                "Instalăm sistemele de prindere — șine, galerii, mecanisme motorizate — și agățăm textilele cu finisaj impecabil. Curățăm după instalare. Tu te bucuri imediat de rezultat.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="border-foreground border-t pt-6">
                <span className="text-accent font-mono text-[11px] tracking-[0.2em]">{n}</span>
                <h3 className="font-display mt-3 mb-2 text-[20px] md:text-[28px]">{t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="recenzii" className="px-[19px] py-32 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-accent mb-4 block font-mono text-xs tracking-[0.2em] uppercase">
                Ce spun clienții
              </span>
              <h2 className="font-display text-[24px] leading-tight whitespace-pre-line italic md:text-5xl">
                {"Ce spun clienții despre noi\n"}
              </h2>
            </div>
            <div className="flex shrink-0 items-baseline gap-3">
              <span className="font-display text-4xl text-[#00657E]">4.9</span>
              <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
                / 5 · peste 200 clienți
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                q: "Calitate impecabilă, de la consultanță până la montaj. Draperiile au transformat complet livingul.",
                n: "Andreea M.",
                c: "Brașov · Apartament 3 camere",
              },
              {
                q: "Echipă profesionistă, materiale de calitate europeană. Recomand cu încredere pentru orice proiect.",
                n: "Mihai P.",
                c: "Predeal · Casă vacanță",
              },
              {
                q: "Au venit la măsurători, au sugerat soluții pe care nu le-am gândit. Rezultatul depășește așteptările.",
                n: "Ioana D.",
                c: "Brașov · Casă personală",
              },
            ].map((r) => (
              <article key={r.n} className="bg-surface border-border flex flex-col border p-8">
                <div className="mb-6 flex gap-1 text-[#07BCC6]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-display mb-8 flex-1 text-lg leading-relaxed text-balance">
                  „{r.q}"
                </p>
                <div className="border-border border-t pt-4">
                  <p className="text-sm font-medium">{r.n}</p>
                  <p className="text-muted-foreground mt-1 font-mono text-[10px] tracking-[0.18em] uppercase">
                    {r.c}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-surface border-border border-y px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-12 text-center">
            <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
              [ Parteneri ]
            </span>
            <h2 className="font-display text-[24px] text-balance italic md:text-4xl">
              Colaborăm cu branduri de încredere.
            </h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex items-center gap-16">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={i}
                  aria-hidden={i >= partners.length ? true : undefined}
                  className="flex h-20 shrink-0 items-center opacity-80 transition-opacity hover:opacity-100 md:h-24"
                >
                  <ResponsiveImage
                    picture={p.img}
                    alt={i >= partners.length ? "" : p.name}
                    sizes="384px"
                    pictureClassName="block h-full"
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-background relative overflow-hidden bg-[#00657E] px-[19px] py-32 sm:px-6">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-[#07BCC6] uppercase">
                Showroom Brașov
              </span>
              <h2 className="font-display mb-8 text-[24px] leading-tight text-balance italic md:text-[36px]">
                Programează o consultanță gratuită cu Super Decor Brașov
              </h2>
              <p className="text-background/80 mb-10 max-w-md text-sm leading-relaxed">
                Te ajutăm să alegi perdelele, draperiile, jaluzelele, șinele sau mobilierul potrivit
                pentru locuința ta. Venim cu mostre la tine acasă, în Brașov sau în împrejurimi.
                Răspuns garantat în maxim 24 de ore.
              </p>
              <div className="flex flex-col gap-4 md:flex-row">
                <a
                  href="tel:+40728893118"
                  className="bg-background text-foreground hover:text-background w-full px-8 py-4 text-center text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#07BCC6] md:w-auto"
                >
                  Sună acum
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Programare%20Consultanță`}
                  className="border-background/30 text-background hover:bg-background hover:text-foreground w-full border px-8 py-4 text-center text-xs font-semibold tracking-[0.18em] uppercase transition-colors md:w-auto"
                >
                  Scrie-ne un email
                </a>
              </div>
            </div>
            <div className="bg-background/5 border-background/15 rounded-sm border p-8 backdrop-blur-sm">
              <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-[#07BCC6] uppercase">
                [ Măsurători gratuite ]
              </span>
              <h3 className="font-display text-background mb-6 text-[20px] italic md:text-[28px]">
                Solicită o programare
              </h3>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
