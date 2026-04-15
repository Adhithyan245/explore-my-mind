import type { Region } from "@/data/regions";

type MotionVariant = "sharp" | "fluid" | "modular" | "reflective" | "expansive" | "sentient";

export type RegionIdentity = {
  icon: "logic" | "creative" | "skill" | "memory" | "future" | "ai";
  mood: string;
  panelOverlay: string;
  frameOverlay: string;
  panelAccent: string;
  motion: MotionVariant;
  rhythm: "compact" | "spacious";
};

export const regionIdentityBySlug: Record<Region["slug"] | "ai-core", RegionIdentity> = {
  "logic-core": {
    icon: "logic",
    mood: "Structured and precise",
    panelOverlay:
      "bg-[linear-gradient(120deg,rgba(125,211,252,0.14),rgba(15,23,42,0.04)_48%,rgba(125,211,252,0.08))]",
    frameOverlay:
      "bg-[radial-gradient(circle_at_8%_10%,rgba(56,189,248,0.15),transparent_34%),linear-gradient(rgba(125,211,252,0.06)_1px,transparent_1px)] bg-[size:auto,20px_20px]",
    panelAccent: "border-cyan-200/26",
    motion: "sharp",
    rhythm: "compact",
  },
  "creative-cortex": {
    icon: "creative",
    mood: "Fluid and expressive",
    panelOverlay:
      "bg-[radial-gradient(circle_at_18%_10%,rgba(217,70,239,0.16),transparent_34%),radial-gradient(circle_at_78%_70%,rgba(192,132,252,0.13),transparent_35%)]",
    frameOverlay:
      "bg-[radial-gradient(circle_at_8%_12%,rgba(217,70,239,0.16),transparent_36%),radial-gradient(circle_at_88%_80%,rgba(168,85,247,0.14),transparent_32%)]",
    panelAccent: "border-violet-200/24",
    motion: "fluid",
    rhythm: "spacious",
  },
  "skill-matrix": {
    icon: "skill",
    mood: "Modular and intelligent",
    panelOverlay:
      "bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:24px_24px]",
    frameOverlay:
      "bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.14),transparent_30%),linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]",
    panelAccent: "border-emerald-200/26",
    motion: "modular",
    rhythm: "compact",
  },
  "memory-vault": {
    icon: "memory",
    mood: "Reflective and archival",
    panelOverlay:
      "bg-[linear-gradient(180deg,rgba(129,140,248,0.13),rgba(15,23,42,0.03)_55%,rgba(148,163,184,0.06))]",
    frameOverlay:
      "bg-[radial-gradient(circle_at_10%_8%,rgba(129,140,248,0.15),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(148,163,184,0.11),transparent_40%)]",
    panelAccent: "border-indigo-200/24",
    motion: "reflective",
    rhythm: "spacious",
  },
  "future-vision": {
    icon: "future",
    mood: "Aspirational and expansive",
    panelOverlay:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.15),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(251,146,60,0.14),transparent_33%)]",
    frameOverlay:
      "bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.14),transparent_36%),radial-gradient(circle_at_88%_0%,rgba(251,146,60,0.12),transparent_30%)]",
    panelAccent: "border-amber-200/25",
    motion: "expansive",
    rhythm: "spacious",
  },
  "ai-core": {
    icon: "ai",
    mood: "Sleek and sentient",
    panelOverlay:
      "bg-[radial-gradient(circle_at_8%_10%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_90%_0%,rgba(192,132,252,0.13),transparent_32%)]",
    frameOverlay:
      "bg-[radial-gradient(circle_at_10%_8%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:auto,30px_30px]",
    panelAccent: "border-cyan-200/27",
    motion: "sentient",
    rhythm: "compact",
  },
};

