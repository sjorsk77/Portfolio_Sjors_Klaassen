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
      colors: {
        light: {
          bg: '#EEF2FF',
          text: '#1D1D1D',
          secondaryText: '#6C6C6C',
          border: '#D1D5DB',
          cardBg: '#FFFFFF',
          hoverBg: '#E0E7FF',
        },
        dark: {
          bg: '#1A1A1A',
          text: '#FFFFFF',
          secondaryText: '#A1A1A1',
          border: '#333333',
          cardBg: '#2D2D2D',
          hoverBg: '#3B3B3B',
        },
        link: '#3B82F6',
        buttonBg: '#4CAF50',
        buttonText: '#FFFFFF',
        buttonHoverBg: '#45A049',
      }
    },
  },
  safelist: [
    { pattern: /w-\[.*\]/ }, // Allow arbitrary width values
  ],
}