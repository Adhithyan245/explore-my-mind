import { notFound } from "next/navigation";
import { RegionView } from "@/components/RegionView";
import { regionBySlug, type Region } from "@/data/regions";
import { NeuralBackground } from "@/components/NeuralBackground";
import { FallbackNav } from "@/components/FallbackNav";

export function generateStaticParams() {
  return Object.keys(regionBySlug).map((slug) => ({ slug }));
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: Region["slug"] }>;
}) {
  const { slug } = await params;

  if (!regionBySlug[slug]) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <NeuralBackground />
      <div className="relative z-10">
        <RegionView slug={slug} />
        <FallbackNav />
      </div>
    </main>
  );
}
