/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // TODO: add helvetica to the project once we have access to it
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "neutral-medium": "#B0B2B5",
        "neutral-dark": "#2B2C2F",
        dark: "#747D8B",
        darkest: "#272B2F",
      },
    },
  },
  plugins: [],
};
