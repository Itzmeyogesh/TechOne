/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [],
}
