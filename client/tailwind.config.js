/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //orange
        // bg:"#ff8c00",
        // fg:"#000000",
        //pink
          // bg:"#c8b6ff",
          // fg:"#000000",
          //pale mint
          bg:"#e4fde1",
          fg:"#000000",
          //yellow
          // bg:"#ffe66d",
          // fg:"#222222",
          //white
          // bg:"#fefefe",
          // fg:"#000000",

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