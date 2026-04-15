export default function Loading() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6">
        <div className="surface-ring loading-scan rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-5 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="signal-dot h-2.5 w-2.5 rounded-full bg-cyan-300" />
            <p className="text-xs uppercase tracking-[0.26em] text-slate-300">Synchronizing neural interface...</p>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-cyan-300/70" />
          </div>
        </div>
      </div>
    </main>
  );
}

