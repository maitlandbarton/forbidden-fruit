/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    animation: {
      spinningText: 'circle 20s linear infinite',
    },

    keyframes: {
      'circle': {
        'to': {
          transform: 'rotate(360deg)',
        },
      },
    },
  },
  plugins: [],
}

