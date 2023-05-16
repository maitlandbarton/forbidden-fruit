/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f46036',
        navy: '#2e294e',
        teal: '#1b998b',
        red: '#e71d36',
        lime: '#b5f44a'
      },
    },
    animation: {
      spinningText: 'circle 20s linear infinite',
    },

    keyframes: {
      'circle': {
        'from': {
          transform: 'rotate(0deg)'
        },
        'to': {
          transform: 'rotate(360deg)',
        },
      },
    },
  },
  plugins: [],
}

