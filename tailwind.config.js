/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});




export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italic: ['Open Sans', 'sans-serif'],
        herder: ['Bebas Neue', 'cursive'],
        headers: ['Open Sans', 'sans-serif'],
        text: ['Dancing Script', 'cursive'],
        pera: ['Bebas Neue', 'cursive'],
        ital: ['Calligraffitti', ' cursive']
      }
    },
  },
  plugins: [require("daisyui"), Myclass],
}

