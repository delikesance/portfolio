/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        muted: '#595959',
        rule: '#e6e6e6'
      },
      fontFamily: {
        sans: ['Source Serif 4', 'Georgia', 'serif']
      },
    },
  },
  plugins: [],
}
