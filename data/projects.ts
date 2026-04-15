export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  focus: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Hybrid Agentic AI for Autonomous Robots",
    description:
      "Designed a hybrid AI architecture integrating reinforcement learning, neural perception, and symbolic reasoning to enable autonomous robotic navigation. Built agents using PyTorch and Unity ML-Agents, modeling reward functions for safe and adaptive decision-making. Implemented real-time perception and evaluated policy stability and convergence across dynamic environments.",
    tech: ["PyTorch", "Reinforcement Learning", "Unity ML-Agents", "Computer Vision", "Search Algorithms"],
    focus: "AI Agents + Robotics",
  },
  {
    title: "AI for Airport Security: False Alarm Reduction",
    description:
      "Developed transformer-based computer vision models to analyze X-ray and sensor data, reducing false alarms by 30%. Built real-time inference pipelines and optimized latency by 25% to support deployment under strict throughput constraints. Evaluated model performance using precision-recall analysis and ROC curves, achieving high detection reliability.",
    tech: ["PyTorch", "Transformers", "Computer Vision", "Edge AI"],
    focus: "Applied AI Systems",
  },
  {
    title: "Stutterio: AI Speech Fluency System",
    description:
      "Built an AI-powered speech analysis system using deep learning and acoustic feature engineering to detect dysfluencies in real time. Designed pipelines extracting MFCCs, pitch variance, and temporal features, achieving 85% classification accuracy. Optimized inference to sub-200ms latency and incorporated privacy-aware on-device processing.",
    tech: ["Python", "Deep Learning", "Audio Processing", "NLP"],
    focus: "Human-Centered AI",
  },
];

