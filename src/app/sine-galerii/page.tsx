import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import img from "@/assets/cat-sine.jpg";
import g1 from "@/assets/galerie-decorativa-1.webp";
import g2 from "@/assets/galerie-decorativa-2.webp";
import g3 from "@/assets/galerie-decorativa-3.webp";
import g4 from "@/assets/galerie-decorativa-4.webp";
import g5 from "@/assets/galerie-decorativa-5.webp";
import g6 from "@/assets/galerie-decorativa-6.webp";
import g7 from "@/assets/galerie-decorativa-7.webp";
import g8 from "@/assets/galerie-decorativa-8.webp";
import g9 from "@/assets/galerie-decorativa-9.webp";
import s1 from "@/assets/sina-perdele-1.webp";
import s2 from "@/assets/sina-perdele-2.webp";
import s3 from "@/assets/sina-perdele-3.webp";
import s4 from "@/assets/sina-perdele-4.webp";
import s5 from "@/assets/sina-perdele-5.webp";
import s6 from "@/assets/sina-perdele-6.webp";
import s7 from "@/assets/sina-perdele-7.webp";
import s8 from "@/assets/sina-perdele-8.webp";
import s9 from "@/assets/sina-perdele-9.webp";
import { SectionNav } from "@/components/SectionNav";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SineGallery } from "@/components/pages/sine-galerii/SineGallery";
import { shortCategories } from "@/lib/categories";
import { absoluteUrl, breadcrumbSchema, jsonLd, serviceSchema } from "@/lib/seo";

const data = shortCategories.sine;

export const metadata: Metadata = {
  title: {
    absolute: "Șine și Galerii Brașov — Aluminiu, Lemn, Curbate, Motorizate | SuperDecor",
  },
  description:
    "Galerii decorative și șine tehnice pentru perdele și draperii: aluminiu, lemn masiv, inox, curbate sau motorizate. Consultanță și montaj în Brașov.",
  alternates: { canonical: "/sine-galerii" },
  openGraph: {
    title: "Șine & Galerii — SuperDecor Brașov",
    description:
      "Sistemul de prindere este unul dintre cele mai importante elemente pentru decorarea ferestrei.",
    url: "/sine-galerii",
    images: [img.src],
  },
};

const galerii = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

const sine = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

const tipuri: { name: string; tag: string; desc: string }[] = [
  {
    name: "Galerii din lemn masiv",
    tag: "Clasic · Cald",
    desc: "Aduc un aer natural și cald oricărei încăperi. Se asortează perfect cu mobilierul din lemn și cu amenajările clasice sau rustice.",
  },
  {
    name: "Galerii metalice",
    tag: "Modern · Inox",
    desc: "Finisaje contemporane — crom, alamă periată sau negru mat. Discrete și robuste, potrivite pentru amenajări moderne și minimaliste.",
  },
  {
    name: "Șine din aluminiu",
    tag: "Tavan · Discret",
    desc: "Se fixează în tavan și pot fi acoperite cu o mască decorativă pentru un aspect curat, fără elemente vizibile deasupra draperiei.",
  },
  {
    name: "Șine curbate",
    tag: "Bow-window",
    desc: "Realizate la comandă pentru ferestre atipice, colțuri sau bow-window. Cădere continuă a draperiei, fără întreruperi vizuale.",
  },
  {
    name: "Sisteme motorizate",
    tag: "Smart · Telecomandă",
    desc: "Deschidere și închidere silențioasă, cu telecomandă sau integrare smart-home. Confort maxim pentru ferestre înalte sau greu accesibile.",
  },
  {
    name: "Accesorii & capete",
    tag: "Personalizare",
    desc: "Capete decorative, inele, cârlige, brackets și mascări — pentru a finaliza montajul cu detalii care completează stilul camerei.",
  },
];

export default function SineGaleriiPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Acasă", url: absoluteUrl("/") },
              { name: data.title, url: absoluteUrl(data.href) },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: data.title,
              description: data.lead,
              url: absoluteUrl(data.href),
              image: absoluteUrl(data.image),
            }),
          ),
        }}
      />

      {/* Hero */}
      <header className="relative flex min-h-[70vh] items-end md:min-h-[calc(70vh-80px)]">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            picture={img}
            alt="Șine și galerii SuperDecor Brașov"
            sizes="100vw"
            priority
            pictureClassName="block w-full h-full"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00657E]/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-[19px] pt-32 pb-20 sm:px-6">
          <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-[#07BCC6] uppercase">
            Șine și galerii
          </span>
          <h1 className="font-display text-background max-w-3xl text-[36px] leading-[0.95] text-balance md:text-7xl">
            Șine și galerii — detaliul care pune fereastra în valoare.
          </h1>
          <p className="text-background/85 mt-8 max-w-2xl text-lg leading-relaxed">
            Galerii decorative din lemn masiv sau metal și șine tehnice din aluminiu — drepte,
            curbate sau motorizate. Alegem împreună sistemul potrivit formei ferestrei tale.
          </p>
        </div>
      </header>

      {/* Jump links */}
      <SectionNav
        items={[
          { id: "despre", label: "Despre" },
          { id: "tipuri", label: "Tipuri" },
          { id: "galerii", label: "Galerii" },
          { id: "sine", label: "Șine" },
          { id: "atelier", label: "Atelier" },
        ]}
      />

      {/* Intro */}
      <section id="despre" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-accent mb-4 block font-mono text-xs tracking-[0.2em] uppercase">
              Despre sisteme de prindere
            </span>
            <h2 className="font-display text-[24px] leading-tight text-balance italic md:text-4xl">
              Sistemul de prindere — cel mai important detaliu pentru decorarea ferestrei.
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-base leading-relaxed lg:col-span-7">
            <p>
              Sistemul de prindere al perdelelor și draperiilor este unul dintre cele mai importante
              elemente pentru decorarea ferestrei. De regulă, acesta este influențat de forma
              ferestrei sau de modul în care aceasta este încadrată în perete.
            </p>
            <p>
              Galeria este un accesoriu elegant care pune în valoare fereastra. Se asortează ușor cu
              restul elementelor din încăpere și conferă un aspect plăcut perdelelor și draperiilor.
            </p>
            <p className="text-foreground">
              În atelierul nostru vei găsi <em>catalogul complet de șine și galerii</em> — vino
              pentru consultanță și mostre.
            </p>
          </div>
        </div>
      </section>

      {/* Tipuri */}
      <section
        id="tipuri"
        className="bg-surface border-border scroll-mt-28 border-y px-[19px] py-24 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                [ Ghid produse ]
              </span>
              <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                Alegem sistemul potrivit formei ferestrei tale.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              De la galerii decorative din lemn până la șine motorizate ascunse în tavan — fiecare
              fereastră are soluția ei.
            </p>
          </div>
          <div className="bg-border border-border grid grid-cols-1 gap-px border md:grid-cols-2 lg:grid-cols-3">
            {tipuri.map((t, i) => (
              <article key={t.name} className="bg-background flex flex-col p-8">
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#07BCC6] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground/60 font-mono text-[10px] tracking-[0.2em] uppercase">
                    {t.tag}
                  </span>
                </div>
                <h3 className="font-display mb-3 text-[20px] md:text-2xl">{t.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galerii */}
      <section id="galerii" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                [ Galerii ]
              </span>
              <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                Galerii decorative — lemn masiv, metal și inox.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm">
              Un accesoriu elegant care se asortează cu restul amenajării și conferă un aspect
              plăcut perdelelor și draperiilor.
            </p>
          </div>
          <SineGallery
            images={galerii}
            altPrefix="Galerie decorativă SuperDecor"
            buttonClassName="group relative overflow-hidden bg-surface border border-border aspect-[4/3] block text-left cursor-pointer"
          />
        </div>
      </section>

      {/* Șine */}
      <section
        id="sine"
        className="bg-surface border-border scroll-mt-28 border-y px-[19px] py-24 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                [ Șine ]
              </span>
              <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                Șine moderne — discrete, drepte, curbate sau motorizate.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm">
              Șinele sunt elemente moderne, se fixează în tavan și pot fi acoperite cu o mască
              decorativă. Din aluminiu, lemn masiv, curbate sau motorizate — totul depinde de
              preferințe.
            </p>
          </div>
          <SineGallery
            images={sine}
            altPrefix="Șină decorativă SuperDecor"
            buttonClassName="group relative overflow-hidden bg-background border border-border aspect-[4/3] block text-left cursor-pointer"
          />
        </div>
      </section>

      {/* Atelier */}
      <section id="atelier" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
            [ Catalogul complet, în atelier ]
          </span>
          <h2 className="font-display mb-6 text-[24px] text-balance italic md:text-4xl">
            În atelierul nostru vei găsi catalogul complet de șine și galerii.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Îți oferim consultanță pentru a alege sistemul potrivit — în funcție de forma ferestrei,
            tipul draperiei și stilul amenajării. Măsurăm, comandăm și montăm profesional în Brașov
            și împrejurimi.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-background bg-[#00657E] px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display mb-6 text-[24px] text-balance italic md:text-5xl">
            Programează măsurătoarea gratuită.
          </h2>
          <p className="text-background/80 mx-auto mb-10 max-w-xl">
            Venim la tine cu mostre, măsurăm ferestrele și îți propunem sistemul de prindere
            potrivit — în Brașov și împrejurimi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+40728893118"
              className="bg-background text-foreground hover:text-background px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#07BCC6]"
            >
              Sună 0728 893 118
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Sine%20si%20galerii`}
              className="border-background/30 hover:bg-background hover:text-foreground border px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
            >
              Scrie-ne un email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
