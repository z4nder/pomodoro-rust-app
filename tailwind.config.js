const defaultTheme = require("tailwindcss/defaultTheme");

const brand = {
  primary: {
    50: "#F1E6F5",
    100: "#DCBFE8",
    200: "#C696DA",
    300: "#AF6DCA",
    400: "#9F4FBE",
    500: "#8E35B2",
    600: "#8131AC",
    700: "#6D2CA3",
    800: "#5C289A",
    900: "#3B208A",
  },
  secondary: {
    50: "#E5F3FC",
    100: "#C0E0F9",
    200: "#9ACDF5",
    300: "#76B9F0",
    400: "#5EAAED",
    500: "#4C9CEA",
    600: "#458EDC",
    700: "#3D7BC9",
    800: "#376BB7",
    900: "#2C4E97",
  },
  gray: {
    50: "#F4F5F5",
    100: "#E8E9E9",
    200: "#D9DADA",
    300: "#C3C4C4",
    400: "#9D9E9E",
    500: "#7B7C7C",
    600: "#555656",
    700: "#434444",
    800: "#262727",
    900: "#000101",
  },
  success: {
    50: "#E5F5E6",
    100: "#C2E6C1",
    200: "#99D698",
    300: "#6DC66E",
    400: "#48BA4D",
    500: "#15AE29",
    600: "#009F1F",
    700: "#008D12",
    800: "#007C01",
    900: "#005E00",
  },
  error: {
    50: "#FFEAED",
    100: "#FFCACE",
    200: "#F29593",
    300: "#E86B69",
    400: "#F24743",
    500: "#F63224",
    600: "#E72525",
    700: "#D51720",
    800: "#C90918",
    900: "#BA0008",
  },
  warning: {
    50: "#FFFDE8",
    100: "#FFFAC5",
    200: "#FEF59E",
    300: "#FDF177",
    400: "#FBEC58",
    500: "#F9E73A",
    600: "#FEDB3B",
    700: "#FCC333",
    800: "#FAAB2B",
    900: "#F6831C",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        ...brand,
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      cursive: ["cursive"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
