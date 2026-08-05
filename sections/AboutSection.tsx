'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-sky-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">About</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional Summary</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I am a Computer Engineering graduate driven by research, innovation, and real-world problem solving. I specialize in Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Embedded Systems, IoT, Robotics, UAV Research, and Smart Agriculture.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Academic Focus', description: 'Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision' },
            { title: 'Embedded Systems', description: 'ESP32, Arduino, Raspberry Pi, STM32, Pixhawk, IoT device integration' },
            { title: 'Research & Innovation', description: 'UAV technologies, precision agriculture, autonomous systems, AI-powered smart systems' }
          ].map((card) => (
            <div key={card.title} className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-slate-400">{card.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
