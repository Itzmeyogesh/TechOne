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
}
