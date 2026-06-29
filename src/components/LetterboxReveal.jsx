import { memo } from 'react';
import { motion } from 'framer-motion';

function LetterboxReveal() {
  const barTransition = {
    duration: 1.25,
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[95] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, delay: 0.05 }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#050505] shadow-[0_22px_70px_rgba(0,0,0,0.62)]"
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={barTransition}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#050505] shadow-[0_-22px_70px_rgba(0,0,0,0.62)]"
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        transition={barTransition}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
        initial={{ width: '0%', opacity: 0 }}
        animate={{ width: ['0%', '72%', '0%'], opacity: [0, 1, 0] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

export default memo(LetterboxReveal);
