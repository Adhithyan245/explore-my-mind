import { ReactNode } from "react";

export function GlowCard({
  children,
  className = "",
  overlayClass = "",
}: {
  children: ReactNode;
  className?: string;
  overlayClass?: string;
}) {
  return (
    <div
      className={`surface-ring interactive-surface relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl md:p-7 ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(125,211,252,0.13),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(196,181,253,0.12),transparent_30%)] ${overlayClass}`}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5" />
      <div className="relative">{children}</div>
    </div>
  );
}
