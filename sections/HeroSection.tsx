'use client';

import { motion } from 'framer-motion';
import HeroBackground from '@/components/HeroBackground';
import { siteConfig } from '@/data/portfolio';

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
          className="glass-card border border-white/10 bg-slate-950/85 p-8 shadow-glow"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex rounded-full bg-sky-500/15 px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-sky-200">
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
              <div className="flex flex-wrap gap-4">
                <a href="/resume.pdf" download className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                  Download CV
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-300">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-300 hover:text-violet-300">
                  Contact Me
                </a>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40"
            >
              <div className="absolute -left-8 top-8 h-20 w-20 rounded-full bg-sky-500/10 blur-2xl" />
              <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-950/80 p-6 shadow-xl shadow-slate-900/40">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Hero Snapshot</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Build intelligent systems</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Premium portfolio design with glassmorphism, polished motion, and modern gradients.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-center">
                    <p className="text-3xl font-semibold text-sky-300">100+</p>
                    <p className="mt-2 text-sm text-slate-400">Projects & Research Insights</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-center">
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
