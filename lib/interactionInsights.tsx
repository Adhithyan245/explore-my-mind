"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type SectionKey = "logic-core" | "creative-cortex" | "skill-matrix" | "memory-vault" | "future-vision" | "ai-core";

type InteractionInsight = {
  title: string;
  note: string;
};

type InteractionContextValue = {
  counts: Record<SectionKey, number>;
  firstSection: SectionKey | null;
  registerVisit: (section: SectionKey) => void;
  getInsight: () => InteractionInsight | null;
};

const STORAGE_KEY = "emm-interaction-insights";

const INITIAL_COUNTS: Record<SectionKey, number> = {
  "logic-core": 0,
  "creative-cortex": 0,
  "skill-matrix": 0,
  "memory-vault": 0,
  "future-vision": 0,
  "ai-core": 0,
};

const InteractionInsightsContext = createContext<InteractionContextValue | null>(null);

export function InteractionInsightsProvider({ children }: { children: ReactNode }) {
  const [counts, setCounts] = useState(INITIAL_COUNTS);
  const [firstSection, setFirstSection] = useState<SectionKey | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as { counts?: Record<SectionKey, number>; firstSection?: SectionKey | null };
      if (parsed.counts) setCounts({ ...INITIAL_COUNTS, ...parsed.counts });
      if (parsed.firstSection) setFirstSection(parsed.firstSection);
    } catch {
      // ignore invalid local storage payload
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ counts, firstSection }));
  }, [counts, firstSection]);

  const registerVisit = useCallback((section: SectionKey) => {
    setCounts((prev) => ({ ...prev, [section]: prev[section] + 1 }));
    setFirstSection((prev) => prev ?? section);
  }, []);

  const getInsight = useCallback((): InteractionInsight | null => {
    const total = Object.values(counts).reduce((sum, value) => sum + value, 0);
    if (total < 3) return null;

    if (firstSection === "creative-cortex") {
      return {
        title: "You explored the creative side first.",
        note: "You seem to value experimental thinking and concept-driven design.",
      };
    }

    const technicalScore = counts["logic-core"] + counts["skill-matrix"];
    const futureScore = counts["future-vision"] + counts["ai-core"];
    const memoryScore = counts["memory-vault"];
    const creativeScore = counts["creative-cortex"];

    const scoreEntries = [
      { key: "technical", value: technicalScore },
      { key: "future", value: futureScore },
      { key: "memory", value: memoryScore },
      { key: "creative", value: creativeScore },
    ].sort((a, b) => b.value - a.value);

    if (scoreEntries[0].value < 2) return null;

    if (scoreEntries[0].key === "technical") {
      return {
        title: "You seem drawn to technical systems.",
        note: "Logic Core and Skill Matrix are shaping most of your exploration.",
      };
    }

    if (scoreEntries[0].key === "future") {
      return {
        title: "You appear most interested in future-facing work.",
        note: "Future Vision and AI Core are currently your strongest focus.",
      };
    }

    if (scoreEntries[0].key === "memory") {
      return {
        title: "You are exploring the journey behind the work.",
        note: "Memory Vault seems to be your primary route through the portfolio.",
      };
    }

    if (scoreEntries[0].key === "creative") {
      return {
        title: "You seem to favor creative exploration.",
        note: "Creative Cortex is currently leading your discovery path.",
      };
    }

    return null;
  }, [counts, firstSection]);

  const value = useMemo(
    () => ({ counts, firstSection, registerVisit, getInsight }),
    [counts, firstSection, registerVisit, getInsight]
  );

  return <InteractionInsightsContext.Provider value={value}>{children}</InteractionInsightsContext.Provider>;
}

export function useInteractionInsights() {
  const context = useContext(InteractionInsightsContext);
  if (!context) throw new Error("useInteractionInsights must be used within InteractionInsightsProvider");
  return context;
}

export function sectionFromPath(pathname: string): SectionKey | null {
  if (pathname.startsWith("/region/logic-core")) return "logic-core";
  if (pathname.startsWith("/region/creative-cortex")) return "creative-cortex";
  if (pathname.startsWith("/region/skill-matrix")) return "skill-matrix";
  if (pathname.startsWith("/region/memory-vault")) return "memory-vault";
  if (pathname.startsWith("/region/future-vision")) return "future-vision";
  if (pathname.startsWith("/ai-core")) return "ai-core";
  return null;
}

