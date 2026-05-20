import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-24 sm:py-32 lg:py-40">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Brașov · din 2010
          </span>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Perdele, draperii și mobilă la comandă, croite pentru casa ta.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            SuperDecor Brașov îți pune la dispoziție o experiență completă — de la
            consultanță și măsurători la confecție și montaj profesional. Materiale
            premium, atenție la detalii, livrare în toată țara.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Solicită ofertă gratuită
            </Link>
            <Link
              href="/perdele-draperii"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium transition-colors hover:bg-muted"
            >
              Vezi colecția
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
          {navigation
            .filter((n) => n.href !== "/" && n.href !== "/contact" && n.href !== "/servicii")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <h2 className="text-xl font-semibold tracking-tight">{item.label}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Soluții personalizate, măsurători la domiciliu și montaj profesional.
                </p>
                <span className="mt-6 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Descoperă →
                </span>
              </Link>
            ))}
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            De ce {siteConfig.name}?
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Peste un deceniu de experiență în amenajări interioare pentru clienți din
            Brașov și împrejurimi.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Consultanță gratuită", body: "Venim la tine cu mostre și recomandări adaptate spațiului." },
              { title: "Confecție proprie", body: "Atelier propriu pentru control total al calității." },
              { title: "Montaj profesional", body: "Echipă tehnică experimentată, livrare promptă." },
            ].map((feature) => (
              <div key={feature.title}>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Hai să discutăm despre proiectul tău
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Programează o vizită gratuită sau cere ofertă pe baza dimensiunilor pe care
              le ai deja.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Contactează-ne
          </Link>
        </div>
      </section>
    </main>
  );
}
