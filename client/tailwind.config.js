/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:"#010204",
        fg:"#FAA200",
         
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