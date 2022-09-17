/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // to generate utilities as !important
  content: [
    // add the paths to all of your template files
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1380px",
      },
      fontFamily: {
        // add new font family
        primary: ["Manrope", "sans-serif"],
        font2: "Orbitron, sans-serif",
        secondary: "Inter, sans-serif",
      },
      colors: {
        // custom color palette
        primary: "#001529",
        secondary: "#339aff",
        color1: "#50003f",
        color3: "#D61BB0",
        dark: "#162447",
        violet: "#883677",
        congo: "#FF958C",
        success: "#5FC790",
        warning: "#FFA600",
        danger: "#FF5630",
        info: "#1CA7EC",
        black: "#2E3A44",
        grey1: "#A0AABF",
        grey2: "#C0C6D4",
        grey3: "#E3E8F1",
        light: "#F9FBFC",
        white: "#FFF",
        bgClr:'#FDECF5'
      },
      backgroundImage: {
        radialBgCircle: "url('/src/assets/img/radial-bg.svg')",
        videoBg: "url('https://images.pexels.com/photos/8941790/pexels-photo-8941790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        circle: "url('/src/assets/img/circle.png')",
        explore: "url('/images/explore.png')",
      },
    },
  },
  plugins: [],
};
