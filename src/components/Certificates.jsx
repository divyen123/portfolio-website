import { memo, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink, FiX } from 'react-icons/fi';
import { certificates } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const cardStrokeLength = 1208;
const strokeDrawDuration = 4.5;
const contentRevealDelay = strokeDrawDuration * 0.3;
const contentRevealDuration = 1.2;

function Certificates() {
  const [animationRun, setAnimationRun] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [pdfReady, setPdfReady] = useState(false);
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

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeCertificate]);


  useEffect(() => {
    if (!activeCertificate) {
      return undefined;
    }

    const container = document.querySelector('.active-section-scroll-container');
    const previousOverflow = container ? container.style.overflowY : 'auto';
    if (container) {
      container.style.overflowY = 'hidden';
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeCertificate();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (container) {
        container.style.overflowY = previousOverflow;
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCertificate, closeCertificate]);

  return (
    <AnimatedSection className="section-shell" id="certificates" direction="diagonalRight">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications"
          description="Certificate titles and dates extracted from the provided PDFs."
        />

        <div
          ref={certificatesGridRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certificates.length > 0 ? (
            certificates.map((certificate, index) => (
              <motion.button
                className={`certificate-card glass-card group flex min-h-52 flex-col overflow-hidden p-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 ${index === certificates.length - 2 ? 'lg:col-start-2' : ''}`}
                key={`${certificate.title}-${certificate.file}`}
                type="button"
                animate={certificatesInView ? { opacity: 1, y: 0 } : { opacity: 0.92, y: 18 }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => setActiveCertificate(certificate)}
                aria-label={`Open ${certificate.title} certificate`}
              >
                <svg
                  className="certificate-card-stroke"
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
                    strokeDashoffset={cardStrokeLength}
                    strokeLinejoin="round"
                    animate={certificatesInView ? { strokeDashoffset: 0, opacity: 1 } : { strokeDashoffset: cardStrokeLength, opacity: 0 }}
                    transition={{ duration: strokeDrawDuration, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
                <motion.div
                  key={`content-${animationRun}-${certificate.file}`}
                  className="certificate-card-content flex min-h-full flex-col"
                  initial={{ opacity: 0, filter: 'blur(7px)', y: 10 }}
                  animate={certificatesInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(7px)', y: 10 }}
                  transition={{ duration: contentRevealDuration, delay: certificatesInView ? contentRevealDelay : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-4">
                    <FiAward className="size-5 text-fuchsia-100" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-black leading-tight text-white">{certificate.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-slate-400">{certificate.issuer || 'Issuer not provided'}</p>
                  <span className="mt-auto ml-auto inline-flex items-center justify-center text-white transition group-hover:text-fuchsia-200" aria-hidden="true">
                    <FiExternalLink className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </motion.div>
              </motion.button>
            ))
          ) : (
            <p className="text-slate-400">Certificates have not been provided yet.</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[radial-gradient(circle_at_50%_18%,rgba(6,182,212,0.1),transparent_32%),rgba(2,5,5,0.84)] px-3 py-6 backdrop-blur-sm sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCertificate.title} certificate preview`}
            onClick={closeCertificate}
          >
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </AnimatedSection>
  );
}

export default memo(Certificates);