/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'scripture': `url(scripture-bg.png)`,
      },
      fontFamily: {
        'lots': ['LOT', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': "#F7941D",
        "secondary": "#7453a2",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      backgroundColor: {

        'light': '#4267B1'
      }
    },
  },
  plugins: [],
}

