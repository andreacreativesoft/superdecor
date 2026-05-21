import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { faqSchema, jsonLd, serviceSchema } from "@/lib/seo";

const slug = "/lenjerii-de-pat";

export const metadata: Metadata = {
  title: "Lenjerii de Pat Brașov — Bumbac Satinat, In, Damasc",
  description:
    "Lenjerii de pat din bumbac egiptean, organic, satinat, damasc, ranforce, percale, in și jersey. În stoc și pe comandă, în showroomul SuperDecor Brașov.",
  alternates: { canonical: slug },
  openGraph: {
    title: "Lenjerii de Pat — SuperDecor Brașov",
    description:
      "Lenjerii de pat din materiale fine: bumbac, in, damasc, satinat. În stoc și pe comandă.",
    url: slug,
    images: ["/images/cat-lenjerii.jpg"],
  },
};

const materials = [
  {
    name: "Bumbac egiptean",
    desc: "Unul dintre cele mai fine tipuri de bumbac — extrem de moale, luxos, cu durabilitate crescută.",
  },
  {
    name: "Bumbac organic",
    desc: "Cultivat ecologic, fără pesticide sau substanțe chimice nocive. Alegere sigură pentru sănătate.",
  },
  {
    name: "Bumbac obișnuit",
    desc: "Bumbac cu fire scurte, frecvent întâlnit în lenjeriile accesibile. Confortabil pentru uz zilnic.",
  },
  {
    name: "Damasc",
    desc: "Țesătură cu modele complexe și elegante, contrast subtil între lucios și mat. Foarte durabil.",
  },
  {
    name: "Ranforce",
    desc: "Fibre de înaltă calitate, țesute dens pentru o textură rezistentă, plăcută și de lungă durată.",
  },
  {
    name: "Percale",
    desc: "Țesătură respirabilă, răcoroasă, ușor mai aspră la atingere — ideală pentru somn ventilat.",
  },
  {
    name: "Satinat",
    desc: "Suprafață netedă și lucioasă, aspect luxos. Oferă mai multă căldură și un luciu vizibil.",
  },
  {
    name: "In",
    desc: "Extrem de respirabil, perfect pentru climat cald. Menține un mediu de somn răcoros vara.",
  },
  {
    name: "Jersey",
    desc: "Tricotat, nu țesut — moale și elastic. Excelent pentru așternuturi de sezon rece.",
  },
];

const stocGallery = [
  { src: "/images/lenjerie-1.jpg", label: "Lenjerie crem & bej" },
  { src: "/images/lenjerie-2.jpg", label: "Set floral pastel" },
  { src: "/images/lenjerie-3.jpg", label: "Dungi navy & alb" },
  { src: "/images/lenjerie-4.jpg", label: "In verde-sage" },
];

const cameraCopilGallery = [
  { src: "/images/camera-copil-1.jpg", label: "Animăluțe colorate" },
  { src: "/images/camera-copil-2.jpg", label: "Unicorn & curcubeu" },
  { src: "/images/camera-copil-3.jpg", label: "Naval albastru" },
];

const masterGallery = [
  { src: "/images/master-1.jpg", label: "Gold & cream satin" },
  { src: "/images/master-2.jpg", label: "Modern grey & white" },
  { src: "/images/master-3.jpg", label: "Blush velvet romantic" },
];

const faq = [
  {
    question: "Ce material recomandați pentru sezonul cald?",
    answer:
      "Pentru vară recomandăm in sau percale — ambele sunt extrem de respirabile și mențin un mediu de somn răcoros. Bumbacul egiptean este o alegere universală, plăcută în orice sezon.",
  },
  {
    question: "Aveți lenjerii king-size?",
    answer:
      "Da. Toate seturile pot fi comandate în mărimile 1 persoană, 2 persoane și king-size. Confecționăm și dimensiuni speciale la cerere.",
  },
  {
    question: "Pot comanda o combinație personalizată?",
    answer:
      "Sigur — alege materialul, culoarea și dimensiunea, iar noi croim și coasem setul în atelier. Termen 2–3 săptămâni.",
  },
  {
    question: "Sunt lenjeriile pentru camera copilului hipoalergenice?",
    answer:
      "Da, folosim țesături certificate OEKO-TEX, fără coloranți toxici. Toate modelele pentru copii sunt testate dermatologic.",
  },
];

export default function LenjeriiDePatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Lenjerii de pat la comandă Brașov",
              description: metadata.description as string,
              url: `${siteConfig.url}${slug}`,
              image: `${siteConfig.url}/images/cat-lenjerii.jpg`,
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
            src="/images/cat-lenjerii.jpg"
            alt="Lenjerii de pat SuperDecor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20 pt-32">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em] block mb-6">
            Categorie 05
          </span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] text-background max-w-3xl text-balance">
            Lenjerii de pat fine, pentru somn răsfățat.
          </h1>
        </div>
      </header>

      <div className="border-b border-border bg-surface sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
          <a href="#materiale" className="hover:text-primary transition-colors">Materiale</a>
          <a href="#stoc" className="hover:text-primary transition-colors">În stoc & pe comandă</a>
          <a href="#inspirat" className="hover:text-primary transition-colors">GetInspired</a>
          <a href="#camera-copil" className="hover:text-primary transition-colors">Camera copilului</a>
          <a href="#master" className="hover:text-primary transition-colors">Master bedroom</a>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-4">
              Despre lenjeriile noastre
            </span>
            <h2 className="text-3xl md:text-4xl font-display italic leading-tight text-balance">
              Materiale alese cu grijă, pentru un dormitor cald și elegant.
            </h2>
          </div>
          <div className="lg:col-span-7 text-muted-foreground leading-relaxed space-y-4 text-base">
            <p>
              La SuperDecor găsești o selecție atentă de lenjerii de pat din bumbac egiptean,
              organic, damasc, ranforce, percale, satinat, in și jersey — materiale alese pentru
              durabilitate, confort și un aspect impecabil.
            </p>
            <p>
              Toate dimensiunile sunt disponibile: 1 persoană, 2 persoane și king-size. Modele
              clasice, contemporane sau pentru camera copilului — cu opțiuni de pilote, perne și
              cuverturi asortate.
            </p>
            <p>
              Vino în showroomul nostru din Brașov să vezi mostrele pe viu sau cere consultanță
              pentru un set personalizat.
            </p>
          </div>
        </div>
      </section>

      <section id="materiale" className="py-24 px-6 bg-surface border-y border-border scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                [ Ghid materiale ]
              </span>
              <h2 className="text-4xl md:text-5xl font-display italic text-balance max-w-2xl">
                Cum alegi țesătura potrivită.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Fiecare material are propria personalitate. Te ajutăm să o găsești pe a ta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {materials.map((m, i) => (
              <div
                key={m.name}
                className="bg-surface p-8 hover:bg-background transition-colors group"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                    Țesătură
                  </span>
                </div>
                <h3 className="text-2xl font-display mb-3 group-hover:text-primary transition-colors">
                  {m.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stoc" className="py-24 px-6 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                [ În stoc & pe comandă ]
              </span>
              <h2 className="text-4xl md:text-5xl font-display italic text-balance max-w-2xl">
                Modele disponibile imediat sau personalizate.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Alege din colecția noastră sau comandă dimensiuni și combinații unice.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stocGallery.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden bg-surface border border-border h-64"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                  <span className="text-background text-sm font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Materialele de înaltă calitate și procesele de producție riguroase garantează
                durabilitatea produselor, iar echipa specializată se ocupă de selecție, ajustare
                și livrare.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ai întrebări specifice despre lenjerii de pat sau cuverturi? Cu plăcere — venim
                cu sfaturi din experiență.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {[
                  "Toate dimensiunile (1, 2, king-size)",
                  "Pilote și perne hipoalergenice",
                  "Cuverturi matlasate de sezon",
                  "Seturi pentru camera copilului",
                  "Protecții saltea impermeabile",
                  "Consultanță și ajustări în showroom",
                ].map((b) => (
                  <li key={b} className="bg-background p-6 flex gap-3 items-start text-sm">
                    <span className="text-accent mt-0.5 shrink-0 font-mono">+</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="inspirat" className="py-24 px-6 bg-surface border-t border-border scroll-mt-28">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-6">
            [ GetInspired ]
          </span>
          <h2 className="text-4xl md:text-5xl font-display italic mb-8 text-balance">
            Combinăm modele clasice cu tendințe moderne.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            La SuperDecor îți oferim instrumentele necesare pentru a crea un spațiu personalizat
            și inspirant. Fie că îți dorești un design minimalist sau unul exuberant, vei găsi
            soluția perfectă pentru fiecare zi.
          </p>
        </div>
      </section>

      <section id="camera-copil" className="py-24 px-6 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                [ Camera copilului ]
              </span>
              <h2 className="text-4xl md:text-5xl font-display italic text-balance max-w-2xl">
                Veselie și confort pentru cei mici.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Lenjerii colorate, hipoalergenice și rezistente, create special pentru copii.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cameraCopilGallery.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden bg-surface border border-border h-72"
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

      <section id="master" className="py-24 px-6 bg-surface border-y border-border scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                [ Master bedroom ]
              </span>
              <h2 className="text-4xl md:text-5xl font-display italic text-balance max-w-2xl">
                Eleganță și rafinament pentru dormitorul principal.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Seturi premium de lenjerii, cuverturi și perne pentru un sanctuar personal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {masterGallery.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden bg-surface border border-border h-72"
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

      <section className="py-24 px-6 bg-primary text-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display italic mb-6 text-balance">
            Vino să vezi mostrele în showroom.
          </h2>
          <p className="text-background/80 max-w-xl mx-auto mb-10">
            Te așteptăm cu sfaturi, mostre de materiale și combinații pregătite special pentru
            dormitorul tău.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="bg-background text-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-accent hover:text-background transition-colors"
            >
              Sună acum
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Lenjerii%20de%20pat`}
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
