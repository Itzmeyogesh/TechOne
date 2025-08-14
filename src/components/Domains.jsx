import React from "react";
import { motion } from "framer-motion";
import { FaChartBar, FaJava, FaGlobe, FaRobot } from "react-icons/fa";

const domains = [
  {
    name: "Power BI",
    icon: <FaChartBar />,
    desc: "Dashboards, DAX, data modeling & business reporting.",
    id: "Power BI",
    gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
  },
  {
    name: "Java",
    icon: <FaJava />,
    desc: "Core/Advanced Java, OOP, REST APIs & unit testing.",
    id: "Java",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
  },
  {
    name: "Web Development",
    icon: <FaGlobe />,
    desc: "HTML/CSS/JS, React, APIs, Node basics.",
    id: "Web Development",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    name: "AI / ML",
    icon: <FaRobot />,
    desc: "Data prep, ML models, notebooks & evaluation.",
    id: "AI/ML",
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
];

export default function Domains({ onApply }) {
  return (
    <section
      id="domains"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Decorative background circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-white drop-shadow-lg"
        >
          Internship Domains
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`rounded-2xl p-6 text-white shadow-xl bg-gradient-to-br ${d.gradient} relative overflow-hidden group`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-500"></div>

              <div className="text-5xl mb-4 drop-shadow-lg">{d.icon}</div>
              <h3 className="text-2xl font-bold drop-shadow">{d.name}</h3>
              <p className="mt-3 text-sm opacity-90">{d.desc}</p>

              <button
                onClick={() => onApply(d.id)}
                className="mt-6 px-5 py-2 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 shadow-lg transition"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
