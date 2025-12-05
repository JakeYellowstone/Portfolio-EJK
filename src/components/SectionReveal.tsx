import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
}: SectionRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          y: 30,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.45,
            delay,
            ease: [0.22, 0.9, 0.28, 1],
          },
        },
      };

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
