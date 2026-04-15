"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { regions } from "@/data/regions";
import { getRegionBadgeTone } from "@/lib/visuals";
import { regionIdentityBySlug } from "@/lib/regionIdentity";
import { RegionGlyph } from "@/components/RegionGlyph";
import { hoverLift, tapPress } from "@/lib/motion";
import { useSoundDesign } from "@/lib/soundDesign";

type BrainModule = {
  slug: string;
  title: string;
  tagline: string;
  href: string;
  accent: "cyan" | "violet" | "emerald" | "indigo" | "amber";
  x: number;
  y: number;
  icon: "logic" | "creative" | "skill" | "memory" | "future" | "ai";
  mood: string;
};

const modules: BrainModule[] = [
  {
    slug: regions[0].slug,
    title: regions[0].title,
    tagline: regions[0].tagline,
    href: `/region/${regions[0].slug}`,
    accent: regions[0].accent,
    x: 16,
    y: 35,
    icon: regionIdentityBySlug[regions[0].slug].icon,
    mood: regionIdentityBySlug[regions[0].slug].mood,
  },
  {
    slug: regions[1].slug,
    title: regions[1].title,
    tagline: regions[1].tagline,
    href: `/region/${regions[1].slug}`,
    accent: regions[1].accent,
    x: 37,
    y: 22,
    icon: regionIdentityBySlug[regions[1].slug].icon,
    mood: regionIdentityBySlug[regions[1].slug].mood,
  },
  {
    slug: regions[2].slug,
    title: regions[2].title,
    tagline: regions[2].tagline,
    href: `/region/${regions[2].slug}`,
    accent: regions[2].accent,
    x: 36,
    y: 63,
    icon: regionIdentityBySlug[regions[2].slug].icon,
    mood: regionIdentityBySlug[regions[2].slug].mood,
  },
  {
    slug: regions[3].slug,
    title: regions[3].title,
    tagline: regions[3].tagline,
    href: `/region/${regions[3].slug}`,
    accent: regions[3].accent,
    x: 59,
    y: 76,
    icon: regionIdentityBySlug[regions[3].slug].icon,
    mood: regionIdentityBySlug[regions[3].slug].mood,
  },
  {
    slug: regions[4].slug,
    title: regions[4].title,
    tagline: regions[4].tagline,
    href: `/region/${regions[4].slug}`,
    accent: regions[4].accent,
    x: 81,
    y: 45,
    icon: regionIdentityBySlug[regions[4].slug].icon,
    mood: regionIdentityBySlug[regions[4].slug].mood,
  },
  {
    slug: "ai-core",
    title: "AI Core",
    tagline: "Interactive persona console",
    href: "/ai-core",
    accent: "cyan",
    x: 58,
    y: 43,
    icon: regionIdentityBySlug["ai-core"].icon,
    mood: regionIdentityBySlug["ai-core"].mood,
  },
];

const connections: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 5],
  [2, 5],
  [5, 4],
  [2, 3],
  [3, 4],
  [1, 4],
];

const accentNodeStyles: Record<BrainModule["accent"], string> = {
  cyan: "bg-cyan-300 shadow-[0_0_26px_rgba(34,211,238,0.7)]",
  violet: "bg-violet-300 shadow-[0_0_26px_rgba(196,181,253,0.7)]",
  emerald: "bg-emerald-300 shadow-[0_0_26px_rgba(52,211,153,0.7)]",
  indigo: "bg-indigo-300 shadow-[0_0_26px_rgba(129,140,248,0.7)]",
  amber: "bg-amber-300 shadow-[0_0_26px_rgba(251,191,36,0.7)]",
};

const accentRingStyles: Record<BrainModule["accent"], string> = {
  cyan: "border-cyan-300/45",
  violet: "border-violet-300/45",
  emerald: "border-emerald-300/45",
  indigo: "border-indigo-300/45",
  amber: "border-amber-300/45",
};

const discoveryShortcuts = [
  { label: "AI Projects", href: "/region/logic-core#projects" },
  { label: "Skill Matrix", href: "/region/skill-matrix#skills" },
  { label: "Education", href: "/region/memory-vault#education" },
  { label: "Experience", href: "/region/memory-vault#experience" },
  { label: "Future Goals", href: "/region/future-vision#future-goals" },
  { label: "AI Persona", href: "/ai-core#ai-work" },
];

export function BrainNavigation() {
  const { playHover, playEnter, enabled } = useSoundDesign();

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-8 md:mb-10"
      >
        <p className="text-[11px] uppercase tracking-[0.33em] text-cyan-200">Brain Navigation Interface</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Explore the Neural Modules
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          Move through interconnected brain regions. Each node opens a dedicated intelligence module with smooth section transitions.
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">
          Directional Hint: Start with Logic Core for projects, then jump via Fast Discovery for skills, education, and AI work.
        </p>
      </motion.div>

      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="surface-ring relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/65 p-4 sm:p-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(125,211,252,0.14),transparent_32%),radial-gradient(circle_at_90%_0%,rgba(192,132,252,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(45,212,191,0.1),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />

          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {connections.map(([a, b], index) => (
              <motion.line
                key={`${a}-${b}`}
                x1={modules[a].x}
                y1={modules[a].y}
                x2={modules[b].x}
                y2={modules[b].y}
                stroke="rgba(148,163,184,0.55)"
                strokeWidth="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.24, 0.72, 0.24] }}
                transition={{ duration: 6 + index * 0.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {modules.map((module, index) => (
            <motion.div
              key={module.slug}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.07 }}
              whileHover={{ ...hoverLift, scale: 1.03 }}
              whileTap={tapPress}
              className="absolute"
              style={{ left: `${module.x}%`, top: `${module.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <Link
                href={module.href}
                aria-label={`Open ${module.title} module`}
                className="group relative block"
                onMouseEnter={() => {
                  if (enabled) void playHover();
                }}
                onClick={() => {
                  if (enabled) void playEnter();
                }}
              >
                <motion.span
                  aria-hidden
                  className={`absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border ${accentRingStyles[module.accent]}`}
                  animate={{ scale: [0.94, 1.12, 0.94], opacity: [0.35, 0.9, 0.35] }}
                  transition={{ duration: 2.8 + index * 0.22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <span
                  className={`relative block h-4 w-4 rounded-full ${accentNodeStyles[module.accent]} pulse-soft transition-transform duration-300 group-hover:scale-125`}
                />

                <span
                  className={`surface-ring absolute left-1/2 mt-3 w-42 -translate-x-1/2 rounded-xl border bg-slate-950/92 px-3 py-2 text-center backdrop-blur-sm transition duration-300 group-hover:border-white/28 ${getRegionBadgeTone(module.accent)}`}
                >
                  <span className="mx-auto mb-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/15 bg-white/5 text-slate-100">
                    <RegionGlyph name={module.icon} className="h-3.5 w-3.5" />
                  </span>
                  <strong className="block text-[11px] font-semibold tracking-[0.04em] text-white">{module.title}</strong>
                  <span className="mt-1 block text-[10px] leading-4 text-slate-300">{module.tagline}</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="surface-ring rounded-3xl border border-white/10 bg-slate-950/65 p-5 sm:p-6"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Quick Access Modules</p>
          <div className="mt-4 space-y-2.5">
            {modules.map((module) => (
              <Link
                key={`list-${module.slug}`}
                href={module.href}
                className="surface-ring interactive-surface interactive-press group flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/55 px-3 py-2.5 hover:border-white/30 hover:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${accentNodeStyles[module.accent]}`} />
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-medium text-slate-100">
                      <RegionGlyph name={module.icon} className="h-3.5 w-3.5 text-slate-300" />
                      {module.title}
                    </p>
                    <p className="text-[11px] text-slate-400">{module.mood}</p>
                  </div>
                </div>
                <span className="text-xs text-cyan-200/85 transition group-hover:translate-x-1">Enter</span>
              </Link>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-slate-900/55 p-3.5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Interaction Notes</p>
            <p className="mt-2 text-xs leading-6 text-slate-300">
              Node pulses indicate active neural pathways. Enter any module to transition deeper into that region of the mind.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-500/6 p-3.5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-200">Fast Discovery</p>
            <div className="mt-2 grid gap-2">
              {discoveryShortcuts.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => {
                    if (enabled) void playHover();
                  }}
                  onClick={() => {
                    if (enabled) void playEnter();
                  }}
                  className="interactive-surface interactive-press rounded-lg border border-white/10 bg-slate-900/55 px-3 py-2 text-xs text-slate-200 hover:border-cyan-200/40"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
