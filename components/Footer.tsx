'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 px-4 py-10 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">© 2026 {siteConfig.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="transition hover:text-sky-300">
            GitHub
          </a>
          <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer" className="transition hover:text-sky-300">
            LinkedIn
          </a>
          <a href="mailto:khanrumman820@gmail.com" className="transition hover:text-sky-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
