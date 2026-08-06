'use client';

import { motion } from 'framer-motion';
import HeroBackground from '@/components/HeroBackground';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-30">
        <HeroBackground />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-card overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/85 p-6 shadow-glow sm:p-8"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="max-w-3xl space-y-6 min-w-0 pt-2">
              <span className="inline-flex w-fit max-w-full flex-wrap items-center justify-center rounded-full bg-sky-500/15 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-200 sm:text-sm">
                Computer Engineer • AI Researcher • Embedded Systems
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Rumman Ahmed
                </h1>
                <div className="space-y-2 text-lg leading-8 text-slate-300 sm:text-xl">
                  <p>Computer Engineer</p>
                  <p>AI & Computer Vision Researcher</p>
                  <p>Embedded Systems Engineer</p>
                </div>
                <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  Passionate Computer Engineer with experience in Artificial Intelligence, Computer Vision, Machine Learning, Deep Learning, Embedded Systems, IoT, Robotics, UAVs, and Full Stack Development. I enjoy building intelligent systems that solve real-world problems through innovation and research.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 sm:w-auto"
                >
                  Download CV
                </a>
                <a
                  href="#projects"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-300 sm:w-auto"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-300 hover:text-violet-300 sm:w-auto"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-md self-start rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 sm:p-8"
            >
              <div className="absolute -left-8 top-8 h-20 w-20 rounded-full bg-sky-500/10 blur-2xl" />
              <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="space-y-4">
                <div className="flex items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-2 shadow-lg shadow-slate-900/30">
                  <img
                    src="/images/projects/profile.jpg"
                    alt="Rumman Ahmed"
                    className="h-56 w-full max-w-[220px] rounded-[1rem] object-cover object-center sm:h-64 sm:max-w-[260px]"
                  />
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6 shadow-xl shadow-slate-900/40">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Profile Snapshot</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">From research to real-world systems</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Computer engineer focused on AI, computer vision, embedded systems, and practical innovation backed by a strong academic and technical background.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-center transition hover:bg-slate-900/90">
                    <p className="text-3xl font-semibold text-sky-300">100+</p>
                    <p className="mt-2 text-sm text-slate-400">Projects & Research Insights</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-center transition hover:bg-slate-900/90">
                    <p className="text-3xl font-semibold text-violet-300">95%</p>
                    <p className="mt-2 text-sm text-slate-400">Performance & Quality Focus</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
