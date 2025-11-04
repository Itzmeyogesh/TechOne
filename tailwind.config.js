/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)"
      }
=======
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: '0 0 10px rgba(34,211,238,0.6)',
      },
>>>>>>> 971bdbf (Update)
    },
  },
  plugins: [],
}
