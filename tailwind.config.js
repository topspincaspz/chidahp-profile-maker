/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'anakotmai-bold': ['Anakotmai-bold', 'sans-serif'],
        'anakotmai-light': ['Anakotmai-light', 'sans-serif']
      },
      colors: {
        'anakotmai-orange': 'rgb(246, 131, 74)',
        'anakotmai-background': 'rgb(45, 45, 64)',
        'anakotmai-black': 'rgb(0,0,0)'
      }
    },
  },
  plugins: [],
};
