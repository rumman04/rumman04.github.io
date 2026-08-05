'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { siteConfig } from '@/data/portfolio';

export default function ContactSection() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('Sending...');

    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY');
      setStatus('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('Unable to send message right now.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-16 bg-sky-400/80" />
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Contact</p>
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Get in Touch</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-3xl border border-white/10 p-8 shadow-glow">
            <p className="text-slate-300">I’m available for collaborations, research discussions, and remote opportunities. Reach out using the form or the contact details below.</p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>{siteConfig.email}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>{siteConfig.phone}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>{siteConfig.location}</p>
              </div>
              <div>
                <p className="font-semibold text-white">LinkedIn</p>
                <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">
                  {siteConfig.linkedIn}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">GitHub</p>
                <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">
                  {siteConfig.github}
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl border border-white/10 p-8 shadow-glow">
            <div className="grid gap-4">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input name="from_name" type="text" required className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input name="reply_to" type="email" required className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea name="message" rows={5} required className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400" />
              </label>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                Send Message
              </button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
