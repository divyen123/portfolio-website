import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

function TimelineItem({ item, index }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isEven = index % 2 === 0;

  return (
    <article
      className="relative grid grid-cols-2 gap-x-4 md:flex md:flex-col md:items-center w-full md:w-auto mb-8 md:mb-0"
    >
      {/* Dot Marker on Timeline */}
      {/* Mobile: absolute positioned in the center vertical line */}
      {/* Desktop: relative positioned horizontally on the timeline line */}
      <div className="absolute left-1/2 top-[6px] z-10 -translate-x-1/2 md:relative md:left-auto md:top-auto md:flex md:h-10 md:items-center md:justify-center md:mb-5 md:translate-x-0">
        <motion.span
          className="grid size-5 place-items-center rounded-full border border-cyan-300/50 bg-[#050505] shadow-[0_0_20px_rgba(6,182,212,0.32)]"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.42, delay: 0.15 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <motion.span
            className="size-2 rounded-full bg-cyan-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.46, delay: 0.25 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.span>
      </div>

      {/* Content Container (Background container removed, alternating layout on mobile, centered on desktop) */}
      <motion.div
        className={`w-full max-w-[170px] md:max-w-none flex flex-col ${
          isEven
            ? 'col-start-1 justify-self-end pr-6 text-right items-end'
            : 'col-start-2 justify-self-start pl-6 text-left items-start'
        } md:col-start-auto md:justify-self-auto md:pr-0 md:pl-0 md:text-center md:items-center`}
        initial={isMobile ? {
          opacity: 0,
          x: isEven ? -24 : 24,
          clipPath: 'inset(0 0 0 0)',
        } : {
          opacity: 0,
          x: isEven ? -42 : 42,
          clipPath: isEven ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
        }}
        animate={{
          opacity: 1,
          x: 0,
          clipPath: 'inset(0 0 0 0)',
        }}
        transition={{
          duration: 0.95,
          delay: 0.18 + index * 0.24,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ y: -4, scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      >
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-2 py-0.5 text-[0.65rem] font-bold text-cyan-200 backdrop-blur">
          <FiCalendar aria-hidden="true" />
          {item.period}
        </span>
        <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug md:min-h-[2.5rem] md:flex md:items-center md:justify-center">
          {item.institution}
        </h3>
        <p className="mt-1 text-xs text-slate-350 leading-relaxed font-medium">
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
          {/* Vertical Connecting Line (Mobile Only - Centered) */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-cyan-300/25 md:hidden" aria-hidden="true" />

          {/* Horizontal Connecting Line (Desktop Only) */}
          <motion.div
            className="absolute top-[1.25rem] left-[12.5%] right-[12.5%] h-[2px] bg-cyan-300/20 origin-left hidden md:block"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          {/* Timeline Items Container */}
          <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-4 w-full">
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
