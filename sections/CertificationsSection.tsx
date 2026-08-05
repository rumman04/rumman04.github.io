'use client';

import { motion } from 'framer-motion';

const certifications = [
  'Certified AI Practitioner',
  'Computer Vision Specialist',
  'Embedded Systems Developer',
  'IoT and Robotics Practitioner'
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-sky-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Certifications</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional Certifications</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <motion.div key={cert} whileHover={{ y: -6 }} className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow">
              <p className="text-base font-semibold text-white">{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
