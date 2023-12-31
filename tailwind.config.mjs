import colors from "tailwindcss/colors";

const black = {
  100: "#cccdd1",
  200: "#9a9ba2",
  300: "#676a74",
  400: "#353845",
  500: "#020617",
  600: "#020512",
  700: "#01040e",
  800: "#010209",
  900: "#000105",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: colors.zinc[950],
        light: colors.white,
      },
      fontFamily: {
        mono: ["Source Code Pro", "Menlo", "Consolas", "SF Mono", "monospace"],
        sans: [ "Segoe UI", "SF Pro Text", "sans-serif"],
        serif: [ "Georgia", "Times", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
