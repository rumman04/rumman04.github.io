'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-purple-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Skills</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Core Competencies</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
            >
              <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              <div className="mt-5 grid gap-3 text-slate-300 sm:grid-cols-2">
                {skill.items.map((item) => (
                  <span key={item} className="rounded-2xl bg-slate-900/70 px-3 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
