import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import img from "@/assets/cat-perdele.jpg";
import { SectionNav } from "@/components/SectionNav";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { LightboxGallery } from "@/components/pages/perdele-draperii/LightboxGallery";
import { shortCategories } from "@/lib/categories";
import { absoluteUrl, breadcrumbSchema, jsonLd, serviceSchema } from "@/lib/seo";

import mPoliester from "@/assets/perdele-poliester.webp";
import mBumbac from "@/assets/perdele-bumbac.webp";
import mMatase from "@/assets/perdele-matase.webp";
import mPanza from "@/assets/perdele-panza.webp";
import mIn from "@/assets/perdele-in.webp";
import mCatifea from "@/assets/draperii-catifea.webp";
import mVoal from "@/assets/perdele-voal.webp";

import model1 from "@/assets/perdele-model-1.webp";
import model2 from "@/assets/perdele-model-2.webp";
import model3 from "@/assets/perdele-model-3.webp";
import model4 from "@/assets/perdele-model-4.webp";
import model5 from "@/assets/perdele-model-5.webp";
import model6 from "@/assets/perdele-model-6.webp";
import model7 from "@/assets/perdele-model-7.webp";
import model8 from "@/assets/perdele-model-8.webp";

import draperiiLiving from "@/assets/draperii-living.webp";
import perdeleTextura from "@/assets/perdele-textura.webp";

import proiect1 from "@/assets/proiect-perdele-1.webp";
import proiect2 from "@/assets/proiect-perdele-2.webp";
import proiect3 from "@/assets/proiect-perdele-3.webp";
import proiect4 from "@/assets/proiect-perdele-4.webp";
import proiect5 from "@/assets/proiect-perdele-5.webp";
import proiect6 from "@/assets/proiect-perdele-6.webp";
import proiect7 from "@/assets/proiect-perdele-7.webp";
import proiect8 from "@/assets/proiect-perdele-8.webp";
import proiect9 from "@/assets/proiect-perdele-9.webp";
import proiect10 from "@/assets/proiect-perdele-10.webp";
import proiect11 from "@/assets/proiect-perdele-11.webp";
import proiect12 from "@/assets/proiect-perdele-12.webp";

/**
 * `sizes` per layout. Every grid sits in `max-w-7xl` (1280px) with `sm:px-6`,
 * so past 1328px the container stops growing and the slot is a fixed width.
 */
// grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ->  (1280 - 2*32)/3 = 405px
const CARD_SIZES =
  "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1328px) 33vw, 405px";
// sm:col-span-2 of 5 (gap-6) nested in lg:col-span-7 of 12 (gap-16)  ->  ~245px
const DRAPERII_SIZES =
  "(max-width: 639px) 100vw, (max-width: 1023px) 40vw, (max-width: 1328px) 22vw, 245px";
// grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ->  (1280 - 3*16)/4 = 308px
const GRID_SIZES =
  "(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1328px) 25vw, 308px";

const category = shortCategories.perdele;

export const metadata: Metadata = {
  title: { absolute: "Perdele și Draperii Brașov — In, Bumbac, Catifea, Blackout | SuperDecor" },
  description:
    "Perdele și draperii la comandă în Brașov: in, bumbac, catifea, dantelă, mătase, poliester, blackout. Croitorie internă, măsurători gratuite și montaj.",
  alternates: { canonical: "/perdele-draperii" },
  openGraph: {
    title: "Perdele & Draperii — SuperDecor Brașov",
    description: "Materiale fine, croitorie la comandă pentru fiecare fereastră.",
    url: "/perdele-draperii",
    images: [img.src],
  },
};

const materials = [
  {
    name: "Poliester",
    desc: "Durabil și convenabil, se întreține foarte ușor și rezistă în timp. Se potrivește cu majoritatea stilurilor și e disponibil în multe culori și printuri.",
    img: mPoliester,
  },
  {
    name: "Dantelă",
    desc: "Cele mai transparente perdele — permit luminii naturale să pătrundă. Simbol al rafinamentului, cu nuanțe neutre versatile.",
    img: mBumbac,
  },
  {
    name: "Mătase",
    desc: "Aer romantic și sofisticat pentru orice cameră. Necesită curățare specializată, dar oferă un finisaj luxos, cu o gamă largă de nuanțe.",
    img: mMatase,
  },
  {
    name: "Pânză",
    desc: "Alegere corectă pentru stilul rustic. Simple, permit luminii să treacă și se așează frumos, cu nuanțe neutre potrivite oricărui decor.",
    img: mPanza,
  },
  {
    name: "In",
    desc: "Aspect natural și textură plăcută. Ideal pentru stiluri boem, minimalist sau industrial — ușor de întreținut și de curățat.",
    img: mIn,
  },
  {
    name: "Bumbac",
    desc: "Clasic și versatil, se potrivește cu aproape orice stil. Culori solide sau modele, cu un aspect rustic și natural.",
    img: mCatifea,
  },
  {
    name: "Catifea",
    desc: "Notă de lux și profunzime cromatică. Perfectă pentru draperii cu impact vizual puternic — sufragerie, dormitor principal.",
    img: mVoal,
  },
];

const recomandari = [model1, model2, model3, model4, model5, model6, model7, model8];

const proiecte = [
  proiect1,
  proiect2,
  proiect3,
  proiect4,
  proiect5,
  proiect6,
  proiect7,
  proiect8,
  proiect9,
  proiect10,
  proiect11,
  proiect12,
];

export default function PerdeleDraperiiPage() {
  return (
    <div className="bg-background text-foreground">
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

      {/* Hero */}
      <header className="relative flex min-h-[70vh] items-end md:min-h-[calc(70vh-80px)]">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            picture={img}
            alt="Perdele și draperii SuperDecor Brașov"
            sizes="100vw"
            priority
            pictureClassName="block w-full h-full"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00657E]/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-[19px] pt-32 pb-20 sm:px-6">
          <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-[#07BCC6] uppercase">
            Perdele și draperii
          </span>
          <h1 className="font-display text-background max-w-3xl text-[36px] leading-[0.95] text-balance md:text-7xl">
            Perdele și draperii, croite pentru fiecare fereastră.
          </h1>
          <p className="text-background/85 mt-8 max-w-2xl text-lg leading-relaxed">
            In, bumbac, catifea, dantelă, mătase sau poliester — materiale alese cu grijă și
            confecționate în atelierul nostru din Brașov.
          </p>
        </div>
      </header>

      {/* Jump links */}
      <SectionNav
        items={[
          { id: "despre", label: "Despre perdele" },
          { id: "materiale", label: "Materiale" },
          { id: "draperii", label: "Draperii camera de zi" },
          { id: "recomandari", label: "Recomandările designerilor" },
          { id: "proiecte", label: "Proiecte recente" },
        ]}
      />

      {/* Intro */}
      <section id="despre" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-accent mb-4 block font-mono text-xs tracking-[0.2em] uppercase">
              Despre perdelele noastre
            </span>
            <h2 className="font-display text-[24px] leading-tight text-balance italic md:text-4xl">
              Cum îți alegi perdelele potrivite pentru casa ta.
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-base leading-relaxed lg:col-span-7">
            <p>
              Perdeaua este unul dintre cele mai importante obiecte din casă — „îmbracă" orice
              încăpere în care se regăsește. Culoarea, materialul și lungimea contează extrem de
              mult, iar la SuperDecor te ajutăm să iei decizia potrivită.
            </p>
            <p>
              Vino în showroomul din Brașov să vezi mostrele pe viu sau programează o vizită la
              domiciliu — venim cu materiale, măsurăm ferestrele și îți propunem combinații
              pregătite pentru stilul locuinței tale.
            </p>
            <p className="text-foreground">
              <em>Consultanță gratuită</em>, măsurători la domiciliu și montaj profesional inclus
              pentru comenzile peste 1500 lei pe raza Brașovului.
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
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
                Șapte țesături, șapte personalități.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              De la mătasea sofisticată la inul relaxat — fiecare material spune o altă poveste
              despre ferestrele tale.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((m, i) => (
              <article
                key={m.name}
                className="group bg-background border-border hover:shadow-foreground/5 overflow-hidden border transition-shadow hover:shadow-2xl"
              >
                <div className="bg-surface aspect-[4/5] overflow-hidden">
                  <ResponsiveImage
                    picture={m.img}
                    alt={`Perdele din ${m.name.toLowerCase()}`}
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
                      Țesătură
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-[20px] transition-colors group-hover:text-[#00657E] md:text-2xl">
                    {m.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Draperii camera de zi */}
      <section id="draperii" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
              [ Draperii pentru camera de zi ]
            </span>
            <h2 className="font-display mb-8 text-[24px] text-balance italic md:text-5xl">
              Draperii care schimbă atmosfera unei camere.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              În decorarea unei camere de zi, draperiile au un impact major asupra aspectului și
              atmosferei. Adaugă textură, culoare și confort — dar alegerea depinde de stilul
              camerei, funcționalitate și lumina naturală.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Îți prezentăm câteva idei care se potrivesc perfect cu locuința ta — de la draperii
              opace pentru intimitate maximă, până la modele cu textură pentru un accent vizual
              subtil.
            </p>
          </div>
          <div className="space-y-10 lg:col-span-7">
            {[
              {
                title: "Draperii cu modele",
                body: "Opțiune excelentă pentru un accent vizual în camera de zi. Adaugă culoare și textură sau creează o atmosferă relaxată, într-o gamă largă de stiluri.",
                img: draperiiLiving,
              },
              {
                title: "Draperii opace",
                body: "Pentru intimitate maximă și control complet asupra luminii. Blochează soarele ziua și oferă liniște seara — disponibile în multe culori și texturi.",
                img: perdeleTextura,
              },
              {
                title: "Draperii cu textură",
                body: "Adâncime și dimensiune pentru încăpere. Materialul devine el însuși element de design — bumbac, in sau mătase, fiecare cu propria personalitate.",
                img: model1,
              },
            ].map((d) => (
              <div
                key={d.title}
                className="border-border grid grid-cols-1 items-center gap-6 border-t pt-10 first:border-t-0 first:pt-0 sm:grid-cols-5"
              >
                <div className="bg-surface aspect-[4/3] overflow-hidden sm:col-span-2">
                  <ResponsiveImage
                    picture={d.img}
                    alt={d.title}
                    sizes={DRAPERII_SIZES}
                    pictureClassName="block w-full h-full"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="sm:col-span-3">
                  <h3 className="font-display mb-3 text-[20px] italic md:text-2xl">{d.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designerii recomandă */}
      <section
        id="recomandari"
        className="bg-surface border-border scroll-mt-28 border-y px-[19px] py-24 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                [ Designerii SuperDecor recomandă ]
              </span>
              <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                Combinații alese de echipa noastră.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              O selecție de modele care „îmbracă" frumos orice încăpere în care se regăsesc.
            </p>
          </div>
          <LightboxGallery
            images={recomandari}
            altPrefix="Recomandare designer SuperDecor"
            sizes={GRID_SIZES}
            buttonClassName="group relative overflow-hidden bg-background border border-border aspect-[3/4] block text-left"
          />
        </div>
      </section>

      {/* Proiecte recente */}
      <section id="proiecte" className="scroll-mt-28 px-[19px] py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
                [ Proiecte recente ]
              </span>
              <h2 className="font-display max-w-2xl text-[24px] text-balance italic md:text-5xl">
                Perdele și draperii montate de echipa noastră.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              O parte dintre casele din Brașov și împrejurimi unde am adus confortul textilelor
              noastre.
            </p>
          </div>
          <LightboxGallery
            images={proiecte}
            altPrefix="Proiect perdele SuperDecor"
            sizes={GRID_SIZES}
            buttonClassName="group relative overflow-hidden bg-surface border border-border aspect-square block text-left"
          />
          <div className="mt-16 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              În atelierul nostru creăm produse unice, adaptate exact nevoilor și preferințelor
              tale. Materialele de înaltă calitate și procesele de producție riguroase garantează
              durabilitatea, iar echipa se ocupă de instalarea completă. Îți oferim{" "}
              <em className="text-foreground">consultanță gratuită</em> la domiciliu.
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
            Venim la tine acasă cu mostre de materiale, măsurăm ferestrele și îți propunem soluții
            personalizate — în Brașov și împrejurimi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+40728893118"
              className="bg-background text-foreground hover:text-background px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#07BCC6]"
            >
              Sună 0728 893 118
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Perdele%20%C8%99i%20draperii`}
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
