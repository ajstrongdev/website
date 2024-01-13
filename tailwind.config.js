/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./*.{php,html,js}"],
  theme: {
    extend: {
      colors: {
        'aj-background': '#171012',
        'dracula-pink': '#FF79C6',
        'off-white': '#c7c1c1',
      },
      backgroundImage: {
        
      },
      fontFamily: {
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
