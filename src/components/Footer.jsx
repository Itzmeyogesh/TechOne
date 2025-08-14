import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Company Info */}
        <div>
          <div className="font-extrabold text-lg">Technical One</div>
          <p className="text-sm text-gray-400 mt-1">
            Virtual internships with weekly projects & mentor assistance.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Founded July 2024 • 200+ completions • Tie-ups: JM Infotech (Ahmedabad), CAIT Edusystem
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com" // placeholder, add your actual Facebook link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 hover:scale-110 transition-transform"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/technical-one/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/technical_one"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Rights */}
        <div className="text-sm md:text-right">
          All rights reserved by <b>Technical One</b>
        </div>
      </div>
    </footer>
  );
}
