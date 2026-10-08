"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionTokens } from "@/config/tokens";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Short, one-time fade-and-rise. Disabled under prefers-reduced-motion. */
export function Reveal({ children, delay = 0, y = 14, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: motionTokens.base, delay, ease: motionTokens.ease }}
    >
      {children}
    </motion.div>
  );
}
