import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.jpg";

export default function Hero() {
  const heading =
    "Virtual Internship (2 Months) — Mentored, Structured, Career-Focused";

  return (
    <section
      className="relative min-h-[35vh] pt-24 flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-600"
    >
      {/* watermark logo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "360px",
        }}
      />

      {/* subtle grid overlay */}
      <div className="absolute inset-0 bg-grid bg-[length:22px_22px] opacity-15" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-white"
      >
        {/* Animated heading */}
        <motion.h1
          className="font-heading text-[2.5rem] sm:text-5xl lg:text-[4rem] font-extrabold leading-snug sm:leading-tight tracking-tight drop-shadow-[0_5px_18px_rgba(0,0,0,0.55)]"
        >
          {heading.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.02, type: "spring", stiffness: 100 }}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 hover:from-yellow-400 hover:via-pink-400 hover:to-purple-500 transition-all duration-300"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 font-body text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
        >
          Founded <b>July 2024</b>. Over <b>200+</b> interns completed — some placed in
          top MNCs. Build real projects, get query assistance <b>Mon–Fri</b>, and earn an{" "}
          <b>Offer Letter</b> & <b>Certificate</b> with a Job ID.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#domains"
            className="px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:shadow-xl hover:scale-105 transition-transform duration-300 text-lg"
          >
            🚀 Explore Domains
          </a>
          <a
            href="#apply"
            className="px-8 py-4 rounded-2xl bg-black/30 ring-1 ring-white/40 hover:bg-black/40 hover:scale-105 transition-transform duration-300 text-lg"
          >
            📝 Apply Now
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="mt-6 flex justify-center gap-6 text-3xl"
        >
          <a
            href="https://www.linkedin.com/company/technical-one/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/technical_one"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
