/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      brandGray: "#252526",
      brandBlack: "#0D0D0D",
      blue: "#71A6D2",
      lightBlue: "#C5C8D9",
      darkBlue: "#1A6566",
      beige: "#D9D59C",
      lightBeige: "#D8D9B4",
      white: "#F3F2EC",
      aqua: "#50CCA6",
      gray: "#888"
    },
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
