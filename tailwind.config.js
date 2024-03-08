/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#363636",
        "secondary-bg": "#888BA8",
        "primary": "#CDFF8D",
        "secondary": "#D9D9D9",
      },
      screens: {
        'xs': '460px',
      },
      backgroundImage: {
        "decor-huge": "url('/src/assets/decor-2.svg')",
      }
    },
  },
  plugins: [],
}

