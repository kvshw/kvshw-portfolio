/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-header': "url('../src/assets/kvshw-mobile.png')",
        'desktop-header': "url('../src/assets/kvshw.png')",
      },
      colors: {
        'bg-gradient': 'linear-gradient(89.97deg, #FF27DD 1.84%, #433AD1 102.67%)'
      },
      screens: {
        'md': '786px'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
