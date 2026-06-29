import { memo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ activeSection, onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const handleNavClick = (href) => {
    onNavClick(href.slice(1));
    closeMenu();
  };

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-4 z-50 px-3 sm:px-5"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="pointer-events-auto mx-auto flex min-h-12 max-w-6xl items-center justify-between rounded-full border border-white/[0.1] bg-[#0b1111]/72 px-4 shadow-[0_18px_54px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-5 lg:px-6" aria-label="Primary navigation">
        <a className="group flex items-center gap-3 outline-none" href="#home" onClick={() => handleNavClick('#home')}>
          <span className="grid size-8 place-items-center rounded-full border border-slate-300/15 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(8,47,73,0.9)_48%,rgba(6,182,212,0.72))] text-xs font-black text-white shadow-[0_0_12px_rgba(6,182,212,0.04)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-105">
            D
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="relative px-1 py-1.5 text-xs font-bold focus-visible:outline-none xl:text-sm"
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                <motion.span
                  className="relative z-10"
                  animate={{ color: activeSection === link.href.slice(1) ? '#22d3ee' : 'rgba(255, 255, 255, 0.78)' }}
                  whileHover={{ color: '#cffafe' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  {link.label}
                </motion.span>
              </a>
            </li>
          ))}
        </ul>

        <button
          className="ml-auto grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-cyan-300/40 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 lg:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-[#0b1111]/82 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link) => (
              <a
                className={`relative block overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
                href={link.href}
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.href.slice(1) ? (
                  <motion.span
                    className="absolute inset-0 rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-300/20"
                    layoutId="mobile-nav-active"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    aria-hidden="true"
                  />
                ) : null}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default memo(Navbar);
