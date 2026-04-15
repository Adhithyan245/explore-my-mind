"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RegionGlyph } from "@/components/RegionGlyph";
import { regionIdentityBySlug } from "@/lib/regionIdentity";
import { aiCoreContent, aiCoreResponses } from "@/data/aiCore";
import { hoverLift, tapPress } from "@/lib/motion";

export function AICorePlaceholder() {
  const [activePrompt, setActivePrompt] = useState(aiCoreContent.suggestions[0]);
  const identity = regionIdentityBySlug["ai-core"];

  const activeResponse = useMemo(() => aiCoreResponses[activePrompt] ?? "Response placeholder", [activePrompt]);

  return (
    <section id="ai-work" className="content-anchor mx-auto w-full max-w-5xl px-5 pb-20 pt-16 sm:px-6 md:pt-20">
      <div className="surface-ring relative overflow-hidden rounded-3xl border border-cyan-200/22 bg-slate-950/74 p-5 backdrop-blur-xl sm:p-7 md:p-8">
        <div className={`pointer-events-none absolute inset-0 ${identity.frameOverlay}`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.33em] text-cyan-200">
                <RegionGlyph name="ai" className="h-3.5 w-3.5" />
                AI Persona Console
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{aiCoreContent.title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{aiCoreContent.subtitle}</p>
            </div>
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-100">
              AI Layer Ready
            </span>
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-slate-900/55 p-4 sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Suggested Prompts</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {aiCoreContent.suggestions.map((message) => (
                <motion.button
                  key={message}
                  onClick={() => setActivePrompt(message)}
                  whileHover={hoverLift}
                  whileTap={tapPress}
                  className={`interactive-surface interactive-press rounded-full border px-3 py-1.5 text-xs transition duration-300 ${
                    activePrompt === message
                      ? "border-cyan-200/65 bg-cyan-400/12 text-cyan-100"
                      : "border-white/12 bg-slate-900/70 text-slate-200 hover:border-cyan-200/40"
                  }`}
                >
                  {message}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-cyan-200/18 bg-gradient-to-br from-slate-950/88 via-slate-900/72 to-slate-950/88 p-4 sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Conversation Preview</p>

            <div className="mt-4 space-y-3">
              <motion.div
                key={activePrompt}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="ml-auto max-w-[92%] rounded-2xl rounded-br-md border border-white/10 bg-slate-800/75 px-4 py-3 text-sm leading-6 text-slate-100 sm:max-w-[80%]"
              >
                {activePrompt}
              </motion.div>

              <motion.div
                key={activeResponse}
                initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[95%] rounded-2xl rounded-bl-md border border-cyan-200/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/75 to-violet-500/10 px-4 py-3 text-sm leading-6 text-slate-200 sm:max-w-[82%]"
              >
                <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
                  <RegionGlyph name="ai" className="h-3.5 w-3.5" />
                  AI Version
                </div>
                {activeResponse}
              </motion.div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/65 p-3 sm:p-4">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/75 px-3 py-2.5 text-sm text-slate-500">
                <span className="signal-dot h-2 w-2 rounded-full bg-cyan-300/70" />
                Ask the AI version of me... (backend integration coming soon)
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span>Input disabled in frontend-only mode</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5 uppercase tracking-[0.18em]">Readiness: 92%</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-400">{aiCoreContent.integrationNote}</p>
        </div>
      </div>
    </section>
  );
}

