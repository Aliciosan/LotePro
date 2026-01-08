/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A2342',
        navy_light: '#163E6F',
        emerald: '#2ECC71',
        emerald_dark: '#27AE60',
        softred: '#E74C3C',
        ochre: '#F1C40F',
        lightbg: '#F2F4F8',
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      boxShadow: {
        'soft': '0 20px 40px -10px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}