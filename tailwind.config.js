/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.js",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        "poppins-bold": ["Poppins_700Bold"],
        "poppins-semiBold": ["Poppins_600SemiBold"],
      },
      fontSize: {
        "2xl-custom": ["24px", { lineHeight: "36px" }],
      },
    },
  },
  plugins: [],
};
