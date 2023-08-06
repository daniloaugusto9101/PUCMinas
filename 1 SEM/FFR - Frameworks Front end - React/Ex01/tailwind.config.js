/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-10px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(10px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
        slideTop: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "initial", opacity: "1" },
        },
      },
      animation: {
        "slide-left": "slideLeft 0.3s forwards",
        "slide-right": "slideRight 0.3s forwards",
        "slide-top": "slideTop 1s forwards",
      },
    },
  },
  plugins: [],
}

