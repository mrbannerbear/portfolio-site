/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {'roboto-mono': ['Roboto Mono', 'monospace'], 'poppins': ['Poppins', 'sans-serif']}
    },
  },
  plugins: [require("daisyui")],
}

