import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroOverlay from './components/IntroOverlay';
import LetterboxReveal from './components/LetterboxReveal';
import SplashCursor from './components/SplashCursor';
import { personalInfo } from './data/portfolioData';

const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));

function SectionFallback() {
  return null;
}

const SECTIONS = ['home', 'about', 'education', 'skills', 'projects', 'certificates', 'contact'];

const getTransitionVariants = (direction, activeIndex, isMobile) => {
  if (isMobile) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    };
  }
  const isForward = direction === 'forward';

  switch (activeIndex) {
    case 1: // home <-> about: Zoom
      return {
        initial: { scale: isForward ? 0.35 : 2.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: isForward ? 2.5 : 0.35, opacity: 0 }
      };
    case 2: // about <-> education: Horizontal slide right-to-left
      return {
        initial: { x: isForward ? '100%' : '-100%', opacity: 1 },
        animate: { x: 0, opacity: 1 },
        exit: { x: isForward ? '-100%' : '100%', opacity: 1 }
      };
    case 3: // education <-> skills: Vertical slide bottom-to-top
      return {
        initial: { y: isForward ? '100%' : '-100%', opacity: 1 },
        animate: { y: 0, opacity: 1 },
        exit: { y: isForward ? '-100%' : '100%', opacity: 1 }
      };
    case 4: // skills <-> projects: Horizontal slide left-to-right
      return {
        initial: { x: isForward ? '-100%' : '100%', opacity: 1 },
        animate: { x: 0, opacity: 1 },
        exit: { x: isForward ? '100%' : '-100%', opacity: 1 }
      };
    case 5: // projects <-> certificates: 3D Flip
      return {
        initial: { rotateY: isForward ? 90 : -90, opacity: 0, scale: 0.8 },
        animate: { rotateY: 0, opacity: 1, scale: 1 },
        exit: { rotateY: isForward ? -90 : 90, opacity: 0, scale: 0.8 }
      };
    case 6: // certificates <-> contact: Diagonal slide
      return {
        initial: { x: isForward ? '100%' : '-100%', y: isForward ? '100%' : '-100%', opacity: 1 },
        animate: { x: 0, y: 0, opacity: 1 },
        exit: { x: isForward ? '-100%' : '100%', y: isForward ? '-100%' : '100%', opacity: 1 }
      };
    default:
      return {
        initial: { scale: isForward ? 0.35 : 2.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: isForward ? 2.5 : 0.35, opacity: 0 }
      };
  }
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showLetterbox, setShowLetterbox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [heroFocusMode, setHeroFocusMode] = useState(true);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const isMobileRef = useRef(false);
  const heroFocusModeRef = useRef(true);

  useEffect(() => {
    const handleResize = () => {
      const nextIsMobile = window.innerWidth < 768;
      setIsMobile(nextIsMobile);
      isMobileRef.current = nextIsMobile;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync refs to avoid stale closure issues in scroll listeners
  useEffect(() => {
    activeIndexRef.current = activeIndex;
    isTransitioningRef.current = isTransitioning;
    heroFocusModeRef.current = heroFocusMode;
  }, [activeIndex, isTransitioning, heroFocusMode]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 90,
    });
  }, []);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowIntro(false);
      setShowLetterbox(true);
    }, 5300);
    const letterboxTimer = window.setTimeout(() => {
      setShowLetterbox(false);
    }, 6100);

    return () => {
      window.clearTimeout(introTimer);
      window.clearTimeout(letterboxTimer);
    };
  }, []);

  const triggerTransition = (targetIndex, options = {}) => {
    const currentIndex = activeIndexRef.current;
    if (targetIndex === currentIndex || isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    activeIndexRef.current = targetIndex;
    setIsTransitioning(true);
    setDirection(targetIndex > currentIndex ? 'forward' : 'backward');
    if (Object.prototype.hasOwnProperty.call(options, 'heroFocusMode')) {
      heroFocusModeRef.current = options.heroFocusMode;
      setHeroFocusMode(options.heroFocusMode);
    }
    setActiveIndex(targetIndex);

    const lockDuration = isMobileRef.current ? 300 : 950;
    setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }, lockDuration);
  };

  const triggerHeroFocusMode = (nextFocused) => {
    if (heroFocusModeRef.current === nextFocused || isTransitioningRef.current) return;

    heroFocusModeRef.current = nextFocused;
    isTransitioningRef.current = true;
    setHeroFocusMode(nextFocused);
    setIsTransitioning(true);

    const lockDuration = isMobileRef.current ? 240 : 720;
    setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }, lockDuration);
  };

  const handleNavClick = (section) => {
    const targetIndex = SECTIONS.indexOf(section);
    if (targetIndex < 0) return;

    if (targetIndex === 0) {
      if (activeIndexRef.current === 0) {
        triggerHeroFocusMode(true);
      } else {
        triggerTransition(0, { heroFocusMode: true });
      }
      return;
    }

    triggerTransition(targetIndex);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      const threshold = 25;
      if (Math.abs(e.deltaY) < threshold) return;

      const currentIndex = activeIndexRef.current;
      const isScrollingDown = e.deltaY > 0;

      if (currentIndex === 0) {
        e.preventDefault();
        if (isTransitioningRef.current) return;

        if (isScrollingDown) {
          if (heroFocusModeRef.current) {
            triggerHeroFocusMode(false);
          } else {
            triggerTransition(1);
          }
        } else if (!heroFocusModeRef.current) {
          triggerHeroFocusMode(true);
        }
        return;
      }

      const container = document.querySelector('.active-section-scroll-container');
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const isScrollable = scrollHeight > clientHeight;

        if (isScrollable) {
          if (isScrollingDown) {
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
            if (!isAtBottom) return;
          } else {
            const isAtTop = scrollTop <= 5;
            if (!isAtTop) return;
          }
        }
      }

      e.preventDefault();
      if (isTransitioningRef.current) return;

      if (isScrollingDown) {
        if (currentIndex < SECTIONS.length - 1) {
          triggerTransition(currentIndex + 1);
        }
      } else if (currentIndex === 1) {
        triggerTransition(0, { heroFocusMode: false });
      } else if (currentIndex > 0) {
        triggerTransition(currentIndex - 1);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const deltaY = e.touches[0].clientY - touchStartY.current;
      const deltaX = e.touches[0].clientX - touchStartX.current;
      const threshold = 40;

      if (Math.abs(deltaY) <= Math.abs(deltaX) || Math.abs(deltaY) < threshold) return;

      const currentIndex = activeIndexRef.current;
      const isScrollingDown = deltaY < 0;

      if (currentIndex === 0) {
        e.preventDefault();
        if (isTransitioningRef.current) return;

        if (isScrollingDown) {
          if (heroFocusModeRef.current) {
            triggerHeroFocusMode(false);
          } else {
            triggerTransition(1);
          }
        } else if (!heroFocusModeRef.current) {
          triggerHeroFocusMode(true);
        }
        return;
      }

      const container = document.querySelector('.active-section-scroll-container');
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const isScrollable = scrollHeight > clientHeight;

        if (isScrollable) {
          if (isScrollingDown) {
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
            if (!isAtBottom) return;
          } else {
            const isAtTop = scrollTop <= 5;
            if (!isAtTop) return;
          }
        }
      }

      e.preventDefault();
      if (isTransitioningRef.current) return;

      if (isScrollingDown) {
        if (currentIndex < SECTIONS.length - 1) {
          triggerTransition(currentIndex + 1);
        }
      } else if (currentIndex === 1) {
        triggerTransition(0, { heroFocusMode: false });
      } else if (currentIndex > 0) {
        triggerTransition(currentIndex - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'PageDown' && e.key !== 'ArrowUp' && e.key !== 'PageUp') return;

      const currentIndex = activeIndexRef.current;
      const isMovingDown = e.key === 'ArrowDown' || e.key === 'PageDown';

      if (currentIndex === 0) {
        e.preventDefault();
        if (isTransitioningRef.current) return;

        if (isMovingDown) {
          if (heroFocusModeRef.current) {
            triggerHeroFocusMode(false);
          } else {
            triggerTransition(1);
          }
        } else if (!heroFocusModeRef.current) {
          triggerHeroFocusMode(true);
        }
        return;
      }

      e.preventDefault();
      if (isTransitioningRef.current) return;

      if (isMovingDown) {
        if (currentIndex < SECTIONS.length - 1) {
          triggerTransition(currentIndex + 1);
        }
      } else if (currentIndex === 1) {
        triggerTransition(0, { heroFocusMode: false });
      } else if (currentIndex > 0) {
        triggerTransition(currentIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const renderSection = (index) => {
    let Component;
    switch (index) {
      case 0:
        Component = <Hero introComplete={!showIntro} heroFocusMode={heroFocusMode} />;
        break;
      case 1:
        Component = <About />;
        break;
      case 2:
        Component = <Education />;
        break;
      case 3:
        Component = <Skills />;
        break;
      case 4:
        Component = <Projects />;
        break;
      case 5:
        Component = <Certificates />;
        break;
      case 6:
        Component = <Contact />;
        break;
      default:
        return null;
    }

    return (
      <div className="active-section-scroll-container scrollbar-hide absolute inset-0 w-full h-full flex flex-col overflow-y-auto">
        <Suspense fallback={<SectionFallback />}>
          <div className={`w-full my-0 md:my-auto ${index === 0 ? 'py-0' : 'py-16 md:py-0'}`}>
            {Component}
          </div>
        </Suspense>
      </div>
    );
  };

  const activeVariants = getTransitionVariants(direction, activeIndex, isMobile);

  return (
    <div className="relative isolate w-screen h-screen overflow-hidden bg-[#050505] text-white">
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#004f63"
        DENSITY_DISSIPATION={4.5}
        VELOCITY_DISSIPATION={2}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={0}
      />
      <Helmet>
        <meta
          name="description"
          content={`${personalInfo.name} portfolio featuring frontend development, React, UI design, projects, certificates, education, and contact details.`}
        />
        <meta name="author" content={personalInfo.name} />
        <meta property="og:title" content={`${personalInfo.name} | Software Developer & UI Designer`} />
        <meta property="og:description" content={personalInfo.intro} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Fixed Background Video */}
      <div className={`portfolio-background-layer pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true">
        <video
          className="portfolio-video-background"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/media/portfolio-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050505]/76" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:64px_64px] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <AnimatePresence>{showIntro ? <IntroOverlay /> : null}</AnimatePresence>
      <AnimatePresence>{showLetterbox ? <LetterboxReveal /> : null}</AnimatePresence>
      
      {/* Control Navbar from parent */}
      <Navbar activeSection={SECTIONS[activeIndex]} onNavClick={handleNavClick} />
      
      {/* Viewport-locked 3D transitioning stage */}
      <main className="relative z-10 w-full h-full overflow-hidden" style={{ perspective: 1200 }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            variants={activeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: isMobile ? 0.16 : 0.95, ease: isMobile ? 'linear' : [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          >
            {renderSection(activeIndex)}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
