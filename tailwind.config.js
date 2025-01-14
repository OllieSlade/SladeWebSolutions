/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`layouts/**/*.{html,js,jsx}`, `content/**/*.{html,js,jsx,md}`, "node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        offWhite: '#D9D9D9',
        accentBlue: '#23B99A',
        accentOrange: '#E74C3B',
        pageBg: '#1A1F22',
        bgOrange: "#C83828",
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

