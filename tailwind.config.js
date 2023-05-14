/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    animation: {
      rotatingText: 'circle 20s linear infinite'
    },

    keyframes: {
      rotatingText: {
        'to': { transform: 'rotate(1turn)' }
      } 
    }
  },
  plugins: [],
}

