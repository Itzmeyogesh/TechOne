import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Contact
        </motion.h2>

        <form className="mt-8 grid gap-4 md:max-w-xl">
          <input className="rounded-xl border p-3 bg-white/70 dark:bg-white/10" placeholder="Your name" />
          <input className="rounded-xl border p-3 bg-white/70 dark:bg-white/10" placeholder="Email" type="email" />
          <textarea className="rounded-xl border p-3 bg-white/70 dark:bg-white/10" placeholder="Message" rows="5" />
          <button className="rounded-xl bg-cyan-500 text-slate-900 px-6 py-3 font-semibold shadow w-fit">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
