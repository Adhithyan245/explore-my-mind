"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { sectionFromPath, useInteractionInsights } from "@/lib/interactionInsights";

export function InteractionInsightCard() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const { registerVisit, getInsight } = useInteractionInsights();
  const insight = getInsight();

  useEffect(() => {
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    const section = sectionFromPath(pathname);
    if (section) registerVisit(section);
  }, [pathname, registerVisit]);

  if (!insight || pathname === "/") return null;

  return (
    <div className="pointer-events-none fixed bottom-20 left-4 z-30 max-w-xs sm:left-5">
      <AnimatePresence mode="wait">
        <motion.aside
          key={insight.title}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 8, filter: "blur(3px)" }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="surface-ring rounded-xl border border-cyan-300/20 bg-slate-950/75 px-3 py-2.5 backdrop-blur-xl"
        >
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-200">Adaptive Insight</p>
          <p className="mt-1 text-sm font-medium text-slate-100">{insight.title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-300">{insight.note}</p>
        </motion.aside>
      </AnimatePresence>
    </div>
  );
}

