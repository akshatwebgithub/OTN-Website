/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        secondary: "#00A8E8",
        accent: "#10B981",
      },
    },
  },
  plugins: [],
}