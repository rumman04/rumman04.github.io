'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/data/portfolio';

export default function AchievementsSection() {
  return (
    <section id="certifications" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-sky-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Achievements</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Highlights</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
            >
              <p className="text-lg font-semibold text-white">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
