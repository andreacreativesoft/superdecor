import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { absoluteUrl, breadcrumbSchema, faqSchema, jsonLd, serviceSchema } from "@/lib/seo";
import img from "@/assets/cat-lenjerii.jpg";
import mEgipt from "@/assets/lenjerii/Egipt.jpg";
import mOrganic from "@/assets/lenjerii/Organic.jpg";
import mDamasc from "@/assets/lenjerii/Damasc.jpg";
import mRanforce from "@/assets/lenjerii/Ranforce.jpg";
import mPercale from "@/assets/lenjerii/Percale.jpg";
import mSatinat from "@/assets/lenjerii/Satinat.jpg";
import mIn from "@/assets/lenjerii/In.jpg";
import mJersey from "@/assets/lenjerii/Jersey_.jpg";
import s1 from "@/assets/lenjerii/IMG-20250128-WA0038.jpg";
import s2 from "@/assets/lenjerii/IMG-20250128-WA0002.jpg";
import s3 from "@/assets/lenjerii/IMG-20250128-WA0016.jpg";
import s4 from "@/assets/lenjerii/IMG-20250128-WA0025.jpg";
import s5 from "@/assets/lenjerii/IMG-20250128-WA0031.jpg";
import s6 from "@/assets/lenjerii/IMG-20250128-WA0034.jpg";
import s7 from "@/assets/lenjerii/IMG-20250522-WA0037.jpg";
import s8 from "@/assets/lenjerii/IMG-20250522-WA0039.jpg";
import s9 from "@/assets/lenjerii/IMG-20250522-WA0041.jpg";
import cc1 from "@/assets/lenjerii/cc-473279145.jpg";
import cc2 from "@/assets/lenjerii/cc-473326716.jpg";
import cc3 from "@/assets/lenjerii/cc-473330590.jpg";
import cc4 from "@/assets/lenjerii/cc-472028725.jpg";
import cc5 from "@/assets/lenjerii/cc-472441660.jpg";
import cc6 from "@/assets/lenjerii/cc-473152900.jpg";
import { SectionNav } from "@/components/SectionNav";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const slug = "/lenjerii-de-pat";

export const metadata: Metadata = {
  title: {
    absolute: "Lenjerii de Pat Brașov — Bumbac Egiptean, Damasc, Satinat, In | SuperDecor",
  },
  description:
    "Lenjerii de pat din bumbac egiptean, organic, damasc, ranforce, percale, satinat, in și jersey. În stoc și pe comandă la SuperDecor Brașov — cu finisaje manuale și consultanță în showroom.",
  alternates: { canonical: slug },
  openGraph: {
    title: "Lenjerii de Pat — SuperDecor Brașov",
    description:
      "Materiale fine pentru un somn răsfățat: bumbac, mătase, satin, in. În stoc și personalizate în atelier.",
    url: slug,
    images: [img.src],
  },
};

const materials = [
  {
    name: "Bumbac egiptean",
    img: mEgipt,
    desc: "Unul dintre cele mai fine tipuri de bumbac — extrem de moale și luxos, oferă o senzație plăcută și o durabilitate crescută.",
  },
  {
    name: "Bumbac organic",
    img: mOrganic,
    desc: "Din culturi ecologice, fără pesticide sau substanțe chimice nocive. Alegere sigură pentru sănătatea familiei.",
  },
  {
    name: "Damasc",
    img: mDamasc,
    desc: "Țesătură cu modele complexe și elegante, cu un contrast subtil între lucios și mat. Densă, foarte durabilă și rezistentă la uzură.",
  },
  {
    name: "Ranforce",
    img: mRanforce,
    desc: "Fibre de înaltă calitate țesute dens, pentru o textură rezistentă, plăcută la atingere și de lungă durată.",
  },
  {
    name: "Percale",
    img: mPercale,
    desc: "Metodă de țesere care lasă aerul să circule liber prin așternut — respirabilă, răcoroasă, ideală pentru somn ventilat.",
  },
  {
    name: "Satinat",
    img: mSatinat,
    desc: "Suprafață netedă și lucioasă, aspect luxos. Oferă mai multă căldură și un luciu vizibil, foarte plăcut la atingere.",
  },
  {
    name: "In",
    img: mIn,
    desc: "Extrem de respirabil, perfect pentru climat cald. Menține un mediu de somn răcoros pe timpul verii.",
  },
  {
    name: "Jersey",
    img: mJersey,
    desc: "Tricotat, nu țesut — moale și elastic. Excelent pentru așternuturi de sezon rece, confortabil ca un tricou.",
  },
];

const stocGallery = [
  { src: s1, label: "Set clasic bumbac" },
  { src: s2, label: "Damasc contemporan" },
  { src: s3, label: "Satinat luxos" },
  { src: s4, label: "Ranforce imprimat" },
  { src: s5, label: "In natural" },
  { src: s6, label: "Percale respirabil" },
  { src: s7, label: "Set premium 2025" },
  { src: s8, label: "Bumbac egiptean" },
  { src: s9, label: "Jersey confortabil" },
];

const cameraCopilGallery = [
  { src: cc1, label: "Set copii — hipoalergenic" },
  { src: cc2, label: "Modele vesele" },
  { src: cc3, label: "Bumbac 100%" },
  { src: cc4, label: "Culori pastel" },
  { src: cc5, label: "Personalizări atelier" },
  { src: cc6, label: "Confort pentru cei mici" },
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
            breadcrumbSchema([
              { name: "Acasă", url: absoluteUrl("/") },
              { name: "Lenjerii de pat", url: absoluteUrl(slug) },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Lenjerii de pat la comandă Brașov",
              description: metadata.description as string,
              url: absoluteUrl(slug),
              image: absoluteUrl(img.src),
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faq)) }}
      />
      <div className="bg-background text-foreground">
        {/* Hero */}
        <header className="relative flex min-h-[70vh] items-end md:min-h-[calc(70vh-80px)]">
          <div className="absolute inset-0 z-0">
            <ResponsiveImage
              picture={img}
              alt="Lenjerii de pat SuperDecor Brașov"
              sizes="100vw"
              priority
              pictureClassName="block w-full h-full"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#00657E]/60" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-[19px] pt-32 pb-20 sm:px-6">
            <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-[#07BCC6] uppercase">
              Lenjerii de pat
            </span>
            <h1 className="font-display text-background max-w-3xl text-[36px] leading-[0.95] text-balance md:text-7xl">
              Lenjerii de pat fine, pentru un somn răsfățat.
            </h1>
            <p className="text-background/80 mt-6 max-w-xl text-lg leading-relaxed">
              Bumbac egiptean, damasc, satin, in — materiale alese cu grijă și finisaje manuale, în
              showroomul SuperDecor Brașov.
            </p>
          </div>
        </header>

        {/* Jump links */}
        <SectionNav
          items={[
            { id: "materiale", label: "Materiale" },
            { id: "stoc", label: "În stoc & pe comandă" },
            { id: "inspirat", label: "GetInspired" },
            { id: "camera-copil", label: "Camera copilului" },
          ]}
        />

        {/* Intro */}
        <section className="px-[19px] py-24 sm:px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-accent mb-4 block font-mono text-xs tracking-[0.2em] uppercase">
                Despre lenjeriile noastre
              </span>
              <h2 className="font-display text-[24px] leading-tight text-balance italic md:text-4xl">
                Realizate manual, cu atenție la fiecare detaliu.
              </h2>
            </div>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed lg:col-span-7">
              <p>
                Lenjeriile de pat pot fi realizate dintr-o varietate de materiale, însă bumbacul,
                mătasea și satinul au reputația de a produce cele mai plăcute și mai durabile
                așternuturi.
              </p>
              <p>
                În atelierul nostru, fiecare set este creat cu pasiune și personalizat în funcție de
                preferințele tale. Utilizăm la cerere cele mai fine materiale naturale — de la
                bumbacul egiptean la in — pentru un somn odihnitor și confortabil.
              </p>
              <p>
                Vino în showroomul nostru din Brașov să vezi mostrele pe viu sau cere consultanță
                pentru un set personalizat.
              </p>
            </div>
          </div>
        </section>

        {/* Materials grid */}
        <section
          id="materiale"
          className="bg-surface border-border scroll-mt-28 border-y px-[19px] py-24 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                  [ Ghid materiale ]
                </span>
                <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                  Cum alegi țesătura potrivită.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm">
                Fiecare material are propria personalitate. Te ajutăm să o găsești pe a ta.
              </p>
            </div>
            <div className="bg-border grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4">
              {materials.map((m, i) => (
                <div
                  key={m.name}
                  className="bg-surface hover:bg-background group flex flex-col transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ResponsiveImage
                      picture={m.img}
                      alt={m.name}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      pictureClassName="block w-full h-full"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-baseline justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#07BCC6] uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground/60 font-mono text-[10px] tracking-[0.2em] uppercase">
                        Țesătură
                      </span>
                    </div>
                    <h3 className="font-display mb-2 text-xl transition-colors group-hover:text-[#00657E]">
                      {m.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* În stoc și pe comandă */}
        <section id="stoc" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                  [ În stoc & pe comandă ]
                </span>
                <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                  Modele disponibile imediat sau personalizate.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm">
                Alege din colecția noastră sau comandă dimensiuni și combinații unice, croite în
                atelier.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {stocGallery.map((item) => (
                <div
                  key={item.label}
                  className="group bg-surface border-border relative overflow-hidden border"
                >
                  <ResponsiveImage
                    picture={item.src}
                    alt={item.label}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-background text-sm font-medium">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  În atelierul nostru putem crea produse unice, adaptate exact nevoilor tale.
                  Materialele de calitate și procesele de producție riguroase garantează
                  durabilitatea, iar echipa specializată se ocupă de selecție, ajustare și finisaje.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ai întrebări specifice despre lenjerii de pat sau cuverturi? Cu plăcere — venim cu
                  sfaturi din experiență.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="bg-border border-border grid grid-cols-1 gap-px border sm:grid-cols-2">
                  {[
                    "Toate dimensiunile (1, 2, king-size)",
                    "Pilote și perne hipoalergenice",
                    "Cuverturi matlasate de sezon",
                    "Seturi pentru camera copilului",
                    "Protecții saltea impermeabile",
                    "Consultanță și ajustări în showroom",
                  ].map((b) => (
                    <li key={b} className="bg-background flex items-start gap-3 p-6 text-sm">
                      <span className="mt-0.5 shrink-0 font-mono text-[#07BCC6]">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GetInspired */}
        <section
          id="inspirat"
          className="bg-surface border-border scroll-mt-28 border-t px-[19px] py-24 sm:px-6"
        >
          <div className="mx-auto max-w-5xl text-center">
            <span className="text-muted-foreground mb-6 block font-mono text-[10px] tracking-[0.2em] uppercase">
              [ GetInspired ]
            </span>
            <h2 className="font-display mb-8 text-[24px] text-balance italic md:text-5xl">
              Combinăm modele clasice cu tendințe moderne.
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
              La SuperDecor îți oferim instrumentele necesare pentru a crea un spațiu personalizat
              și inspirant. Fie că îți dorești un design minimalist sau unul exuberant, vei găsi
              soluția perfectă pentru fiecare zi.
            </p>
          </div>
        </section>

        {/* Camera copilului */}
        <section id="camera-copil" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                  [ Camera copilului ]
                </span>
                <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                  Veselie și confort pentru cei mici.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm">
                Lenjerii colorate, hipoalergenice și rezistente, create special pentru copii.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {cameraCopilGallery.map((item) => (
                <div
                  key={item.label}
                  className="group bg-surface border-border relative overflow-hidden border"
                >
                  <ResponsiveImage
                    picture={item.src}
                    alt={item.label}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-background text-sm font-medium">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-background bg-[#00657E] px-[19px] py-24 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display mb-6 text-[24px] text-balance italic md:text-5xl">
              Vino să vezi mostrele în showroom.
            </h2>
            <p className="text-background/80 mx-auto mb-10 max-w-xl">
              Te așteptăm în Brașov cu sfaturi, mostre de materiale și combinații pregătite special
              pentru dormitorul tău.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+40728893118"
                className="bg-background text-foreground hover:text-background px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#07BCC6]"
              >
                Sună acum
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Lenjerii%20de%20pat`}
                className="border-background/30 hover:bg-background hover:text-foreground border px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
              >
                Scrie-ne un email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
