export type Region = {
  slug: "logic-core" | "creative-cortex" | "skill-matrix" | "memory-vault" | "future-vision";
  title: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  highlights: string[];
  accent: "cyan" | "violet" | "emerald" | "indigo" | "amber";
};

export const regions: Region[] = [
  {
    slug: "logic-core",
    title: "Logic Core",
    tagline: "Systems thinking and technical precision",
    description:
      "The strategic engine of my work, where hybrid AI design, technical clarity, and disciplined execution converge to build dependable intelligent systems.",
    focusAreas: ["AI-centric project design", "Problem decomposition", "Robotics-first thinking", "Scalable architecture"],
    highlights: [
      "Built data-driven interfaces that turn messy information into guided decision flows.",
      "Prefer rapid prototyping followed by structured hardening for production readiness.",
      "Think in modules, feedback loops, and system constraints before writing code.",
    ],
    accent: "cyan",
  },
  {
    slug: "creative-cortex",
    title: "Creative Cortex",
    tagline: "Inventive exploration and original concepts",
    description:
      "A creative lab where future-facing AI concepts are explored, stress-tested, and transformed into purposeful product directions.",
    focusAreas: ["Concept incubation", "Visual storytelling", "Rapid experiment loops", "Human-centered innovation"],
    highlights: [
      "Design ideas start as interactions, not pages, then evolve into complete experiences.",
      "Blend aesthetics with systems behavior to make interfaces feel alive and intentional.",
      "Use constraints as creative fuel rather than limitations.",
    ],
    accent: "violet",
  },
  {
    slug: "skill-matrix",
    title: "Skill Matrix",
    tagline: "Capabilities mapped as connected intelligence",
    description:
      "A networked view of the capabilities I use to build intelligent products, connecting modeling depth, engineering discipline, and deployment readiness.",
    focusAreas: ["Full-stack engineering", "AI integration readiness", "Frontend architecture", "Developer tooling"],
    highlights: [
      "Strong focus on TypeScript, React ecosystems, and product-grade frontend systems.",
      "Comfortable with model-powered product patterns and API-first architecture.",
      "Prioritize clean abstractions and reusable components.",
    ],
    accent: "emerald",
  },
  {
    slug: "memory-vault",
    title: "Memory Vault",
    tagline: "Milestones, growth arcs, and evolution",
    description:
      "An evolving record of learning, execution, and leadership milestones that shaped my direction in AI, robotics, and intelligent system design.",
    focusAreas: ["Learning milestones", "Experience evolution", "Project impact", "Personal growth trajectory"],
    highlights: [
      "Progress built through consistent iteration and increasingly ambitious technical goals.",
      "Each milestone reinforces depth in AI, software systems, and product execution.",
      "Growth mindset centered on curiosity, rigor, and implementation speed.",
    ],
    accent: "indigo",
  },
  {
    slug: "future-vision",
    title: "Future Vision",
    tagline: "Ambitions for AI, robotics, and intelligent systems",
    description:
      "A focused roadmap for building autonomous intelligent systems that combine ambitious AI research, robotics potential, and meaningful real-world impact.",
    focusAreas: ["AI-native products", "Embodied intelligence", "Autonomous systems", "Global-scale innovation"],
    highlights: [
      "Aims to build products where intelligence is experienced, not hidden in the backend.",
      "Focused on combining software precision with robotics intuition.",
      "Long-term direction: futuristic systems that feel deeply human-centric.",
    ],
    accent: "amber",
  },
];

export const regionBySlug = Object.fromEntries(regions.map((region) => [region.slug, region])) as Record<
  Region["slug"],
  Region
>;
