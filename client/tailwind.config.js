/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        lt: {
          bg: '#ffa500',     // Orange background
          fore: '#3b2222',   // Dark brown foreground
          btn: '#b5651d',    // Burnt orange for buttons (complementary)
          txt: '#3b3b3b',    // Dark gray text (neutral, readable)
          pri: '#ffb84d',    // Light orange for primary elements
          sec: '#ff7f30',    // Slightly darker orange for secondary elements
        },
        // Dark Theme Colors
        dk: {
          bg: '#3b2222',     // Dark brown background
          fore: '#ffa500',   // Bright orange foreground
          btn: '#666666',     // Medium gray for buttons (subtle, balanced)
          txt: '#e6cbaa',    // Light beige text (warm, readable)
          pri: '#ff9e00',    // Lighter orange for primary elements
          sec: '#ff3d00',    // Bright red-orange for secondary elements
        },
      },
    },
  },
  darkMode: "class", // Enable dark mode with class
  plugins: [],
}
