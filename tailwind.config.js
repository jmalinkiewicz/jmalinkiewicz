/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: "#fff5ea",
        asphalt: "#24292f",
        calcium: "#dbd6d0",
      },
      dropShadow: {
        "envelope-4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.40)",
          "0 45px 65px rgba(0, 0, 0, 0.30)",
        ],
        "github-4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        "envelope-4xl-white": [
          "0 35px 35px rgba(255, 255, 255, 0.40)",
          "0 45px 65px rgba(255, 255, 255, 0.30)",
        ],
        "github-4xl-white": [
          "0 35px 35px rgba(255, 255, 255, 0.25)",
          "0 45px 65px rgba(255, 255, 255, 0.15)",
        ],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
  darkMode: "class",
};
