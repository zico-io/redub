/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: {
          DEFAULT: '#FFFCF2',
          100: '#CCC5B9',
          200: '#402D39',
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#1D1F1F",
        },
        action: '#FFADFF'
      },
      fontFamily: {
        sfthin: ["SF-Pro-Display-Thin", "sans-serif"],
        sfultralight: ["SF-Pro-Display-Ultralight", "sans-serif"],
        sflight: ["SF-Pro-Display-Light", "sans-serif"],
        sfregular: ["SF-Pro-Display-Regular", "sans-serif"],
        sfmedium: ["SF-Pro-Display-Medium", "sans-serif"],
        sfsemibold: ["SF-Pro-Display-Semibold", "sans-serif"],
        sfbold: ["SF-Pro-Display-Bold", "sans-serif"],
        sfblack: ["SF-Pro-Display-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

