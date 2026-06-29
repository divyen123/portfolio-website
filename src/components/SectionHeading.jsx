import { memo } from 'react';
import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      {eyebrow ? (
        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        className="section-title-glow mx-auto text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}

export default memo(SectionHeading);
