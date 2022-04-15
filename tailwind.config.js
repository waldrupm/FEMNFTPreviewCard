const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      "soft-blue": "#8BACD9",
      white: "#fff",
      cyan: "#00FFF8",
      "main-bg": "#0D192C",
      "card-bg": "#15263F",
      line: "#2E405A",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".96rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.35rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      width: {
        "card-width": "350px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
}
