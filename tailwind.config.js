/** @type {import('tailwindcss').Config} */
require("tailwindcss/colors");
const { COLORS } = require("./shared/constants/colors");

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./shared/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "blue-300": COLORS.BLUE_300,
        "orange-700": COLORS.ORANGE_700,
        "pink-700": COLORS.PINK_700,
        "stone-100": COLORS.STONE_100,
        "stone-400": COLORS.STONE_400,
        "teal-500": COLORS.TEAL_500,
        "yellow-500": COLORS.YELLOW_500,
        "zinc-700": COLORS.ZINC_700,
        "zinc-900": COLORS.ZINC_900,
      },

      fontFamily: {
        "dela-gothic-one": ["DelaGothicOne-Regular"],
        "montserrat-bold": ["Montserrat-Bold"],
        "montserrat-light-italic": ["Montserrat-LightItalic"],
        "montserrat-medium": ["Montserrat-Medium"],
        "montserrat-regular": ["Montserrat-Regular"],
        "montserrat-semi-bold": ["Montserrat-SemiBold"],
      },
    },
  },
};
