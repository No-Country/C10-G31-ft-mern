/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/10':'10%',
        '1/90': '90%',
        '1/7':'70%',
        '90': '90%',
      },
      fontFamily: {
        'sans': ['Poppins'],
      },
      margin: {
        '29':'7.3rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

