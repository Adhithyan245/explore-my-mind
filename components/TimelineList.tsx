import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { leadership } from "@/data/leadership";

export function TimelineList() {
  return (
    <div className="space-y-4">
      <section id="education" className="content-anchor space-y-3">
        <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200">Education</p>
        {education.map((item) => (
          <article key={item.degree} className="surface-ring relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/55 p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(125,211,252,0.13),transparent_30%)]" />
            <div className="relative">
              <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
              <p className="mt-1 text-sm text-slate-300">{item.institution}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">{item.timeline}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="experience" className="content-anchor space-y-3">
        <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200">Experience</p>
        {experience.map((item) => (
          <article key={item.role} className="surface-ring relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/55 p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(125,211,252,0.13),transparent_30%)]" />
            <div className="relative">
              <h4 className="text-lg font-semibold text-white">{item.role}</h4>
              <p className="mt-1 text-sm text-slate-300">{item.company}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="leadership" className="content-anchor space-y-3">
        <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200">Leadership</p>
        {leadership.map((item) => (
          <article key={item.role} className="surface-ring relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/55 p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(125,211,252,0.13),transparent_30%)]" />
            <div className="relative">
              <h4 className="text-lg font-semibold text-white">{item.role}</h4>
              <p className="mt-1 text-sm text-slate-300">{item.organization}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

