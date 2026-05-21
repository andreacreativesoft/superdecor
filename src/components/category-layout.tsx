import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import type { Category } from "@/lib/categories";
import {
  absoluteUrl,
  breadcrumbSchema,
  jsonLd,
  serviceSchema,
} from "@/lib/seo";

export function CategoryLayout({ category }: { category: Category }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Acasă", url: absoluteUrl("/") },
              { name: category.title, url: absoluteUrl(category.href) },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: category.title,
              description: category.lead,
              url: absoluteUrl(category.href),
              image: absoluteUrl(category.image),
            }),
          ),
        }}
      />
      <header className="relative pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-6">
              {category.eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl font-display leading-[0.95] mb-8 text-balance">
              {category.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {category.lead}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl shadow-foreground/10">
              <Image
                src={category.image}
                alt={category.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
              [ Ce includem ]
            </span>
            <h2 className="text-3xl md:text-4xl font-display italic mb-8">
              Calitate în fiecare detaliu.
            </h2>
            <ul className="space-y-4">
              {category.bullets.map((b) => (
                <li key={b} className="flex gap-4 items-start border-t border-border pt-4">
                  <span className="font-mono text-[11px] text-accent mt-1">+</span>
                  <span className="text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
              [ Exemple de proiecte ]
            </span>
            <h2 className="text-3xl md:text-4xl font-display italic mb-8">
              Proiecte tipice.
            </h2>
            <ul className="space-y-4">
              {category.examples.map((e) => (
                <li key={e} className="flex gap-4 items-start border-t border-border pt-4">
                  <span className="font-mono text-[11px] text-accent mt-1">→</span>
                  <span className="text-base">{e}</span>
                </li>
              ))}
            </ul>
          </div>
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
            <Link
              href="/contact"
              className="border border-background/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-background hover:text-foreground transition-colors"
            >
              Vezi contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
