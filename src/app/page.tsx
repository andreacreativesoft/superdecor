import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { HomeUsp } from "@/components/sections/home-usp";
import { CategoriesGrid } from "@/components/sections/categories-grid";
import { ShowroomBlock } from "@/components/sections/showroom-block";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Reviews } from "@/components/sections/reviews";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { ConsultationCta } from "@/components/sections/consultation-cta";

export const metadata: Metadata = {
  title: {
    absolute: "SuperDecor Brașov — Perdele, Draperii, Jaluzele & Mobilă la Comandă",
  },
  description:
    "Showroom de textile pentru casă în Brașov. Perdele, draperii, jaluzele, rolete, lenjerii de pat și mobilă la comandă — măsurători și montaj profesional.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SuperDecor Brașov — Textile pentru casa ta",
    description: "Perdele, draperii, jaluzele și mobilă la comandă în Brașov.",
    url: "/",
    images: ["/images/hero.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <HomeUsp />
      <CategoriesGrid />
      <ShowroomBlock />
      <ProcessSteps />
      <Reviews />
      <PartnersMarquee />
      <ConsultationCta />
    </>
  );
}
