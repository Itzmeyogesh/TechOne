import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col md:flex-row gap-6 md:items-center">
      <li><a onClick={onClick} href="#about" className="hover:text-indigo-600">About</a></li>
      <li><a onClick={onClick} href="#plan" className="hover:text-indigo-600">Program</a></li>
      <li><a onClick={onClick} href="#domains" className="hover:text-indigo-600">Domains</a></li>
      <li><a onClick={onClick} href="#apply" className="hover:text-indigo-600">Apply</a></li>
    </ul>
  );

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-gray-100 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="Technical One" className="w-10 h-10 rounded-full ring-1 ring-gray-200" />
          <span className="font-extrabold text-gray-900 text-lg">Technical One</span>
        </div>

        <div className="hidden md:block text-gray-700 font-medium">
          <NavLinks />
        </div>

        <div className="hidden md:flex gap-3 text-gray-600">
          <a href="#" aria-label="Facebook"><FaFacebook className="hover:text-blue-600" /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-blue-700" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-500" /></a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded hover:bg-gray-100">
          <FaBars />
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            className="ml-auto h-full w-80 bg-white p-6 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Technical One" className="w-8 h-8 rounded-full" />
                <span className="font-bold">Technical One</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-gray-100">
                <FaTimes />
              </button>
            </div>
            <NavLinks onClick={() => setOpen(false)} />
            <div className="flex gap-4 text-gray-600 mt-auto">
              <FaFacebook /><FaLinkedin /><FaInstagram />
            </div>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
}
