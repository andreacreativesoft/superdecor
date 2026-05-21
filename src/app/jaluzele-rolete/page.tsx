import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { faqSchema, jsonLd, serviceSchema } from "@/lib/seo";

const slug = "/jaluzele-rolete";

export const metadata: Metadata = {
  title: "Jaluzele & Rolete Brașov — Textile, Lemn, Blackout, Exterior",
  description:
    "Rolete textile, jaluzele orizontale și verticale, rolete casetate, blackout și rulouri de exterior. Montaj profesional în Brașov.",
  alternates: { canonical: slug },
  openGraph: {
    title: "Jaluzele & Rolete — SuperDecor Brașov",
    description:
      "Control precis al luminii: rolete textile, jaluzele lemn/aluminiu, blackout, romane și rulouri exterior.",
    url: slug,
    images: ["/images/cat-jaluzele.jpg"],
  },
};

const tipuri = [
  {
    name: "Rolete textile",
    desc: "Eleganță și control precis al umbririi — bagheta poate fi teșită, semirotundă sau dreptunghiulară. Acționare facilă cu lănțișor.",
  },
  {
    name: "Jaluzele orizontale",
    desc: "Lemn, aluminiu sau bambus. Aspectuoase și ușor de montat — controlul exact al cantității de lumină naturală.",
  },
  {
    name: "Jaluzele verticale",
    desc: "Soluție clasică pentru ferestre mari și birouri. Lamele textile rotative pentru reglarea direcției luminii.",
  },
  {
    name: "Jaluzele plisate",
    desc: "Sistem compact, perfect pentru ferestre atipice — mansardă, formă specială. Estetică modernă și discretă.",
  },
  {
    name: "Rolete casetate & necasetate",
    desc: "Se adaptează oricărei tâmplării. Opresc lumina soarelui și privirile indiscrete, cu finisaj curat.",
  },
  {
    name: "Rolete blackout",
    desc: "Obturare totală a luminii pentru dormitor, sală media sau camera copilului. Somn odihnitor garantat.",
  },
  {
    name: "Rolete day & night",
    desc: "Țesătură cu benzi alternante translucide și opace — control gradual al luminii printr-un singur sistem.",
  },
  {
    name: "Jaluzele romane",
    desc: "Combină eleganța draperiilor cu funcționalitatea jaluzelelor. Versatile, izolație termică și acustică.",
  },
  {
    name: "Rulouri de exterior",
    desc: "Aplicate pe fereastră sau perete, cu acționare manuală sau telecomandă. Obturare 100%, izolație termică, fonică și antiefracție.",
  },
];

const proiecte = [
  { src: "/images/jaluzele-1.jpg", label: "Rolete albe living" },
  { src: "/images/jaluzele-2.jpg", label: "Jaluzele lemn bucătărie" },
  { src: "/images/jaluzele-3.jpg", label: "Rolete day & night dormitor" },
  { src: "/images/jaluzele-4.jpg", label: "Jaluzele romane in" },
  { src: "/images/jaluzele-5.jpg", label: "Verticale birou" },
  { src: "/images/jaluzele-6.jpg", label: "Rulouri exterior" },
];

const faq = [
  {
    question: "Ce tip de jaluzele recomandați pentru dormitor?",
    answer:
      "Pentru dormitor recomandăm rolete blackout sau jaluzele romane cu căptușeală opacă — obțineți obturare totală a luminii, izolație termică și un aspect elegant.",
  },
  {
    question: "Pot fi montate jaluzele pe ferestre cu termopan fără a găuri rama?",
    answer:
      "Da. Folosim sisteme cu cleme speciale care se prind direct pe rama termopanului, fără găurire. Soluția potrivită o stabilim la măsurători.",
  },
  {
    question: "Care este termenul de execuție?",
    answer:
      "Termenul standard este 2–4 săptămâni de la confirmarea comenzii și a măsurătorilor, în funcție de tipul de produs și materialele alese.",
  },
  {
    question: "Includeți montajul în preț?",
    answer:
      "Montajul este inclus pentru comenzile peste 1500 lei pe raza Brașovului. Pentru valori mai mici sau localități învecinate, prețul de montaj se discută la ofertă.",
  },
];

export default function JaluzeleRoletePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Jaluzele și rolete la comandă Brașov",
              description: metadata.description as string,
              url: `${siteConfig.url}${slug}`,
              image: `${siteConfig.url}/images/cat-jaluzele.jpg`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faq)) }}
      />

      <header className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cat-jaluzele.jpg"
            alt="Jaluzele și rolete SuperDecor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20 pt-32">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em] block mb-6">
            Categorie 04
          </span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] text-background max-w-3xl text-balance">
            Jaluzele și rolete pentru control precis al luminii.
          </h1>
        </div>
      </header>

      <div className="border-b border-border bg-surface sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
          <a href="#tipuri" className="hover:text-primary transition-colors">Tipuri</a>
          <a href="#romane" className="hover:text-primary transition-colors">Jaluzele romane</a>
          <a href="#proiecte" className="hover:text-primary transition-colors">Proiecte recente</a>
          <a href="#atelier" className="hover:text-primary transition-colors">Atelier</a>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
              Despre jaluzele și rolete
            </span>
            <h2 className="text-3xl md:text-4xl font-display italic leading-tight text-balance">
              În armonie cu stilul tău, cromatic și decorativ.
            </h2>
          </div>
          <div className="lg:col-span-7 text-muted-foreground leading-relaxed space-y-4 text-base">
            <p>
              Jaluzelele și roletele se aleg în funcție de stilul de amenajare al încăperii —
              atât din punct de vedere cromatic, cât și decorativ. Ele oferă control precis al
              luminii naturale și intimitate, fiind în același timp un element estetic important.
            </p>
            <p>
              La SuperDecor găsești toată gama: rolete textile, jaluzele din lemn, aluminiu sau
              bambus, rolete casetate sau necasetate, blackout pentru dormitor, day & night,
              romane și rulouri de exterior cu telecomandă.
            </p>
            <p>
              Vino în showroomul nostru din Brașov pentru consultanță, măsurători și montaj
              profesional.
            </p>
          </div>
        </div>
      </section>

      <section id="tipuri" className="py-24 px-6 bg-surface border-y border-border scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                [ Ghid produse ]
              </span>
              <h2 className="text-4xl md:text-5xl font-display italic text-balance max-w-2xl">
                Cum alegi soluția potrivită pentru spațiul tău.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Fiecare tip de jaluzea sau roletă are rolul ei. Te ajutăm să o alegi pe a ta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {tipuri.map((t, i) => (
              <div
                key={t.name}
                className="bg-surface p-8 hover:bg-background transition-colors group"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                    Sistem
                  </span>
                </div>
                <h3 className="text-2xl font-display mb-3 group-hover:text-primary transition-colors">
                  {t.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="romane" className="py-24 px-6 scroll-mt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
              De ce jaluzele romane?
            </span>
            <h2 className="text-3xl md:text-4xl font-display italic leading-tight mb-8 text-balance">
              Eleganța draperiilor, funcționalitatea jaluzelelor.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O alegere excelentă pentru cei care doresc să îmbine estetica cu practicitatea — un
              aspect sofisticat și versatil pentru orice încăpere.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              {[
                ["Versatilitate", "Living, dormitor, bucătărie sau baie."],
                ["Personalizare", "Țesături, culori și modele variate."],
                ["Controlul luminii", "De la difuză la întuneric total."],
                ["Izolație", "Termică și acustică superioară."],
                ["Întreținere ușoară", "Unele modele se spală la mașină."],
                ["Aspect sofisticat", "Cădere uniformă și pliuri elegante."],
              ].map(([title, body]) => (
                <li key={title} className="bg-background p-6 text-sm">
                  <div className="font-medium mb-1">{title}</div>
                  <div className="text-muted-foreground">{body}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="proiecte" className="py-24 px-6 bg-surface border-y border-border scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                [ Proiecte recente ]
              </span>
              <h2 className="text-4xl md:text-5xl font-display italic text-balance max-w-2xl">
                Soluții montate, în spații reale.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Câteva exemple recente din proiectele clienților noștri.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proiecte.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden bg-background border border-border h-72"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                  <span className="text-background text-sm font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="atelier" className="py-24 px-6 scroll-mt-28">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-6">
            [ Designerii SuperDecor recomandă ]
          </span>
          <h2 className="text-4xl md:text-5xl font-display italic mb-8 text-balance">
            În atelier creăm produse unice, adaptate ție.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Materialele de înaltă calitate și procesele de producție riguroase garantează
            durabilitatea produselor, iar echipa specializată se ocupă de instalare, asigurând o
            funcționare optimă. Ai întrebări specifice despre jaluzele, rulouri sau plisuri? Cu
            plăcere — venim cu sfaturi din experiență.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary text-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display italic mb-6 text-balance">
            Hai să măsurăm împreună ferestrele tale.
          </h2>
          <p className="text-background/80 max-w-xl mx-auto mb-10">
            Programează o consultanță gratuită — venim cu mostre, măsurători și recomandări pentru
            fiecare încăpere.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="bg-background text-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-accent hover:text-background transition-colors"
            >
              Sună acum
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Jaluzele%20si%20rolete`}
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
