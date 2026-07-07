import { memo } from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const paragraphMotion = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -64 : 64,
    filter: 'blur(4px)',
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      delay: index * 0.16,
      ease: [0.16, 1, 0.3, 1],
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
