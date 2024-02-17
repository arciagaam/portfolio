/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      background: '#0E0E0E',
      accent: '#EB5939',
      'off-white': '#B7AB98'
    },

    extend: {
      fontFamily: {
        mograch: "Mograch",
        "red-hat-display": ['Red Hat Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}