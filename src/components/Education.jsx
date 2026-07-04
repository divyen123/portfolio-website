import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

function TimelineItem({ item, index }) {
  return (
    <article
      className="relative flex flex-col items-center text-center shrink-0 w-[240px] md:w-auto"
    >
      {/* Dot Marker on Timeline */}
      <div className="relative z-10 flex h-10 items-center justify-center mb-5">
        <motion.span
          className="grid size-5 place-items-center rounded-full border border-cyan-300/50 bg-[#050505] shadow-[0_0_20px_rgba(6,182,212,0.32)]"
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42, delay: 0.15 + index * 0.22, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <motion.span
            className="size-2 rounded-full bg-cyan-300"
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.35, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.46, delay: 0.25 + index * 0.22, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.span>
      </div>

      {/* Content Card (Slightly reduced size for a cleaner fit) */}
      <motion.div
        className="glass-card flex flex-col items-center p-4 rounded-2xl border border-white/5 bg-white/[0.02] w-full max-w-[230px] md:max-w-none text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
        whileHover={{ y: -4, scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      >
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-2 py-0.5 text-[0.65rem] font-bold text-cyan-200 backdrop-blur">
          <FiCalendar aria-hidden="true" />
          {item.period}
        </span>
        <h3 className="text-sm sm:text-base font-black text-white leading-snug line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
          {item.institution}
        </h3>
        <p className="mt-1.5 text-xs text-slate-350 leading-relaxed font-medium">
          {item.program}
        </p>
      </motion.div>
    </article>
  );
}

function Education() {
  return (
    <AnimatedSection className="section-shell" id="education" direction="right">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Timeline"
          description="Education details from the provided portfolio files."
        />

        <div className="relative mx-auto mt-2 w-full max-w-5xl">
          {/* Horizontal Connecting Line (Desktop) */}
          <motion.div
            className="absolute top-[1.25rem] left-[12.5%] right-[12.5%] h-[2px] bg-cyan-300/20 origin-left hidden md:block"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />
          {/* Horizontal Connecting Line (Mobile Horizontal Scroll) */}
          <div className="absolute top-[1.25rem] left-12 right-12 h-[2px] bg-cyan-300/20 md:hidden" aria-hidden="true" />

          {/* Timeline Items Container */}
          <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 gap-6 md:gap-4 scrollbar-hide w-full">
            {education.length > 0 ? (
              education.map((item, index) => (
                <TimelineItem
                  key={`${item.institution}-${item.period}`}
                  item={item}
                  index={index}
                />
              ))
            ) : (
              <p className="text-slate-400">Education details have not been provided yet.</p>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default memo(Education);
