import Image from "next/image";
import Link from "next/link";
import { homeCategories } from "@/lib/categories";

export function CategoriesGrid() {
  return (
    <section id="categorii" className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-display italic leading-tight">
            Descopera eleganța decorului cu SuperDecor
          </h2>
          <span className="font-mono text-xs text-muted-foreground shrink-0">
            [ 06 Secțiuni ]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {homeCategories.map((c) => (
            <Link key={c.number} href={c.href} className="group cursor-pointer block">
              <div className="aspect-[3/4] mb-6 overflow-hidden bg-muted relative">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-display mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.short}</p>
                </div>
                <span className="font-mono text-[10px] mt-1 text-accent">{c.number}</span>
              </div>
              <div className="mt-4 h-px bg-border w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span className="sr-only">Vezi {c.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
