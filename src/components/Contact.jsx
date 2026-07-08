import { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import Footer from './Footer';


function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isSent) return undefined;
    const timer = window.setTimeout(() => {
      setIsSent(false);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [isSent]);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setIsSent(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        setIsSending(false);
        if (res.success === true || res.success === 'true') {
          setIsSent(true);
          form.reset();
        }
      })
      .catch((error) => {
        setIsSending(false);
        console.error('Error sending message:', error);
      });
  }

  return (
    <>
      <AnimatePresence>
        {isSent && !isMobile && (
          <motion.div
            className="fixed top-28 right-10 sm:right-16 z-[100] flex items-center gap-3 text-sm font-bold text-cyan-200"
            initial={{ opacity: 0, x: 240, clipPath: 'inset(0 0 0 100%)' }}
            animate={{ opacity: 1, x: 0, clipPath: 'inset(0 0 0 0)' }}
            exit={{ opacity: 0, x: 240, clipPath: 'inset(0 0 0 100%)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            role="status"
          >
            <FiCheckCircle className="size-5 text-cyan-300 animate-pulse" aria-hidden="true" />
            <span>Message Sent Successfully</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatedSection className="section-shell !pb-10" id="contact" direction="up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            className="pt-6 sm:pt-8"
          />

          <div className="mx-auto flex max-w-3xl justify-center">
            <motion.form
              className="mx-auto w-full max-w-xl"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid gap-3.5">
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Name
                  <input className="form-field" type="text" name="name" autoComplete="name" placeholder="Your name" required />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Email
                  <input className="form-field" type="email" name="email" autoComplete="email" placeholder="your@email.com" required />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Message
                  <textarea className="form-field min-h-[7.5rem] resize-y" name="message" rows="4" placeholder="Write your message" required />
                </label>
              </div>

              <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                <AnimatePresence mode="wait">
                  {isSent && isMobile ? (
                    <motion.div
                      key="success-mobile"
                      className="flex items-center justify-center gap-2 text-sm font-bold text-cyan-200 py-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiCheckCircle className="size-5 text-cyan-350 animate-pulse" aria-hidden="true" />
                      <span>Message Sent Successfully</span>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit-btn"
                      className="ripple-button w-full md:w-auto"
                      type="submit"
                      disabled={isSending || (isSent && !isMobile)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isSending ? (
                        <>
                          <span className="size-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiMail aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          </div>
        </div>
      </AnimatedSection>
      <Footer />
    </>
  );
}

export default memo(Contact);

