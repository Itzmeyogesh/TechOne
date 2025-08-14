import React, { useState } from "react";
import { motion } from "framer-motion";

const genJobId = () => "TO-" + Math.random().toString(36).slice(2, 7).toUpperCase();

export default function ApplyForm({ domain, onClose }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", graduation: "",
    domain, cv: null, agree: false
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: files ? files[0] : type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobId = genJobId();
    // Here you could POST to your backend / Google Form endpoint.
    alert(`Application submitted for ${domain}\nJob ID: ${jobId}\n(You will receive Offer Letter & Certificate referencing this ID.)`);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: .9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .3 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-extrabold">Apply — {domain}</h3>
          <button type="button" onClick={onClose} className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">Close</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input name="name" required placeholder="Full Name" className="input" onChange={handleChange}/>
          <input name="email" required type="email" placeholder="Email" className="input" onChange={handleChange}/>
          <input name="phone" required placeholder="Phone" className="input" onChange={handleChange}/>
          <input name="graduation" placeholder="Graduation Year" className="input" onChange={handleChange}/>
          <input disabled value={domain} className="input md:col-span-2"/>
          <input name="cv" required type="file" accept=".pdf,.doc,.docx" onChange={handleChange}
                 className="md:col-span-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"/>
        </div>

        <p className="mt-3 text-sm text-gray-600">
          By applying you acknowledge: sessions are Mon–Fri; weekly projects; <b>no stipend</b>. 
          Offer Letter & Certificate will include your unique Job ID.
        </p>

        <label className="flex items-center gap-2 mt-3">
          <input type="checkbox" name="agree" required onChange={handleChange}/>
          <span className="text-sm text-gray-700">I confirm the above and consent to be contacted.</span>
        </label>

        <div className="mt-5 flex justify-end">
          <button type="submit" className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
            Submit Application
          </button>
        </div>
      </motion.form>

      {/* small utilities */}
      <style>{`
        .input { @apply w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400; }
      `}</style>
    </motion.div>
  );
}
