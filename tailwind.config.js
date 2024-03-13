/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      gridTemplateRows:{
        'mobile': 'repeat(4, auto)',
        'tablet': 'repeat(3, auto) 80px'
      },
      gridTemplateColumns:{
        'mobile': '1fr 2fr',
        'desktop': '1fr 3fr'
      },
      colors: {
        'dark-background-body': 'hsl(222, 40%, 13%)',
        'dark-background-card': 'hsl(224, 40%, 20%)',
        'background-button': 'hsl(211, 100%, 50%)',
        'blue': 'hsl(212, 97%, 47%)',
        'light-background-body': 'hsl(224, 100%, 98%)'
      }
    },
  },
  plugins: [],
}

