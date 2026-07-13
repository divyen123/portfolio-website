import { memo } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer border-t border-white/7 mt-[-1rem] md:mt-4 px-0 pt-5 pb-3 sm:px-16 sm:pt-5 sm:pb-4 lg:px-1">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-[11px] sm:text-sm text-slate-400 whitespace-nowrap">
          Copyright {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-3" aria-label="Social links">
          <a className="icon-link" href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a className="icon-link" href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a className="icon-link" href={`mailto:${personalInfo.email}`} aria-label="Email">
            <FiMail aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);

