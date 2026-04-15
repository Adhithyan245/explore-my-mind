"use client";

import type { ReactNode } from "react";
import { SoundDesignProvider } from "@/lib/soundDesign";
import { InteractionInsightsProvider } from "@/lib/interactionInsights";
import { InteractionInsightCard } from "@/components/InteractionInsightCard";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SoundDesignProvider>
      <InteractionInsightsProvider>
        {children}
        <InteractionInsightCard />
      </InteractionInsightsProvider>
    </SoundDesignProvider>
  );
}

