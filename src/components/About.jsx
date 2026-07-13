import { memo } from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const paragraphMotion = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: 'easeOut',
    },
  }),
};

function About() {
  return (
    <AnimatedSection className="section-shell" id="about" direction="left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          className="pt-6 sm:pt-8"
        />

        <div className="mx-auto grid max-w-4xl gap-6 text-center">
          {aboutMe.length > 0 ? (
            aboutMe.map((paragraph, index) => (
              <motion.p
                className="text-base leading-8 text-slate-300 sm:text-lg"
                custom={index}
                key={paragraph}
                variants={paragraphMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.65 }}
              >
                {paragraph}
              </motion.p>
            ))
          ) : (
            <p className="text-slate-400">About information has not been provided yet.</p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default memo(About);
