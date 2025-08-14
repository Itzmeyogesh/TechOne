import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate, FaHandshake, FaAward } from "react-icons/fa";

function Counter({ target, duration = 2 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration * 60);
    const t = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(t);
      }
      setCount(Math.ceil(start));
    }, 1000 / 60);
    return () => clearInterval(t);
  }, [target, duration]);
  return <span>{count}+</span>;
}

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          About <span className="text-indigo-600">Technical One</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          We provide <b>virtual internships</b> with weekly projects, daily mentor assistance (Mon–Fri), and career guidance.  
          Established in <b>July 2024</b>. Over <b>200+</b> interns trained — some placed in top MNCs.  
          <br /> <b>No stipend</b> is offered.
        </motion.p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaUserGraduate className="text-indigo-600 text-5xl mx-auto mb-4" />
            <div className="text-4xl font-extrabold text-indigo-700">
              {inView && <Counter target={200} />}
            </div>
            <div className="mt-2 text-gray-600 font-medium">Interns Completed</div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaHandshake className="text-indigo-600 text-5xl mx-auto mb-4" />
            <div className="text-4xl font-extrabold text-indigo-700">2</div>
            <div className="mt-2 text-gray-600 font-medium">Partner Companies</div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaAward className="text-indigo-600 text-5xl mx-auto mb-4" />
            <div className="text-xl font-bold text-indigo-700">
              Offer Letter & Certificate
            </div>
            <div className="mt-2 text-gray-600 font-medium">with unique Job ID</div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-gray-700 max-w-3xl mx-auto"
        >
          <b>Project collaboration & placement tie-ups:</b> JM Infotech (Ahmedabad) and CAIT Edusystem.
        </motion.p>
      </div>
    </section>
  );
}
