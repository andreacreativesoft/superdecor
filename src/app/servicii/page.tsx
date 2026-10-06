import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import img from "@/assets/cat-servicii.jpg";
import designImg from "@/assets/servicii/design-interior.jpg";
import sanitareImg from "@/assets/servicii/sanitare.jpg";
import electriceImg from "@/assets/instalatii-electrice.webp";
import { ResponsiveImage, type PictureSource } from "@/components/ResponsiveImage";
import { SectionNav } from "@/components/SectionNav";
import { absoluteUrl, breadcrumbSchema, jsonLd, serviceSchema } from "@/lib/seo";

const slug = "/servicii";

export const metadata: Metadata = {
  title: { absolute: "Servicii — Design Interior, Instalații Electrice și Sanitare Brașov" },
  description:
    "SuperDecor Brașov: design interior personalizat, instalații electrice și sanitare. Echipă calificată, tarife transparente, garanție la lucrări.",
  alternates: { canonical: slug },
  openGraph: {
    title: "Servicii — SuperDecor Brașov",
    description: "Design interior, instalații electrice și sanitare de la profesioniști în Brașov.",
    url: slug,
    images: [img.src],
  },
};

type Service = {
  id: string;
  label: string;
  title: string;
  intro: string;
  image: PictureSource | string;
  blocks: { heading?: string; text: string }[];
  bullets: string[];
};

const services: Service[] = [
  {
    id: "design-interior",
    label: "Design Interior",
    title: "Descoperă opțiunile noastre de design interior.",
    image: designImg,
    intro:
      "La SuperDecor transformăm spațiile tale în refugii personale. Specializați în design interior, ne dedicăm să creăm medii care reflectă stilul tău.",
    blocks: [
      {
        text: "Apelează la noi pentru soluții personalizate și o consultanță de specialitate. Creăm interioare unice și adaptate gusturilor tale, pentru a transforma fiecare cameră într-un spațiu de vis.",
      },
      {
        text: "Soluțiile noastre de amenajare interioară îți vor face casa mai atrăgătoare, aducând un plus de stil, eleganță și suflet.",
      },
    ],
    bullets: [
      "Consultanță și schițe 2D / 3D",
      "Selecție materiale, textile și finisaje",
      "Management de proiect de la A la Z",
      "Colaborare cu meșteri verificați",
    ],
  },
  {
    id: "instalatii-electrice",
    label: "Instalații Electrice",
    title: "Instalații electrice.",
    image: electriceImg,
    intro:
      "O echipă de electricieni la dispoziția ta. Oferim o gamă variată de servicii, adaptate nevoilor tale.",
    blocks: [
      {
        heading: "Instalații electrice noi",
        text: "Proiectare, montaj și punere în funcțiune a instalațiilor electrice pentru locuințe, spații comerciale și hale industriale. Tarife transparente și competitive, fără costuri ascunse.",
      },
      {
        heading: "Modernizare instalații",
        text: "Înlocuirea instalațiilor vechi și neconforme, pentru a asigura siguranța și eficiența energetică. Garantăm lucrări de înaltă calitate, executate cu precizie și în conformitate cu toate normele în vigoare.",
      },
      {
        heading: "Mentenanță",
        text: "Verificări periodice ale instalațiilor electrice pentru a preveni eventualele probleme și a asigura funcționarea optimă. Proiectare, reparații și întreținere — avem soluții pentru orice problemă electrică.",
      },
    ],
    bullets: [
      "Proiectare și montaj instalații noi",
      "Modernizare și refacere circuite",
      "Verificări PRAM / PIF periodice",
      "Intervenții rapide 7/7",
    ],
  },
  {
    id: "instalatii-sanitare",
    label: "Instalații Sanitare",
    title: "Instalații sanitare.",
    image: sanitareImg,
    intro:
      "Echipa noastră de instalatori sanitari, formată din tehnicieni calificați cu o vastă experiență în domeniu, îți oferă soluții complete — de la montaj și reparații simple, până la proiecte complexe.",
    blocks: [
      {
        heading: "Montaj și demontaj",
        text: "Robinete, baterii, chiuvete, căzi, WC-uri. Instalații sanitare noi sau înlocuirea celor vechi. Centrale termice, boilere, calorifere. Mașini de spălat vase și rufe. Intervenim rapid la orice solicitare, iar lucrările sunt executate într-un timp scurt, fără a compromite calitatea.",
      },
      {
        heading: "Reparații",
        text: "Depistarea și remedierea scurgerilor de apă, desfundarea canalizării, înlocuirea țevilor, repararea obiectelor sanitare. Beneficiezi de tarife transparente și competitive, fără costuri ascunse.",
      },
      {
        heading: "Mentenanță",
        text: "Verificări periodice ale instalațiilor, curățarea și dezinfectarea acestora, întreținerea centralelor termice.",
      },
    ],
    bullets: [
      "Montaj / demontaj obiecte sanitare",
      "Instalații noi și înlocuiri complete",
      "Centrale, boilere, calorifere",
      "Depanare rapidă și verificări periodice",
    ],
  },
];

export default function ServiciiPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Acasă", url: absoluteUrl("/") },
              { name: "Servicii", url: absoluteUrl(slug) },
            ]),
          ),
        }}
      />
      {services.map((s) => (
        <script
          key={s.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              serviceSchema({
                name: s.title,
                description: [
                  s.intro,
                  ...s.blocks.map((b) => (b.heading ? `${b.heading}: ${b.text}` : b.text)),
                ].join(" "),
                url: absoluteUrl(`${slug}#${s.id}`),
                image: absoluteUrl(img.src),
              }),
            ),
          }}
        />
      ))}

      {/* Hero */}
      <header className="relative flex min-h-[70vh] items-end md:min-h-[calc(70vh-80px)]">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            picture={img}
            alt="Servicii SuperDecor"
            sizes="100vw"
            priority
            pictureClassName="block w-full h-full"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00657E]/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-[19px] pt-32 pb-20 sm:px-6">
          <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-[#07BCC6] uppercase">
            Servicii
          </span>
          <h1 className="font-display text-background max-w-3xl text-[36px] leading-[0.95] text-balance md:text-7xl">
            Servicii complete pentru casa ta.
          </h1>
          <p className="text-background/80 mt-6 max-w-xl text-lg">
            Design interior, instalații electrice și sanitare — echipă proprie, tarife transparente
            și lucrări cu garanție în Brașov.
          </p>
        </div>
      </header>

      {/* Jump links */}
      <SectionNav items={services.map((s) => ({ id: s.id, label: s.label }))} />

      {/* Services */}
      <section className="px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-32">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className="scroll-mt-28">
              <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                {/* Image */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-surface aspect-[4/5] overflow-hidden">
                    <ResponsiveImage
                      picture={s.image}
                      alt={s.label}
                      sizes="(max-width: 1024px) 100vw, 500px"
                      width={typeof s.image === "string" ? 1200 : undefined}
                      height={typeof s.image === "string" ? 1400 : undefined}
                      pictureClassName="block w-full h-full"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="lg:col-span-7">
                  <span className="text-accent mb-4 block font-mono text-xs tracking-[0.2em] uppercase">
                    {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")} —{" "}
                    {s.label}
                  </span>
                  <h2 className="font-display mb-6 text-[24px] leading-tight text-balance italic md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl text-lg leading-relaxed">
                    {s.intro}
                  </p>

                  <div className="mb-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
                    {s.blocks.map((b, k) => (
                      <div key={k}>
                        {b.heading && (
                          <h3 className="mb-2 font-mono text-[11px] tracking-[0.18em] text-[#00657E] uppercase">
                            {b.heading}
                          </h3>
                        )}
                        <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-border border-t pt-6">
                    <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                      [ Ce oferim ]
                    </span>
                    <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 shrink-0 text-[#07BCC6]">+</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {i < services.length - 1 && <div className="bg-border mt-24 h-px" />}
            </article>
          ))}
        </div>
      </section>

      {/* Support strip */}
      <section className="bg-surface border-border border-y px-[19px] py-16 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-4 block font-mono text-xs tracking-[0.2em] text-[#00657E] uppercase">
            [ Suport clienți ]
          </span>
          <p className="font-display text-2xl text-balance italic md:text-3xl">
            „Echipa noastră este aici pentru a răspunde întrebărilor tale. Întreabă-ne orice.”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-background bg-[#00657E] px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display mb-6 text-[24px] text-balance italic md:text-5xl">
            Hai să vorbim despre proiectul tău.
          </h2>
          <p className="text-background/80 mx-auto mb-10 max-w-xl">
            Programează o consultanță gratuită — venim cu mostre, idei și măsurători exacte în
            Brașov și împrejurimi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+40728893118"
              className="bg-background text-foreground hover:text-background px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#07BCC6]"
            >
              Sună acum
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Programare%20Servicii`}
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
