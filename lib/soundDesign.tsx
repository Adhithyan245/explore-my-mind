"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type SoundDesignContextValue = {
  enabled: boolean;
  ambience: boolean;
  setEnabled: (value: boolean) => void;
  setAmbience: (value: boolean) => void;
  playHover: () => void;
  playEnter: () => void;
};

const SoundDesignContext = createContext<SoundDesignContextValue | null>(null);

function createTone(ctx: AudioContext, frequency: number, durationMs: number, gainValue: number) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const now = ctx.currentTime;

  osc.type = "sine";
  osc.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + durationMs / 1000 + 0.02);
}

export function SoundDesignProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabledState] = useState(false);
  const [ambience, setAmbienceState] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambienceTimerRef = useRef<number | null>(null);

  const ensureCtx = useCallback(async () => {
    if (typeof window === "undefined") return null;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new window.AudioContext();
    }

    if (audioCtxRef.current.state === "suspended") {
      await audioCtxRef.current.resume();
    }

    return audioCtxRef.current;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedEnabled = window.localStorage.getItem("emm-sound-enabled");
    const savedAmbience = window.localStorage.getItem("emm-sound-ambience");

    if (savedEnabled === "true") setEnabledState(true);
    if (savedAmbience === "true") setAmbienceState(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("emm-sound-enabled", String(enabled));
      window.localStorage.setItem("emm-sound-ambience", String(ambience));
    }
  }, [enabled, ambience]);

  useEffect(() => {
    const shouldRunAmbience = enabled && ambience;

    if (!shouldRunAmbience) {
      if (ambienceTimerRef.current) {
        window.clearInterval(ambienceTimerRef.current);
        ambienceTimerRef.current = null;
      }
      return;
    }

    const start = async () => {
      const ctx = await ensureCtx();
      if (!ctx) return;

      const tick = () => {
        createTone(ctx, 182, 260, 0.006);
      };

      tick();
      ambienceTimerRef.current = window.setInterval(tick, 8000);
    };

    void start();

    return () => {
      if (ambienceTimerRef.current) {
        window.clearInterval(ambienceTimerRef.current);
        ambienceTimerRef.current = null;
      }
    };
  }, [enabled, ambience, ensureCtx]);

  const playHover = useCallback(async () => {
    if (!enabled) return;
    const ctx = await ensureCtx();
    if (!ctx) return;
    createTone(ctx, 340, 90, 0.008);
  }, [enabled, ensureCtx]);

  const playEnter = useCallback(async () => {
    if (!enabled) return;
    const ctx = await ensureCtx();
    if (!ctx) return;
    createTone(ctx, 280, 120, 0.01);
    window.setTimeout(() => createTone(ctx, 420, 110, 0.008), 85);
  }, [enabled, ensureCtx]);

  const setEnabled = useCallback((value: boolean) => {
    setEnabledState(value);
  }, []);

  const setAmbience = useCallback((value: boolean) => {
    setAmbienceState(value);
  }, []);

  const value = useMemo(
    () => ({ enabled, ambience, setEnabled, setAmbience, playHover, playEnter }),
    [enabled, ambience, setEnabled, setAmbience, playHover, playEnter]
  );

  return <SoundDesignContext.Provider value={value}>{children}</SoundDesignContext.Provider>;
}

export function useSoundDesign() {
  const context = useContext(SoundDesignContext);
  if (!context) {
    throw new Error("useSoundDesign must be used inside SoundDesignProvider");
  }
  return context;
}

