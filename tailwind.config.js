/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#980094',
        secondary: '#0C0C14',
        background: '#10101A',
      },
    },
  },
  plugins: [],
}