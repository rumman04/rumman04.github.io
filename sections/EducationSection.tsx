'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/portfolio';

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-violet-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-violet-300">Education</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Academic Timeline</h2>
        <div className="mt-10 space-y-6">
          {education.map((item) => (
            <div key={item.title} className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.institution}</p>
                </div>
                <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">{item.date}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
