/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./resource/*.{html,js}",
    "./videos/*.{html,js}",
    "./contact/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Avenir-r": ["Avenir-Next-reg", "sans-serif"],
        "Avenir-t": ["Avenir-Next-thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
