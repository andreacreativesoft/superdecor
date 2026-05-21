export const siteConfig = {
  name: "SuperDecor",
  legalName: "SuperDecor Brașov",
  url: "https://superdecor.ro",
  ogImage: "/opengraph-image",
  description:
    "SuperDecor Brașov — perdele, draperii, sine galerii, jaluzele, rolete, lenjerii de pat și mobilă la comandă. Atelier propriu, măsurători și consultanță gratuită la domiciliu.",
  shortDescription: "Perdele, draperii și mobilă la comandă în Brașov.",
  locale: "ro_RO",
  language: "ro",
  country: "RO",
  city: "Brașov",
  region: "Brașov",
  // TODO confirm with client
  address: {
    streetAddress: "Strada Brândușelor 19",
    addressLocality: "Brașov",
    addressRegion: "BV",
    postalCode: "500001",
    addressCountry: "RO",
  },
  geo: {
    latitude: 45.6427,
    longitude: 25.5887,
  },
  // TODO confirm with client
  contact: {
    phone: "0728 893 118",
    phoneE164: "+40728893118",
    whatsapp: "+40728893118",
    email: "office@superdecor.ro",
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
  reviews: {
    rating: 4.9,
    count: 200,
  },
} as const;

export const navigation = [
  { href: "/mobila-la-comanda", label: "Mobilă la comandă" },
  { href: "/perdele-draperii", label: "Perdele & Draperii" },
  { href: "/sine-galerii", label: "Șine & Galerii" },
  { href: "/jaluzele-rolete", label: "Jaluzele & Rolete" },
  { href: "/lenjerii-de-pat", label: "Lenjerii de pat" },
  { href: "/servicii", label: "Servicii" },
] as const;

export const routes = ["/", ...navigation.map((n) => n.href), "/contact"] as const;

export type SiteConfig = typeof siteConfig;
