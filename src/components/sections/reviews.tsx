import { siteConfig } from "@/lib/site";

const reviews = [
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
];

export function Reviews() {
  return (
    <section id="recenzii" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-6 flex-wrap">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
              Ce spun clienții
            </span>
            <h2 className="text-4xl md:text-5xl font-display italic leading-tight">
              Ce spun clienții despre noi
            </h2>
          </div>
          <div className="flex items-baseline gap-3 shrink-0">
            <span className="text-4xl font-display text-primary">
              {siteConfig.reviews.rating}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              / 5 · peste {siteConfig.reviews.count} clienți
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <article
              key={r.n}
              className="bg-surface border border-border p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-accent" aria-label="5 din 5 stele">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-display text-lg leading-relaxed mb-8 text-balance flex-1">
                „{r.q}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-sm">{r.n}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  {r.c}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
