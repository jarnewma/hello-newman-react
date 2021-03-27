module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          light: "#95ABDA",
          DEFAULT: "#365496",
          dark: "#20325B",
          darkest: "#10192D",
        },
        pink: {
          light: "#ED96BB",
          DEFAULT: "#E56399",
          dark: "#9D1B53",
        },
        gray: {
          darkest: "#12202B",
          dark: "#374151",
          DEFAULT: "#A3A3A3",
          light: "#C2C2C2",
          lightest: "#BCC4DB",
        },
        yellow: {
          light: "#EAD186",
          DEFAULT: "#DEB841",
          dark: "#9C7C1C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // ...
  ],
};
