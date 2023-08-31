/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    borderRadius: {
      'md': '18px',
    },
    screens: {
      'sm': '300px',
      // => @media (min-width:525px) { ... }

      'md': '600px',
      // => @media (min-width: 850px) { ... }

      'lg': '800px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1050px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
