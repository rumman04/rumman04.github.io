'use client';

import { motion } from 'framer-motion';
import { researchInterests } from '@/data/portfolio';

export default function ResearchSection() {
  return (
    <section id="research" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-fuchsia-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-300">Research</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Research Interests</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((interest) => (
            <motion.div
              key={interest}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl border border-white/10 p-5 shadow-glow"
            >
              <p className="text-base font-medium text-slate-100">{interest}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
