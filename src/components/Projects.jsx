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
  const { ref: projectsStageRef, inView: projectsStageInView } = useInView({
    threshold: 0.32,
    rootMargin: '0px 0px -12% 0px',
    triggerOnce: true,
  });
  const activeProject = projects[activeIndex];
  const isFoodieGo = activeProject?.title === 'FoodieGo';
  const projectImages = activeProject?.images || [];
  const activeImage = projectImages[imageIndex] || projectImages[0];

  useEffect(() => {
    setActiveImage([0, 1]);
  }, [activeIndex]);

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
          <div ref={projectsStageRef} className="mx-auto max-w-6xl -mt-6 sm:-mt-10 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                className="grid items-center lg:items-stretch gap-8 overflow-hidden py-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:h-[33.5rem]"
                custom={direction}
                key={activeProject.title}
                variants={pageMotion}
                initial="enter"
                animate={projectsStageInView ? "center" : "enter"}
                exit="exit"
              >
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

                    {activeProject.subprojects ? (
                      <motion.div
                        className="mt-4 grid grid-cols-2 gap-3 w-full"
                        variants={morphText}
                        custom={direction}
                      >
                        {activeProject.subprojects.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center justify-between gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-2 hover:border-cyan-300/30 hover:bg-cyan-300/5 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="size-8 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-slate-950/40">
                                <img src={sub.logo} alt="" className="h-full w-full object-cover" />
                              </div>
                              <div className="min-w-0 text-left">
                                <h4 className="text-[11px] font-black text-white truncate leading-snug">{sub.name}</h4>
                                <p className="text-[9px] text-slate-350 truncate leading-normal mt-0.5">{sub.desc}</p>
                              </div>
                            </div>
                            <FiExternalLink className="size-3 shrink-0 text-cyan-300/50 group-hover:text-cyan-300 transition-colors" />
                          </a>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.ul className="mt-4 grid gap-2.5 text-sm leading-6 text-slate-300" variants={morphText} custom={direction}>
                        {activeProject.highlights.map((highlight) => (
                          <li className="flex gap-3 text-left" key={highlight}>
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(6,182,212,0.65)]" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}

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
