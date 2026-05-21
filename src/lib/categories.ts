export type Category = {
  slug: string;
  href: string;
  number: string;
  title: string;
  short: string;
  eyebrow: string;
  image: string;
  lead: string;
  bullets: readonly string[];
  examples: readonly string[];
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
};

export const homeCategories = [
  {
    slug: "mobila",
    href: "/mobila-la-comanda",
    number: "01",
    title: "Mobilă la Comandă",
    short: "Piese unice adaptate spațiului tău.",
    image: "/images/cat-mobila.jpg",
  },
  {
    slug: "perdele",
    href: "/perdele-draperii",
    number: "02",
    title: "Perdele & Draperii",
    short: "Materiale fine, croitorie la comandă.",
    image: "/images/cat-perdele.jpg",
  },
  {
    slug: "sine",
    href: "/sine-galerii",
    number: "03",
    title: "Șine & Galerii",
    short: "Sisteme de prindere tehnice și decorative.",
    image: "/images/cat-sine.jpg",
  },
  {
    slug: "jaluzele",
    href: "/jaluzele-rolete",
    number: "04",
    title: "Jaluzele & Rolete",
    short: "Control precis al luminii naturale.",
    image: "/images/cat-jaluzele.jpg",
  },
  {
    slug: "lenjerii",
    href: "/lenjerii-de-pat",
    number: "05",
    title: "Lenjerii de Pat",
    short: "Bumbac satinat și in pentru dormitor.",
    image: "/images/cat-lenjerii.jpg",
  },
  {
    slug: "servicii",
    href: "/servicii",
    number: "06",
    title: "Servicii",
    short: "Măsurători, croitorie și instalare.",
    image: "/images/cat-servicii.jpg",
  },
] as const;

export const shortCategories: Record<"mobila" | "perdele" | "sine", Category> = {
  mobila: {
    slug: "mobila",
    href: "/mobila-la-comanda",
    number: "05",
    title: "Mobilă la Comandă",
    short: "Piese unice adaptate spațiului tău.",
    eyebrow: "Categorie 05",
    image: "/images/cat-mobila.jpg",
    lead: "Piese unice, croite milimetric pentru spațiul tău — dressing-uri, biblioteci, paturi tapițate și living-uri integrate.",
    bullets: [
      "Proiectare 3D înainte de execuție",
      "Lemn masiv, MDF vopsit, furnir natural",
      "Feronerie premium Blum / Hettich",
      "Montaj inclus, garanție 24 luni",
    ],
    examples: [
      "Dressing walk-in cu uși glisante",
      "Bibliotecă pe colț, până la tavan",
      "Tăblii de pat tapițate, capitonate",
      "Mobilier baie pe comandă",
    ],
    metaTitle: "Mobilă la Comandă Brașov — SuperDecor",
    metaDescription:
      "Mobilă la comandă în Brașov: dressing, biblioteci, paturi tapițate, mobilier living și baie. Proiectare 3D și montaj inclus.",
    ogTitle: "Mobilă la Comandă — SuperDecor Brașov",
    ogDescription: "Piese unice de mobilier, croite pentru spațiul tău.",
  },
  perdele: {
    slug: "perdele",
    href: "/perdele-draperii",
    number: "02",
    title: "Perdele & Draperii",
    short: "Materiale fine, croitorie la comandă.",
    eyebrow: "Categorie 02",
    image: "/images/cat-perdele.jpg",
    lead: "Materiale fine din in, bumbac și catifea — croite în atelierul propriu pentru fiecare fereastră în parte.",
    bullets: [
      "Materiale europene: in, bumbac, catifea, blackout",
      "Croitorie internă cu finisaj impecabil",
      "Mostre disponibile în showroom",
      "Măsurători gratuite la domiciliu",
    ],
    examples: [
      "Draperii blackout pentru dormitor",
      "Perdele din in pentru living",
      "Perdele duble cu galerie decorativă",
      "Storuri romane textile",
    ],
    metaTitle: "Perdele & Draperii Brașov — SuperDecor",
    metaDescription:
      "Perdele și draperii la comandă în Brașov: in, bumbac, catifea, blackout. Croitorie internă, măsurători și montaj gratuit.",
    ogTitle: "Perdele & Draperii — SuperDecor Brașov",
    ogDescription: "Materiale fine, croitorie la comandă pentru fiecare fereastră.",
  },
  sine: {
    slug: "sine",
    href: "/sine-galerii",
    number: "03",
    title: "Șine & Galerii",
    short: "Sisteme de prindere tehnice și decorative.",
    eyebrow: "Categorie 03",
    image: "/images/cat-sine.jpg",
    lead: "Sisteme de prindere tehnice și decorative — de la șine discrete în tavan la galerii din metal sau lemn.",
    bullets: [
      "Șine de aluminiu pentru montaj în tavan",
      "Galerii din metal, lemn masiv sau inox",
      "Sisteme motorizate cu telecomandă",
      "Accesorii: capete, inele, bracket-uri",
    ],
    examples: [
      "Șină dublă pentru perdea + draperie",
      "Galerie decorativă din alamă",
      "Sistem motorizat smart-home",
      "Șine curbate pentru bow-window",
    ],
    metaTitle: "Șine & Galerii Brașov — SuperDecor",
    metaDescription:
      "Șine de tavan, galerii decorative și sisteme motorizate pentru perdele și draperii. Montaj profesional în Brașov.",
    ogTitle: "Șine & Galerii — SuperDecor Brașov",
    ogDescription: "Sisteme de prindere tehnice și decorative pentru orice fereastră.",
  },
};
