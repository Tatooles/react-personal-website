const { JsxEmit } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
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
