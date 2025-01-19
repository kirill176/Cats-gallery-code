/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-blue": "#0F62FE",
      },
      dropShadow: {
        white: "0 0 1px #fff",
      },
    },
  },
  plugins: [],
};
