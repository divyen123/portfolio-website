import { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

function Hero({ introComplete = true, heroFocusMode = false }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [typingCycle, setTypingCycle] = useState(0);
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.45,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!introComplete || !homeInView) return undefined;

    const typingTimer = window.setTimeout(() => {
      setTypingCycle((cycle) => cycle + 1);
    }, 0);

    return () => window.clearTimeout(typingTimer);
  }, [homeInView, introComplete]);

  return (
    <section ref={homeRef} className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-16 sm:pb-20 sm:pt-28 sm:px-6 lg:px-8" id="home">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="mx-auto mt-2 grid w-full max-w-6xl place-items-center text-center sm:mt-4">
        <motion.div
          className="relative z-10 mb-2 grid place-items-center overflow-visible bg-transparent pb-12 sm:mb-4 sm:pb-14"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: heroFocusMode ? (isMobile ? 4 : 8) : 0,
            scale: heroFocusMode ? (isMobile ? 1.42 : 1.72) : 1,
            rotate: 0,
          }}
          transition={isMobile ? { duration: 0.55, ease: [0.16, 1, 0.3, 1] } : { duration: 1.25, delay: 0.02, ease: [0.16, 1, 0.3, 1] }}
          aria-label={`${personalInfo.name} profile`}
        >
          <div className="relative grid size-36 place-items-center overflow-visible bg-transparent sm:size-48 lg:size-56">
            <img
              className="absolute inset-0 z-10 size-full object-contain"
              src={personalInfo.image}
              alt=""
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />

            <div className="absolute left-1/2 top-full z-20 -translate-x-1/2 -translate-y-px">
              <motion.div
                animate={{ scale: heroFocusMode ? (isMobile ? 0.82 : 0.72) : 1 }}
                transition={{ duration: isMobile ? 0.55 : 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'top center' }}
              >
                <motion.p
                  className="inline-flex justify-center overflow-hidden whitespace-nowrap rounded-full border border-cyan-200/16 bg-[linear-gradient(135deg,rgba(15,23,42,0.84),rgba(8,47,73,0.64))] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_12px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                  initial={{ opacity: 0, width: isMobile ? '15.5rem' : '20.5rem' }}
                  animate={{
                    opacity: 1,
                    width: heroFocusMode ? (isMobile ? '11.75rem' : '14.75rem') : (isMobile ? '15.5rem' : '20.5rem'),
                  }}
                  transition={{ duration: isMobile ? 0.55 : 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={heroFocusMode ? 'scroll-to-explore' : 'profile-title'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, letterSpacing: heroFocusMode ? '0.18em' : '0.28em' }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: isMobile ? 0.28 : 0.48, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {heroFocusMode ? 'Scroll to Explore' : personalInfo.title}
                    </motion.span>
                  </AnimatePresence>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-6xl overflow-hidden"
          initial={false}
          animate={{
            height: heroFocusMode ? 0 : 'auto',
            opacity: heroFocusMode ? 0 : 1,
            y: heroFocusMode ? 26 : 0,
          }}
          transition={isMobile ? { duration: 0.16 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ pointerEvents: heroFocusMode ? 'none' : 'auto' }}
          aria-hidden={heroFocusMode}
        >
          <motion.h1
            className="hero-name-glow mx-auto max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="hero-typed-title mx-auto mt-5 min-h-8 max-w-full whitespace-normal bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-[clamp(0.85rem,1.55vw,1.28rem)] font-extrabold text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            aria-label={personalInfo.professionalTitle}
          >
            {isMobile ? (
              personalInfo.professionalTitle
            ) : introComplete ? (
              <ReactTyped
                key={`hero-title-typing-${typingCycle}`}
                strings={[personalInfo.professionalTitle]}
                typeSpeed={32}
                showCursor
                cursorChar="|"
              />
            ) : (
              <span aria-hidden="true">&nbsp;</span>
            )}
          </motion.p>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-row flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            aria-label="Primary links"
          >
            <a className="glass-button mobile-icon-action group !p-0 !min-h-0 size-12 rounded-full flex items-center justify-center" href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="size-5" aria-hidden="true" />
            </a>
            <a className="glass-button mobile-icon-action group !p-0 !min-h-0 size-12 rounded-full flex items-center justify-center" href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="size-5" aria-hidden="true" />
            </a>
            <div className="relative w-12 h-12 shrink-0">
              <a 
                className="ripple-button mobile-icon-action group absolute right-0 top-0 !p-0 !min-h-0 h-12 w-12 hover:w-[8.75rem] rounded-full flex flex-row-reverse items-center justify-start cursor-pointer z-20 shadow-[0_0_12px_rgba(6,182,212,0.15)] overflow-hidden" 
                href={personalInfo.resume} 
                download
                style={{ transition: 'width 500ms ease-in-out, transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease' }}
              >
                <div className="size-12 flex items-center justify-center shrink-0">
                  <FiDownload className="size-5 md:-ml-[7.9px]" aria-hidden="true" />
                </div>
                <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out font-extrabold text-[13.5px] leading-none group-hover:max-w-[6rem] group-hover:opacity-100 group-hover:pl-4">
                  Resume
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Hero);
