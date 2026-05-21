import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ShowroomBlock } from "@/components/sections/showroom-block";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import {
  absoluteUrl,
  breadcrumbSchema,
  contactPageSchema,
  jsonLd,
} from "@/lib/seo";

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
    description:
      "Hai în showroom sau lasă-ne datele tale și venim noi cu mostre și măsurători.",
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
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-6">
            Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-display leading-[0.95] text-balance max-w-3xl">
            Hai în showroom sau venim noi la tine.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mt-6 leading-relaxed">
            Răspundem în maxim 24 de ore. Pentru consultații, măsurători sau orice întrebare —
            sună, scrie sau treci pe la noi.
          </p>
        </div>
      </header>

      <ShowroomBlock />

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
            [ Cum ajungi ]
          </span>
          <h2 className="text-3xl md:text-4xl font-display italic mb-8 text-balance">
            Showroomul nostru pe hartă.
          </h2>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-sm border border-border bg-muted">
            <iframe
              src={mapEmbedUrl}
              title={`Hartă showroom SuperDecor — ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
