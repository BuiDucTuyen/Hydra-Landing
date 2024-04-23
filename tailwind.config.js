/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
 hero: "url('../public/Img/Pattern.png')",
  hero1: "url('../public/Img/Background.png')",
chain: "url('../public/Img/bgChain.png')",
build: "url('../public/Img/Ellipse 172.png')",
token: "url('../public/Img/map-base 1.png')",
frame: "url('../public/Img/Submit.png')",
footer: "url('../public/Img/Footer.png')",
roadmap: "url('../public/Img/Roadmap.png')",
roadmap1: "url('../public/Img/Rectangle 701.png')",
      },
      colors: {
 'ec-purple-700': 'rgba(39, 0, 23, 0.70)',

        'rgba-50230': 'rgba(50, 2, 30, 0.85)',

      },
       keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease",
      },
    },
  },
  plugins: [],
}