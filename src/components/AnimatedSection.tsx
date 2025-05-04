"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "up" | "right" | "down" | "flip";
  duration?: number;
  className?: string;
}

const getAnimation = (
  direction: string,
  delay: number,
  duration: number
) => {
  switch (direction) {
    case "left":
      return {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0, transition: { delay, duration } },
      };
    case "right":
      return {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0, transition: { delay, duration } },
      };
    case "up":
      return {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0, transition: { delay, duration } },
      };
    case "down":
      return {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0, transition: { delay, duration } },
      };
    case "flip":
      return {
        initial: { opacity: 0, rotateY: 90 },
        animate: { opacity: 1, rotateY: 0, transition: { delay, duration } },
      };
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay, duration } },
      };
  }
};

export const AnimatedSection = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
}: AnimatedSectionProps) => {
  const animation = getAnimation(direction, delay, duration);

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
