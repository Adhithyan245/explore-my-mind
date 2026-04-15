import type { Region } from "@/data/regions";

export const sectionDescriptions: Record<Region["slug"], { intro: string; detail: string }> = {
  "logic-core": {
    intro: "A systems-first lens on building AI that can reason, adapt, and execute with reliability.",
    detail:
      "This region captures my engineering approach to hybrid AI, reinforcement learning, and robotics-aware architecture designed for performance beyond controlled environments.",
  },
  "creative-cortex": {
    intro: "A studio for turning ambitious AI ideas into usable and meaningful experiences.",
    detail:
      "This region highlights exploratory thinking, rapid prototyping, and creative system design that keeps futuristic concepts grounded in practical value.",
  },
  "skill-matrix": {
    intro: "A structured capability map across AI modeling, systems engineering, and deployment execution.",
    detail:
      "This region shows the stack I rely on to move from research and model building to robust, production-oriented intelligent systems.",
  },
  "memory-vault": {
    intro: "A timeline of the academic, engineering, and leadership milestones that shaped my direction.",
    detail:
      "This region reflects how experience across learning, industry, and leadership refined my approach to building high-impact AI and robotics systems.",
  },
  "future-vision": {
    intro: "A mission-driven path toward autonomous systems operating in complex real-world environments.",
    detail:
      "This region outlines my long-term objective: intelligent systems that unify perception, reasoning, and action with dependable real-world behavior.",
  },
};

