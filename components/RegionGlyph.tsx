type GlyphName = "logic" | "creative" | "skill" | "memory" | "future" | "ai";

export function RegionGlyph({ name, className = "h-4 w-4" }: { name: GlyphName; className?: string }) {
  const common = "stroke-current fill-none";

  if (name === "logic") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path className={common} strokeWidth="1.8" d="M4 6h6v6H4zM14 12h6v6h-6zM10 9h4M12 9v3M10 15h4" />
      </svg>
    );
  }

  if (name === "creative") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path className={common} strokeWidth="1.8" d="M5 14c0-4 3-7 7-7 3 0 5 2 5 5 0 4-3 7-7 7-3 0-5-2-5-5z" />
        <path className={common} strokeWidth="1.8" d="M7 14c2-2 4-2 6 0M10 8l3 3" />
      </svg>
    );
  }

  if (name === "skill") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path className={common} strokeWidth="1.8" d="M4 6h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6zM4 14h6v6H4z" />
      </svg>
    );
  }

  if (name === "memory") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path className={common} strokeWidth="1.8" d="M5 7h14v10H5zM8 5v4M16 5v4M8 12h8M8 15h5" />
      </svg>
    );
  }

  if (name === "future") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path className={common} strokeWidth="1.8" d="M4 16l6-6 4 4 6-6M14 8h6v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path className={common} strokeWidth="1.8" d="M12 4l6 3.5v9L12 20l-6-3.5v-9zM9 12h6M12 9v6" />
    </svg>
  );
}

