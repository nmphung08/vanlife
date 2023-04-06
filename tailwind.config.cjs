/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "inter": ["Inter", "sans-serif"]
    },  
    extend: {
      backgroundImage: {
        "home-hero": "url('./assets/images/home-hero.png')"
      },
      colors: {
        "simple": "#E17654",
        "rugged": "#115E59",
        "luxury": "#161616"
      }
    },
  },
  plugins: [],
}