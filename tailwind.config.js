/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-code-pro": ["Source Code Pro", "monospace"],
        "titillium-web": ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
