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
chain: "url('../public/Img/bgChain.png')",
build: "url('../public/Img/Ellipse 172.png')",
token: "url('../public/Img/map-base 1.png')",
frame: "url('../public/Img/bg.png')",
footer: "url('../public/Img/Footer.png')",
      },
      colors: {
 'ec-purple-700': 'rgba(39, 0, 23, 0.70)',
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