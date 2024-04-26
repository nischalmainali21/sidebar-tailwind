/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#253A67",
        offwhite: "#FCFCFC",
        sidebar: "#253A67",
        header: "#262338 ",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "sans-serif"],
      },
      boxShadow: {
        firstSection: "0px 2px 14px 0px #253A671A",
        firstSectionCard: " 0px 2px 6px 0px #97ACC640",
        card: " 0px 2px 14px 0px #253A671A",
      },
    },
  },
  plugins: [],
};
