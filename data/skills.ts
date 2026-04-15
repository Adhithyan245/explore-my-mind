export type SkillMatrix = {
  languages: string[];
  ai_ml: string[];
  advanced_ai: string[];
  systems: string[];
};

export const skills: SkillMatrix = {
  languages: ["Python", "C", "Java", "SQL"],
  ai_ml: [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Transformers",
    "Computer Vision",
    "NLP",
    "Multimodal Learning",
    "Reinforcement Learning",
  ],
  advanced_ai: [
    "Hybrid AI Systems",
    "Neural-Symbolic Integration",
    "Search-Based Planning",
    "Decision Modeling under Uncertainty",
  ],
  systems: ["MLOps", "Model Deployment", "REST APIs", "Docker", "CI/CD", "Versioned ML Pipelines"],
};
