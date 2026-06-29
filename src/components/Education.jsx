import { memo, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const slideReveal = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -42 : 42,
    clipPath: index % 2 === 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 0.95,
      delay: 0.18 + index * 0.24,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function TimelineItem({ item, index, timelineInView }) {
  const itemRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let frameId;

    function checkVisibility() {
      if (!itemRef.current) {
        return;
      }

      const rect = itemRef.current.getBoundingClientRect();
      const enterLine = window.innerHeight * 0.82;
      const exitLine = window.innerHeight * 0.12;
      setIsInView(rect.top < enterLine && rect.bottom > exitLine);
    }

    function requestCheck() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(checkVisibility);
    }

    checkVisibility();
    window.addEventListener('scroll', requestCheck, { capture: true, passive: true });
    window.addEventListener('resize', requestCheck);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestCheck, true);
      window.removeEventListener('resize', requestCheck);
    };
  }, []);

  return (
    <article
      className="relative mb-10 grid gap-3 pl-10 sm:grid-cols-2 sm:pl-0"
    >
      <motion.span
        className="absolute left-1.5 top-3 grid size-5 place-items-center rounded-full border border-cyan-300/50 bg-[#050505] shadow-[0_0_24px_rgba(6,182,212,0.32)] sm:left-1/2 sm:-translate-x-1/2"
        initial={{ opacity: 0, scale: 0.2, boxShadow: '0 0 0 rgba(6,182,212,0)' }}
        animate={timelineInView ? { opacity: 1, scale: 1, boxShadow: '0 0 24px rgba(6,182,212,0.32)' } : { opacity: 0, scale: 0.2, boxShadow: '0 0 0 rgba(6,182,212,0)' }}
        transition={{ duration: 0.42, delay: 0.28 + index * 0.34, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <motion.span
          className="size-2 rounded-full bg-cyan-300"
          initial={{ scale: 0 }}
          animate={timelineInView ? { scale: [0, 1.35, 1] } : { scale: 0 }}
          transition={{ duration: 0.46, delay: 0.38 + index * 0.34, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.span>

      <motion.div
        ref={itemRef}
        className={`px-2 text-left ${index % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:col-start-2 sm:pl-10'}`}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideReveal}
        custom={index}
        whileHover={{ y: -6, scale: 1.01, transition: { type: 'spring', stiffness: 260, damping: 22 } }}
      >
        <span className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-0.5 text-[0.7rem] font-bold text-cyan-200 backdrop-blur">
          <FiCalendar aria-hidden="true" />
          {item.period}
        </span>
        <h3 className="text-lg font-black text-white sm:text-[1.38rem]">{item.institution}</h3>
        <p className="mt-1.5 text-sm leading-6 text-slate-300 sm:text-[0.96rem]">{item.program}</p>
      </motion.div>
    </article>
  );
}

function Education() {
  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.28,
    rootMargin: '0px 0px -18% 0px',
    triggerOnce: true,
  });

  return (
    <AnimatedSection className="section-shell" id="education" direction="right">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Timeline"
          description="Education details from the provided portfolio files."
        />

        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          <motion.div
            className="absolute bottom-0 left-4 top-0 w-px origin-top bg-cyan-300/25 sm:left-1/2"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={timelineInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 1.45, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          {education.length > 0 ? (
            education.map((item, index) => (
              <TimelineItem
                key={`${item.institution}-${item.period}`}
                item={item}
                index={index}
                timelineInView={timelineInView}
              />
            ))
          ) : (
            <p className="text-slate-400">Education details have not been provided yet.</p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default memo(Education);
