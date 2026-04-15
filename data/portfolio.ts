import type { Region } from "@/data/regions";

export type ProjectItem = {
  name: string;
  type: "AI" | "Web" | "Experiment" | "Systems";
  summary: string;
  region: Region["slug"];
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  note: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  summary: string;
};

export type MilestoneItem = {
  phase: string;
  title: string;
  description: string;
};

export type FutureGoalItem = {
  horizon: "Near Term" | "Mid Term" | "Long Term";
  goal: string;
  description: string;
};

export const sectionDescriptions: Record<Region["slug"] | "ai-core", string> = {
  "logic-core": "Technical execution zone for projects, systems thinking, and engineering rigor.",
  "creative-cortex": "Experimental layer for novel ideas, prototypes, and expressive concept work.",
  "skill-matrix": "Interactive capability map of technologies, tools, and technical strengths.",
  "memory-vault": "Archive of education, experience, and growth milestones over time.",
  "future-vision": "Forward-looking roadmap for AI-native products and robotics-driven innovation.",
  "ai-core": "Conversational AI persona interface prepared for backend model integration.",
};

export const projects: ProjectItem[] = [
  {
    name: "Explore My Mind",
    type: "Web",
    summary: "Built a cinematic neural portfolio with modular region navigation and AI-ready interface patterns.",
    region: "logic-core",
  },
  {
    name: "Agentic Interface Prototypes",
    type: "AI",
    summary: "Designed interaction models where model reasoning and UI behavior are intentionally co-designed.",
    region: "logic-core",
  },
  {
    name: "Neural Motion Lab",
    type: "Experiment",
    summary: "Explored animation systems for premium futuristic storytelling while preserving performance.",
    region: "creative-cortex",
  },
  {
    name: "Human-Centered Robotics Concepts",
    type: "Systems",
    summary: "Drafted concepts for robotics interfaces focused on trust, clarity, and adaptive guidance.",
    region: "future-vision",
  },
  {
    name: "Skill Cartography Toolkit",
    type: "Web",
    summary: "Experimented with data-driven UI modules to visualize strengths and growth trajectories.",
    region: "skill-matrix",
  },
];

export const education: EducationItem[] = [
  {
    title: "Computer Science and Intelligent Systems Path",
    institution: "Portfolio Placeholder University",
    period: "Academic Journey",
    note: "Focused on software foundations, applied AI concepts, and problem-solving discipline.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Builder and Product Engineer",
    organization: "Independent Projects",
    period: "Current",
    summary: "Ship interactive products blending clean engineering architecture with design-led execution.",
  },
  {
    role: "AI-Oriented Prototyper",
    organization: "Innovation Tracks",
    period: "Recent",
    summary: "Translate AI and robotics ideas into usable product narratives and implementation plans.",
  },
];

export const milestones: MilestoneItem[] = [
  {
    phase: "Phase 01",
    title: "Foundation of Curiosity",
    description: "Began exploring software deeply, with focus on logic, experimentation, and systems thinking.",
  },
  {
    phase: "Phase 02",
    title: "Engineering Acceleration",
    description: "Built projects with modern web technologies, refining architecture and implementation discipline.",
  },
  {
    phase: "Phase 03",
    title: "AI and Robotics Alignment",
    description: "Shifted toward intelligence-driven products and robotics-inspired ideas with long-term ambition.",
  },
  {
    phase: "Now",
    title: "Explore My Mind",
    description: "Crafting immersive interfaces that showcase technical capability, creativity, and future intent.",
  },
];

export const futureGoals: FutureGoalItem[] = [
  {
    horizon: "Near Term",
    goal: "AI-Native Product Systems",
    description: "Build production-grade products where AI is an intentional user-facing capability.",
  },
  {
    horizon: "Mid Term",
    goal: "Robotics Interaction Frameworks",
    description: "Prototype interfaces for embodied intelligence with clear human-machine collaboration patterns.",
  },
  {
    horizon: "Long Term",
    goal: "Global Futuristic Platforms",
    description: "Create large-scale systems that combine intelligence, elegance, and meaningful societal impact.",
  },
];
