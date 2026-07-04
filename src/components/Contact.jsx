import { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiCheckCircle, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import Footer from './Footer';

const contactLinks = [
  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: FiMail },
  { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}`, icon: FiPhone },
  { label: 'GitHub', value: personalInfo.github, href: personalInfo.github, icon: FaGithub },
  { label: 'LinkedIn', value: personalInfo.linkedin, href: personalInfo.linkedin, icon: FaLinkedinIn },
].filter((item) => item.value);

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [contactAnimationRun, setContactAnimationRun] = useState(0);
  const { ref: contactLinksRef, inView: contactLinksInView } = useInView({
    threshold: 0.55,
    triggerOnce: false,
  });

  useEffect(() => {
    if (contactLinksInView) {
      setContactAnimationRun((run) => run + 1);
    }
  }, [contactLinksInView]);

  useEffect(() => {
    if (!isSent) return undefined;
    const timer = window.setTimeout(() => {
      setIsSent(false);
    }, 4000);
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
        {isSent && (
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
            eyebrow="Contact"
            title="Get In Touch"
            description="Contact details from the provided resume and links file."
          />

          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
            <motion.form
              className="mx-auto w-full max-w-lg lg:max-w-xl"
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
                <button className="ripple-button" type="submit" disabled={isSending}>
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
                </button>
              </div>
            </motion.form>

            <div ref={contactLinksRef} className="mx-auto grid w-full max-w-md grid-cols-2 gap-6 text-center sm:gap-x-8 sm:gap-y-9">
              {contactLinks.length > 0 ? (
                contactLinks.map((item, index) => {
                  const Icon = item.icon;
                  const isInternal = item.label === 'Email' || item.label === 'Phone';

                  return (
                    <motion.a
                      className="group flex flex-col items-center gap-3 px-3 py-4 text-center"
                      href={item.href}
                      key={item.label}
                      target={isInternal ? undefined : '_blank'}
                      rel={isInternal ? undefined : 'noreferrer'}
                      whileHover="hover"
                    >
                      <motion.span
                        key={`icon-${contactAnimationRun}-${item.label}`}
                        className="grid size-14 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-xl text-cyan-100 backdrop-blur transition group-hover:border-cyan-300/35 group-hover:bg-cyan-300/10"
                        initial={{ opacity: 0, rotate: -180, scale: 0.45 }}
                        animate={contactLinksInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -180, scale: 0.45 }}
                        transition={{ duration: 1.05, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
                        variants={{
                          hover: {
                            rotate: 360,
                            scale: 1.1,
                            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                      >
                        <Icon aria-hidden="true" />
                      </motion.span>
                      <span className="min-w-0">
                        <motion.span
                          key={`label-${contactAnimationRun}-${item.label}`}
                          className="block overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-[0.22em] text-cyan-300"
                          initial={{ width: 0 }}
                          animate={contactLinksInView ? { width: `${item.label.length * 1.9}ch` } : { width: 0 }}
                          transition={{ duration: 2.50, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {item.label}
                        </motion.span>
                      </span>
                    </motion.a>
                  );
                })
              ) : (
                <p className="text-slate-400">Contact details have not been provided yet.</p>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
      <Footer />
    </>
  );
}

export default memo(Contact);
