/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        AlegreyaSc: ['Alegreya Sans SC', 'serif'],
        AlegreyaSans: ['Alegreya Sans', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-gradients')],
}
