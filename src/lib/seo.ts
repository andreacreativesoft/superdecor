import type {
  BreadcrumbList,
  ContactPage,
  FAQPage,
  LocalBusiness,
  Organization,
  Product,
  Service,
  WebSite,
  WithContext,
} from "schema-dts";
import { siteConfig } from "./site";

const CONTEXT = "https://schema.org" as const;

export function organizationSchema(): WithContext<Organization> {
  return {
    "@context": CONTEXT,
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema(): WithContext<WebSite> {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}#organization` },
  };
}

export function localBusinessSchema(): WithContext<LocalBusiness> {
  return {
    "@context": CONTEXT,
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    image: siteConfig.ogImage,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...h.day],
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: siteConfig.areaServed.map((a) => ({ "@type": "Place", name: a })),
    sameAs: Object.values(siteConfig.social),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
): WithContext<BreadcrumbList> {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[],
): WithContext<FAQPage> {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): WithContext<Service> {
  return {
    "@context": CONTEXT,
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    image: input.image ?? siteConfig.ogImage,
    provider: { "@id": `${siteConfig.url}#organization` },
    areaServed: siteConfig.areaServed.map((a) => ({ "@type": "Place", name: a })),
  };
}

type ItemAvailabilityUrl =
  | "https://schema.org/InStock"
  | "https://schema.org/OutOfStock"
  | "https://schema.org/PreOrder"
  | "https://schema.org/Discontinued";

export function productSchema(input: {
  name: string;
  description: string;
  image: string | string[];
  sku?: string;
  brand?: string;
  offers?: {
    price: string;
    priceCurrency?: string;
    availability?: ItemAvailabilityUrl;
    url?: string;
  };
}): WithContext<Product> {
  return {
    "@context": CONTEXT,
    "@type": "Product",
    name: input.name,
    description: input.description,
    image: input.image,
    sku: input.sku,
    brand: { "@type": "Brand", name: input.brand ?? siteConfig.name },
    offers: input.offers
      ? {
          "@type": "Offer",
          price: input.offers.price,
          priceCurrency: input.offers.priceCurrency ?? "RON",
          availability: input.offers.availability ?? "https://schema.org/InStock",
          url: input.offers.url,
        }
      : undefined,
  };
}

export function contactPageSchema(): WithContext<ContactPage> {
  return {
    "@context": CONTEXT,
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#contactpage`,
    url: `${siteConfig.url}/contact`,
    name: `Contact — ${siteConfig.name}`,
    description:
      "Showroom în Brașov, măsurători la domiciliu, ofertă în 24h.",
    mainEntity: { "@id": `${siteConfig.url}#localbusiness` },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

export function jsonLd<T>(data: T): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
