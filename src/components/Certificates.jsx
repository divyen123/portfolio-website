import { memo, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink, FiX } from 'react-icons/fi';
import { certificates } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const cardStrokeLength = 1208;

const getShortTitle = (title, isMobile) => {
  if (!isMobile) return title;
  const mapping = {
    'Artificial Intelligence Foundation Certification': 'AI Foundation Cert',
    'TechA AWS Solution Architect Certification': 'AWS Solution Architect',
    'Database Management System - Science Graduates': 'DBMS - Science Grad',
    'Oracle Fusion AI Agent Studio Certified Foundations Associate': 'Oracle AI Agent Assoc',
  };
  return mapping[title] || title;
};

function Certificates() {
  const [animationRun, setAnimationRun] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [pdfReady, setPdfReady] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const { ref: certificatesGridRef, inView: certificatesInView } = useInView({
    threshold: 0.45,
    rootMargin: '0px 0px -12% 0px',
    triggerOnce: false,
  });

  useEffect(() => {
    if (certificatesInView) {
      setAnimationRun((run) => run + 1);
    }
  }, [certificatesInView]);

  const closeCertificate = useCallback(() => {
    setPdfReady(false);
    window.setTimeout(() => {
      setActiveCertificate(null);
    }, 0);
  }, []);
  useEffect(() => {
    if (!activeCertificate) {
      setPdfReady(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setPdfReady(true);
    }, 180);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCertificate();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCertificate, closeCertificate]);


  useEffect(() => {
    if (!activeCertificate) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const container = document.querySelector('.active-section-scroll-container');
    if (container) {
      container.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      if (container) {
        container.style.overflowY = 'auto';
      }
    };
  }, [activeCertificate]);

  return (
    <AnimatedSection className="section-shell" id="certificates" direction="diagonalRight">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates"
          description="Certificate titles and dates extracted from the provided PDFs."
        />

        <div
          ref={certificatesGridRef}
          className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
        >
          {certificates.length > 0 ? (
            certificates.map((certificate, index) => (
              <motion.button
                className={`certificate-card glass-card group flex min-h-[9.5rem] sm:min-h-52 flex-col overflow-hidden p-3 sm:p-4 text-left border border-cyan-200/10 sm:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 ${index === certificates.length - 2 ? 'lg:col-start-2' : ''}`}
                key={`${certificate.title}-${certificate.file}`}
                type="button"
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0 : 0.35, delay: isMobile ? 0 : index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => setActiveCertificate(certificate)}
                aria-label={`Open ${certificate.title} certificate`}
              >
                <svg
                  className="certificate-card-stroke hidden sm:block"
                  viewBox="0 0 400 208"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.rect
                    key={`stroke-${animationRun}-${certificate.file}`}
                    x="1"
                    y="1"
                    width="398"
                    height="206"
                    rx="28"
                    fill="none"
                    stroke="rgba(103, 232, 249, 0.72)"
                    strokeWidth="1.4"
                    strokeDasharray={cardStrokeLength}
                    strokeDashoffset={isMobile ? 0 : cardStrokeLength}
                    initial={isMobile ? { strokeDashoffset: 0, opacity: 1 } : { strokeDashoffset: cardStrokeLength, opacity: 0 }}
                    animate={{ strokeDashoffset: 0, opacity: 1 }}
                    transition={isMobile ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 + 0.12 }}
                    strokeLinejoin="round"
                  />
                </svg>
                <motion.div
                  key={`content-${animationRun}-${certificate.file}`}
                  className="certificate-card-content flex min-h-full flex-col w-full"
                  initial={isMobile ? { opacity: 1, filter: 'none', y: 0 } : { opacity: 0, filter: 'blur(7px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.45, ease: 'easeOut', delay: index * 0.08 + 0.28 }}
                >
                  <div className="mb-2 sm:mb-4">
                    <FiAward className="size-4 sm:size-5 text-fuchsia-100" aria-hidden="true" />
                  </div>
                  <h3 className="text-xs sm:text-base font-black leading-tight text-white line-clamp-3 sm:line-clamp-none">
                    {getShortTitle(certificate.title, isMobile)}
                  </h3>
                  <p className="mt-1.5 sm:mt-3 text-[10px] sm:text-sm font-semibold text-slate-400">
                    {certificate.issuer || 'Issuer not provided'}
                  </p>
                  <span className="mt-auto ml-auto inline-flex items-center justify-center text-white transition group-hover:text-fuchsia-200" aria-hidden="true">
                    <FiExternalLink className="size-3 sm:size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </motion.div>
              </motion.button>
            ))
          ) : (
            <p className="text-slate-400">Certificates have not been provided yet.</p>
          )}
        </div>
      </div>

      {typeof document !== 'undefined'
        ? createPortal(
            <AnimatePresence>
              {activeCertificate ? (
                <motion.div
                  className="fixed inset-0 z-[90] bg-[radial-gradient(circle_at_50%_18%,rgba(6,182,212,0.1),transparent_32%),rgba(2,5,5,0.84)] backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${activeCertificate.title} certificate preview`}
                  onClick={closeCertificate}
                >
                  <div className="flex h-full w-full items-center justify-center px-3 py-6 pt-20 sm:px-6 sm:pt-20">
                    <motion.div
                      className="relative flex h-[78vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#071010]/95 shadow-[0_28px_90px_rgba(0,0,0,0.62)]"
                      initial={{ opacity: 0, y: 18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 14, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <div className="flex items-start justify-between gap-4 border-b border-cyan-200/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.32),rgba(255,255,255,0.035))] px-4 py-3 sm:px-5">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-black text-white sm:text-base">{activeCertificate.title}</h3>
                          <p className="mt-1 text-xs font-semibold text-slate-400 sm:text-sm">{activeCertificate.issuer || 'Issuer not provided'}</p>
                        </div>
                        <button
                          className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-cyan-200/40 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                          type="button"
                          onClick={closeCertificate}
                          aria-label="Close certificate popup"
                        >
                          <FiX aria-hidden="true" />
                        </button>
                      </div>

                      <div className="certificate-modal-body min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
                        {pdfReady ? (
                          <iframe
                            className="certificate-pdf-frame h-[680px] w-full rounded-xl bg-[#050505] sm:h-[720px]"
                            src={`${activeCertificate.file}#toolbar=0&navpanes=0&view=FitH`}
                            title={`${activeCertificate.title} PDF`}
                          />
                        ) : (
                          <div className="grid h-[680px] w-full place-items-center rounded-xl border border-cyan-200/10 bg-[#050505]/72 text-sm font-bold text-cyan-100/70 sm:h-[720px]">
                            Loading certificate...
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </AnimatedSection>
  );
}

export default memo(Certificates);