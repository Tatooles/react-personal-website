const { JsxEmit } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Add primary color here
      }
    },
  },
  plugins: [],
}
