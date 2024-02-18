/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        mograch: "Mograch",
        "red-hat-display": ['Red Hat Display', 'sans-serif']
      },

      colors: {
        background: '#0E0E0E',
        accent: '#EB5939',
        'off-white': '#B7AB98',
        'code-editor': {
          'light-background': '#1f1f1f',
          'dark-background': '#181818',
          'border': '#2b2b2b',
        }
      },
    },
  },
  plugins: [],
}