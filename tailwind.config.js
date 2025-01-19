/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`layouts/**/*.{html,js,jsx}`, `content/**/*.{html,js,jsx,md}`, "node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        offWhite: '#D9D9D9',
        accentBlue: '#23B99A',
        accentBlueHC: '#70E6CB',
        accentOrange: '#E74C3B',
        pageBg: '#0d0f17',
        lightBlack: '#08090d', 
        bgOrange: "#b03325",
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

