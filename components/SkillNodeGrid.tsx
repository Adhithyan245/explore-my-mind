import { skills } from "@/data/skills";

const clusters = [
  { key: "languages", label: "Languages", tone: "border-cyan-300/35 bg-cyan-500/8 text-cyan-100" },
  { key: "ai_ml", label: "AI / ML", tone: "border-violet-300/35 bg-violet-500/8 text-violet-100" },
  { key: "advanced_ai", label: "Advanced AI", tone: "border-emerald-300/35 bg-emerald-500/8 text-emerald-100" },
  { key: "systems", label: "Systems + Deployment", tone: "border-amber-300/35 bg-amber-500/8 text-amber-100" },
] as const;

export function SkillNodeGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {clusters.map((cluster) => (
        <article key={cluster.key} className="surface-ring rounded-xl border border-white/10 bg-slate-900/55 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-white">{cluster.label}</p>
            <span className={`rounded-full border px-2 py-1 text-[11px] ${cluster.tone}`}>
              {skills[cluster.key].length} skills
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills[cluster.key].map((skill) => (
              <span
                key={skill}
                className="interactive-surface rounded-full border border-white/10 bg-slate-950/65 px-2.5 py-1 text-xs text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
