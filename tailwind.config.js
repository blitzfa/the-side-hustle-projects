/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./src/resource/*.{html,js}",
    "./src/videos/*.{html,js}",
    "./src/contact/*.{html,js}",
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
