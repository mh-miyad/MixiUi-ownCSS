/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "*.{html,js}",
    "./Components/**/*.{js,jsx,ts,tsx}",
    "./Pages/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
