/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./shared/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: "#7747FD",
          '100': '#7C57E7'
        },
        'grey': {
          DEFAULT: "#8A898E",
          200 : "#444053"
        },
        'heading': {
          DEFAULT: "#453F56"
        }
      },
    },
  },
  plugins: [],
}