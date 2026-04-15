import Link from "next/link";
import { notFound } from "next/navigation";
import { regionBySlug, type Region } from "@/data/regions";
import { GlowCard } from "@/components/GlowCard";
import { SkillNodeGrid } from "@/components/SkillNodeGrid";
import { TimelineList } from "@/components/TimelineList";
import { AnimatedPanel } from "@/components/AnimatedPanel";
import { getRegionBadgeTone } from "@/lib/visuals";
import { regionIdentityBySlug } from "@/lib/regionIdentity";
import { RegionGlyph } from "@/components/RegionGlyph";
import { sectionDescriptions } from "@/data/sectionDescriptions";
import { projects } from "@/data/projects";
import { futureVision } from "@/data/futureGoals";

export function RegionView({ slug }: { slug: Region["slug"] }) {
  const region = regionBySlug[slug];

  if (!region) {
    notFound();
  }

  const identity = regionIdentityBySlug[slug];
  const sectionContent = sectionDescriptions[slug];

  const introVariant =
    identity.motion === "sharp"
      ? "slide-left"
      : identity.motion === "fluid"
        ? "soft"
        : identity.motion === "modular"
          ? "rise"
          : identity.motion === "reflective"
            ? "slide-right"
            : "soft";

  const detailVariant = identity.motion === "sharp" || identity.motion === "modular" ? "rise" : "soft";
  const spacingClass = identity.rhythm === "spacious" ? "mt-10" : "mt-8";
  const sectionGuide = [
    { label: "Overview", href: "#overview" },
    { label: "Focus", href: "#focus-areas" },
    { label: "Highlights", href: "#highlights" },
  ];

  if (slug === "logic-core") sectionGuide.push({ label: "Projects", href: "#projects" });
  if (slug === "skill-matrix") sectionGuide.push({ label: "Skills", href: "#skills" });
  if (slug === "memory-vault") {
    sectionGuide.push(
      { label: "Timeline", href: "#timeline" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#experience" }
    );
  }
  if (slug === "future-vision") sectionGuide.push({ label: "Future Goals", href: "#future-goals" });

  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-14 sm:px-6 md:pt-18">
      <div className={`pointer-events-none absolute inset-0 opacity-80 ${identity.frameOverlay}`} />
      <AnimatedPanel variant={introVariant}>
        <div id="overview" className="content-anchor relative flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.28em] ${getRegionBadgeTone(region.accent)}`}
            >
              <RegionGlyph name={identity.icon} className="h-3.5 w-3.5" />
              Mind Region
            </span>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">{region.title}</h1>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{sectionContent.intro}</p>
            <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">{sectionContent.detail}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">{identity.mood}</p>
          </div>
          <Link
            href="/mind"
            className="surface-ring interactive-surface interactive-press rounded-full border border-white/15 bg-slate-900/65 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 hover:border-cyan-200/50"
          >
            Brain Map
          </Link>
        </div>
      </AnimatedPanel>

      <nav aria-label="Section guide" className="relative mt-5">
        <div className="surface-ring flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-slate-900/55 p-2.5">
          <p className="px-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">Section Guide</p>
          {sectionGuide.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="interactive-surface interactive-press rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-200 hover:border-cyan-200/45"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className={`${spacingClass} grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`}>
        <AnimatedPanel delay={0.08} variant={detailVariant}>
          <GlowCard className={identity.panelAccent} overlayClass={identity.panelOverlay}>
            <div id="focus-areas" className="content-anchor" />
            <h3 className="text-lg font-semibold text-white">Focus Areas</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-300">
              {region.focusAreas.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlowCard>
        </AnimatedPanel>

        <AnimatedPanel delay={0.14} variant={detailVariant}>
          <GlowCard className={identity.panelAccent} overlayClass={identity.panelOverlay}>
            <div id="highlights" className="content-anchor" />
            <h3 className="text-lg font-semibold text-white">Highlights</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-300">
              {region.highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlowCard>
        </AnimatedPanel>
      </div>

      {slug === "logic-core" ? (
        <div className="mt-4">
          <AnimatedPanel delay={0.2} variant="rise">
            <GlowCard className={identity.panelAccent} overlayClass={identity.panelOverlay}>
              <div id="projects" className="content-anchor" />
              <h3 className="text-lg font-semibold text-white">Technical Projects</h3>
              <div className="mt-4 space-y-3">
                {projects.map((project) => (
                  <article key={project.title} className="interactive-surface rounded-xl border border-white/10 bg-slate-900/50 p-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{project.focus}</p>
                    <h4 className="mt-1 text-sm font-semibold text-white">{project.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>
                    <p className="mt-2 text-xs text-slate-400">{project.tech.join(" • ")}</p>
                  </article>
                ))}
              </div>
            </GlowCard>
          </AnimatedPanel>
        </div>
      ) : null}

      {slug === "skill-matrix" ? (
        <div className="mt-4">
          <AnimatedPanel delay={0.2} variant="rise">
            <GlowCard className={identity.panelAccent} overlayClass={identity.panelOverlay}>
              <div id="skills" className="content-anchor" />
              <h3 className="text-lg font-semibold text-white">Interactive Skill Network</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Replace these with your exact stack, tools, and confidence levels.</p>
              <div className="mt-4">
                <SkillNodeGrid />
              </div>
            </GlowCard>
          </AnimatedPanel>
        </div>
      ) : null}

      {slug === "memory-vault" ? (
        <div className="mt-4">
          <AnimatedPanel delay={0.2} variant="soft">
            <GlowCard className={identity.panelAccent} overlayClass={identity.panelOverlay}>
              <div id="timeline" className="content-anchor" />
              <h3 className="text-lg font-semibold text-white">Experience Timeline</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Scroll through the timeline or use the guide above to jump directly to education, experience, and leadership.
              </p>
              <div className="mt-4">
                <TimelineList />
              </div>
            </GlowCard>
          </AnimatedPanel>
        </div>
      ) : null}

      {slug === "future-vision" ? (
        <div className="mt-4">
          <AnimatedPanel delay={0.2} variant="soft">
            <GlowCard className={identity.panelAccent} overlayClass={identity.panelOverlay}>
              <div id="future-goals" className="content-anchor" />
              <h3 className="text-lg font-semibold text-white">Mission</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{futureVision.mission}</p>
              <h4 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Core Interests</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {futureVision.interests.map((interest) => (
                  <span key={interest} className="interactive-surface rounded-full border border-white/10 bg-slate-900/65 px-3 py-1 text-xs text-slate-200">
                    {interest}
                  </span>
                ))}
              </div>
              <h4 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Long-Term Direction</h4>
              <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-sm leading-7 text-slate-300">{futureVision.long_term}</p>
              </div>
            </GlowCard>
          </AnimatedPanel>
        </div>
      ) : null}
    </section>
  );
}

