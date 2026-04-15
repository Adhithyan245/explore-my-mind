"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  x: `${(index * 13.6) % 100}%`,
  y: `${(index * 23.8) % 100}%`,
  duration: 8 + (index % 6),
  delay: (index % 7) * 0.24,
}));

const links = [
  { x1: "14%", y1: "23%", x2: "36%", y2: "38%" },
  { x1: "36%", y1: "38%", x2: "61%", y2: "29%" },
  { x1: "61%", y1: "29%", x2: "79%", y2: "42%" },
  { x1: "22%", y1: "66%", x2: "41%", y2: "56%" },
  { x1: "41%", y1: "56%", x2: "67%", y2: "62%" },
  { x1: "67%", y1: "62%", x2: "86%", y2: "49%" },
  { x1: "36%", y1: "38%", x2: "41%", y2: "56%" },
  { x1: "61%", y1: "29%", x2: "67%", y2: "62%" },
];

export function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(56,189,248,0.15),transparent_34%),radial-gradient(circle_at_80%_8%,rgba(168,85,247,0.12),transparent_30%),radial-gradient(circle_at_52%_92%,rgba(45,212,191,0.1),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:84px_84px] opacity-[0.14]" />

      <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {links.map((line, index) => (
          <motion.line
            key={`${line.x1}-${line.y1}-${index}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(125,211,252,0.5)"
            strokeWidth="0.12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.15, 0.65, 0.15] }}
            transition={{ duration: 7 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/85 shadow-[0_0_16px_rgba(125,211,252,0.9)]"
          style={{ left: particle.x, top: particle.y }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2], scale: [0.9, 1.35, 0.9] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.45)_100%)]" />
    </div>
  );
}
