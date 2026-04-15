import Link from "next/link";
import { BrainNavigation } from "@/components/BrainNavigation";
import { NeuralBackground } from "@/components/NeuralBackground";
import { FallbackNav } from "@/components/FallbackNav";

export default function MindPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <NeuralBackground />
      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 sm:px-6 sm:pt-8">
          <Link
            href="/"
            className="surface-ring interactive-surface interactive-press rounded-full border border-white/15 bg-slate-900/72 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 hover:border-cyan-200/40"
          >
            Landing
          </Link>
          <p className="hidden text-[10px] uppercase tracking-[0.33em] text-slate-400 sm:block">Neural Map Online</p>
          <Link
            href="/ai-core"
            className="surface-ring interactive-surface interactive-press rounded-full border border-cyan-300/30 bg-cyan-500/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 hover:border-cyan-200/55"
          >
            AI Core
          </Link>
        </header>
        <BrainNavigation />
        <FallbackNav />
      </div>
    </main>
  );
}
