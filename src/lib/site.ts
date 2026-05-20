export const siteConfig = {
  name: "SuperDecor",
  legalName: "SuperDecor Brașov",
  url: "https://superdecor.ro",
  ogImage: "https://superdecor.ro/opengraph-image.png",
  description:
    "SuperDecor Brașov — perdele, draperii, sine galerii, jaluzele, rolete, lenjerii de pat și mobilă la comandă. Calitate premium, montaj profesional în Brașov și județ.",
  shortDescription:
    "Perdele, draperii și mobilă la comandă în Brașov.",
  locale: "ro_RO",
  language: "ro",
  country: "RO",
  city: "Brașov",
  region: "Brașov",
  address: {
    streetAddress: "Strada Lungă 1",
    addressLocality: "Brașov",
    addressRegion: "BV",
    postalCode: "500051",
    addressCountry: "RO",
  },
  geo: {
    latitude: 45.6427,
    longitude: 25.5887,
  },
  contact: {
    phone: "+40 268 000 000",
    phoneE164: "+40268000000",
    whatsapp: "+40 700 000 000",
    email: "contact@superdecor.ro",
  },
  hours: [
    { day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { day: ["Saturday"], opens: "10:00", closes: "14:00" },
  ],
  social: {
    facebook: "https://www.facebook.com/superdecor.brasov",
    instagram: "https://www.instagram.com/superdecor.brasov",
  },
  founder: "SuperDecor SRL",
  priceRange: "$$",
  areaServed: ["Brașov", "Județul Brașov", "România"],
  serviceTypes: [
    "Perdele și draperii la comandă",
    "Sine și galerii pentru perdele",
    "Jaluzele și rolete",
    "Lenjerii de pat",
    "Mobilă la comandă",
  ],
} as const;

export const navigation = [
  { href: "/", label: "Acasă" },
  { href: "/mobila-la-comanda", label: "Mobilă la comandă" },
  { href: "/perdele-draperii", label: "Perdele & Draperii" },
  { href: "/sine-galerii", label: "Sine & Galerii" },
  { href: "/jaluzele-rolete", label: "Jaluzele & Rolete" },
  { href: "/lenjerii-de-pat", label: "Lenjerii de pat" },
  { href: "/servicii", label: "Servicii" },
  { href: "/contact", label: "Contact" },
] as const;

export const routes = navigation.map((n) => n.href);

export type SiteConfig = typeof siteConfig;
