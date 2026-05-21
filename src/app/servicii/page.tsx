import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { jsonLd, serviceSchema } from "@/lib/seo";

const slug = "/servicii";

export const metadata: Metadata = {
  title: "Servicii — Design Interior, Instalații Electrice și Sanitare Brașov",
  description:
    "SuperDecor Brașov: design interior personalizat, instalații electrice și sanitare. Echipă calificată, tarife competitive, garanție.",
  alternates: { canonical: slug },
  openGraph: {
    title: "Servicii — SuperDecor Brașov",
    description: "Design interior, instalații electrice și sanitare de la profesioniști.",
    url: slug,
    images: ["/images/cat-servicii.jpg"],
  },
};

type Service = {
  id: string;
  label: string;
  title: string;
  paragraphs: { strong?: string; text: string }[];
  bullets: string[];
};

const services: Service[] = [
  {
    id: "design-interior",
    label: "Design Interior",
    title: "Descoperă Opțiunile Noastre de Design Interior",
    paragraphs: [
      {
        text: "La SuperDecor, transformăm spațiile tale în refugii personale. Specializați în design interior, ne dedicăm să creăm medii care reflectă stilul tău.",
      },
      {
        text: "Apelează la noi pentru soluții personalizate și o consultanță de specialitate! Creăm interioare unice și adaptate gusturilor tale, pentru a transforma fiecare cameră într-un spațiu de vis.",
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
    title: "Instalații Electrice",
    paragraphs: [
      {
        text: "O echipă de electricieni la dispoziția ta! Oferim o gamă variată de servicii, adaptate nevoilor tale:",
      },
      {
        strong: "Instalații electrice noi:",
        text: " proiectare, montaj și punere în funcțiune a instalațiilor electrice pentru locuințe, spații comerciale și hale industriale. Oferim tarife transparente și competitive, fără costuri ascunse.",
      },
      {
        strong: "Modernizare:",
        text: " înlocuirea instalațiilor vechi și neconforme, pentru a asigura siguranța și eficiența energetică. Garantăm lucrări de înaltă calitate, executate cu precizie și în conformitate cu toate normele în vigoare.",
      },
      {
        strong: "Mentenanță:",
        text: " verificări periodice, proiectare, reparații și întreținere. Avem soluții pentru orice problemă electrică!",
      },
    ],
    bullets: [
      "Proiectare și montaj instalații noi",
      "Modernizare și refacere circuite",
      "Verificări PRAM / PIF periodice",
      "Certificate ISCIR și avize",
    ],
  },
  {
    id: "instalatii-sanitare",
    label: "Instalații Sanitare",
    title: "Instalații Sanitare",
    paragraphs: [
      {
        text: "Echipa noastră de instalatori sanitari, formată din tehnicieni calificați cu o vastă experiență în domeniu, îți oferă soluții complete pentru toate nevoile tale — de la montaj și reparații simple, până la proiecte complexe.",
      },
      {
        strong: "Montaj și demontaj:",
        text: " robinete, baterii, chiuvete, căzi, WC-uri. Instalații sanitare noi sau înlocuirea celor vechi. Centrale termice, boilere, calorifere. Mașini de spălat vase și rufe.",
      },
      {
        text: "Intervenim rapid la orice solicitare, iar lucrările sunt executate într-un timp scurt, fără a compromite calitatea.",
      },
      {
        strong: "Reparații:",
        text: " depistarea și remedierea scurgerilor de apă, desfundarea canalizării, înlocuirea țevilor, repararea obiectelor sanitare. Beneficiezi de tarife transparente și competitive, fără costuri ascunse.",
      },
      {
        strong: "Mentenanță:",
        text: " verificări periodice, curățarea și dezinfectarea instalațiilor, întreținerea centralelor termice.",
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
    <>
      {services.map((s) => (
        <script
          key={s.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              serviceSchema({
                name: s.title,
                description: s.paragraphs.map((p) => `${p.strong ?? ""}${p.text}`).join(" "),
                url: `${siteConfig.url}${slug}#${s.id}`,
                image: `${siteConfig.url}/images/cat-servicii.jpg`,
              }),
            ),
          }}
        />
      ))}

      <header className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cat-servicii.jpg"
            alt="Servicii SuperDecor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20 pt-32">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em] block mb-6">
            Categorie 06
          </span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] text-background max-w-3xl text-balance">
            Servicii complete pentru casa ta.
          </h1>
        </div>
      </header>

      <div className="border-b border-border bg-surface sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-primary transition-colors">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className="scroll-mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
                    {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display italic leading-tight text-balance">
                    {s.title}
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <div className="text-muted-foreground leading-relaxed text-base space-y-4">
                    {s.paragraphs.map((p, j) => (
                      <p key={j}>
                        {p.strong && <strong>{p.strong}</strong>}
                        {p.text}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                    [ Ce oferim ]
                  </span>
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start text-sm">
                        <span className="text-accent mt-0.5 shrink-0">+</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < services.length - 1 && <div className="mt-32 h-px bg-border" />}
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-primary text-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display italic mb-6 text-balance">
            Hai să vorbim despre proiectul tău.
          </h2>
          <p className="text-background/80 max-w-xl mx-auto mb-10">
            Programează o consultanță gratuită — venim cu mostre, idei și măsurători exacte.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="bg-background text-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-accent hover:text-background transition-colors"
            >
              Sună acum
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Programare%20Servicii`}
              className="border border-background/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-background hover:text-foreground transition-colors"
            >
              Scrie-ne un email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
