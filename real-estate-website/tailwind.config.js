/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'partner-color' : 'rgba(175, 133, 82, 0.31)',
      }
    },
  },
  plugins: [],
}
