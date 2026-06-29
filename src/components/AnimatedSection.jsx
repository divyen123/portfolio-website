import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionDirections = {
  up: { x: 0, y: 64, scale: 0.98, rotate: 0 },
  left: { x: -96, y: 18, scale: 0.98, rotate: -0.8 },
  right: { x: 96, y: 18, scale: 0.98, rotate: 0.8 },
  diagonalLeft: { x: -72, y: 58, scale: 0.97, rotate: -0.6 },
  diagonalRight: { x: 72, y: 58, scale: 0.97, rotate: 0.6 },
  zoom: { x: 0, y: 30, scale: 0.92, rotate: 0 },
};

function AnimatedSection({ children, className = '', id, direction = 'up' }) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.18,
    rootMargin: '-80px 0px -12% 0px',
  });
  const hidden = sectionDirections[direction] || sectionDirections.up;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, filter: 'blur(10px)', ...hidden }}
      animate={shouldReduceMotion || inView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      data-aos="fade-up"
    >
      {children}
    </motion.section>
  );
}

export default memo(AnimatedSection);