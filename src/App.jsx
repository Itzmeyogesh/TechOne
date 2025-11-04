<<<<<<< HEAD
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import InternshipPlan from "./components/InternshipPlan";
import Domains from "./components/Domains";
import ApplyForm from "./components/ApplyForm";
import Contact from "./components/Contact"; // ✅ Import Contact section
import Footer from "./components/Footer";

export default function App() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <IntershipDivider />
        <InternshipPlan />
        <IntershipDivider />
        <Domains onApply={setSelectedDomain} />
        {/* anchor target for navbar Apply link */}
        <section id="apply" className="py-12 text-center text-gray-600">
          <p>
            Choose a domain and click <b>Apply</b> to open the form.
          </p>
        </section>
        <IntershipDivider />
        <Contact /> {/* ✅ Contact section here */}
      </main>
      <Footer />
      {selectedDomain && (
        <ApplyForm
          domain={selectedDomain}
          onClose={() => setSelectedDomain(null)}
        />
      )}
    </div>
  );
}

function IntershipDivider() {
  return <div className="h-12" />;
=======
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Careers from './sections/Careers'
import Media from './sections/Media'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen text-slate-800 dark:text-white">
      <Navbar />

      <main className="pt-20">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <section id="careers" className="scroll-mt-24">
          <Careers />
        </section>

        <section id="media" className="scroll-mt-24">
          <Media />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Technical One. All rights reserved.
      </footer>
    </div>
  )
>>>>>>> 971bdbf (Update)
}
