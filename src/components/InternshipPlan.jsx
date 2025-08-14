import React from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaLaptopCode, FaTasks, FaAward, FaProjectDiagram } from "react-icons/fa";

const weeks = [
  { w: 1, t: "Onboarding, tools setup, fundamentals, Git.", icon: <FaLaptopCode /> },
  { w: 2, t: "Mini-project #1 + daily query assistance.", icon: <FaTasks /> },
  { w: 3, t: "Intermediate concepts + code reviews.", icon: <FaCalendarCheck /> },
  { w: 4, t: "Mini-project #2 + presentation.", icon: <FaProjectDiagram /> },
  { w: 5, t: "Domain deep-dive, APIs/Integrations.", icon: <FaLaptopCode /> },
  { w: 6, t: "Capstone planning & milestones.", icon: <FaTasks /> },
  { w: 7, t: "Capstone build + mentor checkpoints.", icon: <FaProjectDiagram /> },
  { w: 8, t: "Capstone polish, demo, certificate review.", icon: <FaAward /> },
];

export default function InternshipPlan() {
  return (
    <section
      id="plan"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ddd_1px,transparent_0)] bg-[size:20px_20px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-md"
        >
          Program Structure (2 Months)
        </motion.h2>

        {/* Weekly Assistance Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl p-6 border border-white/40"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
              <div
                key={d}
                className="p-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow hover:scale-105 transform transition-all duration-300"
              >
                <div className="font-bold text-lg">{d}</div>
                <div className="text-sm opacity-90 mt-1">Daily mentor assistance</div>
                <div className="text-xs opacity-70">Query resolution & review</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            * Sessions available Monday–Friday. Weekly projects assigned; weekends optional for revision.
          </p>
          <p className="text-sm text-red-600 mt-1">Note: We don’t offer any stipend.</p>
        </motion.div>

        {/* Weekly Projects */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeks.map((item, idx) => (
            <motion.div
              key={item.w}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-white/80 to-purple-50 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-white/50"
            >
              <div className="flex items-center gap-3 text-indigo-600 font-semibold text-lg">
                <span className="text-2xl">{item.icon}</span> Week {item.w}
              </div>
              <div className="mt-2 text-gray-800">{item.t}</div>
              <div className="mt-3 text-xs text-gray-500">
                Deliverable: Weekly submission & feedback
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
