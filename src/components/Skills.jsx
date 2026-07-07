import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaCss3Alt, FaGithub, FaJava } from 'react-icons/fa';
import { FiBox, FiCode, FiCpu, FiFigma, FiGrid, FiMonitor, FiShield, FiTool, FiZap } from 'react-icons/fi';
import {
  SiC,
  SiCplusplus,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import programmingImage from '../assets/skills/programming.avif';
import frontendImage from '../assets/skills/frontend.avif';
import uiuxImage from '../assets/skills/uiux.avif';
import toolsImage from '../assets/skills/tools.avif';
import otherImage from '../assets/skills/other.avif';
import { skills } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const categoryIcons = [FiCode, FiCpu, FiFigma, FiTool, FiZap];
const skillBackgrounds = [programmingImage, frontendImage, uiuxImage, toolsImage, otherImage];
const hiddenSkillItems = new Set(['Angular (learning)', 'Google Colab']);
const skillEntryStarts = [
  { x: '-115vw', y: '-8vh', rotate: -260 },
  { x: '0vw', y: '-85vh', rotate: 220 },
  { x: '115vw', y: '-8vh', rotate: 260 },
  { x: '-105vw', y: '70vh', rotate: 240 },
  { x: '105vw', y: '70vh', rotate: -240 },
];

const skillEntryMotion = {
  hidden: (index) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      return {
        x: 0,
        y: 12,
        rotate: 0,
        opacity: 0,
        scale: 1,
        filter: 'none',
      };
    }
    return {
      ...skillEntryStarts[index % skillEntryStarts.length],
      opacity: 0,
      scale: 0.86,
      filter: 'blur(4px)',
    };
  },
  visible: (index) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      filter: 'none',
      transition: {
        duration: isMobile ? 0.35 : 0.68,
        delay: index * 0.08,
        ease: isMobile ? 'easeOut' : [0.22, 1, 0.36, 1],
      },
    };
  },
};

const skillIcons = {
  Python: { Icon: SiPython, color: 'text-[#3776ab]' },
  Java: { Icon: FaJava, color: 'text-[#f89820]' },
  JavaScript: { Icon: SiJavascript, color: 'text-[#f7df1e]' },
  C: { Icon: SiC, color: 'text-[#a8b9cc]' },
  'C++': { Icon: SiCplusplus, color: 'text-[#6295cb]' },
  HTML5: { Icon: SiHtml5, color: 'text-[#e34f26]' },
  CSS3: { Icon: FaCss3Alt, color: 'text-[#1572b6]' },
  'React.js': { Icon: SiReact, color: 'text-[#61dafb]' },
  'Responsive Web Design': { Icon: FiMonitor, color: 'text-cyan-200' },
  'Next.js': { Icon: SiNextdotjs, color: 'text-white' },
  Figma: { Icon: SiFigma, color: 'text-[#a259ff]' },
  Wireframing: { Icon: FiGrid, color: 'text-slate-100' },
  Prototyping: { Icon: FiBox, color: 'text-violet-200' },
  'UI/UX Design': { Icon: FiFigma, color: 'text-fuchsia-200' },
  Git: { Icon: SiGit, color: 'text-[#f05032]' },
  GitHub: { Icon: FaGithub, color: 'text-white' },
  'VS Code': { Icon: VscVscode, color: 'text-[#007acc]' },
  MySQL: { Icon: SiMysql, color: 'text-[#00758f]' },
  'Problem solving': { Icon: FiCpu, color: 'text-slate-100' },
  'Clean code': { Icon: FiCode, color: 'text-white' },
  'Maintainable code': { Icon: FiShield, color: 'text-cyan-200' },
};

function Skills() {
  return (
    <AnimatedSection className="section-shell" id="skills" direction="diagonalLeft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          description="Grouped from the resume and skills reference files."
        />

        <div className="skills-carousel" aria-label="Technical skills">
          <motion.div
            className="skills-carousel-stage"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.28 }}
          >
            {skills.map((group, groupIndex) => {
              const CategoryIcon = categoryIcons[groupIndex % categoryIcons.length];
              const visibleItems = group.items.filter((skill) => !hiddenSkillItems.has(skill));

              return (
                <motion.div
                  className="skills-carousel-card"
                  custom={groupIndex}
                  key={group.category}
                  variants={skillEntryMotion}
                >
                  <article
                    className="skill-logo-card group h-full w-full"
                    tabIndex={0}
                  >
                    <img
                      className="skill-card-image"
                      src={skillBackgrounds[groupIndex]}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="skill-card-overlay" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="skill-category-badge">
                        <CategoryIcon aria-hidden="true" />
                      </div>

                      <h3 className="skill-logo-title">
                        {group.category}
                      </h3>

                      {visibleItems.length > 0 ? (
                        <ul className="skill-logo-list">
                          {visibleItems.map((skill, index) => {
                            const iconData = skillIcons[skill] || { Icon: FiCode, color: 'text-white' };
                            const SkillIcon = iconData.Icon;

                            return (
                              <li
                                className="grid place-items-center gap-2 text-center"
                                key={skill}
                                style={{ transitionDelay: `${index * 55}ms` }}
                              >
                                <span className={`grid size-7 place-items-center rounded-full bg-black/28 text-lg shadow-[0_0_12px_rgba(6,182,212,0.08)] ring-1 ring-white/10 backdrop-blur ${iconData.color}`}>
                                  <SkillIcon aria-hidden="true" />
                                </span>
                                <span className="text-[0.56rem] font-black leading-tight text-white">{skill}</span>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <p className="mt-20 text-sm text-slate-400">No skills provided.</p>
                      )}
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default memo(Skills);
