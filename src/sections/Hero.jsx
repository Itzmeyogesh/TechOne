import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-200 via-purple-100 to-indigo-300 dark:from-slate-900 dark:via-indigo-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Build, Train & Grow with <span className="text-cyan-500">Technical One</span>
        </motion.h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          We deliver products, mentorship, and business solutions for modern teams.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#services" className="rounded-xl bg-cyan-500 text-slate-900 px-6 py-3 font-semibold shadow">
            Our Services
          </a>
          <a href="#media" className="rounded-xl border px-6 py-3">
            Watch Media
          </a>
        </div>
      </div>
    </section>
  )
}
