/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm': ['IBM Plex Mono', 'monospace'],
        'teko': ['Teko', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
