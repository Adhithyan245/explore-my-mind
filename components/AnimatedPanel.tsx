"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionDuration, motionEase } from "@/lib/motion";

export function AnimatedPanel({
  children,
  delay = 0,
  variant = "rise",
  amount = 0.16,
}: {
  children: ReactNode;
  delay?: number;
  variant?: "rise" | "slide-left" | "slide-right" | "soft";
  amount?: number;
}) {
  const initialByVariant = {
    rise: { opacity: 0, y: 20, filter: "blur(5px)" },
    "slide-left": { opacity: 0, x: -24, filter: "blur(4px)" },
    "slide-right": { opacity: 0, x: 24, filter: "blur(4px)" },
    soft: { opacity: 0, scale: 0.98, filter: "blur(6px)" },
  };

  const animateByVariant = {
    rise: { opacity: 1, y: 0, filter: "blur(0px)" },
    "slide-left": { opacity: 1, x: 0, filter: "blur(0px)" },
    "slide-right": { opacity: 1, x: 0, filter: "blur(0px)" },
    soft: { opacity: 1, scale: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div
      initial={initialByVariant[variant]}
      whileInView={animateByVariant[variant]}
      viewport={{ once: true, amount }}
      transition={{ duration: motionDuration.panel, delay, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}
