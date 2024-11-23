/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fg:"#DD6B20",
        bg:"#ffffff",
        txt:"#0f172a",
         
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