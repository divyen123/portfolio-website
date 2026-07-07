import { memo } from 'react';
import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      {eyebrow ? (
        <motion.h2
          className="mx-auto text-lg font-extrabold uppercase tracking-[0.26em] text-cyan-300 sm:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.h2>
      ) : null}
      {description ? (
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}

export default memo(SectionHeading);