export type ExperienceItem = {
  role: string;
  company: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Learn Flu",
    description:
      "Engineered scalable MLOps pipelines enabling continuous training, versioned deployment, and rollback safety. Designed and deployed computer vision models for automated analytics workflows and integrated ML services via REST APIs for real-time decision pipelines. Improved inference latency by 20% through pruning, quantization, and hyperparameter optimization.",
  },
  {
    role: "Machine Learning Intern",
    company: "Kairos Kinetics",
    description:
      "Developed hybrid predictive models combining CNN-based medical imaging with structured clinical data. Built interpretable AI pipelines supporting diagnostic decision-making and contributed to patent documentation for a hybrid AI medical decision-support system.",
  },
];

