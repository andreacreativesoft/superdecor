import { siteConfig } from "@/lib/site";

const usps = [
  {
    title: "Atelier propriu în Brașov",
    desc: `Confecționăm direct la noi pe ${siteConfig.address.streetAddress.replace("Strada ", "")} — nu intermediem, nu trimitem produse din afară. Termen 2-4 săptămâni.`,
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
    desc: "De la perdele și jaluzele până la mobila de bucătărie sau dormitorul complet — o singură echipă, un singur preț.",
  },
];

export function HomeUsp() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
            De ce noi
          </span>
          <h2 className="text-4xl md:text-5xl font-display italic text-balance">
            De ce să alegi Super Decor Brașov
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {usps.map((u, i) => (
            <div key={u.title} className="bg-background p-8 hover:bg-surface transition-colors group">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-display mb-4 group-hover:text-primary transition-colors">
                {u.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
