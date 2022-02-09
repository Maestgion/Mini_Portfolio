module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: "'Roboto', sans-serif",
    },
    extend: {},
  },
  plugins: [require("hide-tailwind-scrollbar")],
};
