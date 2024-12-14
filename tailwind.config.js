/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#25D366'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInLeft: {
          'from': {
            opacity: 0,
            transform: 'translateX(-60px)'
          },
          'to': {
            opacity: 1
          }
        },
        fadeInRight: {
          'from': {
            opacity: 0,
            transform: 'translateX(60px)'
          },
          'to': {
            opacity: 1
          }
        },
        fadeInBottom: {
          'from': {
            opacity: 0,
            transform: 'translateY(60px)'
          },
          'to': {
            opacity: 1
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
        fadeInBottom: 'fadeInBottom 1s ease-in-out',
      }
    },
  },
  plugins: [],
}

