/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#81b64c",
        secondary:"#454341",
        greenBorder:"#45743c",
        greyBorder:"#302e2b",
        grey1:"#454341",
        grey2:"#302e2b",
        grey3:"#262522",
        glow1:"#a3d160",
        glow2:"#4d4c49",
        textColor:"#bfbbb7",
        
      }
    },
  },
  plugins: [],
}

