import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import img from "@/assets/cat-jaluzele.jpg";
import verticalBlinds from "@/assets/jaluzele-verticale.webp";
import orizontaleImg from "@/assets/jaluzele-orizontale.webp";
import plisateImg from "@/assets/jaluzele-plisate.webp";
import casetateImg from "@/assets/rolete-casetate.webp";
import reco7 from "@/assets/jaluzele-rolete-brasov-1.webp";
import reco8 from "@/assets/jaluzele-rolete-brasov-2.webp";
import roleteTextile from "@/assets/rolete-textile.webp";
import roleteBlackout from "@/assets/rolete-blackout.webp";
import proiectBrasov from "@/assets/jaluzele-proiect-brasov.webp";
import { SectionNav } from "@/components/SectionNav";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { LightboxGrid } from "@/components/pages/jaluzele-rolete/LightboxGrid";
import { absoluteUrl, breadcrumbSchema, faqSchema, jsonLd, serviceSchema } from "@/lib/seo";

const slug = "/jaluzele-rolete";

const CARD_SIZES =
  "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1328px) 33vw, 405px";
const FEATURE_SIZES = "(max-width: 1023px) 100vw, (max-width: 1328px) 50vw, 608px";
const RECO_SIZES =
  "(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1328px) 25vw, 308px";
const PROIECT_SIZES =
  "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1328px) 25vw, 308px";

export const metadata: Metadata = {
  title: {
    absolute: "Jaluzele și Rolete Brașov — Textile, Lemn, Blackout, Exterior | SuperDecor",
  },
  description:
    "Rolete textile, jaluzele verticale, orizontale, plisate, casetate, blackout, day & night, romane și rulouri de exterior. Montaj profesional în Brașov.",
  alternates: { canonical: slug },
  openGraph: {
    title: "Jaluzele & Rolete — SuperDecor Brașov",
    description:
      "Control precis al luminii: rolete textile, jaluzele lemn/aluminiu, blackout, romane și rulouri exterior.",
    url: slug,
    images: [img.src],
  },
};

const tipuri = [
  {
    name: "Rolete textile",
    tag: "Sistem",
    desc: "O variantă elegantă pentru umbrirea bucătăriei sau a livingului. Bagheta poate fi teșită, semirotundă sau dreptunghiulară, iar acționarea se face facil printr-un lănțișor care ajustează perfect nivelul de umbrire.",
    img: roleteTextile,
  },
  {
    name: "Jaluzele verticale",
    tag: "Ferestre mari",
    desc: "Soluție clasică pentru ferestre mari, birouri sau spații de zi. Lamele textile rotative permit reglarea direcției luminii și oferă intimitate — disponibile într-o gamă largă de culori.",
    img: verticalBlinds,
  },
  {
    name: "Jaluzele orizontale",
    tag: "Lemn · Aluminiu",
    desc: "Accesorii ieftine, ușor de montat și foarte aspectuoase. Din lemn, aluminiu sau bambus — te ajută să controlezi cu ușurință cantitatea de lumină care intră în cameră.",
    img: orizontaleImg,
  },
  {
    name: "Jaluzele plisate",
    tag: "Ferestre atipice",
    desc: "Sistem compact, perfect pentru ferestre atipice — mansardă, formă triunghiulară sau trapezoidală. Estetică modernă, discretă, care se pliază perfect pe cadrul ferestrei.",
    img: plisateImg,
  },
  {
    name: "Rolete casetate & necasetate",
    tag: "Adaptabil",
    desc: "Se adaptează pentru orice dimensiune a tâmplăriei. Au un dublu rol: opresc atât lumina soarelui, cât și privirile indiscrete — finisaj curat, direct pe cercevea.",
    img: casetateImg,
  },
  {
    name: "Rolete blackout",
    tag: "Somn odihnitor",
    desc: "Obturare totală a luminii pentru dormitor, sală media sau camera copilului. Somn odihnitor garantat și o barieră termică suplimentară vara și iarna.",
    img: roleteBlackout,
  },
];

const rulourExteriorBenefits = [
  "Obturează 100% lumina, atât ziua cât și noaptea.",
  "Izolează termic — vara păstrează răcoarea, iarna căldura.",
  "Izolare fonică pentru un interior liniștit.",
  "Protecție antiefracție suplimentară pentru locuință.",
];

const romanaFeatures: [string, string][] = [
  ["Versatilitate", "Se potrivesc în orice încăpere — living, dormitor, bucătărie sau baie."],
  ["Personalizare", "Gamă variată de țesături, culori și modele pentru un design unic."],
  ["Controlul luminii", "De la lumină difuză la întuneric total, printr-un singur sistem."],
  ["Izolație", "Materiale de calitate care oferă izolare termică și acustică."],
  ["Întreținere ușoară", "Unele modele se pot spăla la mașină, fără finisaje speciale."],
  ["Aspect sofisticat", "Cădere uniformă și pliuri elegante — între draperie și jaluzea."],
];

const proiecte = [roleteTextile, reco7, verticalBlinds, proiectBrasov];

const recomandari = [
  plisateImg,
  verticalBlinds,
  casetateImg,
  roleteTextile,
  roleteBlackout,
  orizontaleImg,
  reco7,
  reco8,
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
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Acasă", url: absoluteUrl("/") },
              { name: "Jaluzele & Rolete", url: absoluteUrl(slug) },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Jaluzele și rolete la comandă Brașov",
              description: metadata.description as string,
              url: absoluteUrl(slug),
              image: absoluteUrl("/images/cat-jaluzele.jpg"),
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faq)) }}
      />

      {/* Hero */}
      <header className="relative flex min-h-[70vh] items-end md:min-h-[calc(70vh-80px)]">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            picture={img}
            alt="Jaluzele și rolete SuperDecor Brașov"
            sizes="100vw"
            priority
            pictureClassName="block w-full h-full"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00657E]/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-[19px] pt-32 pb-20 sm:px-6">
          <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-[#07BCC6] uppercase">
            Jaluzele și rolete
          </span>
          <h1 className="font-display text-background max-w-3xl text-[36px] leading-[0.95] text-balance md:text-7xl">
            Jaluzele și rolete pentru control precis al luminii.
          </h1>
          <p className="text-background/85 mt-8 max-w-2xl text-lg leading-relaxed">
            Rolete textile, jaluzele din lemn, aluminiu sau bambus, blackout, day & night, romane și
            rulouri de exterior — montate profesional în Brașov.
          </p>
        </div>
      </header>

      {/* Jump links */}
      <SectionNav
        items={[
          { id: "despre", label: "Despre" },
          { id: "tipuri", label: "Tipuri" },
          { id: "exterior", label: "Rulouri exterior" },
          { id: "romane", label: "Jaluzele romane" },
          { id: "recomandari", label: "Designerii recomandă" },
          { id: "proiecte", label: "Proiecte recente" },
        ]}
      />

      {/* Intro */}
      <section id="despre" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-accent mb-4 block font-mono text-xs tracking-[0.2em] uppercase">
              Despre jaluzele și rolete
            </span>
            <h2 className="font-display text-[24px] leading-tight text-balance italic md:text-4xl">
              În armonie cu stilul tău, cromatic și decorativ.
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-base leading-relaxed lg:col-span-7">
            <p>
              Roletele și jaluzelele sunt extrem de variate. Aspectul elegant și modern, capacitatea
              de a controla cantitatea de lumină naturală care intră în încăpere, precum și
              utilizarea facilă sunt doar câteva dintre avantajele fundamentale pentru care alegi
              montarea lor în spațiul rezidențial sau de birou.
            </p>
            <p>
              Jaluzelele trebuie să fie în armonie cu stilul de amenajare al unei încăperi — atât
              din punct de vedere cromatic, cât și decorativ. La SuperDecor găsești toată gama:
              rolete textile, jaluzele din lemn, aluminiu sau bambus, blackout, day & night, romane
              și rulouri de exterior cu telecomandă.
            </p>
            <p className="text-foreground">
              Vino în showroomul din Brașov pentru{" "}
              <em>consultanță, mostre și măsurători gratuite</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Tipuri — cards with images */}
      <section
        id="tipuri"
        className="bg-surface border-border scroll-mt-28 border-y px-[19px] py-24 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                [ Ghid produse ]
              </span>
              <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                Cum alegi soluția potrivită pentru spațiul tău.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Fiecare tip de jaluzea sau roletă are rolul ei. Te ajutăm să o alegi pe a ta.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tipuri.map((t, i) => (
              <article
                key={t.name}
                className="group bg-background border-border hover:shadow-foreground/5 overflow-hidden border transition-shadow hover:shadow-2xl"
              >
                <div className="bg-surface aspect-[4/5] overflow-hidden">
                  <ResponsiveImage
                    picture={t.img}
                    alt={t.name}
                    sizes={CARD_SIZES}
                    pictureClassName="block w-full h-full"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-baseline justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#07BCC6] uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground/60 font-mono text-[10px] tracking-[0.2em] uppercase">
                      {t.tag}
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-[20px] transition-colors group-hover:text-[#00657E] md:text-2xl">
                    {t.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rulouri de exterior — feature */}
      <section id="exterior" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="bg-surface border-border order-2 aspect-[4/3] overflow-hidden border lg:order-1 lg:col-span-6">
            <ResponsiveImage
              picture={roleteTextile}
              alt="Rulouri de exterior — SuperDecor Brașov"
              sizes={FEATURE_SIZES}
              pictureClassName="block w-full h-full"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6">
            <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
              [ Rulouri de exterior ]
            </span>
            <h2 className="font-display mb-6 text-[24px] text-balance italic md:text-5xl">
              Soluția completă pentru orice încăpere.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Rulourile de exterior sunt aplicate pe fereastră sau pe perete. Acționarea lor se
              poate face atât manual, cât și cu telecomandă — o soluție ideală pentru orice
              încăpere.
            </p>
            <ul className="space-y-3">
              {rulourExteriorBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#07BCC6]" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Jaluzele romane — feature grid */}
      <section
        id="romane"
        className="bg-surface border-border scroll-mt-28 border-y px-[19px] py-24 sm:px-6"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
              [ De ce jaluzele romane? ]
            </span>
            <h2 className="font-display mb-8 text-[24px] text-balance italic md:text-5xl">
              Eleganța draperiilor, funcționalitatea jaluzelelor.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Jaluzelele romane reprezintă o alegere excelentă pentru cei care doresc să îmbine
              estetica cu practicitatea — un aspect sofisticat și versatil pentru orice încăpere.
            </p>
          </div>
          <ul className="bg-border border-border grid grid-cols-1 gap-px border sm:grid-cols-2 lg:col-span-7">
            {romanaFeatures.map(([title, body]) => (
              <li key={title} className="bg-background p-6 text-sm">
                <div className="mb-1 font-medium">{title}</div>
                <div className="text-muted-foreground">{body}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Designerii recomandă */}
      <section id="recomandari" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                [ Designerii SuperDecor recomandă ]
              </span>
              <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                Combinații care „îmbracă" ferestrele.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              O selecție de modele de jaluzele și rolete, alese de echipa noastră pentru orice
              încăpere.
            </p>
          </div>
          <LightboxGrid
            images={recomandari}
            altPrefix="Recomandare jaluzele SuperDecor"
            sizes={RECO_SIZES}
            gridClassName="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            buttonClassName="group relative overflow-hidden bg-surface border border-border aspect-square block text-left"
          />
        </div>
      </section>

      {/* Proiecte recente */}
      <section
        id="proiecte"
        className="bg-surface border-border scroll-mt-28 border-y px-[19px] py-24 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                [ Proiecte recente ]
              </span>
              <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                Soluții montate, în spații reale.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Câteva exemple recente din proiectele clienților noștri din Brașov și împrejurimi.
            </p>
          </div>
          <LightboxGrid
            images={proiecte}
            altPrefix="Proiect jaluzele SuperDecor"
            sizes={PROIECT_SIZES}
            gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            buttonClassName="group relative overflow-hidden bg-background border border-border aspect-[3/4] block text-left"
          />
          <div className="mt-16 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              În atelierul nostru putem crea produse unice, adaptate exact nevoilor și preferințelor
              tale. Materialele de înaltă calitate și procesele de producție riguroase garantează
              durabilitatea, iar echipa specializată se ocupă de instalarea produselor — asigurând o
              funcționare optimă. Îți oferim{" "}
              <em className="text-foreground">consultanță gratuită</em> pentru a alege cele mai
              potrivite jaluzele, rulouri sau plisuri pentru casă sau birou.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-background bg-[#00657E] px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display mb-6 text-[24px] text-balance italic md:text-5xl">
            Programează măsurătoarea gratuită.
          </h2>
          <p className="text-background/80 mx-auto mb-10 max-w-xl">
            Venim la tine cu mostre, măsurăm ferestrele și îți propunem soluția potrivită —
            jaluzele, rolete sau rulouri de exterior, în Brașov și împrejurimi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+40728893118"
              className="bg-background text-foreground hover:text-background px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#07BCC6]"
            >
              Sună 0728 893 118
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Jaluzele%20si%20rolete`}
              className="border-background/30 hover:bg-background hover:text-foreground border px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
            >
              Scrie-ne un email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
