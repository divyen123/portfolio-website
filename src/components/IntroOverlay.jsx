import { memo } from 'react';
import { motion } from 'framer-motion';

function IntroOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(12px)' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-label="Opening Divyen's Portfolio"
    >
      <motion.div
        className="relative px-6 text-center"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: [0, 1, 1, 0], y: [24, 0, 0, -16], scale: [0.96, 1, 1, 0.98] }}
        transition={{ duration: 6.25, times: [0, 0.2, 0.84, 1], ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="mb-4 text-xs font-bold uppercase tracking-[0.38em] text-cyan-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6, times: [0, 0.25, 0.84, 1] }}
        >
          Welcome to
        </motion.p>
        <h1 className="intro-title overflow-hidden pb-3 text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <motion.span
            className="block"
            initial={{ y: '130%' }}
            animate={{ y: ['130%', '130%', '0%', '0%', '-110%'] }}
            transition={{ duration: 6.25, times: [0, 0.16, 0.52, 0.84, 1], ease: [0.22, 1, 0.36, 1] }}
          >
            Divyen&apos;s Portfolio
          </motion.span>
        </h1>
      </motion.div>
    </motion.div>
  );
}

export default memo(IntroOverlay);
