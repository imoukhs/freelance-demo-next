import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNiche, DEFAULT_NICHE } from "@/lib/niches";
import DemoPage from "@/components/DemoPage";

interface Props {
  searchParams: { niche?: string };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const slug = searchParams.niche ?? DEFAULT_NICHE;
  const niche = getNiche(slug);
  if (!niche) return { title: "Demo Not Found" };
  return {
    title: `${niche.businessName} — Demo by King`,
    description: niche.description,
  };
}

export default function Demo({ searchParams }: Props) {
  const slug = searchParams.niche ?? DEFAULT_NICHE;
  const niche = getNiche(slug);
  if (!niche) notFound();
  return <DemoPage config={niche} />;
}
