/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nobrecar': {
          'orange': '#FF8C00',
          'dark-orange': '#E67E00',
          'light-orange': '#FFA500',
          'black': '#000000',
          'gray-dark': '#1a1a1a',
          'gray-medium': '#333333',
        }
      }
    },
  },
  plugins: [],
};
