/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-code-pro": ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
