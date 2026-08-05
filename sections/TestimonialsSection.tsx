'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/portfolio';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-violet-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-violet-300">Testimonials</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional Feedback</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
            >
              <p className="text-slate-300">“{item.feedback}”</p>
              <div className="mt-6">
                <p className="text-base font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
