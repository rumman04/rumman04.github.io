'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/portfolio';
const navItems = siteConfig.sections;

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-wide text-slate-100 sm:text-xl">
          {siteConfig.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-[0.24em] text-slate-400 transition hover:text-sky-300">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
