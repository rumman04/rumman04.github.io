'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/portfolio';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-violet-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-violet-300">Resume</p>
        </div>
        <div className="glass-card rounded-3xl border border-white/10 p-8 shadow-glow">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Download or preview my CV</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Access the latest resume in PDF format and review the professional summary, education, experience, and research highlights.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={siteConfig.resume} download className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                Download CV
              </a>
              <a href={siteConfig.resume} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-300 hover:text-violet-300">
                Preview PDF
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
