import { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiChevronDown, FiDownload } from 'react-icons/fi';
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
    <section ref={homeRef} className="hero-mobile-section relative isolate flex min-h-screen flex-col overflow-hidden px-4 pb-0 pt-16 sm:pt-28 sm:px-6 lg:px-8" id="home">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="hero-mobile-grid mx-auto flex flex-col md:grid w-full max-w-6xl grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:items-stretch flex-1 pt-6 md:pt-0">
        {/* Left side: titles, names, descriptions, and icons */}
        <motion.div
          className="hero-mobile-copy md:col-span-7 flex flex-col justify-start md:justify-center items-start text-left pb-4 md:pb-24 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: heroFocusMode ? 0 : 1,
            x: heroFocusMode ? -30 : 0,
          }}
          transition={isMobile ? { duration: 0.16 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ pointerEvents: heroFocusMode ? 'none' : 'auto' }}
          aria-hidden={heroFocusMode}
        >
          <AnimatePresence initial={false}>
            {!heroFocusMode && (
              <motion.h1
                layoutId="hero-name-title"
                className="hero-name-glow mt-4 text-4xl font-black tracking-tight text-white sm:mt-6 sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {personalInfo.name}
              </motion.h1>
            )}
          </AnimatePresence>



          <motion.p
            className="hero-typed-title mt-4 min-h-8 max-w-full whitespace-normal bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-[clamp(0.85rem,1.55vw,1.28rem)] font-extrabold text-transparent"
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
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-row flex-wrap justify-start gap-3"
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

        {/* Right side: profile picture, touching the bottom frame on desktop */}
        <motion.div
          className="hero-mobile-visual md:col-span-5 flex items-end justify-center relative self-end z-10 mt-auto pt-8 md:pt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: heroFocusMode ? (isMobile ? 0.84 : 0.7) : (isMobile ? 0.96 : 0.9),
            x: heroFocusMode ? (isMobile ? 0 : '-74%') : (isMobile ? 22 : 0),
            y: heroFocusMode ? (isMobile ? -108 : -130) : 0,
          }}
          transition={isMobile ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] } : { duration: 1.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'bottom center' }}
          aria-label={`${personalInfo.name} profile`}
        >
          <div className="hero-mobile-portrait relative w-44 h-44 sm:w-56 sm:h-56 md:w-[350px] md:h-[480px] lg:w-[420px] lg:h-[580px] xl:w-[460px] xl:h-[640px] flex items-end justify-center overflow-visible bg-transparent">
            <img
              className="w-full h-full object-contain object-bottom select-none pointer-events-none z-10"
              src={personalInfo.image}
              alt=""
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <AnimatePresence>
              {heroFocusMode && (
                <motion.div
                  className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[1.7px] origin-center -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-100/65 to-transparent"
                  style={{ width: isMobile ? 'calc(100vw / 0.84)' : 'calc(100vw / 0.7)' }}
                  initial={{ opacity: 1, scaleX: 0.08 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0.08 }}
                  transition={{ duration: isMobile ? 0.8 : 1.6, delay: isMobile ? 0 : 0.05, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {heroFocusMode && (
          <motion.div
            className="hero-mobile-focus-title pointer-events-none absolute inset-x-0 top-28 z-30 flex justify-center px-4 sm:top-32 lg:top-36"
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: isMobile ? 0.55 : 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h2
              layoutId="hero-name-title"
              className="hero-name-glow text-center text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
              transition={{ duration: isMobile ? 0.55 : 1.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {personalInfo.name}
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {heroFocusMode && (
          <motion.div
            className="hero-mobile-scroll-cue pointer-events-none absolute inset-x-0 bottom-[4.3rem] z-30 flex flex-col items-center gap-5 px-0 sm:bottom-[5.50rem]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: isMobile ? 0.65 : 1.05, delay: isMobile ? 0.08 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-3 text-lg font-bold uppercase tracking-[0.24em] text-cyan-50 sm:text-1xl">
              <span>Scroll to Explore</span>
              <motion.span
                aria-hidden="true"
                animate={{ y: [0, 6, 0], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 1.25, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiChevronDown className="size-6" />
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default memo(Hero);







