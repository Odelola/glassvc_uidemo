/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./shared/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: "#7747FD",
          100: "#7C57E7",
          300: "#794EF1",
          800: "#F0EBFD"
        },
        'grey': {
          DEFAULT: "#8A898E",
          100 : "#A6A5A6",
          200 : "#444053",
          300 : "#5A5663",
          400 : "#B5B1BB",
        },
        'heading': {
          DEFAULT: "#453F56",
          100 : "#5E5968",
        },
        'white': {
          DEFAULT: "#FFFFFF",
          100: "#DFD4FE",
          200 : "#F1F1F3",
          300: "#F3EFF5"
        }
      },
    },
  },
  plugins: [],
}