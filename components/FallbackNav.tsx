"use client";

import Link from "next/link";
import { useState } from "react";
import { useSoundDesign } from "@/lib/soundDesign";

const fallbackLinks = [
  { label: "Projects", href: "/region/logic-core#projects" },
  { label: "Skills", href: "/region/skill-matrix#skills" },
  { label: "Education", href: "/region/memory-vault#education" },
  { label: "Experience", href: "/region/memory-vault#experience" },
  { label: "Future Goals", href: "/region/future-vision#future-goals" },
  { label: "AI Work", href: "/ai-core#ai-work" },
];

export function FallbackNav() {
  const [open, setOpen] = useState(false);
  const { enabled, ambience, setEnabled, setAmbience, playHover, playEnter } = useSoundDesign();

  return (
    <nav aria-label="Quick portfolio navigation" className="fixed bottom-4 right-4 z-30">
      <div className="surface-ring rounded-2xl border border-white/10 bg-slate-950/75 p-2 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((value) => !value)}
            className="interactive-surface interactive-press rounded-full border border-white/15 bg-slate-900/75 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-200 hover:border-cyan-200/45"
            aria-expanded={open}
            aria-controls="fallback-nav-links"
          >
            Quick Nav
          </button>
          <button
            onClick={() => setEnabled(!enabled)}
            onMouseEnter={() => void playHover()}
            className="interactive-surface interactive-press rounded-full border border-white/15 bg-slate-900/75 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-200 hover:border-cyan-200/45"
            aria-pressed={enabled}
          >
            Sound {enabled ? "On" : "Off"}
          </button>
          {enabled ? (
            <button
              onClick={() => setAmbience(!ambience)}
              onMouseEnter={() => void playHover()}
              className="interactive-surface interactive-press rounded-full border border-white/15 bg-slate-900/75 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-200 hover:border-cyan-200/45"
              aria-pressed={ambience}
            >
              Pulse {ambience ? "On" : "Off"}
            </button>
          ) : null}
        </div>
        {open ? (
          <div id="fallback-nav-links" className="mt-2 grid gap-2 sm:grid-cols-2">
            {fallbackLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  void playEnter();
                }}
                onMouseEnter={() => void playHover()}
                className="interactive-surface interactive-press rounded-lg border border-white/10 bg-slate-900/75 px-3 py-2 text-[11px] text-slate-200 hover:border-cyan-200/45"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}

