import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const promptText = 'Click on any timeline';

function TimelineItem({ item, index, isActive, onSelect }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isEven = index % 2 === 0;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      className="group relative grid grid-cols-2 gap-x-4 md:flex md:flex-col md:items-center w-full md:w-auto mb-8 md:mb-0 cursor-pointer rounded-2xl transition-transform duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={`Show ${item.institution} education description`}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      {/* Dot Marker on Timeline */}
      {/* Mobile: absolute positioned in the center vertical line */}
      {/* Desktop: relative positioned horizontally on the timeline line */}
      <div className="absolute left-1/2 top-[6px] z-10 -translate-x-1/2 md:relative md:left-auto md:top-auto md:flex md:h-10 md:items-center md:justify-center md:mb-5 md:translate-x-0">
        <motion.span
          className={`grid size-5 place-items-center rounded-full border bg-[#050505] shadow-[0_0_20px_rgba(6,182,212,0.32)] ${isActive ? 'border-cyan-200 shadow-[0_0_26px_rgba(6,182,212,0.5)]' : 'border-cyan-300/50'}`}
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
          y: isActive ? -6 : 0,
          scale: isActive ? 1.07 : 1,
          clipPath: 'inset(0 0 0 0)',
        }}
        transition={{
          opacity: { duration: 0.95, delay: 0.18 + index * 0.24, ease: [0.16, 1, 0.3, 1] },
          x: { duration: 0.95, delay: 0.18 + index * 0.24, ease: [0.16, 1, 0.3, 1] },
          clipPath: { duration: 0.95, delay: 0.18 + index * 0.24, ease: [0.16, 1, 0.3, 1] },
          y: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
        }}
        whileHover={{ y: -8, scale: 1.09, transition: { type: 'spring', stiffness: 280, damping: 18 } }}
      >
        <span className={`mb-2 inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[0.65rem] font-bold backdrop-blur ${isActive ? 'border-cyan-200/35 bg-cyan-300/14 text-cyan-100' : 'border-cyan-300/18 bg-cyan-300/8 text-cyan-200'}`}>
          <FiCalendar aria-hidden="true" />
          {item.period}
        </span>
        <h3 className={`text-sm sm:text-base font-extrabold leading-snug md:min-h-[2.5rem] md:flex md:items-center md:justify-center ${isActive ? 'text-cyan-50' : 'text-white'}`}>
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
  const [activeIndex, setActiveIndex] = useState(null);
  const [targetText, setTargetText] = useState(promptText);
  const [displayText, setDisplayText] = useState(promptText);

  useEffect(() => {
    if (displayText === targetText) return undefined;

    const isDeleting = !targetText.startsWith(displayText);
    const delay = isDeleting ? 8 : targetText === promptText ? 18 : 11;
    const timer = window.setTimeout(() => {
      setDisplayText((currentText) => {
        if (!targetText.startsWith(currentText)) {
          return currentText.slice(0, -1);
        }
        return targetText.slice(0, currentText.length + 1);
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, targetText]);

  const handleTimelineSelect = (item, index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setTargetText(promptText);
      return;
    }

    setActiveIndex(index);
    setTargetText(item.description || promptText);
  };

  return (
    <AnimatedSection className="section-shell" id="education" direction="right">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          className="pt-6 sm:pt-8"
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
                  isActive={activeIndex === index}
                  onSelect={() => handleTimelineSelect(item, index)}
                />
              ))
            ) : (
              <p className="text-slate-400">Education details have not been provided yet.</p>
            )}
          </div>
        </div>

        <motion.div
          className="mx-auto mt-14 min-h-[5.5rem] max-w-3xl text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          aria-live="polite"
        >
          <p className={`text-sm font-semibold leading-relaxed sm:text-base ${activeIndex === null ? 'text-cyan-100/70' : 'text-slate-100'}`}>
            <span>{displayText}</span>
            <span className="ml-1 inline-block h-5 w-px translate-y-1 bg-cyan-200 animate-[hero-cursor-blink_720ms_steps(1,end)_infinite]" aria-hidden="true" />
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default memo(Education);




