import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
};

const reducedAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideLeft: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideRight: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scale: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const shouldReduceMotion = useReducedMotion();
  const animationVariants = shouldReduceMotion
    ? reducedAnimations[animation]
    : animations[animation];

  // Reduce duration and delay for mobile devices
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const adjustedDuration = shouldReduceMotion
    ? 0.2
    : isMobile
      ? duration * 0.7
      : duration;
  const adjustedDelay = shouldReduceMotion ? 0 : isMobile ? delay * 0.5 : delay;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={animationVariants}
      transition={{
        duration: adjustedDuration,
        delay: adjustedDelay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
