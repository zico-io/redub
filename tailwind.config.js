/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#252422',
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
          100: "#CDCDE0",
        },
        action: '#EB5E28'
      },
      fontFamily: {
        fthin: ["FiraSans-Thin", "sans-serif"],
        fextralight: ["FiraSans-ExtraLight", "sans-serif"],
        flight: ["FiraSans-Light", "sans-serif"],
        fregular: ["FiraSans-Regular", "sans-serif"],
        fmedium: ["FiraSans-Medium", "sans-serif"],
        fsemibold: ["FiraSans-SemiBold", "sans-serif"],
        fbold: ["FiraSans-Bold", "sans-serif"],
        fextrabold: ["FiraSans-ExtraBold", "sans-serif"],
        fblack: ["FiraSans-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

