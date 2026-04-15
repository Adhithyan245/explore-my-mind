"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/data/hero";
import { personalIntro } from "@/data/personal";
import { profileLinks } from "@/data/links";
import { hoverLift, tapPress } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-18 text-center md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="surface-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/50 px-4 py-2"
      >
        <span className="signal-dot h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
        <p className="text-[10px] uppercase tracking-[0.34em] text-cyan-100">{heroContent.eyebrow}</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.1 }}
        className="mt-8 text-balance font-semibold tracking-tight text-white text-5xl sm:text-6xl md:text-7xl"
      >
        {heroContent.title.replace(heroContent.titleAccent, "")} <span className="text-gradient">{heroContent.titleAccent}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.28 }}
        className="mt-7 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
      >
        {heroContent.subtitle}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.32 }}
        className="mt-3 max-w-3xl text-sm font-medium leading-7 text-cyan-100/90 sm:text-base"
      >
        {personalIntro.shortTagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.34 }}
        className="mt-3 max-w-2xl text-sm leading-7 text-slate-400"
      >
        {personalIntro.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-11 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <motion.div whileHover={hoverLift} whileTap={tapPress} className="w-full sm:w-auto">
          <Link
            href={heroContent.primaryCta.href}
            className="surface-ring interactive-surface interactive-press group inline-flex w-full items-center justify-center rounded-full border border-cyan-200/50 bg-gradient-to-r from-cyan-300 to-sky-300 px-8 py-3.5 text-sm font-semibold tracking-wide text-slate-950 transition duration-300 hover:from-cyan-200 hover:to-sky-200 sm:w-auto"
          >
            {heroContent.primaryCta.label}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{"->"}</span>
          </Link>
        </motion.div>
        <motion.div whileHover={hoverLift} whileTap={tapPress} className="w-full sm:w-auto">
          <Link
            href={heroContent.secondaryCta.href}
            className="surface-ring interactive-surface interactive-press inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-slate-900/70 px-8 py-3.5 text-sm font-semibold tracking-wide text-slate-100 hover:border-cyan-200/45 hover:bg-slate-900/90 sm:w-auto"
          >
            {heroContent.secondaryCta.label}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.24em] text-slate-400"
      >
        {heroContent.regionLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.62 }}
        className="mt-4 flex items-center gap-3 text-xs text-slate-300"
      >
        <a href={profileLinks.github} target="_blank" rel="noopener noreferrer" className="interactive-surface rounded-full border border-white/12 px-3 py-1.5 hover:border-cyan-200/45">
          GitHub
        </a>
        <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" className="interactive-surface rounded-full border border-white/12 px-3 py-1.5 hover:border-cyan-200/45">
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}

