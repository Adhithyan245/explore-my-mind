import Link from "next/link";
import { AICorePlaceholder } from "@/components/AICorePlaceholder";
import { NeuralBackground } from "@/components/NeuralBackground";
import { FallbackNav } from "@/components/FallbackNav";

export default function AICorePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <NeuralBackground />
      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl justify-between px-5 pt-6 sm:px-6 sm:pt-8">
          <Link
            href="/mind"
            className="surface-ring interactive-surface interactive-press rounded-full border border-white/15 bg-slate-900/72 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 hover:border-cyan-200/40"
          >
            Brain Map
          </Link>
        </header>
        <AICorePlaceholder />
        <FallbackNav />
      </div>
    </main>
  );
}
