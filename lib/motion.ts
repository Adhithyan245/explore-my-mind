export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionDuration = {
  fast: 0.24,
  base: 0.38,
  panel: 0.56,
  route: 0.34,
} as const;

export const hoverLift = {
  y: -2,
  scale: 1.01,
  transition: { duration: motionDuration.fast, ease: motionEase },
};

export const tapPress = {
  scale: 0.986,
  y: 0,
  transition: { duration: 0.12, ease: motionEase },
};

