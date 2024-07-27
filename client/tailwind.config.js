/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#00acb4",
        secondary : "#058187",
        "off-white":'#ecebe9',
        "custom-gray1":'#47525c',
        "custom-gray2":'#3c444d',
        "custom-gray3":'#30363d',
        "custom-gray4":'#24292e',
        "custom-gray5":'#181b1f',

        "custom-blue1":'#7979ff',
        "custom-blue2":'#4949ff',
        "custom-blue3":'#1f1fff',
        "custom-blue4":'#0000ff'
      }
    },
  },
  plugins: [],
}
