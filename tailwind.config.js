/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#1D2E4F",
        lblue: "#cddfff",
        maroon: "#4B0F0F",
        yell: "#FFAB44",
        redd: "#BA3B50",
        tealish: "#3580AA",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
