'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-16 bg-sky-400/80" />
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Projects</p>
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected Projects</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              These projects reflect my work across artificial intelligence, computer vision, embedded systems, and real-world problem solving. Each one highlights a different stage of building practical, impactful technology.
            </p>
          </div>
          <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm text-slate-300">
            Focused on research-driven development, reliable implementation, and measurable outcomes.
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ scale: 1.02 }}
              className="group glass-card flex h-full flex-col rounded-[1.75rem] border border-white/10 p-6 shadow-glow"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-slate-900/80">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex flex-1 flex-col space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
                  <span className="shrink-0 rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">Project</span>
                </div>
                <p className="text-sm leading-7 text-slate-300 sm:text-[15px]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
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
