/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   screens: {
      'xl2': '1440px', // Add your custom screen size
    },
    fontFamily: {
      'sans': ['Manrope', 'sans-serif'],
    },
    colors: {
      bgBlack: '#151515',
       green:'#4EE1A0',
      chacoalBlack:'#242424',
      gray:'#D9D9D9',
      darkgray:"#979797",
      
      white:'#FFFFFF',
      black:'#000000',

    },
    letterSpacing: {
      widest: '1rem',
      tight:'2px'
    },
    backgroundImage: {
      'image-hero': 'url(/assets/portfolioImage.jpg)',
    },
    textDecorationOffset: {
      '4': '4px', // Adjust the offset value as needed
    },
  },
  },
  plugins: [],
}

