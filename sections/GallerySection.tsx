'use client';

import { motion } from 'framer-motion';
import { gallery } from '@/data/portfolio';

export default function GallerySection() {
  return (
    <section id="projects-gallery" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-sky-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Gallery</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Project Showcase</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-glow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900/80">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-400">A premium snapshot of key project visuals and design.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
