import type { Metadata } from "next";
import { CategoryLayout } from "@/components/category-layout";
import { shortCategories } from "@/lib/categories";

const data = shortCategories.mobila;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: data.href },
  openGraph: {
    title: data.ogTitle,
    description: data.ogDescription,
    url: data.href,
    images: [data.image],
  },
};

export default function MobilaLaComandaPage() {
  return <CategoryLayout category={data} />;
}
