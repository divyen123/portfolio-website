import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

function Hero({ introComplete = true }) {
  const [typingCycle, setTypingCycle] = useState(0);
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.45,
    triggerOnce: false,
  });

  useEffect(() => {
    if (introComplete && homeInView) {
      setTypingCycle((cycle) => cycle + 1);
    }
  }, [homeInView, introComplete]);

  return (
    <section ref={homeRef} className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-16 sm:pb-20 sm:pt-28 sm:px-6 lg:px-8" id="home">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="mx-auto mt-2 grid w-full max-w-6xl place-items-center text-center sm:mt-4">
        <motion.div
          className="relative mb-4 sm:mb-7 grid size-24 sm:size-32 lg:size-34 place-items-center overflow-hidden rounded-full border border-cyan-200/18 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.34),rgba(8,47,73,0.74)_52%,rgba(5,5,5,0.92))] shadow-[0_18px_46px_rgba(0,0,0,0.34),0_0_34px_rgba(6,182,212,0.12)]"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            scale: [1, 1.025, 1],
            rotate: [0, 1.2, 0],
          }}
          transition={{
            opacity: { duration: 0.45, delay: 0.02 },
            y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
          }}
          aria-label={`${personalInfo.name} profile`}
        >
          <img
            className="absolute inset-0 size-full object-cover"
            src={personalInfo.image}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <motion.p
            className="mb-3.5 sm:mb-5 inline-flex rounded-full border border-slate-300/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.72),rgba(8,47,73,0.48))] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_12px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {personalInfo.title}
          </motion.p>

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
            {introComplete ? (
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
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            aria-label="Primary links"
          >
            <a className="glass-button group !p-0 !min-h-0 size-12 rounded-full flex items-center justify-center" href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="size-5" aria-hidden="true" />
            </a>
            <a className="glass-button group !p-0 !min-h-0 size-12 rounded-full flex items-center justify-center" href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="size-5" aria-hidden="true" />
            </a>
            <div className="relative w-12 h-12 shrink-0">
              <a 
                className="ripple-button group absolute right-0 top-0 !p-0 !min-h-0 h-12 w-12 hover:w-[8.75rem] rounded-full flex flex-row-reverse items-center justify-start cursor-pointer z-20 shadow-[0_0_12px_rgba(6,182,212,0.15)] overflow-hidden" 
                href={personalInfo.resume} 
                download
                style={{ transition: 'width 500ms ease-in-out, transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease' }}
              >
                <div className="size-12 flex items-center justify-center shrink-0">
                  <FiDownload className="size-5 -ml-[7.9px]" aria-hidden="true" />
                </div>
                <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out font-extrabold text-[13.5px] leading-none group-hover:max-w-[6rem] group-hover:opacity-100 group-hover:pl-4">
                  Resume
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
