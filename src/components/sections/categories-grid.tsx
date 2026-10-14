import Image from "next/image";
import Link from "next/link";
import { homeCategories } from "@/lib/categories";

export function CategoriesGrid() {
  return (
    <section id="categorii" className="bg-surface px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl leading-tight italic md:text-5xl">
            Descopera eleganța decorului cu SuperDecor
          </h2>
          <span className="text-muted-foreground shrink-0 font-mono text-xs">
            [ {String(homeCategories.length).padStart(2, "0")} Secțiuni ]
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {homeCategories.map((c, i) => (
            <Link key={c.number} href={c.href} className="group block cursor-pointer">
              <div className="bg-muted relative mb-6 aspect-[3/4] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display mb-1 text-xl">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.short}</p>
                </div>
                <span className="text-accent mt-1 font-mono text-[10px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="bg-border mt-4 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              <span className="sr-only">Vezi {c.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
