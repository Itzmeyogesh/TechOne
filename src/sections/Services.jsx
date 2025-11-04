import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Presentation, LineChart } from 'lucide-react'

const items = [
  { icon: <Code2 />, title: 'Web & App Development', text: 'React, Vite, Node, and modern stacks.' },
  { icon: <Presentation />, title: 'Mentorship & Training', text: 'Hands-on guidance for teams & learners.' },
  { icon: <LineChart />, title: 'Analytics & BI', text: 'Power BI dashboards and data insights.' },
]

export default function Services() {
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
          Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur p-6 shadow"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center border mb-4">
                {it.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{it.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
