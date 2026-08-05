'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-sky-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Projects</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Featured Work</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
            >
              <div className="h-48 overflow-hidden rounded-3xl bg-slate-900/80">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-slate-300">Project</span>
                </div>
                <p className="text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-300">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-violet-300 hover:text-violet-300">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
