import { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiLayers } from 'react-icons/fi';
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
  const { ref: projectsStageRef, inView: projectsStageInView } = useInView({
    threshold: 0.32,
    rootMargin: '0px 0px -12% 0px',
    triggerOnce: true,
  });
  const activeProject = projects[activeIndex];
  const isFoodieGo = activeProject?.title === 'FoodieGo';
  const isRagasGroup = activeProject?.title === 'Ragas Group';
  const projectImages = activeProject?.images || [];
  const activeImage = projectImages[imageIndex] || projectImages[0];

  useEffect(() => {
    setActiveImage([0, 1]);
    setSubIndex(0);
  }, [activeIndex]);

  const nextSub = () => {
    if (!activeProject.subprojects) return;
    setSubIndex((prev) => (prev + 1) % activeProject.subprojects.length);
  };

  const prevSub = () => {
    if (!activeProject.subprojects) return;
    setSubIndex((prev) => (prev - 1 + activeProject.subprojects.length) % activeProject.subprojects.length);
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="Project details, technologies, and links from the provided folders."
        />

        {projects.length > 0 && activeProject ? (
          <div ref={projectsStageRef} className="w-full mx-auto max-w-6xl -mt-10 sm:-mt-14 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                className={`overflow-hidden py-4 ${
                  isRagasGroup 
                    ? 'flex flex-col items-center justify-between text-center lg:h-[33.5rem] w-full max-w-3xl mx-auto'
                    : 'grid items-center lg:items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:h-[33.5rem] w-full'
                }`}
                custom={direction}
                key={activeProject.title}
                variants={pageMotion}
                initial="enter"
                animate={projectsStageInView ? "center" : "enter"}
                exit="exit"
              >
                {isRagasGroup ? (
                  <div className="w-full flex flex-col items-center justify-between h-full">
                    {/* Header Area with Center Logo, Subtitle & Description */}
                    <motion.div className="w-full flex flex-col items-center animate-fadeIn" variants={morphText} custom={direction}>
                      <a href="https://www.ragasgroups.com" target="_blank" rel="noreferrer" className="block mx-auto hover:opacity-90 transition-opacity cursor-pointer">
                        <img
                          src={activeImage}
                          alt="Ragas Group Logo"
                          className="max-h-[3.6rem] w-auto object-contain mx-auto"
                        />
                      </a>
                      <p className="mt-3.5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                        Corporate digital ecosystem & portfolios
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-350 max-w-2xl">
                        {activeProject.description}
                      </p>
                    </motion.div>

                    {/* Center Content Container: One sub-project at a time with next/prev buttons */}
                    <motion.div 
                      className="w-full max-w-[28rem] mt-1 relative px-12 sm:px-16" 
                      variants={morphText} 
                      custom={direction}
                    >
                      <AnimatePresence mode="wait">
                        {activeProject.subprojects && (
                          <motion.div
                            key={subIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center text-center relative"
                          >
                            {/* Row: Logo on Left, Title on Right */}
                            <div className="flex items-center gap-3.5 mb-2.5">
                              <div className="size-14 overflow-hidden rounded-full border border-cyan-300/15 bg-slate-900 shadow-[0_0_18px_rgba(6,182,212,0.1)]">
                                <img 
                                  src={activeProject.subprojects[subIndex].logo} 
                                  alt="" 
                                  className="h-full w-full object-cover" 
                                />
                              </div>
                              <h4 className="text-base sm:text-lg font-black text-white tracking-tight">
                                {activeProject.subprojects[subIndex].name}
                              </h4>
                            </div>

                            {/* Description below */}
                            <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-slate-300 min-h-[3rem] flex items-center justify-center">
                              {activeProject.subprojects[subIndex].desc}
                            </p>

                            {/* Visit Link */}
                            <a
                              href={activeProject.subprojects[subIndex].url}
                              target="_blank"
                              rel="noreferrer"
                              className="ripple-button mt-3 px-3.5 py-1.5 text-[10px] min-h-[2.25rem] h-auto rounded-full"
                            >
                              <FiExternalLink className="mr-1.5" />
                              Live Website
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Next/Prev buttons on left/right edges of the card container */}
                      <button
                        onClick={prevSub}
                        className="absolute left-0 top-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300 transition-all cursor-pointer z-10"
                        type="button"
                        aria-label="Previous sub-project"
                      >
                        <FiChevronLeft className="size-4.5" aria-hidden="true" />
                      </button>
                      <button
                        onClick={nextSub}
                        className="absolute right-0 top-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300 transition-all cursor-pointer z-10"
                        type="button"
                        aria-label="Next sub-project"
                      >
                        <FiChevronRight className="size-4.5" aria-hidden="true" />
                      </button>
                    </motion.div>

                    {/* Footer Area with Technologies & Sub-Pagination Dots */}
                    <motion.div className="w-full flex flex-col items-center mt-3.5" variants={morphText} custom={direction}>
                      <div className="flex items-center gap-1.5 mb-3.5">
                        {activeProject.subprojects?.map((_, idx) => (
                          <span
                            key={idx}
                            className={`block size-1.5 rounded-full transition-all duration-300 ${
                              subIndex === idx ? 'bg-cyan-400 scale-120' : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <ul className="flex flex-wrap justify-center gap-2">
                        {activeProject.technologies.map((technology) => (
                          <li 
                            className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100 backdrop-blur" 
                            key={technology}
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ) : (
                  <>
                    <motion.div className="mx-auto w-full lg:h-full lg:flex lg:flex-col lg:justify-center" variants={morphText} custom={direction}>
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
                              variants={morphText}
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
                      <div>
                        <motion.p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300" variants={morphText} custom={direction}>
                          {activeProject.subtitle}
                        </motion.p>
                        <motion.h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl" variants={morphText} custom={direction}>
                          {activeProject.title}
                        </motion.h3>
                        <motion.p className="mt-2.5 text-base leading-7 text-slate-300" variants={morphText} custom={direction}>
                          {activeProject.description}
                        </motion.p>

                        <motion.ul className="mt-4 grid gap-2.5 text-sm leading-6 text-slate-300" variants={morphText} custom={direction}>
                          {activeProject.highlights.map((highlight) => (
                            <li className="flex gap-3 text-left" key={highlight}>
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(6,182,212,0.65)]" aria-hidden="true" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </motion.ul>

                        <motion.ul className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start" variants={morphText} custom={direction}>
                          {activeProject.technologies.map((technology) => (
                            <li className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100 backdrop-blur" key={technology}>
                              {technology}
                            </li>
                          ))}
                        </motion.ul>
                      </div>

                      <motion.div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start" variants={morphText} custom={direction}>
                        {activeProject.github ? (
                          <a className="glass-button" href={activeProject.github} target="_blank" rel="noreferrer">
                            <FaGithub aria-hidden="true" />
                            GitHub
                          </a>
                        ) : null}
                        {activeProject.liveDemo ? (
                          <a className="ripple-button" href={activeProject.liveDemo} target="_blank" rel="noreferrer">
                            <FiExternalLink aria-hidden="true" />
                            Live Demo
                          </a>
                        ) : null}
                        {activeProject.prototype ? (
                          <a className="ripple-button" href={activeProject.prototype} target="_blank" rel="noreferrer">
                            <FiLayers aria-hidden="true" />
                            Prototype
                          </a>
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
    </AnimatedSection>
  );
}

export default memo(Projects);
