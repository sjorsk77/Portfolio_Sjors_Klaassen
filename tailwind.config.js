/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      maxWidth: {
        '2/5': '40%',
      },
    },
  },
  safelist: [
    { pattern: /w-\[.*\]/ }, // Allow arbitrary width values
  ],
}