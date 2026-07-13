import { memo, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaRegHandPointer } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiLayers, FiInfo, FiX } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const pageMotion = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 90 : -90,
    filter: 'blur(10px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -90 : 90,
    filter: 'blur(10px)',
    transition: { duration: 0.32, ease: [0.4, 0, 1, 1] },
  }),
};

const morphText = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 54 : -54,
    scaleX: 0.08,
    filter: 'blur(6px)',
    transformOrigin: direction > 0 ? 'right center' : 'left center',
  }),
  center: {
    opacity: 1,
    x: 0,
    scaleX: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -44 : 44,
    scaleX: 0.08,
    filter: 'blur(5px)',
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  }),
};

const mobilePageMotion = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.14, ease: 'linear' } },
  exit: { opacity: 0, transition: { duration: 0.1, ease: 'linear' } },
};

const mobileTextMotion = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.12, ease: 'linear' } },
  exit: { opacity: 0, transition: { duration: 0.08, ease: 'linear' } },
};

const preloadImage = (src) => {
  if (!src || typeof window === 'undefined') {
    return;
  }

  const image = new Image();
  image.decoding = 'async';
  image.src = src;
};

function Projects() {
  const [[activeIndex, direction], setActiveProject] = useState([0, 1]);
  const [[imageIndex, imageDirection], setActiveImage] = useState([0, 1]);
  const [subIndex, setSubIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const ragasScrollLockRef = useRef(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const { ref: projectsStageRef, inView: projectsStageInView } = useInView({
    threshold: 0.32,
    rootMargin: '0px 0px -12% 0px',
    triggerOnce: true,
  });
  const activeProject = projects[activeIndex];
  const isFoodieGo = activeProject?.title === 'FoodieGo';
  const isRagasGroup = activeProject?.title === 'Ragas Group';
  const shouldLowerProjectText = ['Memory Timeline', 'PrepMatrix AI'].includes(activeProject?.title);
  const projectImages = activeProject?.images || [];
  const activeImage = projectImages[imageIndex] || projectImages[0];
  const ragasPages = isRagasGroup ? activeProject?.ragasPages || [] : [];
  const activeRagasPage = ragasPages[subIndex] || ragasPages[0];
  const ragasPageCount = ragasPages.length || activeProject?.subprojects?.length || 0;
  const activePageMotion = isMobile ? mobilePageMotion : pageMotion;
  const activeTextMotion = isMobile ? mobileTextMotion : morphText;
  const shouldShowRagasLogoBubble = isRagasGroup && subIndex > 0;
  const shouldShowSubprojectCursor = ['Ragas Shipping', 'Ragas Aerospace', 'RAIC Technology'].includes(activeRagasPage?.name);
  const shouldShiftSubprojectLogoLeft = ['Ragas Shipping', 'RAIC Technology'].includes(activeRagasPage?.name);
  const shouldNudgeAerospaceLogoLeft = activeRagasPage?.name === 'Ragas Aerospace';
  const subprojectLogoSizeClass = shouldShiftSubprojectLogoLeft
    ? 'max-h-[12rem] max-w-[17.5rem]'
    : 'max-h-[11rem] max-w-[16rem]';

  useEffect(() => {
    setActiveImage([0, 1]);
    setSubIndex(0);
  }, [activeIndex]);
  useEffect(() => {
    const message = 'Click to visit website';
    const timers = [];
    let typeTimer;

    const clearBubbleTimers = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearInterval(typeTimer);
    };

    if (!shouldShowRagasLogoBubble) {
      setShowBubble(false);
      setTypedText('');
      return clearBubbleTimers;
    }

    const startTypingCycle = () => {
      let index = 0;
      setTypedText('');
      setShowBubble(true);

      typeTimer = window.setInterval(() => {
        index += 1;
        setTypedText(message.slice(0, index));

        if (index >= message.length) {
          window.clearInterval(typeTimer);
          timers.push(window.setTimeout(() => {
            setShowBubble(false);
            timers.push(window.setTimeout(startTypingCycle, 7000));
          }, 3000));
        }
      }, 55);
    };

    setShowBubble(false);
    setTypedText('');
    timers.push(window.setTimeout(startTypingCycle, 420));

    return clearBubbleTimers;
  }, [shouldShowRagasLogoBubble]);


  const nextSub = () => {
    const count = activeProject?.ragasPages?.length || activeProject?.subprojects?.length || 0;
    if (count < 2) return;
    setSubIndex((prev) => (prev + 1) % count);
  };

  const prevSub = () => {
    const count = activeProject?.ragasPages?.length || activeProject?.subprojects?.length || 0;
    if (count < 2) return;
    setSubIndex((prev) => (prev - 1 + count) % count);
  };

  const handleRagasWheel = (event) => {
    if (!isRagasGroup || ragasPageCount < 2 || Math.abs(event.deltaY) < 28 || ragasScrollLockRef.current) return;

    event.preventDefault();
    ragasScrollLockRef.current = true;
    setSubIndex((prev) => (prev + (event.deltaY > 0 ? 1 : -1) + ragasPageCount) % ragasPageCount);

    window.setTimeout(() => {
      ragasScrollLockRef.current = false;
    }, 650);
  };

  useEffect(() => {
    if (projectImages.length < 2) {
      return;
    }

    const previousIndex = (imageIndex - 1 + projectImages.length) % projectImages.length;
    const nextIndex = (imageIndex + 1) % projectImages.length;

    [previousIndex, nextIndex].forEach((index) => {
      const nextImage = projectImages[index];
      if (nextImage !== activeImage) {
        preloadImage(nextImage);
      }
    });
  }, [activeImage, imageIndex, projectImages]);

  useEffect(() => {
    if (projects.length < 2) {
      return;
    }

    const previousProject = projects[(activeIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(activeIndex + 1) % projects.length];

    [previousProject, nextProject].forEach((project) => {
      preloadImage(project?.images?.[0]);
    });
  }, [activeIndex]);

  const paginate = (step) => {
    if (projects.length < 2) {
      return;
    }

    setActiveProject(([currentIndex]) => [
      (currentIndex + step + projects.length) % projects.length,
      step,
    ]);
  };

  const paginateImage = (step) => {
    if (projectImages.length < 2) {
      return;
    }

    setActiveImage(([currentIndex]) => [
      (currentIndex + step + projectImages.length) % projectImages.length,
      step,
    ]);
  };

  return (
    <AnimatedSection className="section-shell min-h-screen flex flex-col justify-center" id="projects" direction="zoom">
      <div className="mx-auto max-w-7xl translate-y-6 px-4 sm:translate-y-7 sm:px-6 lg:translate-y-8 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <SectionHeading
          eyebrow="Projects"
        />

        {projects.length > 0 && activeProject ? (
          <div ref={projectsStageRef} className="w-full mx-auto max-w-6xl -mt-5 sm:-mt-6 lg:-mt-7 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                className={`relative overflow-hidden py-4 ${
                  isRagasGroup 
                    ? 'flex flex-col items-center justify-between text-center lg:h-[38rem] w-full max-w-5xl mx-auto'
                    : 'grid items-center lg:items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:h-[38rem] w-full'
                }`}
                custom={direction}
                key={activeProject.title}
                variants={activePageMotion}
                initial="enter"
                animate={projectsStageInView ? "center" : "enter"}
                exit="exit"
              >
                {isRagasGroup ? (
                  <div className="flex h-full w-full flex-col items-center">
                    <AnimatePresence mode="wait">
                      {subIndex > 0 ? (
                        <motion.div
                          key="ragas-top-logo"
                          className="relative z-10 mt-1 mb-3 flex w-full shrink-0 flex-col items-center md:-mt-3 md:mb-0 lg:-mt-3"
                          variants={activeTextMotion}
                          custom={direction}
                          initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 24 }}
                          animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                          exit={isMobile ? { opacity: 0 } : { opacity: 0, y: -16 }}
                          transition={isMobile ? { duration: 0.12, ease: 'linear' } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="relative inline-flex items-center justify-center">
                            <a href="https://www.ragasgroups.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                              <motion.img
                                layoutId="ragas-main-logo"
                                src={activeImage}
                                alt="Ragas Group Logo"
                                className="max-h-[4.1rem] max-w-[82vw] w-auto object-contain sm:max-h-[4.45rem]"
                              />

                            </a>
                            <AnimatePresence>
                              {showBubble ? (
                                <motion.div
                                  className="absolute left-full top-1/2 ml-2 hidden -translate-y-1/2 items-center whitespace-nowrap rounded-md border border-white/10 bg-white/[0.055] px-2.5 py-1.5 text-[0.78rem] font-medium leading-none text-white/90 backdrop-blur-xl md:flex"
                                  initial={{ opacity: 0, x: -8, scale: 0.98 }}
                                  animate={{ opacity: 1, x: 0, scale: 1 }}
                                  exit={{ opacity: 0, x: 10, scale: 0.98 }}
                                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                  aria-hidden="true"
                                >
                                  <span className="absolute -left-2 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[5px] border-r-[8px] border-y-transparent border-r-white/20" />
                                  <span className="absolute -left-[7px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-r-[7px] border-y-transparent border-r-white/[0.055]" />
                                  <span>{typedText}</span>
                                  <span className="ml-1 inline-block h-3.5 w-[1.5px] translate-y-[0.5px] rounded-full bg-cyan-300/90" />
                                </motion.div>
                              ) : null}
                            </AnimatePresence>

                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    <motion.div
                      className="relative mt-2 flex w-full flex-1 items-center px-10 sm:px-14 lg:px-16"
                      variants={activeTextMotion}
                      custom={direction}
                      onWheel={handleRagasWheel}
                    >
                      <button
                        onClick={prevSub}
                        className="absolute left-0 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                        type="button"
                        aria-label="Previous Ragas page"
                      >
                        <FiChevronLeft className="size-4.5" aria-hidden="true" />
                      </button>

                      <AnimatePresence mode="wait">
                        {activeRagasPage ? (
                          <motion.div
                            key={activeRagasPage.name}
                            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 18 }}
                            animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                            exit={isMobile ? { opacity: 0 } : { opacity: 0, y: -18 }}
                            transition={{ duration: isMobile ? 0.1 : 0.32 }}
                            className="mx-auto mt-0 w-full max-w-6xl text-center md:-mt-7"
                          >
                            {subIndex === 0 ? (
                              <div className="mx-auto mt-2 flex max-w-3xl flex-col items-center justify-center md:-mt-4">
                                <motion.img
                                  layoutId="ragas-main-logo"
                                  src={activeImage}
                                  alt="Ragas Group Logo"
                                  className="mb-5 max-h-[3.6rem] max-w-[82vw] w-auto object-contain sm:mb-7 sm:max-h-[4.8rem]"
                                />
                                <p className="text-base leading-8 text-slate-300 sm:text-lg">
                                  {activeRagasPage.description}
                                </p>
                                <p className="ragas-scroll-reveal mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-cyan-300 sm:text-base">
                                  <span>Scroll to explore all Ragas Group websites.</span>
                                </p>
                              </div>
                            ) : (
                              <div className="mx-auto w-full max-w-6xl">
                                <div className="mx-auto mt-1 flex flex-wrap items-center justify-center text-center md:-mt-3">
                                  <h3 className="text-lg font-extrabold uppercase tracking-[0.16em] text-cyan-300 sm:text-2xl sm:tracking-[0.2em]">
                                    {activeRagasPage.name}
                                  </h3>
                                </div>

                                <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-7 text-slate-300 sm:text-base">
                                  {activeRagasPage.description}
                                </p>

                                <div className={`mt-5 grid items-center gap-8 ${subIndex === 1 ? 'text-center lg:grid-cols-1' : 'text-left lg:grid-cols-[minmax(0,0.68fr)_minmax(12rem,0.32fr)]'}`}>
                                  <div className={subIndex === 1 ? 'mx-auto min-w-0 max-w-3xl' : 'min-w-0 lg:pl-8'}>
                                    <ul className={`grid gap-2.5 text-[15px] leading-7 text-slate-300 sm:text-base ${subIndex === 1 ? 'mx-auto max-w-3xl text-left' : ''}`}>
                                      {activeRagasPage.highlights?.map((highlight) => (
                                        <li className={subIndex === 1 ? 'flex gap-3 text-left' : 'flex gap-3'} key={highlight}>
                                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                                          <span>{highlight}</span>
                                        </li>
                                      ))}
                                    </ul>

                                    <div className={subIndex === 1 ? 'mt-5 text-center' : 'mt-5'}>
                                      <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                                        Tech Stack
                                      </p>
                                      <ul className={subIndex === 1 ? 'flex flex-wrap justify-center gap-2' : 'flex flex-wrap gap-2'}>
                                        {activeRagasPage.technologies?.map((technology) => (
                                          <li className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100 backdrop-blur" key={technology}>
                                            {technology}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>

                                  {subIndex > 1 ? (
                                    <a
                                      href={activeRagasPage.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className={`ragas-subproject-logo-float flex w-full items-center justify-center transition-opacity hover:opacity-90 lg:justify-end ${shouldShiftSubprojectLogoLeft ? 'lg:-translate-x-12 xl:-translate-x-20' : shouldNudgeAerospaceLogoLeft ? 'lg:-translate-x-4 xl:-translate-x-6' : ''}`}
                                      aria-label={`Visit ${activeRagasPage.name} website`}
                                    >
                                      <span className="ragas-logo-click-target inline-flex items-center justify-center">
                                        <img
                                          src={activeRagasPage.logo}
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          className={`${subprojectLogoSizeClass} w-full object-contain`}
                                        />
                                        {shouldShowSubprojectCursor ? (
                                          <>
                                            <span className="ragas-click-hand" aria-hidden="true">
                                              <FaRegHandPointer />
                                            </span>
                                            <span className="ragas-click-ring" aria-hidden="true" />
                                          </>
                                        ) : null}
                                      </span>
                                    </a>
                                  ) : null}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      <button
                        onClick={nextSub}
                        className="absolute right-0 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition-all hover:border-cyan-300/45 hover:bg-cyan-300/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                        type="button"
                        aria-label="Next Ragas page"
                      >
                        <FiChevronRight className="size-4.5" aria-hidden="true" />
                      </button>
                    </motion.div>

                    <motion.div className="mt-2 flex w-full items-center justify-center gap-3" variants={activeTextMotion} custom={direction}>
                      <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-100">
                        {String(subIndex + 1).padStart(2, '0')} / {String(ragasPageCount).padStart(2, '0')}
                      </span>
                      <div className="h-px w-28 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                        <div
                          className="h-full rounded-full bg-cyan-300 transition-all duration-300"
                          style={{ width: `${((subIndex + 1) / Math.max(ragasPageCount, 1)) * 100}%` }}
                        />
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <>
                    <motion.p className="relative left-auto top-auto z-10 mb-4 w-full max-w-5xl translate-x-0 text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 md:absolute md:left-1/2 md:top-0 md:mb-0 md:-translate-x-1/2 md:tracking-[0.24em]" variants={activeTextMotion} custom={direction}>
                      {activeProject.subtitle}
                    </motion.p>
                    <motion.div className="mx-auto w-full lg:-mt-3 lg:h-full lg:flex lg:flex-col lg:justify-center" variants={activeTextMotion} custom={direction}>
                      <div
                        className={`relative mx-auto overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] ${
                          isFoodieGo ? 'aspect-[9/16] max-h-[28rem] w-full max-w-[19rem]' : 'aspect-[16/10] w-full'
                        }`}
                      >
                        <AnimatePresence mode="wait" custom={imageDirection}>
                          {activeImage ? (
                            <motion.img
                              className={`absolute inset-0 h-full w-full opacity-90 ${isFoodieGo ? 'object-contain' : 'object-cover'}`}
                              src={activeImage}
                              alt={`${activeProject.title} preview ${imageIndex + 1}`}
                              loading="lazy"
                              decoding="async"
                              custom={imageDirection}
                              variants={activeTextMotion}
                              initial="enter"
                              animate={projectsStageInView ? "center" : "enter"}
                              exit="exit"
                              key={`${activeProject.title}-${imageIndex}`}
                            />
                          ) : null}
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/14 via-transparent to-[#050505]/54" aria-hidden="true" />
                      </div>

                      {projectImages.length > 1 ? (
                        <div className="mt-2.5 flex items-center justify-center gap-3" aria-label={`${activeProject.title} image pagination`}>
                          <button
                            className="project-image-button"
                            type="button"
                            onClick={() => paginateImage(-1)}
                            aria-label="Previous project image"
                          >
                            <FiChevronLeft aria-hidden="true" />
                          </button>
                          <span className="min-w-12 text-center text-xs font-bold text-cyan-100">
                            {imageIndex + 1} / {projectImages.length}
                          </span>
                          <button
                            className="project-image-button"
                            type="button"
                            onClick={() => paginateImage(1)}
                            aria-label="Next project image"
                          >
                            <FiChevronRight aria-hidden="true" />
                          </button>
                        </div>
                      ) : null}
                    </motion.div>

                    <div className="text-center lg:text-left lg:h-full lg:flex lg:flex-col lg:justify-between w-full py-2">
                      <div className={isFoodieGo ? 'lg:pt-16 xl:pt-18' : activeProject.title === 'MedAI Health Assistant' ? 'lg:pt-18 xl:pt-20' : shouldLowerProjectText ? 'lg:pt-16 xl:pt-18' : 'lg:pt-12 xl:pt-14'}>

                        <motion.h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl" variants={activeTextMotion} custom={direction}>
                          {activeProject.title}
                        </motion.h3>
                        <motion.p className="mt-2.5 text-base leading-7 text-slate-300" variants={activeTextMotion} custom={direction}>
                          {activeProject.description}
                        </motion.p>

                        <motion.ul className="mt-4 grid gap-2.5 text-sm leading-6 text-slate-300" variants={activeTextMotion} custom={direction}>
                          {activeProject.highlights.map((highlight, index) => (
                            <li className="flex gap-3 text-left" key={highlight}>
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(6,182,212,0.65)]" aria-hidden="true" />
                              <span>
                                {highlight}
                                {activeProject.detailedOverview && index === activeProject.highlights.length - 1 && (
                                  <button onClick={() => setShowModal(true)} className="ml-1.5 text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors font-semibold outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-sm cursor-pointer inline">
                                    Know more
                                  </button>
                                )}
                              </span>
                            </li>
                          ))}
                        </motion.ul>

                        <motion.ul className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start" variants={activeTextMotion} custom={direction}>
                          {activeProject.technologies.map((technology) => (
                            <li className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100 backdrop-blur" key={technology}>
                              {technology}
                            </li>
                          ))}
                        </motion.ul>
                      </div>

                      <motion.div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start" variants={activeTextMotion} custom={direction}>
                        {activeProject.github ? (
                          <a className="glass-button mobile-icon-action !p-0 !min-h-0 size-11 rounded-full flex items-center justify-center" href={activeProject.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                            <FaGithub className="size-5" aria-hidden="true" />
                          </a>
                        ) : null}
                        {activeProject.liveDemo ? (
                          <div className="relative w-11 h-11 shrink-0">
                            <a 
                              className="ripple-button mobile-icon-action group absolute left-0 top-0 !p-0 !min-h-0 !gap-0 h-11 w-11 hover:w-[11.5rem] rounded-full flex flex-row items-center justify-start cursor-pointer z-20 shadow-[0_0_12px_rgba(6,182,212,0.15)] overflow-hidden" 
                              href={activeProject.liveDemo} 
                              target="_blank" 
                              rel="noreferrer" 
                              aria-label="Live Demo"
                              style={{ transition: 'width 500ms ease-in-out, transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease' }}
                            >
                              <div className="size-11 flex items-center justify-center shrink-0">
                                <FiExternalLink className="size-4.5 shrink-0" aria-hidden="true" />
                              </div>
                              <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out font-extrabold text-[12.5px] sm:text-[13px] leading-none group-hover:max-w-[8rem] group-hover:opacity-100 group-hover:mr-2">
                                Visit Application
                              </span>
                            </a>
                          </div>
                        ) : null}
                        {activeProject.prototype ? (
                          <div className="relative w-11 h-11 shrink-0">
                            <a 
                              className="ripple-button mobile-icon-action group absolute left-0 top-0 !p-0 !min-h-0 !gap-0 h-11 w-11 hover:w-[9rem] rounded-full flex flex-row items-center justify-start cursor-pointer z-20 shadow-[0_0_12px_rgba(6,182,212,0.15)] overflow-hidden" 
                              href={activeProject.prototype} 
                              target="_blank" 
                              rel="noreferrer" 
                              aria-label="Prototype"
                              style={{ transition: 'width 500ms ease-in-out, transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease' }}
                            >
                              <div className="size-11 flex items-center justify-center shrink-0">
                                <FiLayers className="size-4.5 shrink-0" aria-hidden="true" />
                              </div>
                              <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out font-extrabold text-[13px] leading-none group-hover:max-w-[8rem] group-hover:opacity-100 group-hover:pr-5">
                                Prototype
                              </span>
                            </a>
                          </div>
                        ) : null}
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.article>
            </AnimatePresence>

            {/* Fixed prev/next buttons outside AnimatePresence */}
            <div className="mt-6 flex items-center justify-center lg:absolute lg:bottom-4 lg:right-0 lg:mt-0 z-10 gap-3">
              <button
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 cursor-pointer"
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous project"
              >
                <FiChevronLeft className="size-4" aria-hidden="true" />
              </button>
              <span className="min-w-10 text-center text-xs font-bold text-cyan-100">
                {activeIndex + 1} / {projects.length}
              </span>
              <button
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 cursor-pointer"
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next project"
              >
                <FiChevronRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-5xl">
            <p className="text-slate-400">Project details have not been provided yet.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && activeProject?.detailedOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#080808] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] p-6 sm:p-8 md:p-10 custom-scrollbar text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors z-10"
                aria-label="Close modal"
              >
                <FiX className="size-5 sm:size-6" />
              </button>

              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 pr-10 md:pr-12">
                {activeProject.title} Overview
              </h2>
              
              <div className="space-y-8 sm:space-y-10">
                {/* Executive Description */}
                <section>
                  <h3 className="text-sm font-black text-cyan-300 mb-3 tracking-[0.15em] uppercase">Executive Description</h3>
                  <p className="text-slate-300 leading-relaxed text-[15px] sm:text-base">
                    {activeProject.detailedOverview.executiveDescription}
                  </p>
                </section>

                {/* Technology Stack */}
                {activeProject.detailedOverview.technologyStack && (
                  <section>
                    <h3 className="text-sm font-black text-cyan-300 mb-4 tracking-[0.15em] uppercase">Technology Stack Specifications</h3>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {activeProject.detailedOverview.technologyStack.frontend && (
                        <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5 shadow-inner">
                          <h4 className="font-bold text-white mb-3 text-[15px]">Frontend Ecosystem</h4>
                          <ul className="space-y-2.5">
                            {activeProject.detailedOverview.technologyStack.frontend.map((item, i) => (
                              <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-snug">
                                <span className="text-cyan-400 mt-1 shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {activeProject.detailedOverview.technologyStack.backend && (
                        <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5 shadow-inner">
                          <h4 className="font-bold text-white mb-3 text-[15px]">Backend Ecosystem</h4>
                          <ul className="space-y-2.5">
                            {activeProject.detailedOverview.technologyStack.backend.map((item, i) => (
                              <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-snug">
                                <span className="text-cyan-400 mt-1 shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {activeProject.detailedOverview.technologyStack.database && (
                        <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5 shadow-inner sm:col-span-2">
                          <h4 className="font-bold text-white mb-3 text-[15px]">Database, Media & Integrations</h4>
                          <ul className="space-y-2.5 grid sm:grid-cols-2 gap-x-4">
                            {activeProject.detailedOverview.technologyStack.database.map((item, i) => (
                              <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-snug">
                                <span className="text-cyan-400 mt-1 shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* Pages and Components */}
                {activeProject.detailedOverview.pagesAndComponents && (
                  <section>
                    <h3 className="text-sm font-black text-cyan-300 mb-5 tracking-[0.15em] uppercase">Application Pages & Components</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {activeProject.detailedOverview.pagesAndComponents.map((item, i) => (
                        <div key={i} className="pl-4 border-l-2 border-cyan-500/40">
                          <h4 className="font-bold text-white text-[15px] mb-1.5">{item.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Security and Architecture */}
                {activeProject.detailedOverview.securityAndArchitecture && (
                  <section>
                    <h3 className="text-sm font-black text-cyan-300 mb-5 tracking-[0.15em] uppercase">Security, Privacy & Data Lifecycle</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {activeProject.detailedOverview.securityAndArchitecture.map((item, i) => (
                        <div key={i} className="pl-4 border-l-2 border-cyan-500/40">
                          <h4 className="font-bold text-white text-[15px] mb-1.5">{item.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}

export default memo(Projects);

