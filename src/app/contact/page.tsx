import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ShowroomBlock } from "@/components/sections/showroom-block";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { absoluteUrl, breadcrumbSchema, contactPageSchema, jsonLd } from "@/lib/seo";

const slug = "/contact";
const mapQuery = encodeURIComponent(
  `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality} ${siteConfig.address.postalCode}`,
);
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Programează o consultanță gratuită. Showroom în Brașov, măsurători la domiciliu, ofertă în 24h.",
  alternates: { canonical: slug },
  openGraph: {
    title: `Contact — ${siteConfig.name} Brașov`,
    description: "Hai în showroom sau lasă-ne datele tale și venim noi cu mostre și măsurători.",
    url: slug,
    images: ["/images/showroom.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Acasă", url: absoluteUrl("/") },
              { name: "Contact", url: absoluteUrl(slug) },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(contactPageSchema()) }}
      />
      <header className="px-6 pt-24 pb-12">
        <div className="mx-auto max-w-7xl">
          <span className="text-accent mb-6 block font-mono text-xs tracking-[0.2em] uppercase">
            Contact
          </span>
          <h1 className="font-display max-w-3xl text-5xl leading-[0.95] text-balance md:text-6xl">
            Hai în showroom sau venim noi la tine.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
            Răspundem în maxim 24 de ore. Pentru consultații, măsurători sau orice întrebare — sună,
            scrie sau treci pe la noi.
          </p>
        </div>
      </header>

      <ShowroomBlock />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-[0.2em] uppercase">
            [ Cum ajungi ]
          </span>
          <h2 className="font-display mb-8 text-3xl text-balance italic md:text-4xl">
            Showroomul nostru pe hartă.
          </h2>
          <div className="border-border bg-muted aspect-[16/9] w-full overflow-hidden rounded-sm border">
            <iframe
              src={mapEmbedUrl}
              title={`Hartă showroom SuperDecor — ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
