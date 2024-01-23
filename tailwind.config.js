// tailwind.config.js
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.300'), 0 0 20px theme('colors.purple.700') "
      }
    },
  },
  plugins: [daisyui],
};

export default config;
