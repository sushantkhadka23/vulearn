/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          // bg:"#FF9B61",
          // fg:"#000000",
          bg:"#FFA600",
          fg:"#050C15",
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