'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig } from '@/data/portfolio';
const navItems = siteConfig.sections;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-wide text-slate-100 sm:text-xl">
          Rumman Ahmed
        </a>

        <nav className="hidden flex-1 items-center justify-end gap-5 overflow-x-auto whitespace-nowrap pr-4 md:flex md:max-w-[calc(100%-200px)]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-[0.22em] text-slate-400 transition hover:text-sky-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/85 p-3 text-slate-200 transition hover:border-sky-300 hover:text-sky-300 md:hidden"
        >
          <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950/95 md:hidden"
          >
            <div className="space-y-2 px-4 pb-4 pt-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm uppercase tracking-[0.22em] text-slate-200 transition hover:bg-slate-800 hover:text-sky-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
