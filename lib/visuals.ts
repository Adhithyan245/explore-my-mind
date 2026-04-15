const regionGradients = [
  "from-cyan-300/30 via-sky-500/20 to-blue-900/5",
  "from-fuchsia-300/30 via-violet-500/20 to-indigo-900/5",
  "from-emerald-300/30 via-teal-500/20 to-cyan-900/5",
  "from-indigo-300/30 via-sky-500/20 to-slate-900/5",
  "from-amber-300/30 via-orange-500/20 to-rose-900/5",
];

const regionAuras: Record<string, string> = {
  cyan: "shadow-[0_0_42px_rgba(34,211,238,0.2)]",
  violet: "shadow-[0_0_42px_rgba(192,132,252,0.2)]",
  emerald: "shadow-[0_0_42px_rgba(52,211,153,0.2)]",
  indigo: "shadow-[0_0_42px_rgba(129,140,248,0.2)]",
  amber: "shadow-[0_0_42px_rgba(251,191,36,0.2)]",
};

export function getRegionGradient(index: number): string {
  return regionGradients[index % regionGradients.length];
}

export function getRegionAura(accent: string): string {
  return regionAuras[accent] ?? "shadow-[0_0_42px_rgba(148,163,184,0.2)]";
}

export function getRegionBadgeTone(accent: string): string {
  const tones: Record<string, string> = {
    cyan: "text-cyan-100 border-cyan-300/35 bg-cyan-400/10",
    violet: "text-violet-100 border-violet-300/35 bg-violet-400/10",
    emerald: "text-emerald-100 border-emerald-300/35 bg-emerald-400/10",
    indigo: "text-indigo-100 border-indigo-300/35 bg-indigo-400/10",
    amber: "text-amber-100 border-amber-300/35 bg-amber-400/10",
  };

  return tones[accent] ?? "text-slate-100 border-slate-300/35 bg-slate-400/10";
}
