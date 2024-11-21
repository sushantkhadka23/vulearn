/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          fg:"#FAA200",
          bg:"#010204",
      },
      fontFamily:{
        'lato': ['Lato', 'sans-serif'],
        'playwrite': ['Playwrite GB S', 'cursive'], 
      },
    },
  },
  darkMode:"class",
  plugins: [],
}