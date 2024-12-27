/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
        raleway: ['raleway', 'serif'], // Use Outfit with a serif fallback
      },
    },
  },
  plugins: [],
};
