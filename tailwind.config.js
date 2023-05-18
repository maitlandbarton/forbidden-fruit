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
      moveDown: 'down 10s linear infinite',
      moveUp: 'up 10s linear infinite'
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
      'down': {
        'from': {
          transform: 'translateY(-10%)'
        },
        'to': {
          transform: 'translateY(100%)'
        }
      },
      'up': {
        'from': {
          transform: 'translateY(100%)'
        },
        'to': {
          transform: 'translateY(-20%)'
        }
      }
    },
  },
  plugins: [],
}

